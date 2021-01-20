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
    created(){
        this.demo20();
    },
    methods: {
        demo1(){
            /* 自我介绍
            考官好，很荣幸有机会向考官请教和学习。我叫***，读计算机网络应用专业，平时喜欢研究代码和上网浏览信息。
            出来后，从事前端行业，三年半来经历丰富，具有移动端和PC端经验。
            性格开朗随和，有上进心，希望日后能做的更好，介绍完毕，谢谢！ */
        },
        demo2(){
            /* 
            问随便讲讲时(讲出经验来)
            对接后台不一定用请求头:
            1. 下载文档：window.open("后台请求url?id="+传参数后台);
            2. element图片上传: （查看vue功能集）

            vue的拦截: 路由拦截，请求拦截
             */
        },
        demo3(){
            /**
             * vue中mvvm原理及其实现
             mvvm是mvc的改进
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
            /* 
            页面的传参方式:
            1.路由传参
            2.vuex传参
            3.缓存传参
            4.子父组件传参
             */
        },
        demo5(){
           /*  vuex运用:
            看src\pages\managementCenter\knowledge\vuex.vue
            看src\vuex */
        },
        demo6(){
            /* computed与watch的区别:  
            看pages\managementCenter\knowledge\computed.vue
            看pages\managementCenter\knowledge\watch.vue */
        },
        demo7(){
            /* 浏览器兼容性:
            语法错误（js不兼容浏览器） */
        },
        demo8(){
            /* es6: 看pages\managementCenter\javaScript\es6.vue */
        },
        demo9(){
            /* 数组去重:  看pages\managementCenter\javaScript\jsDemo.vue */
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
                7、渲染页面:构建DOM树;解析CSS,将CSS与DOM合并，构建渲染树;布局和绘制，重绘和重排
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
             * 渐进增强: 保证低版本浏览器进行构建页面，再针对高版本浏览器进行效果、交互等改进和追加功能达到更好的用户体验
             * 优雅降级: 构建完整的功能后，再针对低版本浏览器进行兼容
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
            /*
             减少页面加载时间的方法
                a. 尽量减少页面中重复的HTTP请求数量
                b. 服务器开启gzip压缩
                c. css样式的定义放置在文件头部
                d. Javascript脚本放在文件末尾
                e. 压缩合并Javascript、CSS代码
                f. 使用多域名负载网页内的多个文件、图片
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
        },
        demo17(){
            /*
            px,rem,em区别
            看pages\managementCenter\tagStyle\cssDemo.vue
             */
        },
        demo18(){
            /*
            导入样式，link和@import的区别
            页面被加载的时，link会同时被加载，而@import要页面被加载完再加载
            link可以加载css，还能定义RSS。而@import只能加载css
             */
        },
        demo19(){
            /* 
                HTML语义化的理解？
                html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析,便于阅读维护理解;
             */
        },
        demo20(){
            console.log('null转数值为0,类型是对象', Number(null), typeof null); // 0 object
            console.log('undefined转数值为NaN,类型是undefined',Number(undefined), typeof undefined); // NaN undefined
            let apple;
            console.log('声明未赋值', apple);//undefined
            let star = null;
            if(!apple && !star){
                console.log('两者都是false,if时用！非')
            }
            /* 
            null与undefined区别
            很相似，无的意思。
            null表示"不应该有值"
            undefined表示"缺少值"
             */
        },
        demo21(){
            /* 
                apply()与call()的区别
                看pages\managementCenter\javaScript\learn2.vue
            */
        },
        demo22(){
            /* 
                HTTP状态码
100 Continue 继续，表示确认，请传具体参数
200 OK 正常返回信息
201 Created 请求成功并且服务器创建了新的资源
202 Accepted 服务器已接受请求，但尚未处理
301 Moved Permanently 请求的网页已永久移动到新位置。
302 Found 临时性重定向。
303 See Other 临时性重定向，且总是使用 GET 请求新的 URI。
304 Not Modified 自从上次请求后，请求的网页未修改过。
400 Bad Request 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
401 Unauthorized 请求未授权。
403 Forbidden 禁止访问。
404 Not Found 找不到如何与 URI 相匹配的资源。
500 Internal Server Error 最常见的服务器端错误。
503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。
            */
        },
        demo23(){
            /* 
            有哪些性能优化方法
                1.减少http请求次数
                2.减少DOM操作
                3.图片预加载，将样式表放在顶部
                4.少用全局变量
                5.按需加载资源
                6.压缩和模块打包
                7.图片编码优化
            */
        },
        demo24(){
            /* 
            哪些常见操作会造成内存泄漏？
            内存泄漏指不再需要的变量仍然存在
            闭包、控制台日志、循环
            没有清理的DOM元素引用
            被遗忘的定时器
            */
        },
        demo25(){
            /* 
            css盒子垂直居中
            看pages\managementCenter\tagStyle\flex.vue
             */
        },
        demo26(){
            /* 
            http 和 https 有何区别？如何灵活使用？
            https比http安全性高
http是HTTP协议运行在TCP之上。所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份。
https是HTTP运行在SSL/TLS之上，SSL/TLS运行在TCP之上。所有传输的内容都经过加密，加密采用对称加密，
但对称加密的密钥用服务器方的证书进行了非对称加密。此外客户端可以验证服务器端的身份，
如果配置了客户端验证，服务器方也可以验证客户端的身份         
             */
        },
        demo27(){
            /* 
            浏览器缓存有哪些
            一.http缓存
            二.websql缓存，
                1.cookie
                2.localStorage
                3.sessionStorage
                4.flash缓存

             */
        },
        demo28(){
            /* 
            安全性上的同源策略：两个域要同协议, 同端口，同host域名，其中有一个不同，就产生跨域问题
             */
        },
        demo29(){
            /* 
            cookie,localStorage,sessionStorage的区别
            看pages\managementCenter\knowledge\cache.vue
             */
        },
        demo30(){
            /* 
            v-if和v-show的区别
            即是display none;和visibility hidden区别
            看pages\managementCenter\knowledge\v_tag.vue
             */
        },
        demo31(){
           /* 
           说说vue的生命周期
           created先执行，再mounted，区别：created是创建数据不能Dom操作，mounted用于Dom操作
           看pages\managementCenter\knowledge\lifeCycle.vue
            */ 
        },
        demo32(){
            /* 
            xml和json的区别
            JSON相对于XML来讲，数据的体积小，传递的速度更快些
            JSON与JavaScript的交互更加方便，更容易解析处理，更好的数据交互
            XML对数据描述性比较好；
             */
        },
        demo33(){
            /* 
            浏览器内核的理解
            主要分成两部分：渲染引擎和JS引擎
            渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式
            JS引擎则：解析和执行javascript来实现网页的动态效果
             */
        },
        demo34(){
            /* 
            html5有哪些新特性？
            (1)绘画 canvas;
            (2)用于媒介回放的 video 和 audio 元素;
            (3)本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
            (4)sessionStorage 的数据在浏览器关闭后自动删除;
            (5)语意化更好的内容元素，比如 article、footer、header、nav、section;
            (6)表单控件，calendar、date、time、email、url、search;
            (7)新的技术webworker, websocket, Geolocation;
             */
        },
        demo35(){
            /* 
            方法如何改变this指向？
            看pages\managementCenter\javaScript\learn2.vue
             */
        },
        demo36(){
            /* 
            网站重构的理解
            重构：在不改变外部行为的前提下，简化结构、添加可读性，而在网站前端保持一致的行为。
            a. 使网站前端兼容于现代浏览器(针对于不合规范的CSS、如对IE6有效的)
            b. 对于移动平台的优化，针对于SEO进行优化
            c. 减少代码间的耦合，让代码保持弹性
            d. 压缩或合并JS、CSS、image等前端资源
            */
        },
        demo37(){
            /* 
            一个页面上有大量的图片（大型电商网站），加载很慢，你有哪些方法优化这些图片的加载，给用户更好的体验。
            a. 图片懒加载，滚动到相应位置才加载图片。
            b. 图片预加载，如果为幻灯片、相册等，将当前展示图片的前一张和后一张优先下载。
            c. 使用CSSsprite，SVGsprite，Iconfont、Base64等技术，如果图片为css图片的话。
            d. 如果图片过大，可以使用特殊编码的图片，加载时会先加载一张压缩的特别厉害的缩略图，以提高用户体验。
             */
        },
        demo38(){
            /* 
            属性src与href的区别？
            src指向外部资源的位置
            href指向网络资源所在位置
             */
        },
        demo39(){
            /* 
            同步和异步编程
            看pages\managementCenter\javaScript\learn3.vue
             */
        }
    }
}
</script>

<style lang="less" scoped>

</style>