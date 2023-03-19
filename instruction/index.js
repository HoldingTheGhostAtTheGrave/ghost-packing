const fs = require('fs');
const { filterCode, filePath } = require('./utils/index');
const writeFile = require('./utils/writeFile');
const LiveReload = require('./hot.update');
const instruction = {
    'openGhost': ({ ghost, input, file }) => {
        ghost(
            input,
            (wirte) => wirte(input, (code) => writeFile(code, file))
        );
    },
    '--config': (ghost) => {
        const configCode = fs.readFileSync(filePath('ghost.config.js'), 'utf8');
        let config = filterCode(configCode); // 字符串过滤成对象
        const input = filePath(config.input);
        // 为开启热更新
        if (!config.server) {
            instruction['openGhost']({ ghost, input, file: config.output.file });
            return;
        }
        const listeningDir = filePath(config.server.listeningDir || '/src');
        // 开启热更新
        new LiveReload({
            watchPath: listeningDir,
            change: (changeFile) => {
                console.log(`File ${changeFile} has been changed`);
                instruction['openGhost']({ ghost, input, file: config.output.file });
            }
        });
    },
    '-v': () => {
        console.log('-v 1.0.4');
    }
}


module.exports = instruction;