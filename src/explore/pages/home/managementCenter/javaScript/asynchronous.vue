<template>
  <section></section>
</template>

<script>
export default {
  name: "asynchronous",
  data() {
    return {};
  },
  created() {
    // this.cause('传入参数').then(function(res){ // 可以省略then,catch
    //     console.log('最终步骤', res)
    // }).catch(err => {
    //     console.log('error',err);//语法错误会触发catch方法
    // })
  },
  mounted() {
    // this.demo2();
    this.comeBack1('参数1', '参数2', function(res){
        console.log('最终执行', res);
    });// 传参3是个方法
  },
  methods: {
    // 用于控制执行顺序
    comeBack1(params1, params2, callback) {// 参数3是个方法，一定要放最后
      // 方法callback的应用
      console.log("传入的参数:", params1, params2);
      callback({ message: "成功" }); // callback有return功能，结束方法    不一定命名callback 或result
    },
    demo1() {
      console.log("1"); // 同步任务
      setTimeout(function () {
        // setTimeout和setInterval函数，是异步-宏任务
        console.log("2");
      }, 0); //延迟时间为0
      setTimeout(function () {
        // 异步-宏任务
        console.log("3");
      }, 0);

      // 应用: new Promise给变量，或return new Promise...给方法都行, 就可以then了
      var promise = new Promise(function (resolve) {
        // new Promise是同步任务
        console.log("4");
        resolve();
      });
      promise.then(function () {
        // promise.then是异步-微任务
        console.log("5");
      }); // promise是异步解决方案，要想两个方法顺序执行，就用promise

      console.log("6"); // 同步任务
      //执行顺序: 1、4、6、5、2、3

      /* javascript是一门“单线程”的语言，要顺序执行，不能同时执行多个任务
            同步任务: 在主线程上排队执行的任务。（主线程就是执行栈）
            异步任务: 先进入"任务队列"，等待主线程任务执行完毕，"任务队列"才进入主线程，开始执行

            异步任务: 分为宏任务和微任务,先微任务，再宏任务
            简单理解: 先同步，再异步(先微任务，再宏任务)     请记能异步的js */
    },
    demo2() {
      // 异步编程: 按顺序步骤执行（promise和async属于es6）
      // Promise多用于在方法return new Promise.....然后调用该方法时，方法名(传参).then回调函数
      function is_promise(value) {
        return new Promise((resolve) => {
          console.log("new Promise是同步任务", value);
          resolve({ message: "then参数" });
        });
      }
      is_promise("bingo").then((result) => {
        console.log("promise.then是异步-微任务");
      });

      // 多个顺序步骤，promise就不太好使了,优化用async/await
      function step1(key) {
        console.log("步骤1", key);
        return 222;
      }
      function step2(key) {
        console.log("步骤2", key);
      }
      function step3(key) {
        console.log("步骤3", key);
      }
      async function myAsync(params) {
        const a = await step1(params); // 第一个await是同步任务，以下都是异步-微任务
        await step2(a); // a是方法return返回的参数
        await step3(333);
        return { message: "回调成功" };
      }
      myAsync("传参!")
        .then((result) => {
          console.log("步骤4-结果", result);
        })
        .catch((err) => {
          console.log("error", err); //语法错误会触发catch方法
        });
    },
    // vue应用async
    async cause(params) {
      /*
          应用接口的执行步骤: 如先获取id，再用该id传别的接口   http请求就是用这个封装的
          await的是接口时，接口需要时间，顺序：先渲染dom，执行完，再次渲染dom
       */
      let guide = await this.cause1(params);
      await this.cause2(guide); // 步骤1获取的id，传给步骤2
      await this.cause3();
      console.log("await-4");
      return { message: "回调成功" };
    },
    cause1(params) {
      console.log("await-1", params);
      return { id: 910 };
    },
    cause2(val) {
      if (val.id === 910) {
        console.log("await-2");
      }
    },
    cause3() {
      console.log("await-3");
    },
    demo3() {
      // 保留两个小数点
      let money = 75995094.5789;
      console.log("保留两个小数点", Number(money.toFixed(2))); // toFixed(num) 指定小数位数（四舍五入，返回的是字符串）
      console.log("保留两个小数点", parseInt(money * 100) / 100);
    },
    demo4() {
      //递归: 函数直接或间接调用自己
      // 阶乘
      function fact(num) {
        if (num <= 1) {
          // 防止死循环
          return 1;
        } else {
          return num * fact(num - 1); // 运算 3*2*fact(1)
        }
      }
      console.log("3*2*1", fact(3)); // 结果为 6
    },
    demo5() {
      // 高级遍历：递归，调用自身方法 ------ children有一层的，有二层的，有三层的，那如何遍历呢？----用递归
      let list = [
        {
          code: "10000770",
          title: "",
          children: []
        },
        {
          code: "10000450",
          title: "",
          children: [
            {
              title: "",
              code: "10000470",
              children: []
            },
            {
              title: "",
              code: "10000420",
              children: [
                {
                  title: "",
                  code: "10000551",
                  children: []
                }
              ]
            }
          ]
        }
      ];
      function recursion(arr, value, callback) {// 参数3callback是个方法
        for (let i = 0; i < arr.length; i++) {
        //   arr[i].hidden = false; // 添加属性，实现改造自身数组
        //   delete arr[i]["title"]; // 删除属性
          if (arr[i].code == value) {
            callback(arr[i].children);// 有return结束方法作用
          }
          recursion(arr[i].children, value, callback); // 传children数组
        }
      }
      // 找出code："10000420"的children
      recursion(list, "10000420", function (children) {
        console.log(children);
      });// 传参3是个方法
    },
  },
};
</script>

<style lang="less" scoped>
</style>