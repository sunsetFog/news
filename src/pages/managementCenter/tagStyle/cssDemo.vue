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
            border-top: 1px solid #C9CACB;
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
}
</style>
