'use strict'
// 引入文件
const utils = require('./utils')
// 引入webpack
const webpack = require('webpack')
const config = require('../config')
// webpack合并
const merge = require('webpack-merge')
// node.js路径模块
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
// webpack复制
const CopyWebpackPlugin = require('copy-webpack-plugin')
// html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 收集错误和日志
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
// 域名
const HOST = process.env.HOST
// 端口
const PORT = process.env.PORT && Number(process.env.PORT)

// -------vue-cli3 本地数据模拟后台接口，不能增删改-------
const express = require('express')
const app = express()
let apiRoutes = express.Router()
app.use('/api', apiRoutes)
// --------------


const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    disableHostCheck: true,// nginx报错Invalid Host header
// --------------
    before (app) {
      /* 基年数据列表接口 */
      app.get('/mock/backList', (req, res) => {
        res.json({list: ['backList']})
      })
      /* 业务图层数据接口 */
      app.post('/mock/geoJson', (req, res) => {
        res.json({list: ['geoJson']})
      })
    },
// --------------
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      // favicon: path.resolve('static/favicon.ico'), // 浏览器title的ico图标
      inject: true
    }),
    // 复制static
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
