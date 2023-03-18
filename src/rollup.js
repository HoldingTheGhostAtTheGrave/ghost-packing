const Bundle = require('./bundle')
const fs = require('fs')

function rollup(entry, options = {}) {
    const bundle = new Bundle({ entry, ...options })
    // 调用 build 方法 
    return bundle.build().then(() => {
        return {
            generate: options => bundle.generate(options),
            wirte(dest, callback, options = {}) {
                const { code } = bundle.generate({
                    dest,
                    format: options.format,
                })
                // 这里code传出去是因为文件写入可能会出现错误
                callback && callback(code);
                // return fs.writeFile(dest, code, err => {
                //     if (err) throw err
                // })
            }
        }
    })
}

module.exports = rollup