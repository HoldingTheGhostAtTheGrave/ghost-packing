const path = require('path');
const { resolve } = require('path');
const { cwd } = require('process');

/**
 * 过滤字符串代码并转为对象
 * @param {string} code 
 * @returns Object
 */
const filterCode = (code) => {
    let startIndex = code.indexOf('{');
    return eval('(' + code.slice(startIndex) + ')')
}
/**
 * 过滤命令行参数
 * @param { Array } args 
 * @returns filterArray
 */
const filterArgs = (args) => args.filter((item, index) => index > 1);

/**
 * 返回当前项目的匹配路径
 * @param {string} path 
 * @returns 
 */
const filePath = (path) => resolve(cwd() + '/' + path);

/**
 * createMkdirPath 过滤参数 文件夹路径
 * @param { string } path 
 * @returns 
 */
const createMkdirPath = (path) => {
    let mkDirs = path.slice(path.match(/[a-z]/)['index']).split('/')
    mkDirs.splice(mkDirs.length - 1, 1);
    return mkDirs.join('/');
}

module.exports = { filterCode, filterArgs, filePath, createMkdirPath };