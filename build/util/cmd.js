const cp = require('child_process');
const chalk = require('chalk');

module.exports = {
    exec(cmds, callback) {
        let stack = () => {
            if (callback) {
                callback();
            } else {
                console.log(chalk.yellow('============end============'))
            }
        };
        for (let cmd of cmds) {
            stack = (function(next, cmd) {
                return () => {
                    console.log(cmd);
                    cp.exec(cmd, {
                        maxBuffer: 20000000 * 1024
                    }, (error, stdout, stderr) => {
                        console.log(stdout)
                        if (error) console.error(error);
                        else if (stderr) console.error(stderr), next();
                        else next();
                    });
                }
            }(stack, cmd));
        }
        stack();
    }
}