
<template>
    <section>
        <h3>npm指令</h3>
        <!--
        npm install、npm install --save与npm install --save-dev区别（转）    https://blog.csdn.net/Uncle_long/article/details/80524947
        news\static\picture\warning.png   模块版本低报错，删除并重新下载模块（如echarts，selenium-server）
        -->
        <table border="1" width="900px">
            <thead>
                <tr>
                    <td width="200px">指令</td>
                    <td width="400px">说明</td>
                    <td width="200px">缩写</td>
                </tr>
            </thead> 

            <tbody>
                <template v-for="(item,index) in npmOrder">
                    <tr>
                        <td>{{item.params}}</td>
                        <td>{{item.explain}}</td>
                        <td>{{item.abbreviation}}</td>
                    </tr>
                </template>
            </tbody>

            <tfoot>
            </tfoot>
        </table>


        <h3>dependencies</h3>
        <table border="1" width="900px">
            <thead>
                <tr>
                    <td width="200px">插件名</td>
                    <td width="600px">说明</td>
                </tr>
            </thead> 

            <tbody>
                <template v-for="(item,index) in save_list">
                    <tr>
                        <td>{{item.params}}</td>
                        <td>{{item.explain}}</td>
                    </tr>
                </template>
            </tbody>

            <tfoot>
            </tfoot>
        </table>


        <h3 style="margin-top: 50px;">devDependencies</h3>
        <table border="1" width="900px">
            <thead>
                <tr>
                    <td width="200px">插件名</td>
                    <td width="600px">说明</td>
                </tr>
            </thead> 

            <tbody>
                <template v-for="(item,index) in save_dev_list">
                    <tr>
                        <td>{{item.params}}</td>
                        <td>{{item.explain}}</td>
                    </tr>
                </template>
            </tbody>

            <tfoot>
            </tfoot>
        </table>

    </section>
</template>

<script>
export default {
    name: 'explainTable',
    data(){
        return {
            npmOrder: [
                { params: 'npm install',explain: '安装依赖包，不改dependencies和devDependencies',abbreviation: ''},
                { params: 'npm install 名 --save',explain: '添加模块和版本号到dependencies',abbreviation: 'npm install 名 -S' },
                { params: 'npm install 名 --save-dev',explain: '添加模块和版本号到devDependencies',abbreviation: 'npm install 名 -D' },
                { params: 'npm uninstall 名 --save',explain: '删除dependencies模块',abbreviation: '' },
                { params: 'npm uninstall 名 --save-dev',explain: '删除devDependencies模块',abbreviation: '' },
                { params: 'npm update',explain: '版本升级所有包',abbreviation: '' },
                { params: 'npm update 名',explain: '版本升级某个包',abbreviation: '' },
                { params: 'npm install 名@3.0.4 --save',explain: '添加指定版本模块（如less）',abbreviation: '' }
            ],
            save_list: [
                { params: 'axios',explain: 'API 请求' },
                { params: 'babel-polyfill',explain: '转码器,ES6转ES5,解决浏览器兼容问题' },
                { params: 'clipboard',explain: '复制文本' },
                { params: 'echarts',explain: '数据可视化图表' },
                { params: 'element-ui',explain: 'pc端ui组件' },
                { params: 'iview',explain: 'pc端ui组件' },
                { params: 'js-md5',explain: 'md5加密' },
                { params: 'less',explain: '预处理样式---注意版本错误' },
                { params: 'less-loader',explain: '预处理样式' },
                { params: 'lodash',explain: 'JavaScript 实用工具库' },
                { params: 'mockjs',explain: '模拟本地随机数据' },
                { params: 'nprogress',explain: '页面跳转时,浏览器顶部的进度条' },
                { params: 'vue',explain: 'vue' },
                { params: 'vue-cookies',explain: 'vue操作cookie' },
                { params: 'vue-qr',explain: '生成的二维码' },
                { params: 'vue-router',explain: 'vue路由器' },
                { params: 'vueditor',explain: '富文本编辑器' },
                { params: 'vuex',explain: '状态管理库' },
                { params: 'vue-amap',explain: '高德地图' },
                { params: 'fastclick',explain: '移动端解决事件穿透' },
                { params: 'vant',explain: '移动端ui' }
            ],
            save_dev_list: [
                { params: 'cross-env',explain: '运行跨平台设置和使用环境变量' },
                { params: 'autoprefixer',explain: '自动在样式中添加浏览器前缀' },
                { params: 'babel-core',explain: '把 js 代码分析成 ast,处理js兼容问题' },
                { params: 'babel-helper-vue-jsx-merge-props',explain: 'jsx合并props' },
                { params: 'babel-loader',explain: '使用 Babel 和 webpack 转译 JavaScript 文件' },
                { params: 'babel-plugin-syntax-jsx',explain: 'jsx 编译器' },
                { params: 'babel-plugin-transform-runtime',explain: '可以重用 Babel 注入的辅助代码以节省代码大小' },
                { params: 'babel-plugin-transform-vue-jsx',explain: 'JSX 的 Babel 插件' },
                { params: 'babel-preset-env',explain: '根据你支持的环境自动决定适合你的Babel插件' },
                { params: 'babel-preset-stage-2',explain: '预设（stage preset）都已被弃用' },
                { params: 'chalk',explain: '颜色的插件' },
                { params: 'copy-webpack-plugin',explain: '复制一个静态文件到打包后的路径' },
                { params: 'css-loader',explain: '用于解释@import 和 url()，通常和style-loader结合使用' },
                { params: 'extract-text-webpack-plugin',explain: '把css代码从js文件中抽离出来' },
                { params: 'file-loader',explain: '打包处理一系列的图片文件' },
                { params: 'friendly-errors-webpack-plugin',explain: '友好处理报错，提升开发者体验' },
                { params: 'html-webpack-plugin',explain: '简化了 HTML 文件的创建,引入的外部资源文件名中包含哈希值(hash)' },
                { params: 'node-notifier',explain: '通知程序,在 macOS、Windows、Linux 上显示本机通知' },
                { params: 'optimize-css-assets-webpack-plugin',explain: '优化&最小化 CSS' },
                { params: 'ora',explain: '主要用来实现node.js命令行环境的loading效果，和显示各种状态的图标等...' },
                { params: 'portfinder',explain: '自动端口' },
                { params: 'postcss-import',explain: '@import 通过内联内容来转换规则' },
                { params: 'postcss-loader',explain: '通过 postcss-loader 自动加载同一个配置文件' },
                { params: 'postcss-url',explain: '找不到模块' },
                { params: 'rimraf',explain: 'rm -rf命令，用来删除文件和文件夹的' },
                { params: 'sass-resources-loader',explain: '样式实现全局变量、方法注入' },
                { params: 'semver',explain: '用来控制版本的' },
                { params: 'shelljs',explain: 'package.json中配置自定义命令' },
                { params: 'uglifyjs-webpack-plugin',explain: '压缩代码，为生产环境修改配置，去掉console....' },
                { params: 'url-loader',explain: '处理url路径，url-loader依赖file-loader' },
                { params: 'vue-loader',explain: '解析文件，提取出每个语言块' },
                { params: 'vue-style-loader',explain: 'css-loader以将 CSS 作为样式标签动态注入到文档中' },
                { params: 'vue-template-compiler',explain: '模板-编译器' },
                { params: 'webpack',explain: '模块化打包工具' },
                { params: 'webpack-bundle-analyzer',explain: '分析构建产物' },
                { params: 'webpack-dev-server',explain: '开发模式' },
                { params: 'webpack-merge',explain: '合并代码' },
                { params: 'postcss-pxtorem',explain: 'px自动转换rem---注意版本错误' }
            ]
        }
    },
    created(){
        console.log('notes',process.env.NODE_ENV)
    }
}
</script>

<style lang="less" scoped>
section {
    padding: 20px 0px;
    table {
        margin: 0 auto;
    }
}

</style>