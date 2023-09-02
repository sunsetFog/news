<template>
    <section id="css">
        <!--
            1.三种元素:
                行内元素：同一行显示,不能设宽高  例如 b,span,a,i,strong
                块元素：单独占一行，可以设宽高  例如div,p,h1-h6,table,ul-li,ol-li
                行内块元素：同一行显示,可以设宽高  例如img,input,button
            2.盒子模型: 内容content、内边距padding、边框border、外边距margin
            box-sizing: border-box;使得：
            设定的width宽 != 内容的width宽
            设定的width宽 = border边框 + padding内边距 + 内容的width
            设定的height高 != 内容的height高
            设定的height高 = border边框 + padding内边距 + 内容的height

            box-sizing: content-box;默认的，使得：
            设定的width宽 = 内容的width宽
            实际width宽 = border边框 + padding内边距 + 设定的width宽
            设定的height高 = 内容的height高
            实际height高 = border边框 + padding内边距 + 设定的height高



            4.引入css的三种方式
                行内式(行间式)：<div style=""></div>
			    内部式(内联式)：在head标签内使用<style></style>;
			    外部式(外链式)： <link rel="stylesheet" type="text/css" href="">
            5.浏览器私有属性      比如：  -webkit-transform: translate(100px);
            -moz-  指firefox
            -ms-  指IE
            -webkit-  指chrome、safari
            -o-  指Opera

            6.优先级(权重)
            CSS样式覆盖规则                         权值
            标签选择器                              1
            类选择器                                10
            ID选择器                                100
            行内式                                  1000
            内部式                                  2000
            伪元素                                  1
            伪类                                    10
            width: 45px !important;                 9999最大
            7.作用域
            嵌套时，外层是能找到的，用了外层才能用内层
        -->

        <LineTextLine>样式命名规范</LineTextLine>
        <br>
        1.用-：class="list-cell"
        <br>
        2.一个页面用一个id类，尽量有class类

        <br>
        小技巧：
        <br>
        用padding可以不写高
        <br>
        标签选择器能少写类名，要注意影响孙后代
        <LineTextLine>全局样式</LineTextLine>
        <LineTextLine>模块公用样式</LineTextLine>
        <div class="swan-unit">
            <button>二哈</button>
        </div>

    </section>
</template>

<script>
// CSS 选择器：https://www.runoob.com/cssref/css-selectors.html
export default {
    name: 'css'
}
</script>

<style lang="less" scoped>
    #css{
        color: #fff;
        text-align: left;
        // .box{
        //     &.add-ys{}// 嵌套样式
        //     &:nth-child(2){}
        // }

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

        // margin: 0px auto 0px auto;// div水平居中  简写: margin: 0 auto;
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
        // vertical-align: middle;// 垂直对齐（图片与文字对齐）两个子标签都加上这个


		// line-height: 200px;//文本垂直居中
		// letter-spacing: 10px;//字符间距
		// word-spacing: 20px;//单词间距
        // overflow: hidden;//溢出隐藏

		// overflow: scroll;//溢出出现滚动条
        // overflow-y: scroll;//y轴出现滚动条
        // overflow-x: scroll;//x轴出现滚动条

        // box-shadow: 1px 1px 10px 0 #C9CACB; // 阴影

		// text-indent: 30px;//首行缩进
        // white-space: nowrap;//文本强制不换行

        // word-break: normal; // 默认换行
        // word-break: break-all; // 允许在单词内换行
        // word-break: keep-all; // 只能在半角空格或连字符处换行

        // display: none;//元素消失
        // display: block;//元素出现

        // text-decoration: underline; 文字带下划线

        // border-radius: 10px;//圆角
        // cursor: pointer;//鼠标小手
        // cursor: not-allowed;// 鼠标禁用图标
        // text-shadow: 5px 5px 10px aqua;	//文本阴影   右、下、模糊度、颜色

        // zoom: 100%;  等于100%是原图、大于100%是放大、小于100%是缩小

        // @media only screen and (min-width: 300px) {// 媒体查询
        //     //样式
		// }
        // @media only screen and (max-width: 700px){
        //     //样式
		// }
        // 滤镜：饱和度和模糊
        // backdrop-filter: saturate(180%) blur(20px);

        .swan-unit {
            @import './swan.less';
            button {
                width: @erha-width;
            }
        }




    }
</style>
