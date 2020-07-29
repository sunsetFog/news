<template>
    <section>
        <div id="box"></div>
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
            // 移动端
            // document.ontouchend=function(ev){
			// 	ev.preventDefault();//阻止事件冒泡
			// }
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


// 闭包：函数内部再次定义函数，内部函数可以调用外部函数的局部变量,但是外部函数无法调用内部函数的变量
// 闭包的优势：1.内部函数可以调用外部函数的局部变量; 2.闭包使变量一直保存在内存中，而不是在函数执行完毕时被回收
// 闭包的劣势：每次将变量保存在内存中，占用内存
// function fn1(){
// 	var a=1;
// 	function fn2(){
// 		console.log(a);//获取函数外定义a
// 	}
// 	return fn2;//此时fn2是指针
// }
// fn1()();
// //或者
// function fn1(){
// 	var a=1;
// 	function fn2(){
// 		console.log(a);
// 	}
// 	return fn2();//此时fn2不是指针
// }
// fn1();
// //或者
// (function(){
// 	var a=1;
// 	function fn2(){
// 		console.log(a);
//     }
// 	return fn2();
// })()


// 面向对象：以事务为中心的编程思想
// 面向对象的三种特性：
// 	1.继承：通过继承，子类可以访问父类的属性和方法
// 	2.多态：同一个方法,不同的类,实现不同的功能
// 	3.封装：将实体代码封装起来，对外部不可见，外部只能直接访问封装后的属性或方法
// 	降低程序代码的耦合度
// 原型链属性prototype:声明一个函数时，js会自动为其创建一个原型链属性prototype
// 使该函数有能力去自行定义方法和属性

// function A(){
//     this.age = 18;
// };//构造函数A
// function B(){
//     this.name = 'B';
// };//构造函数B

// A.prototype.speak = function(){
    
// }
// A.prototype.callEat = function(){
//     console.log('A',this.age);
// }
// A.prototype.sex = "女";

// B.prototype.flower = function(){
//     console.log('丢失')
// }
// B.prototype = new A();//此时B继承A的所有属性和方法,自己的prototype就会丢失
// //创建B的实例对象B
// var B = new B();
// B.callEat();
// console.log('继承属性',B);

//事件冒泡：事件从子元素传递到父元素(从内向外传递),浏览器默认的事件传递方式
// box.onclick = function(event){
//     var ev = event||window.event;
// 	ev.stopPropagation();//阻止冒泡
// }
//事件捕获：事件从父元素传递到子元素(从外向内传递)
// 事件监听
//1.不兼容IE浏览器
// box.addEventListener('click',function(event){//参数1：事件类型(去掉on)  参数2：回调函数  参数3：用来指定该事件为事件冒泡还是事件捕获,默认false事件冒泡，true事件捕获
//     var ev = event||window.event;
// },false);
// function move(){}
// document.removeEventListener('mousemove',move);//移除事件监听       参数1：事件类型(去on掉)  参数2：移除的事件函数功能
// 2.兼容IE浏览器
// attachEvent();//添加监听
// detachEvent(参数1,参数2)//移除事件监听
//事件委托：利用事件冒泡的原理，将子元素的事件委托给父元素或者祖先元素来执行
// 事件源：触发事件的当前对象，需要通过父元素查找该事件源
// box.addEventListener('click',function(event){
//     var ev = event||window.event;
//     var target = ev.target || ev.srcElement;//事件源对象(兼容IE)
//     if(target.nodeName.toLowerCase() == "li"){//点击就指定了该li标签上颜色，li标签的事件委托给了父元素
//         target.style.backgroundColor = "red";
//     }
// },false);


//键盘事件
// onkeydown  按下键盘触发事件
// keyCode  键盘码，键盘上每个按键对应一个码,通过event参数来调用
// onkeyup  键盘抬起事件

// event{
// 	ctrlKey: Ctrl键按下true，抬起false
// 	shiftKey: shift键按下true，抬起false
// 	altKey: alt键按下true，抬起false
// }		
// document.onkeydown = function(event){
//     var ev = event || window.event;//event  谷歌、火狐等，浏览器内置参数      window.event  IE浏览器内置参数    这是兼容性写法
//     if(ev.ctrlKey){
//         console.log('你按下了Ctrl键');
//     }
// }
// 鼠标事件
// onmousemove 鼠标移动事件
// onmousewheel  鼠标滚轮事件
// document.onmousemove = function(event){
//     var ev = event||window.event;
//     console.log(ev.clientX+" "+ev.clientY);//ev.clientX 横坐标   ev.clientY:纵坐标    默认从左上角开始
// }
// img.onmousewheel = function(event){//滚轮放大缩小图片
//     var ev = event||window.event;
//     //event.wheelDelta:该属性返回-120或者120
//     if(ev.wheelDelta==120){//滚轮向上滚动

//     }else if(ev.wheelDelta==-120){//滚轮向下滚轮

//     }
//     //样式   zoom: 100%;  等于100%是原图、大于100%是放大、小于100%是缩小
//     var zoom = parseInt(this.style.zoom);//获取zoom样式值
//     var delta = event.wheelDelta/12;//不是10就是-10
//     zoom += delta;
//     if(zoom>0){
//         this.style.zoom = zoom + "%";
//     }
// }
</script>

<style lang="less" scoped>

</style>