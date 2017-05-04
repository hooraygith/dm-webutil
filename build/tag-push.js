/**
 * Created by otherlite on 16/9/6.
 */
const chalk = require('chalk');
const cmd = require('./util/cmd');
const cmds = [];
const packageInfo = require('../package.json')

console.log(chalk.yellow('============tag:push============'))
//1、push版本tag到远端
cmds.push(`git push origin v${packageInfo.version}`);

cmd.exec(cmds);