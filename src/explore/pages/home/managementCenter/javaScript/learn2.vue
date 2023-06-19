<template>
  <section></section>
</template>

<script>
export default {
    name: 'learn2',
    data() {
        return {};
    },
    mounted() {
        this.demo1();
    },
    methods: {
        demo1() {
            // 定时器
            // 时间：以毫秒为单位，1000毫秒=1秒
            // 一次性定时器：到时间后只执行一次，不再执行
            // setTimeout(回调函数,时间);
            function fn() {
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
            console.log('保留两个小数点', Number(money.toFixed(2))); // toFixed(num) 指定小数位数（四舍五入，返回的是字符串）
            console.log('保留两个小数点', parseInt(money * 100) / 100);
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
            console.log('3*2*1', fact(3)); // 结果为 6
        },
    },
};
</script>

<style lang="less" scoped>
</style>
