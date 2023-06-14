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
:notes

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 目录结构
|- .git ----------------------------------------------- git本地配置
|- build/       --------------------------------------- 构建脚本目录
    |- build.js --------------------------------------- 打包构建脚本
    |- check-versions.js ------------------------------ 检测node和npm版本,提示用户更新版本
    |- utils.js --------------------------------------- 构建css和style
    |- vue-loader.conf.js ----------------------------- 打包生成map文
    |- webpack.base.conf.js --------------------------- wabpack开发和生产配置
    |- webpack.dev.conf.js ---------------------------- wabpack开发环境配置
    |- webpack.prod.conf.js --------------------------- wabpack开发和生产打包编译
|- config/     ---------------------------------------- 构建配置目录
    |- dev.env.js ------------------------------------- 开发环境全局变量
    |- index.js --------------------------------------- 项目环境配置
    |- prod.env.js ------------------------------------ 生产环境全局变量
|- node_modules/ -------------------------------------- 依赖工具包
|- src/ ----------------------------------------------- 源码目录
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
        |- rem.js ------------------------------------- 移动端rem适配
    |- picture/ --------------------------------------- 图片库
    |- video/ ----------------------------------------- 视频库
    |- favicon.ico ------------------------------------ 浏览器title的ico图标
    |- .gitkeep --------------------------------------- git上传忽略的文件，与.gitignore一样
|- .babelrc ------------------------------------------- babel-loader解释es6
|- .editorconfig -------------------------------------- vscode编辑器配置文件
|- .eslintignore -------------------------------------- 校验忽视文件
|- .gitignore ----------------------------------------- git上传忽略的文件
|- .postcssrc.js -------------------------------------- 解决浏览器加css前缀  css不用写-webkit...
|- index.html ----------------------------------------- html5模板
|- package-lock.json ---------------------------------- 依赖版本锁，保证大家依赖一致
|- package.json --------------------------------------- npm配置文件
|- README.md ------------------------------------------ 项目说明




# 项目技术
后台、前台（PC端、移动端）

vue2、elementUI


# 查找索引
study:
bug:



全局环境变量
npm install cross-env --save-dev
package.json
"build:notes": "cross-env NODE_ENV=production env_config=notes node build/build.js"
------ build.js -------
const spinner = ora('building for ' + process.env.env_config +  ' production...')
------ webpack.prod.conf.js ------
// const env = require('../config/prod.env')
const env = require('../config/' + process.env.env_config + '.env')
新建文件   notes.env.js


https://huawei-testbqzb.obs.myhuaweicloud.com/live%2F76099113904244.png 404 (Not Found)



