<template>
  <section></section>
</template>

<script>
export default {
    name: 'asynchronous',
    data() {
        return {};
    },
    created() {
        this.cause('传入参数')
            .then(function(res) {
                // 可以省略then,catch
                console.log('最终步骤', res);
            })
            .catch(err => {
                console.log('error', err); //语法错误会触发catch方法
            });
    },
    mounted() {
        this.demo3().then(function(res) {
            // 可以省略then,catch
            console.log('--仅仅是--', res);
        })
        .catch(err => {
            console.log('--error--', err); //语法错误会触发catch方法
        });
        // this.comeBack1('参数1', '参数2', function(res){
        //     console.log('最终执行', res);
        // });// 传参3是个方法
    },
    methods: {
        // 用于控制执行顺序
        comeBack1(params1, params2, callback) {
            // 参数3是个方法，一定要放最后
            // 方法callback的应用
            console.log('传入的参数:', params1, params2);
            callback({ message: '成功' }); // callback有return功能，结束方法    不一定命名callback 或result
        },
        demo1() {
            console.log('1'); // 同步任务
            setTimeout(function() {
                // setTimeout和setInterval函数，是异步-宏任务
                console.log('2');
            }, 0); //延迟时间为0
            setTimeout(function() {
                // 异步-宏任务
                console.log('3');
            }, 0);

            // 应用: new Promise给变量，或return new Promise...给方法都行, 就可以then了
            var promise = new Promise(function(resolve) {
                // new Promise是同步任务
                console.log('4');
                resolve();
            });
            promise.then(function() {
                // promise.then是异步-微任务
                console.log('5');
            }); // promise是异步解决方案，要想两个方法顺序执行，就用promise

            console.log('6'); // 同步任务
            //执行顺序: 1、4、6、5、2、3

            /* javascript是一门“单线程”的语言，要顺序执行，不能同时执行多个任务
            同步任务: 在主线程上排队执行的任务。（主线程就是执行栈）
            异步任务: 先进入"任务队列"，等待主线程任务执行完毕，"任务队列"才进入主线程，开始执行

            异步任务: 分为宏任务和微任务,先微任务，再宏任务
            简单理解: 先同步，再异步(先微任务，再宏任务)     请记能异步的js */
        },
        demo2() {
            /*
        异步编程: 按顺序步骤执行（promise和async属于es6）
        Promise多用于在方法return new Promise.....然后调用该方法时，方法名(传参).then回调函数
        作用：保证执行成功后then回调
      */
            function is_promise(value) {
                return new Promise((resolve, reject) => {
                    console.log('new Promise是同步任务', value);
                    resolve({ message: 'then参数' });// then回调
                    // reject(res);// catch回调
                });
            }
            is_promise('bingo').then(result => {
                console.log('promise.then是异步-微任务', result);
            });
        },
        /*
      async修饰方法才能用await
      多个顺序步骤，promise就不太好使了,优化用async/await
      作用：await修饰http接口，接口需要20秒，也能保证顺序执行
    */
        async cause(params) {
            /*
          应用接口的执行步骤: 如先获取id，再用该id传别的接口   http请求就是用这个封装的
          await的是接口时，接口需要时间，顺序：先渲染dom，执行完，再次渲染dom
       */
            let guide = await this.cause1(params);
            await this.cause2(guide); // 步骤1获取的id，传给步骤2
            await this.cause3();
            console.log('await-4');
            return { message: '回调成功' };// async自带then回调，而reture返回的值是then里的参数
        },
        cause1(params) {
            console.log('await-1', params);
            return { id: 910 };
        },
        cause2(val) {
            if (val.id === 910) {
                console.log('await-2');
            }
        },
        cause3() {
            console.log('await-3');
        },
        demo3() {
            return Promise.resolve("then回调");
            // return Promise.reject("catch回调");
        }
     },
};
</script>

<style lang="less" scoped>
</style>