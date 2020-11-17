# new

> 钻石娱乐

## Build Setup

``` bash
# install dependencies  安装依赖项
npm install

# serve with hot reload at localhost:8080  启动项目
npm run dev

# build for production with minification  打包上线
npm run build

# build for production and view the bundle analyzer report   生成 report.html 以帮助分析包内容
npm run build --report

# run unit tests  单元测试
npm run unit

# run e2e tests  e2e测试
npm run e2e

# run all tests  测试所有
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


|- src/  --------------------- 项目源代码
    |- App.vue
    |- main.js  -------------- 入口文件
|- .babelrc  ----------------- babel 配置文件
|- index.html  --------------- HTML 模板
|- package.json  ------------- npm 配置文件


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
在模块配置文件package.json中:
npm install不改dependencies和devDependencies
npm install 名 --save 添加模块和版本号到dependencies
npm install 名 --save-dev 添加模块和版本号到devDependencies
npm uninstall 名 --save 和npm uninstall 名 --save-dev 删除模块
有可能出现模块版本问题:
npm install less@3.0.4 --save   添加指定版本模块（如less）
news\static\study\warning.png   模块版本低报错，删除并重新下载模块（如echarts，selenium-server）






以下略略略
index.html-flashGameplayer()-refreshWeb.state = 'init';return;
web.game_
that.$means.amateur_
index.html,README返回
consult.vue两个web
刷新:this.variableGear();