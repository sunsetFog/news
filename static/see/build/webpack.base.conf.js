'use strict'
const path = require('path') // 引入nodejs路径模块
const utils = require('./utils') // 引入文件
const config = require('../config') // 引入文件
const vueLoaderConfig = require('./vue-loader.conf') // 引入文件
// 文件名的具体路径
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js' // 入口js
  },
  output: {
    path: config.build.assetsRoot, // dist目录
    filename: '[name].js', // 打包压缩对应的js
    publicPath: process.env.NODE_ENV === 'production' // 开发环境和生产环境打包
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 这些可以省略后缀名
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'), // 引入用@,指src的路径
    }
  },
  module: { // 解析不同的模块
    rules: [
      { // vue
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      { // less样式配置,而scss不用配置
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      { // js
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      { // 图片
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      { // 视频
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // 字节
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      { // 字体
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
