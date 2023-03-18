#!/usr/bin/env node
const { argv } = require('process'); // 获取系统提供用户输入命令
const { filterArgs } = require('./instruction/utils/index.js');
const rollup = require('./src/rollup.js');
const instructionObject = require('./instruction/index');
const [instruction] = filterArgs(argv);
/**
 * ghost 启动
 */
const ghost = (input, callback) => {
    rollup(input).then(res => {
        // res.wirte({  });
        callback && callback(res.wirte);
    });
}

instructionObject[instruction](ghost);

