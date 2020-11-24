'use strict'
// 构建css和style
const path = require('path') // 引入nodejs路径模块
const config = require('../config') // 引入文件
const ExtractTextPlugin = require('extract-text-webpack-plugin') // 用来将css提取到单独的css文件中
const packageConfig = require('../package.json') // 引入文件

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path) // 返回完整路径的相对根路径
  // path.join的路径是C:a/a/b/xiangmu/b，那么path.posix.join就是b
}
// 导出cssLoaders的相关配置
exports.cssLoaders = function (options) {
  options = options || {} // options如果没值就是空对象
  // cssLoader的基本配置
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap // 是否开启cssmap，默认是false
    }
  }
  // postcss-loader的基本配置
  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, { // Object.assign是es6的方法，主要用来合并对象的，浅拷贝
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) { // style样式处理
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    // less: generateLoaders('less'),

    // vue全局使用less样式文件
    // https://www.jianshu.com/p/2b1cd98c3062
    // 安装npm install sass-resources-loader --save-dev
    less: generateLoaders('less').concat({
      loader: 'sass-resources-loader',
      options: {
        resources: path.resolve(__dirname, '../src/assets/common.less')
      }
    }),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output // 返回最终数组
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
