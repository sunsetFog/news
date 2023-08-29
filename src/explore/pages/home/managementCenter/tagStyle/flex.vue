<template>
    <section id="flex-index">
        <!-- 问题：高为百分比时，文字垂直居中？     line-height: 100%;和字体大小一样大，不能用 -->
        <LineTextLine>方式1: flex，盒子垂直居中，文字垂直居中</LineTextLine>
        <div class="vertical-center">
            文字垂直居中
            <!-- <p></p> -->
        </div>

        <LineTextLine>方式2: 定位，盒子垂直居中</LineTextLine>
        <div class="pen-scenery">
            <p></p>
        </div>

        <LineTextLine>方式2: 文字垂直居中</LineTextLine>
        <div class="height-percentage">
            <span>文字垂直居中</span>
        </div>

        <LineTextLine>行和列，前提是固定宽或高</LineTextLine>
        <div class="atmosphere1">
            <div class="list-cell02"></div>
            <div class="list-cell02"></div>
            <div class="list-cell02"></div>
        </div>
        <br>
        <div class="atmosphere2">
            <div class="list-cell02"></div>
            <div class="list-cell02"></div>
            <div class="list-cell02"></div>
        </div>

        <LineTextLine>等比伸缩</LineTextLine>
        <div class="cartoon">
            <div class="grid-cell03">1/3</div>
            <div class="grid-cell03">1/3</div>
            <div class="grid-cell03">1/3</div>
        </div>

        <LineTextLine>百分比</LineTextLine>
        <div class="jupiter">
            <div class="percentage-cell04">5/10</div>
            <div class="percentage-cell04">4/10</div>
            <div class="percentage-cell04">1/10</div>
        </div>

        <LineTextLine>margin分配剩余空间，前提是父盒子固定宽</LineTextLine>
        <div class="saturn1">
            <div class="format-cell05"></div>
            <div class="format-cell05"></div>
            <div class="format-cell05"></div>
        </div>
        <br>
        <div class="saturn2">
            <div class="format-cell05"></div>
            <div class="format-cell05"></div>
            <div class="format-cell05"></div>
        </div>

        <LineTextLine>水平换行，流式布局</LineTextLine>
        <div class="mercury">
            <div class="flowing-cell06"></div>
            <div class="flowing-cell06"></div>
            <div class="flowing-cell06"></div>
            <div class="flowing-cell06"></div>
            <div class="flowing-cell06"></div>
        </div>
        <!--
            flex: 1; 划分剩余空间, 给两个兄弟就是两人均匀分剩余空间
            flex: 1;  flex: 2; flex: 3;按照倍数划分

            剩余空间分配相关属性
            flex 属性包括了 flex-basis、 flex-grow、flex-shrink
            flex-basis 默认宽或高（高需要设置flex-direction）----flex-basis: 80px;
            flex-grow 多余空间时，分配比率，默认值为0
            flex-shrink 空间不够时，子元素的缩小比例，默认为1，0不压缩
         -->
         <LineTextLine>高划分剩余空间，前提是父盒子固定高</LineTextLine>
        <div class="surplus01">
            <div class="surplus-cell17"></div>
            <div class="surplus-cell27"></div>
            <div class="surplus-cell37"></div>
        </div>

        <LineTextLine>宽划分剩余空间，前提是父盒子固定宽</LineTextLine>
        <div class="surplus02">
            <div class="surplus-cell17">恍恍惚惚</div>
            <div class="surplus-cell27"></div>
            <div class="surplus-cell37"></div>
        </div>
    </section>
</template>

<script>
// 详解CSS的Flex布局：https://www.zhihu.com/tardis/sogou/art/52280195
export default {
    name: 'flex-'
}
</script>

<style lang="less" scoped>
#flex-index {
    width: 100%;
    color: #fff;
    // ------------------------------方式1: flex，盒子和文字垂直居中------------------------------
    .vertical-center {
        width: 100%;
        height: 80px;
        background: #333;
        display: flex;
        align-items: center; // 垂直-对齐方式
        justify-content: center; // 水平-对齐方式
        p {
            width: 100px;
            height: 50px;
            background: blue;
        }
    }
    // ------------------------------方式2: 定位，盒子垂直居中------------------------------
    .pen-scenery {
        width: 100%;
        height: 80px;
        background: royalblue;
        position: relative;
        p {
            width: 100px;
            height: 50px;
            background: salmon;
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -25PX 0 0 -50px;//上，右，下，左   负值，宽的一半，高的一半
        }
    }
    // ------------------------------方式2: 文字垂直居中------------------------------
    .height-percentage {
        width: 200px;
        height: 50px;
        border: 1px solid red;
        display: table;
        span {
            display: table-cell; // 水平
            vertical-align: middle; // 垂直
        }
    }
    // ------------------------------行和列，前提是固定宽或高------------------------------
    .atmosphere1 {
        display: flex;
        -flex-direction: row;// 行---默认，可以不写；自带浮动并清除浮动
        .list-cell02 {
            height: 50px;// 固定高，宽变
        }
        .list-cell02:nth-of-type(1) {
            flex: 0 0 25%;
            background: yellowgreen;
        }
        .list-cell02:nth-of-type(2) {
            flex: 0 0 35%;
            background: violet;
        }
        .list-cell02:nth-of-type(3) {
            flex: 0 0 40%;
            background: brown;
        }
    }
    .atmosphere2 {
        display: flex;
        flex-direction: column;// 列  与flex: 0 0 30%;冲突
        .list-cell02 {
            width: 80%;// 固定宽，高变
            height: 30px;
        }
        .list-cell02:nth-of-type(1) {
            background: yellowgreen;
        }
        .list-cell02:nth-of-type(2) {
            background: violet;
        }
        .list-cell02:nth-of-type(3) {
            background: brown;
        }
    }
    // ------------------------------等比伸缩------------------------------
    .cartoon {
        display: flex;
        .grid-cell03 {
            flex: 1; // 等比伸缩   相对与flex: 0 0 33.33%;
        }
        .grid-cell03:nth-of-type(1) {
            background: yellowgreen;
        }
        .grid-cell03:nth-of-type(2) {
            background: violet;
        }
        .grid-cell03:nth-of-type(3) {
            background: brown;
        }
    }
    // ------------------------------百分比------------------------------
    .jupiter {
        display: flex;
        .percentage-cell04:nth-of-type(1) {
            flex: 0 0 50%;//宽50%
            background: yellowgreen;
        }
        .percentage-cell04:nth-of-type(2) {
            flex: 0 0 40%;//宽40%
            background: violet;
        }
        .percentage-cell04:nth-of-type(3) {
            flex: 0 0 10%;//宽10%
            background: brown;
        }
    }
    // ------------------------------margin分配剩余空间，前提是父盒子固定宽------------------------------
    .saturn1 {
        display: flex;
        justify-content: space-around; // 左右margin
        background: white;
        .format-cell05 {
            flex: 0 0 26%;
            height: 30px;
            background: #333B4B;
        }
    }
    .saturn2 {
        display: flex;
        justify-content: space-between;// 间隔margin
        background: white;
        .format-cell05 {
            flex: 0 0 26%;
            height: 30px;
            background: #333B4B;
        }
    }
    // ------------------------------水平换行，流式布局------------------------------
    .mercury {
        width: 100%;
        min-height: 150px;
        display: flex;
        // flex-flow: row wrap; // 等价于flex-direction: row;和flex-wrap: wrap;
        flex-wrap: wrap; // 水平换行，自带清除浮动
        background: yellowgreen;
        .flowing-cell06 {
            flex: 0 0 42%;
            height: 40px;
            background: #eee;
            margin: 7.5px;
        }
    }
    // ------------------------------高划分剩余空间，前提是父盒子固定高------------------------------
    .surplus01 {
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;//列
        .surplus-cell17 {
            width: 100%;
            height: 50px;
            background: #F56C6C;
        }
        .surplus-cell27 {
            width: 100%;
            flex: 1;//高划分剩余空间
            background: #67C23A;
        }
        .surplus-cell37 {
            width: 100%;
            height: 60px;
            background: #909399;
        }
    }
    // ------------------------------宽划分剩余空间，前提是父盒子固定宽------------------------------
    .surplus02 {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;//行，默认
        .surplus-cell17 {// 宽度未知，靠字体撑开；这点比calc函数好
            height: 50px;
            background: #F56C6C;
        }
        .surplus-cell27 {
            height: 50px;
            flex: 1;//宽划分剩余空间
            background: #67C23A;
        }
        .surplus-cell37 {
            width: 80px;
            height: 50px;
            background: #909399;
        }
    }
}
</style>
