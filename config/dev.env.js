'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  title: '"钻石娱乐"',
  dev_url: '"http://10.1.101.120:502"',
  prod_url_test: '"https://pricemapif_test.mideazy.com"',
  prod_url_ok: '"https://pricemapif.mideazy.com"',
  mock_url: '"http://mock-api-success.com"',
  core_url: '"http://localhost:8065"'
})
