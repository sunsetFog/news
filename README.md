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
|- node_modules/ -------------------------------------- 依赖包
|- src/ ----------------------------------------------- 项目源代码
    |- api/
        |- http.js ------------------------------------ 接口请求配置
    |- database/ ------------------------------------------ mockjs模拟数据库
        |- modular/
            |- modular.js --------------------------------- 增删改查处理
            |- modular.json ------------------------------- 返回的数据
        |- index.js --------------------------------------- mock接口
    |- directive -------------------------------------- 自定义指令
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



npm install cross-env --save-dev
package.json
"build:notes": "cross-env NODE_ENV=production env_config=notes node build/build.js"
------ build.js -------
const spinner = ora('building for ' + process.env.env_config +  ' production...')
------ webpack.prod.conf.js ------
// const env = require('../config/prod.env')
const env = require('../config/' + process.env.env_config + '.env')
新建文件   notes.env.js



