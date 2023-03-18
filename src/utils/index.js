
/**
 * 过滤命令行参数
 * @param { Array } args 
 * @returns filterArray
 */
const filterArgs = (args) => args.filter((item, index) => index > 1);


module.exports = { filterArgs };