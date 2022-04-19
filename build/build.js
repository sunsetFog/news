'use strict'
// 引入npm和node版本检查
require('./check-versions')()
// 设置环境变量为production
process.env.NODE_ENV = 'production'

// 转圈圈动画插件
const ora = require('ora')
// 执行Unix命令rm和-rf的用来删除文件夹和文件
const rm = require('rimraf')
// node.js路径模块
const path = require('path')
// 字体颜色
const chalk = require('chalk')
// 引入webpack模块
const webpack = require('webpack')
// 引入文件
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

// const spinner = ora('building for production...')
const envName = process.env.env_config ? process.env.env_config : 'prod'
const spinner = ora('building for ' + envName +  ' production...')
// 开启转圈圈动画
spinner.start()
// rm方法 删除dist下的所有文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  // webpack编译过程中
  webpack(webpackConfig, (err, stats) => {
    // 停止转圈圈动画
    spinner.stop()
    // 抛出错误
    if (err) throw err
    process.stdout.write(stats.toString({
      // 增加控制台颜色开关
      colors: true,
      // 不增加内置模块信息
      modules: false,
      // 不增加子级信息
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      // 允许较少的输出
      chunks: false,
      // 不将内置模块的信息加到包信息
      chunkModules: false
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
