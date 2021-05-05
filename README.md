# sky

> 钻石娱乐

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

|- .git ----------------------------------------------- git本地配置
|- build/
    |- build.js --------------------------------------- 打包构建脚本
    |- check-versions.js ------------------------------ 检测node和npm版本,提示用户更新版本
    |- utils.js --------------------------------------- 构建css和style
    |- vue-loader.conf.js ----------------------------- 打包生成map文
    |- webpack.base.conf.js --------------------------- wabpack开发和生产配置
    |- webpack.dev.conf.js ---------------------------- wabpack开发环境配置
    |- webpack.prod.conf.js --------------------------- wabpack开发和生产打包编译
|- config/
    |- dev.env.js ------------------------------------- 开发环境全局变量
    |- index.js --------------------------------------- 项目环境配置
    |- prod.env.js ------------------------------------ 生产环境全局变量
|- database/ ------------------------------------------ mockjs模拟数据库
    |- modular/
        |- modular.js --------------------------------- 增删改查处理
        |- modular.json ------------------------------- 返回的数据
    |- index.js --------------------------------------- mock接口
|- node_modules/ -------------------------------------- 依赖包
|- src/ ----------------------------------------------- 项目源代码
    |- api/
        |- http.js ------------------------------------ 接口请求配置
    |- assets/ ---------------------------------------- 静态资源(样式文件)
        |- app.less ----------------------------------- 全局样式
        |- common.less -------------------------------- 全局样式的变量与方法
    |- components/ ------------------------------------ 公用组件
    |- pages/ ----------------------------------------- 路由视图文件
        |- modular/
            |- modular.vue ---------------------------- 模块vue
            |- modularChild.vue ----------------------- 模块子vue
            |- modular.js ----------------------------- 模块引入js
        |- hpme.vue ----------------------------------- 首页
    |- public/ ---------------------------------------- 公用方法
        |- modular/
            |- modular.js ----------------------------- 方法文件
        |- index.js ----------------------------------- 合并暴露方法
    |- router/
        |- index.js ----------------------------------- 路由配置文件
    |- vuex/ ------------------------------------------ vuex缓存数据
        |- modular/
            |- modular.js ----------------------------- vuex文件
        |- index.js ----------------------------------- vuex实例与合并
    |- App.vue ---------------------------------------- 入口vue(通过路由视图关联)
    |- main.js ---------------------------------------- 入口js
|- static/ -------------------------------------------- 静态资源(图片，文件，视频)
    |- capital/
        |- allKey.json -------------------------------- json全局变量
        |- rem.js ------------------------------------- 移动端rem适配
    |- picture/ --------------------------------------- 图片库
    |- video/ ----------------------------------------- 视频库
    |- favicon.ico ------------------------------------ 浏览器title的ico图标
    |- .gitkeep --------------------------------------- git上传忽略的文件，与.gitignore一样
|- .babelrc ------------------------------------------- babel-loader解释es6
|- .editorconfig -------------------------------------- vscode安装editorConfig for vs Code插件才会起作用
|- .gitignore ----------------------------------------- git上传忽略的文件
|- .postcssrc.js -------------------------------------- 解决浏览器加css前缀  css不用写-webkit...
|- index.html ----------------------------------------- html5模板
|- package-lock.json ---------------------------------- 依赖版本锁，保证大家依赖一致
|- package.json --------------------------------------- npm配置文件
|- README.md ------------------------------------------ 项目说明


插件：
  "dependencies": {
    "axios": "^0.18.1",
    "babel-polyfill": "^6.26.0",
    "clipboard": "^2.0.4",
    "echarts": "^4.9.0", 图表
    "element-ui": "^2.14.1", PC端ui框架
    "iview": "^2.13.1", PC端ui框架
    "js-md5": "^0.7.3",
    "less": "^3.0.4",
    "less-loader": "^4.1.0",
    "lodash": "^4.17.21",
    "mockjs": "^1.1.0",
    "nprogress": "^0.2.0",
    "vue": "^2.5.2",
    "vue-cookies": "^1.5.13",
    "vue-qr": "^2.2.1",
    "vue-router": "^3.0.1",
    "vueditor": "^0.3.1",
    "vuex": "^3.5.1"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^7.1.1",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "sass-resources-loader": "^2.1.1",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },



改了项目配置和改图片文件名记得重新运行
有时可能是依赖包问题，删除再重新下载


vue-cli（vue脚手架）详细教程     https://www.cnblogs.com/fengzhenxiong/p/10213198.html
1.全局安装vue-cli
cnpm install --global vue-cli
    看vue版本号（注意是大写“V”）
    vue -V
2.用vue-cli来构建项目
vue init webpack item_name
    Install vue-router? (Y/n)y回车   路由
    Use ESLint to lint your code? (Y/n)n    代码风格   要是yes：Vue如何关闭eslint  webpack.base.conf.js  注释createLintingRule成空对象   npm run dev重新启动
    Setup unit tests with Karma + Mocha? (Y/n)n     单元测试npm run unit
    Setup e2e tests with Nightwatch? (Y/n)n    e2e测试npm run e2e
3.对的路径
cd item_name
4.启动项目
npm run dev
    建议:先将build 里的assetsPublicPath: '/',改为assetsPublicPath: './',    确保打包路径没问题
5.打包上线
npm run build




npm install、npm install --save与npm install --save-dev区别（转）    https://blog.csdn.net/Uncle_long/article/details/80524947
使用原则:
1.运行时需要用到的包使用–-save，否则使用–-save-dev。
2.我这只有sass-resources-loader是--save-dev。（99%是--save）
3.–-save和–-save-dev能用来更新版本

在模块配置文件package.json中:
npm install不改dependencies和devDependencies
npm install 名 --save 添加模块和版本号到dependencies
npm install 名 --save-dev 添加模块和版本号到devDependencies
npm uninstall 名 --save 和npm uninstall 名 --save-dev 删除模块
有可能出现模块版本问题:
npm install less@3.0.4 --save   添加指定版本模块（如less）
news\static\picture\warning.png   模块版本低报错，删除并重新下载模块（如echarts，selenium-server）

package.json插件介绍:
