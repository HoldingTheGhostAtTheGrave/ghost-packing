const fs = require('fs');
const { filePath, createMkdirPath } = require('./index');
/**
 * 创建目录和文件
 * @param { string } code 
 * @param { string } file 
 */
const writeFile = (code, file) => {
    const distPath = filePath(file);
    try {
        fs.writeFileSync(distPath, code);
    } catch (error) {
        const mkDirPath = createMkdirPath(file);
        fs.mkdir(filePath(mkDirPath) + '/', { recursive: true }, (err) => {
            if (err) {
                return console.error('error 500');
            }
            return writeFile(code, file);
        })
    }
}
module.exports = writeFile;