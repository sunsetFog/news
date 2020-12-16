<template>
    <section>

    </section>
</template>

<script>
export default {
    name: 'talk1',
    data(){
        return{

        }
    },
    methods: {
        demo1(){
            // 自我介绍
            // 考官好，很荣幸有机会向考官请教和学习。我叫***，读计算机网络应用专业，平时喜欢研究代码和上网浏览信息。
            // 出来后，从事前端行业，三年半来经历丰富，具有移动端和PC端经验。
            // 性格开朗随和，有上进心，希望日后能做的更好，介绍完毕，谢谢！
        },
        demo2(){
            // 对接后台不一定用请求头:
            // 1. 下载文档：window.open("后台请求url?id="+传参数后台);
            // 2. 图片上传: （查看vue功能集）

            // vue的拦截: 路由拦截，请求拦截
        },
        demo3(){
            /**
             * vue中mvvm原理及其实现
             * 原理: M(Model，模型层),V(View，视图层),VM(ViewMode, 桥梁)。用桥梁监听模型层与视图层，实现数据的双向绑定
             * 实现: 用下面知识点，监听对象属性变化，
             */
            let obj = { key: '' }
            Object.defineProperty(obj, 'key', {
                get() {// get函数

                },
                set() {// set函数

                }
            })
        },
        demo4(){
            // 页面的传参方式:
        },
        demo5(){
            // vuex运用:
            // 看src\pages\managementCenter\knowledge\vuex.vue
            // 看vuex里的的js
        },
        demo6(){
            // computed与watch的区别:  
            // 看src\pages\managementCenter\knowledge\computed.vue
            // 看src\pages\managementCenter\knowledge\watch.vue
        },
        demo7(){
            // 浏览器兼容性:
            // 语法错误（js不兼容浏览器）
        },
        demo8(){
            // es6: 看src\pages\managementCenter\javaScript\es6.vue
        },
        demo9(){
            // 数组去重:  看src\pages\managementCenter\javaScript\practice.vue
        },
        demo10(){
            /*
                从输入url到页面加载完成发生了什么？——前端角度
                1、浏览器的地址栏输入URL并按下回车。
                2、浏览器查找当前URL的DNS缓存记录。
                3、DNS解析URL对应的IP。
                4、根据IP建立TCP连接（三次握手）。
                5、HTTP发起请求。
                6、服务器处理请求，浏览器接收HTTP响应。
                7、渲染页面，构建DOM树。
                8、关闭TCP连接（四次挥手）
             */
        },
        demo11(){
            /**
             * 封装过什么组件
             * 管理系统的分页条,主要是组件通讯
             */
        },
        demo12(){
            /**
             * 什么叫优雅降级和渐进增强？
             * 渐进增强: 针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验
             * 优雅降级: 一开始就构建完整的功能，然后再针对低版本浏览器进行兼容
             */
        },
        demo13(){
            /**
             * 说说prototype  --- 看learn2.vue
             * 回答: vue.prototype把暴露的对象设置位全局变量,例如http请求的封装，通过prototype设置全局的
             * 继承属性:B.prototype = new A() 此时B继承A的所有属性和方法
             * 有模块功能
             */
        },
        demo14(){
            /**
             * 前端性能优化
             */
        },
        demo15(){
            /**
             * get与post的区别:
             * 传递路径: get参数通过url传递,post放在request body中
             * 长度限制: get请求url中传递的参数是有长度限制，post没有
             * 安全: get比post更不安全，因为参数直接暴露在url并缓存浏览器中，所以不能用用来传递敏感信息
             * 编码方式: get请求只能进行url编码，而post支持多种编码方式
             * TCP链接不同
             */
        },
        demo16(){
            /*
            跨域问题 (控制台出现CORS报错)
                1.CORS跨域资源共享   后端需要设置Access--Control-Allow-Credentials:true
                2.jsonp实现跨域：动态创建script，利用src属性进行跨域
                3. nginx代理跨域
                4.nodejs中间件代理跨域
                5.WebSokect跨域
                6.ifram跨域
             */
        }
    }
}
</script>

<style lang="less" scoped>

</style>