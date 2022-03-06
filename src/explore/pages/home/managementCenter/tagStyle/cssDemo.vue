<template>
    <section id="css-demo">
        <h3>三角框框</h3>
        <div class="container">
            <div class="triangle"></div>
            <div class="luminescence"></div>
        </div>
        <h3>好看的滚动条</h3>
        <div class="scroll-box">
            <el-scrollbar style="width:100%;height:100%;">
                <ul>
                    <li v-for="(item,index) in 20" :key="index">{{item}}</li>
                </ul>
            </el-scrollbar>
        </div>
        <h3>清除浮动</h3>
        <!-- 
            为啥要清楚浮动？
            因为float的浮动无法撑起父级元素宽高
           
            解决办法1：在最后一个li元素后面加上一个div，加上clear: both;样式
            解决办法2：父级元素加样式overflow: hidden;
            解决办法3：li元素加样式display:inline-block;
         -->
        <div class="pen-float">
            <li v-for="(item,index) in ['a','b','c','d','e']"></li>
            <!-- 第一种 -->
            <!-- <div style="clear: both;"></div> -->
        </div>
        <h3>px,rem,em</h3>
        <!-- 
            px相对屏幕分辨率  固定单位
            em相对父元素font-size： 1em=(父元素font-size)px   默认值16px  4em*(父元素font-size)=？px
            rem相对html的font-size: 1rem=(html的font-size)px  默认值16px  4rem*(html的font-size)=？px
         -->
        <div class="pen-cat">
            <div></div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'cssDemo'
}
</script>

<style lang="less" scoped>
#css-demo {
    color: #fff;
    .container {
        width: 400px;
        margin-top: 20px;
        position: relative;
        .triangle {
            width: 10px;
            height: 10px;
            border-left: 1px solid #C9CACB;
            border-top: 1px solid #bbbbbb;
            background: #586B8D;
            -webkit-transform: rotate(45deg); // 旋转角度
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            position: absolute;
            left: 22px;
            top: -5px;
            z-index: 2;
        }
        .luminescence {
            width: 400px;
            height: 100px;
            border: 1px solid #C9CACB;
            box-shadow: 1px 1px 10px 0 #C9CACB; // 阴影
            background: #586B8D;
        }
    }

    .scroll-box {
        width: 300px;
        height: 200px;
        border: 1px solid #1685B0;
        background: rgba(22,133,176,0.4);
        margin-top: 20px;
        ul {
            li {
                width: 100%;
                height: 30px;
                line-height: 30px;
                text-align: center;
                color: #fff;
            }
        }
        /deep/ .el-scrollbar__wrap{ // /deep/加高样式层级，或放置全局
            overflow-x: hidden;
        }
    }

    .pen-float {
        width: 100%;
        -height: 100px; // 别写死高度，因为li元素数量是动态的，数量不限
        overflow: hidden; // 第二种给父元素这个
        background: #F0F3F5;
        li {
            width: 48%;
            height: 50px;
            border-radius: 5px;
            margin-bottom: 6px;
            background: #FFFFFF;
            list-style: none;
        }
        li:nth-of-type(odd) { // 奇数行
            float: left;
        }
        li:nth-of-type(even) { // 偶数行
            float: right;
        }
    }
    .pen-cat {
        width: 100px;
        height: 100px;
        font-size: 12px;
        background: slateblue;
        div {
            width: 4em;// 1em = 12px   4*12=48
            height: 100px;
            background: snow;
        }
    }
}
</style>
