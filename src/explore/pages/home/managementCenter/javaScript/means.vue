<template>
    <section>

    </section>
</template>

<script>
export default {
    name: "means",
    data() {
        return {

        }
    },
    created() {
        this.demo7();
    },
    methods: {
        demo1(){
            // 函数概念：函数是执行某种特定功能的代码段，一次编写可以重复调用
            // 定义函数：function 函数名(){代码段}       
            function fn(value){// value是形参    形参：在函数定义时，传的参数是一个虚拟的变量  
            
            }
            fn(5);//调用函数   5是实参   实参：当函数被调用时,传的参数是一个实际的值

            // 默认参数
            function fn(name,age=17){
                console.log('默认参数',name+","+age);
            }
            fn("Amy");// Amy,17
            fn("Amy",undefined);// Amy,17
            fn("Amy",18);// Amy,18
            fn("Amy","");// Amy,
            fn("Amy",null);// Amy,null

            //不定参数: 表示不确定参数个数
            function fi(...values){
                console.log('不定参数',values);
            }
            fi(1,2);// [1,2]
            fi(1,2,3,4);// [1,2,3,4]
            
            // 函数赋值给一个变量
            var yaya =  function(){
                return {message: '成功状态'};// return;    函数的返回结果,直接结束该函数
            }
            console.log('调用函数return',yaya());//注意yaya是个函数

            //在对象里定义函数
            let yu = {
                age: 16,
                ant: function(){

                }
            }
            yu.ant();//调用函数

            // 匿名函数:没有命名的函数，减少全局变量的使用，性能得到优化
            (function(){
                console.log('已调用的匿名函数');
            })();
        },
        demo4(){
            /* 闭包：函数内部再次定义函数，内部函数可以调用外部函数的局部变量,但是外部函数无法调用内部函数的变量
            闭包的优势：1.内部函数可以调用外部函数的局部变量; 2.闭包使变量一直保存在内存中，而不是在函数执行完毕时被回收
            闭包的劣势：每次将变量保存在内存中，占用内存 */
            function fn1(){
            	var a=1;
            	function fn2(){
            		console.log(a);//获取函数外定义a
            	}
            	return fn2;//此时fn2是指针
            }
            fn1()();
            //或者
            function fr1(){
            	var a=2;
            	function fr2(){
            		console.log(a);
            	}
            	return fr2();//此时fr2不是指针
            }
            fr1();
            //或者
            (function(){
            	var a=3;
            	function fi2(){
            		console.log(a);
                }
            	return fi2();
            })()
        },
        demo5(){
            /* 构造函数
            面向对象：以事务为中心的编程思想
            面向对象的三种特性：
            	1.继承：通过继承，子类可以访问父类的属性和方法
            	2.多态：同一个方法,不同的类,实现不同的功能
            	3.封装：将实体代码封装起来，对外部不可见，外部只能直接访问封装后的属性或方法
            	降低程序代码的耦合度
            原型链属性prototype:声明一个函数时，js会自动为其创建一个原型链属性prototype
            使该函数有能力去自行定义方法和属性 */

            function A(age){
                this.age = age;
            };//构造函数A
            function B(){
                this.name = 'B';
            };//构造函数B

            A.prototype.speak = function(){
                
            }
            A.prototype.callEat = function(){
                console.log('构造函数里用this',this.age);//在构造函数中，this指向构造函数new出来的对象
            }
            A.prototype.sex = "女";

            B.prototype.flower = function(){
                console.log('丢失')
            }
            B.prototype = new A(18);//此时B继承A的所有属性和方法,自己的prototype就会丢失
            //创建B的实例对象B
            var jiji = new B();
            jiji.callEat(); // 调用方法
            console.log('继承属性',jiji);
        },
        demo7(){
            // this：指针，虚拟的替代品，谁调用，this就指向谁
            console.log("vue普通方法中,this指向在使用的Vue实例", this);
            console.log("直接用window对象：", window);

			var obj = {
				name:"星星",
				eat:function(){
					console.log('在对象方法中，this指向当前对象', this, '---', this.name);
				}
            }
            obj.eat();

            function student(name,age){
				this.name = name;
				this.age = age;
            }
            student.prototype.getName = function(){
				console.log('在构造函数中，this指向构造函数new出来的对象', this, '---', this.name);
            }
            var rice = new student("娜娜",18);
            rice.getName();

            //4种更改this指向
            // apply()与call()非常相似,区别是传参方式不同,apply()参数2必须数组
            var person = {
                name: "zhangsan",
                age: 19
            }
            function aa(x,y){
                console.log(x, this);
            }
            aa('在普通函数中，this指向全局对象window，但严格模式use strict的this为undefined');//undefined 此时,this指向window
            /* 改变this并方法传参 */
            aa.call(person,'1.call改方法this指向',5);//此时，方法里this指向person
            aa.apply(person, ['2.apply改方法this指向', 5]);//此时，方法里this指向person
            aa.bind(person,'3.bind改方法this指向',5)();//此时，方法里this指向person
            // 存储this指向到变量中
            let that = this;
            setTimeout(function () {
                console.log("4.存储的this:", that);
                console.log("在定时器中,this指向全局对象window:", this);
            }, 1000);
        }
    }
}
</script>

