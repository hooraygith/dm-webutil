/**
 * Created by otherlite on 16/9/6.
 */
'use strict';

const chalk = require("chalk");
const path = require("path");
const packageInfo = require(process.cwd() + '/package.json');
const webpack = require('webpack');
const Clean = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: {
        dmUtil: ['./src/index.js']
    },
    output: {
        path: path.resolve('dist/pd'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve('src'),
            ],
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: true,
            width: 60
        }),
        new Clean(['dist/pd'], {
            root: process.cwd()
        }),
        /* 跟业务代码一样，该兼容的还是得兼容 */
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        })
    ]
};