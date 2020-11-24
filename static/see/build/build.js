'use strict'
require('./check-versions')() // 引入npm和node版本检查

process.env.NODE_ENV = 'production' // 设置环境变量为production

const ora = require('ora') // 转圈圈动画插件
const rm = require('rimraf') // 执行Unix命令rm和-rf的用来删除文件夹和文件
const path = require('path') // node.js路径模块
const chalk = require('chalk')  // 字体颜色 chalk.blue('Hello world')
const webpack = require('webpack') // 引入webpack模块
const config = require('../config') // 引入文件
const webpackConfig = require('./webpack.prod.conf') // 引入文件

const spinner = ora('building for production...')
spinner.start() // 开启转圈圈动画
// rm方法 删除dist下的所有文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => { // webpack编译过程中
    spinner.stop() // 停止转圈圈动画
    if (err) throw err // 抛出错误
    process.stdout.write(stats.toString({
      colors: true, // 增加控制台颜色开关
      modules: false, // 不增加内置模块信息
      // 不增加子级信息
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false, // 允许较少的输出
      chunkModules: false // 不将内置模块的信息加到包信息
    }) + '\n\n')
    // 编译失败的消息
    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
    // 编译成功的消息
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
