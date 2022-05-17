'use strict'
// 引入nodejs路径模块
const path = require('path')
// 引入文件
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

// 文件名当前路径
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}


module.exports = {
  context: path.resolve(__dirname, '../'),
  // 入口js
  entry: {
    app: process.env.entry_config ? './src/' + process.env.entry_config + '/main.js' : ''
  },
  output: {
    path: config.build.assetsRoot,
    // 打包后文件名
    filename: '[name].js',
    // 开发环境和生产环境打包
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    // 这些可以省略后缀名
    extensions: ['.js', '.vue', '.json'],
    // 设置路径引入
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // 引入用@,指src的路径
      '@': resolve('src'),
      '@static': path.resolve(__dirname, '../static')
    }
  },
  // 解析不同的模块
  module: {
    rules: [
      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      // scss
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      // less
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      // js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      // svg
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/assets/svgIcons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      // 图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      // 视频
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      // 字体
      {
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
