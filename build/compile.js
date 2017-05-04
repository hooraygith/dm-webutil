/**
 * Created by otherlite on 16/9/6.
 */
const chalk = require("chalk")
const env = process.argv[2];
const webpack = require("webpack");
const config = require("./webpack.config." + env + ".js");

console.log(chalk.yellow('============compile============'))
    // returns a Compiler instance
const compiler = webpack(config);

compiler.run((err, stats) => {
    console.log(stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true
    }))
    console.log(chalk.yellow('============end============'))
});