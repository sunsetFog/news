<template>
    <section>
        
    </section>
</template>

<script>
export default {
    name: "learn2",
    data(){
        return{

        }
    },
    mounted(){
        this.demo1();
    },
    methods: {
        demo1(){
            // 定时器
            // 时间：以毫秒为单位，1000毫秒=1秒
            // 一次性定时器：到时间后只执行一次，不再执行
            // setTimeout(回调函数,时间);
            function fn(){
                console.log('timer');
            }
            // 写法1
            // let timer = setTimeout("fn()",1000);
            // 写法2
            // let timer = setTimeout(fn,1000);
            // 写法3
            // let timer = setTimeout(function(){},1000);
            // clearTimeout(timer);//清除一次性定时器

            // 间隔性定时器：setInterval(回调函数，时间)
            // let timer = setInterval(fn,1000);
            // clearInterval(timer);//清除间隔性定时器
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
            function recursion(arr, value, callback) {
                // 参数3callback是个方法
                for (let i = 0; i < arr.length; i++) {
                //   arr[i].hidden = false; // 添加属性，实现改造自身数组
                //   delete arr[i]["title"]; // 删除属性
                if (arr[i].code == value) {
                    callback(arr[i].children); // 有return结束方法作用
                }
                recursion(arr[i].children, value, callback); // 传children数组
                }
            }
            // 找出code："10000420"的children
            recursion(list, "10000420", function(children) {
                console.log(children);
            }); // 传参3是个方法
        }
    }
}

</script>

<style lang="less" scoped>

</style>