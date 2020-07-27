<template>
    <section id="css">
        <!-- 
            1.三种元素:
                行内元素：同一行显示,不能设宽高  例如 b,span,a,i,strong
                块元素：单独占一行，可以设宽高  例如div,p,h1-h6,table,ul-li,ol-li  
                行内块元素：同一行显示,可以设宽高  例如img,input,button
            2.盒子模型: 内容content、内边距padding、边框border、外边距margin
            3.三种常见选择器类型：
                1.标签选择器
				2.class选择器
				3.id选择器
				优先级(权重)：id选择器>class选择器>标签选择器
            不常见的选择器
                属性选择器：input[type="password"]
                伪类选择器：:hover :focus :active :visitied :link :after
                子代选择器：>
                后代选择器：空格
            4.引入css的三种方式
                行内式(行间式)：标签行内style="";
			    内部式(内联式)：在head内部使用<style></style>;
			    外部式(外链式)：使用<link rel="stylesheet" type="text/css" href="">
            5.浏览器私有属性
            -moz  指firefox
            -ms  指IE
            -webkit  指chrome、safari
            -o  指Opera
        
        -->
    </section>
</template>

<script>
export default {
    name: 'css'
}
</script>

<style lang="less" scoped>
    #css{
		// width: 800px;//宽
        // height: 200px;//高

        // //使元素脱离文档流
        // float: left;//左浮动
        // float: right;//右浮动
        // clear: both;//清除浮动

        // display: inline;//转行内元素
        // display: block;//转块元素
        // display: inline-block;//转行内块元素

        // border: 1px solid red;//边框
        // border-top: 1px solid red;
        // border-bottom: 1px solid red;
        // border-left: 1px solid red;
        // border-right: 1px solid red;

        // margin: 0 auto;//div水平居中
        // margin-top: 100px;
        // margin-bottom: 100px;
        // margin-left: 100px;
        // margin-right: 100px;
        // margin: 10px 10px 10px 10px;//上右下左

        // padding-top: 20px;//上内边距，默认撑大元素
        // padding-bottom: 20px;
        // padding-left: 20px;
        // padding-right: 20px;
        // padding: 10px 10px 10px 10px;//上右下左
		// box-sizing: border-box;//封闭盒子
        
        // color: green;//字体颜色
		// font-size: 14px;//字体大小，默认16px
		// font-style: italic;//斜体
        // font-weight: bold;//字体加粗
        // letter-spacing: 10px;//字符间距
        // font-family: "微软雅黑";//字体系列，谷歌默认微软雅黑
        
        // text-align: justify;//两端对齐
		// text-align: center;//文本水平居中
        // text-align: left;//文本靠左居中
        // text-align: right;//

        // position: static;//静态定位  等价于不定位
        // position: relative;//相对定位  以自身为参考，不脱脱离文档
        // position: absolute;//绝对定位  以父元素为参考，脱离文档  默认以左上角为起点
        // position: fixed;//固定定位
        // top: 100px;
        // bottom: 100px;
        // left: 100px;
        // right: 100px;
        // z-index: -2;//层次关系

        // background: aqua;//背景颜色
        // background: url(../img/icon_home.png) no-repeat;
        // background-size: 200px 200px;//背景大小
        
		// line-height: 200px;//文本垂直居中
		// letter-spacing: 10px;//字符间距
		// word-spacing: 20px;//单词间距
        // overflow: hidden;//溢出隐藏
        
		// overflow: scroll;//溢出出现滚动条
        // overflow-y: scroll;//y轴出现滚动条
        // overflow-x: scroll;//x轴出现滚动条

		// text-indent: 30px;//首行缩进
        // white-space: nowrap;//文本强制不换行

        // display: none;//元素消失
        // display: block;//元素出现

        // border-radius: 10px;//圆角
        // cursor: pointer;//鼠标小手
        // text-shadow: 5px 5px 10px aqua;	//文本阴影   右、下、模糊度、颜色

        // transition: 1s;//过渡周期
        // transform-origin: -10px 0px;//起点  默认以中心为圆点
        // animation: eason 0.3s linear infinite;//infinite无限循环 linear匀速
        // animation-delay: 5s;//动画延迟
        // transform: scale(0) rotate(360deg);//缩放比例、旋转角度
        // transform: translate(100px);//平移
        // transform: translateY(100px);//y轴平移
        // transform: translate(100px,100px);//45度角
        // transform: skew(30deg);//倾斜角度
        // @keyframes  eason{
        //     from{}
        //     to{}
        // }
        // @keyframes myFrame{
		// 	0%{}
		// 	30%{}
		// 	100%{}
		// }

        // *{//通配符，代表网页中的所有标签
        //     margin: 0;//清除外边距
        //     padding: 0;//清除内边距
        // }
        // li{
        //     list-style: none;//去掉小圆点
        // }
        // button{
        //     border: none;//去掉边框
        //     outline: none;//轮廓消失
        // }
        // table{
		// 	border-collapse: collapse;/*合并表格边框*/
        // }
        // textarea{
        //     resize: none;//大小缩放，不可拉伸
        // }
		      
    }
</style>