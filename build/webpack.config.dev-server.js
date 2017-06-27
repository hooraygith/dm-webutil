'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const _DIR_ = process.cwd()

module.exports = {
  entry: {
    bootstrap: ['./test/bootstrap.js']
  },
  output: {
    path: '/',
    publicPath: '/'
  },

  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve('test'),
        path.resolve('src')
      ],
      loader: 'babel-loader'
    }]
  },
  resolve: {
    modules: ['node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({ // 生成首页
      chunks: ['bootstrap'],
      favicon: `${_DIR_}/test/favicon.ico`,
      template: `${_DIR_}/test/template.ejs`,
      filename: 'index.html',
      env: 'dev-server'
    })
  ]
}
