/**
 * Created by otherlite on 16/9/6.
 */
const chalk = require('chalk');
const cmd = require('./util/cmd');
const cmds = [];
const pattern = process.argv[2];

console.log(chalk.yellow('============tag:clear============'))
if (!pattern) {
    log('Please enter the pattern !!!')
    return
}

if (pattern == 'all') { //清空本地所有tag
    cmds.push('git tag -l | xargs git tag -d');
} else {
    //删除服务端以pattern开头的tag
    cmds.push(`git show-ref --tag | awk '/(v${pattern}.*)/ {print ":"$2}' | xargs git push origin`);
}

cmd.exec(cmds);