<template>
    <section>
        <div id="box" class="category" name="coffee" style="color: white;">咖--咖</div>
    </section>
</template>

<script>
export default {
    name: 'dataType',
    data(){
        return{

        }
    },
    mounted(){//可以dom操作
        this.demo9();
    },
    methods: {
        demo1(){
            // javascript脚本语言组成结构:语法标准,文档对象模型,浏览器对象模型
            //四种输出类型
            alert('alert内容');//弹出框
            prompt("prompt内容");//对话框
            // document.write("内容");//页面中打印内容，不推荐,覆盖掉原网页内容
            console.log('控制台','变量');
            // 注意:1.js不区分单双引号,但是双引号不能包双引号，单引号不能包单引号
        },
        demo2(){
            //四种获取元素
            // let yuansu = document.getElementById("box");//通过id名获取元素,id名可以直接使用
            // let yuansu = document.getElementsByClassName("category")[0];//通过class名来获取元素
            // let yuansu = document.getElementsByTagName("div")[0];//通过标签名来获取元素
            let yuansu = document.getElementsByName("coffee")[0];//通过name属性来获取元素
            yuansu.style.backgroundColor = "red";
            console.log('获取元素',yuansu);
            console.log('1元素',yuansu.innerHTML);
            console.log('2元素',yuansu.id);
            console.log('3元素',yuansu.style.color);
            console.log('4元素',yuansu.className);
            console.log('5元素',yuansu.value);
            console.log('6元素',yuansu.length);
        },
        demo3(){
            //js的常量:值在程序执行过程中不会改变
		    var PI = 3.1415926;//值不变
            //js中的变量：用来储存数据的容器，值可以改变
        },
        demo4(){
            //变量或者常量的命名规范:
            // 1.不能取关键字，var,function,ducument,alert....
            // var function = 32;//报错
            // 2.必须以字母或者下划线开头，不能以数字开头
            var _age = ""//对
            // 3.遵循驼峰式命名
            var studentName;
        },
        demo5(){
            // 五种基本数据类型，数字（number),字符串（string)，布尔(boolean）,空（null），未定义（undefined）
            // 检测数据类型用：typeof 变量   不同写法   typeof(变量)
            var age = 18;//number
            var name = "张";//字符串
            // 布尔Boolean:true/false用来做判断条件
            var condition = true;//布尔值
            var kong = null;//空，有值null
            var sex;//undefined未定义,只声明了变量，已分配空间，没有赋值
                sex = "男";//赋值
            var age = 32;//声明同时直接赋值
            console.log('1typeof',typeof age,typeof(age));
            console.log('2typeof',typeof null,typeof []);//都是object
        },
        demo6(){
            //数据类型转换
            // 1.隐式转换(弱类型转换)
            // 使用+，-，*，/运算符来转换
            var num1 = 20;//数字（number)
            var num2 = "18";//字符串（string)
            var value1 = num1 + num2;//"+"把数字转字符串,然后字符串拼接
            var value2 = num1 - num2;//"-"字符串转数字，相减
            // 备注：数字和字符串相减结果为NaN(Not a Number不是一个数)
            console.log('++--',value1,typeof value1);
            // 2.显示转换
            // 使用String(变量),Boolean(变量),Number(变量)构造方法来转
            //变量.toString() 但不能转null/undefined
            var phone = 100;
            var transform1 = String(phone);
            var age = 6;
            var transform2 = age.toString();
            console.log('1显示转换String',transform1,typeof transform1);
            console.log('2显示转换toString',transform2,typeof transform2);

            console.log('1显示转换boolean',Boolean(13));//结果true
            console.log('2显示转换boolean',Boolean("13"));//结果true
            console.log('3显示转换boolean',Boolean(0));//结果false
            console.log('4显示转换boolean',Boolean(""));//结果false
            console.log('5显示转换boolean',Boolean(null));//结果false
            console.log('6显示转换boolean',Boolean(undefined));//结果false

            console.log('1显示转换number',Number("123"));//结果123
            console.log('2显示转换number',Number("哈哈"));//结果NaN
            console.log('3显示转换number',Number(true));//结果1
            console.log('4显示转换number',Number(false));//结果0
            console.log('5显示转换number',Number(null));//结果0
            console.log('6显示转换number',Number(undefined));//结果NaN
            // 3.使用函数转换
            // parseInt(变量) 字符串转为整数
            console.log('1函数转换parseInt',parseInt("10.12"));//结果10，遇到小数点或者非数字就终止
            console.log('2函数转换parseInt',parseInt("哈哈"));//结果，首字符为非数字型，停止返回NaN
            console.log('3函数转换parseInt',parseInt("11哈哈"));//结果11，如果第一个字符是数字型，一直往后解析，直到碰到非数字型的字符停止，返回前面的数值
            console.log('4函数转换parseInt',parseInt("10101",2));//2进制，结果21，可以将不同进制数解析为十进制显示
            // parseFloat(变量) 字符串转浮点型类型
            console.log('1函数转换parseFloat',parseFloat("11.22"));//结果11.22，
            console.log('2函数转换parseFloat',parseFloat("6.6.6"));//结果6.6，只能解析第一个小数点
            console.log('3函数转换parseFloat',parseFloat("0x10101",2));//结果0，只能解释十进制的形式
        },
        demo7(){
            // 变量:用来储存数据的容器，当声明一个变量时
            // 变量的作用域:
            // 1.全局变量:一般是在函数外部定义，作用于整个函数
            // 2.局部变量：定义在函数内部，只能被该函数
            // 生命周期:
            // 1.全局变量：从变量被定义直到程序被关闭而终止
            // 2.局部变量：从变量被定义直到函数被关闭而终止

            var i = "yi";//局部变量
        },
        demo8(){
            // 运算符:
            // 1.算术运算符:+,-,*,/,++,--,%(余数)
            // +,-,*,/,%类似数学运算
            // ++：在自身基础上+1
            // --：在自身基础上-1
            // a++:先运算赋值再自增
            // ++a：先自增再运算赋值
            // a--:先运算赋值再自减
            // --a：先自减再运算赋值

            // 2.赋值运算符：=，+=,-=,*=,/=，%=
            // a+=b:等价于a=a+b
            // a-=b:等价于a=a-b
            // a*=b:等价于a=a*b
            // a/=b:等价于a=a/b
            // a%=b:等价于a=a%b

            // 3.比较运算符：>,<,>=,<=,!=,==
                
            // 4.逻辑运算符:与&&,或||,非!
            // 与&&:只有&&符两边的等式同时成立,结果才为true否为flase
            // &&与&区别:
            // &&:前不对,不再执行后面
            // &:前不对,依然执行后面(true为1,false为0)
            // 或||:只要有一个成立,就true,两不成立为false
            // 非! 结果取反  false变true   true变false
            // 5.三目运算符:(条件)?(语句1):(语句2)
            // 如果条件成立,结果为语句1,否为语句2
            
            // 优先级:()--乘除加减--赋值

            // 科学计数法    800000 = 8e5       0.00008 = 8e-5
            var a=16;
            var b=3;
            console.log('%',a%b);
            if(a>15&&b<1){
                console.log('&&',true);
            }else{
                console.log('&&',false);
            }
            var c=null;//空，null，undefined
            if(!c){
                console.log('!','非');
            }
            var t = a>15 ? 2:3;
            console.log('三目运算符',t);

            var e = 25;
            var k = 4+e++;
            console.log('e++',e,k);//e为26，k为29    这里先算k=4+25，再算a=a+1

            var u = 9;
            var m = 5-++u;
            console.log('++u',u,m);//u为10，m为-5   这里先算u=u+1，再算m=5-10
        },
        demo9(){
            //流程控制
            var i = 6;
            if(i==5){//不管成立与否，都会往下执行，除非用return
                console.log("if=6");
            }else if(i==7){//不管成立与否，都会往下执行，除非用return
                console.log("if=7");
            }else{//以上都不成立才执行
                console.log("什么都不是");
            }

            var k = 7
			switch(k){
				case 5:
                    console.log("小于6");
				    break;//break结束以下流程,如果不使用break，不管上面一个条件是否成立都继续向下判断
				case 0:
                    console.log("小于5");
				    break;
				case 8:
                    console.log("小于4");
				    break;
				default://以上case均不成立，才执行
                    console.log("什么都不是");
            }
            
            var arr = [1,2,3,4,5,6];
            for(let i=0;i<arr.length;i++){
                if(arr[i] == 3){
                    break;//直接终止循环
                }
                if(arr[i] == 3){
                    continue;//终止本次循环，进行下一次
                }
            }
            //当不确定循环条件时，用while，已知循环条件时用for
			var m=0;
			while(m<5){//先判断为true，才执行以下
                m++;
				console.log("while",m);
				if(m>2){
					break;//直接终止循环
				}
            }

            var p = 0;
			do{
				console.log("do==while");//弹两次
				p++;
			}while(p<2);//先执行do中的语句，再去判断while的条件,不管while中的条件是否成立，do都要执行一次
        }
        
    }
}
</script>

<style lang="less" scoped>

</style>