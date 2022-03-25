'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 跨域由同源策略判断: 协议（http或https）、端口、域名，三条件一致才不会跨域
    // npm install http-proxy-middleware --save 使用代理解决跨域
    // 这方法还要配置生产环境域名
    // proxyTable: {// http二次封装，baseURL: 'http://water0s.com/web',
    //   '/excuse': {
    //       target: 'http://zbqd.zb335.com', // 接口域名
    //       changeOrigin: true, // 允许跨域(创建本地虚拟服务端，接受了域名，就请求后端服务器)
    //       secure: true, // 设置支持https协议的代理
    //       // ws: true, //如果要代理 websockets，配置这个参数
    //       pathRewrite: {
    //       '^/excuse': '/excuse' // 重写接口
    //       }
    //   }
    // },


    // Various Dev Server settings
    host: 'localhost', // localhost   10.73.158.67
    port: 2021, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false, // 是否打开默认的浏览器
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/', // 解决打包index.html打开空白

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
