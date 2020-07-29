<template>
    <section></section>
</template>

<script>
export default {
    name: "learn3",
    data(){
        return{

        }
    },
    mounted(){
        this.demo1();
    },
    methods: {
        demo1(){
            console.log( "1" );// 同步任务
            setTimeout(function() {// setTimeout和setInterval函数，是异步-宏任务
                console.log( "2" )
            }, 0 );//延迟时间为0
            setTimeout(function() {// 异步-宏任务
                console.log( "3" )
            }, 0 );

            var promise = new Promise(function(resolve) {// new Promise是同步任务
                console.log('4')
                resolve()
            });
            promise.then(function() {// promise.then是异步-微任务
                console.log('5')
            });// promise是异步解决方案，要想两个方法顺序执行，就用promise

            console.log( "6" );// 同步任务
            //执行顺序: 1、4、6、5、2、3

            // javascript是一门“单线程”的语言，所以javascript就像一条流水线，不能同时进行多个任务和流程
            // 同步任务: 在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务。（主线程就是执行栈）
            // 异步任务: 先进入"任务队列"，等待主线程任务执行完毕，"任务队列"才进入主线程，开始执行

            // 异步任务: 分为宏任务和微任务,只有微任务执行完毕，才执行宏任务
            // 简单理解: 先同步，再异步(先微任务，再宏任务)     请记能异步的js
        },
        demo2(){
            // 异步解决方案: 是的顺序步骤执行
            // Promise多用于在方法return new Promise.....然后调用该方法时，方法名(传参).then回调函数
            function is_promise(value) {
                return new Promise(resolve => {
                    console.log('new Promise是同步任务',value);
                    resolve();
                })
            }
            is_promise('bingo').then(() =>{
                console.log('promise.then是异步-微任务');
            })

            // 多个顺序步骤，promise就不太好使了,优化用async/await
            function step1(key) {
                console.log('步骤1',key);
                return 222;
            }
            function step2(key) {
                console.log('步骤2',key);
            }
            function step3(key) {
                console.log('步骤3',key);
            }
            async function myAsync(params) {
                const a = await step1(params);// 第一个await是同步任务，以下都是异步-微任务
                await step2(a);// a是方法return返回的参数
                await step3(333);
                return {message: '回调成功'};
            }
            myAsync(111).then(result => {
                console.log('步骤4-结果',result);
            }).catch(err => {
                console.log('error',err);//语法错误会触发catch方法
            })
        },
    }
}
</script>

<style lang="less" scoped>

</style>