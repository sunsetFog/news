// https://github.com/michael-ciniawsky/postcss-load-config
let pxtorem = {
  "rootValue": 16,
  "propList": ["*"]
}
pxtorem = process.env.entry_config == './src/reportForms/main.js'?pxtorem:{}
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-pxtorem": pxtorem,
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
