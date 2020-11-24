'use strict'
// 开发环境变量
const merge = require('webpack-merge') // webpack合并
const prodEnv = require('./prod.env') // 引入文件

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
