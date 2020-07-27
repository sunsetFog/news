<template>
    <section></section>
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

        }
    }
}


// 定时器
// 时间：以毫秒为单位，1000毫秒=1秒
// 一次性定时器：到时间后只执行一次，不再执行
// setTimeout(回调函数,时间);
// function fn(){
//     console.log('timer');
// }
// let timer = setTimeout("fn()",3000);
// let timer = setTimeout(fn,3000);
// let timer = setTimeout(function(){},3000);
// clearTimeout(timer);//清除一次性定时器

// 间隔性定时器：setInterval(回调函数，时间)
// let timer = setInterval("fn()",3000);
// let timer = setInterval(fn,3000);
// let timer = setInterval(function(){},3000);
// clearInterval(timer);//清除间隔性定时器


// 面向对象：以事务为中心的编程思想
// 面向对象的三种特性：
// 	1.继承：通过继承，子类可以访问父类的属性和方法
// 	2.多态：同一个方法,不同的类,实现不同的功能
// 	3.封装：将实体代码封装起来，对外部不可见，外部只能直接访问封装后的属性或方法
// 	降低程序代码的耦合度
// 原型链属性prototype:声明一个函数时，js会自动为其创建一个原型链属性prototype
// 使该函数有能力去自行定义方法和属性

function A(){
    this.age = 18;
};//构造函数A
function B(){
    this.name = 'B';
};//构造函数B

A.prototype.speak = function(){
    
}
A.prototype.callEat = function(){
    console.log('A',this.age);
}
A.prototype.sex = "女";

B.prototype.flower = function(){
    console.log('丢失')
}
B.prototype = new A();//此时B继承A的所有属性和方法,自己的prototype就会丢失
//创建B的实例对象B
var B = new B();
B.callEat();
console.log('属性',B);

</script>

<style lang="less" scoped>

</style>