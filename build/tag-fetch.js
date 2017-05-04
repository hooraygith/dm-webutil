/**
 * Created by otherlite on 16/9/6.
 */
const chalk = require('chalk');
const cmd = require('./util/cmd');
const cmds = [];
const pattern = process.argv[2];
const packageInfo = require('../package.json')

console.log(chalk.yellow('============tag:fetch============'))
//获取tag更新
cmds.push('git fetch --tags');

cmd.exec(cmds);