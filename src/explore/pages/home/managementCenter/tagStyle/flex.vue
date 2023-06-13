<template>
    <section id="flex-index">
        <!-- 问题：高为百分比时，文字垂直居中？     line-height: 100%;和字体大小一样大，不能用 -->
        <LineTextLine>1.flex---盒子和文字垂直居中---好用</LineTextLine>
        <div class="vertical-center">
            文字垂直居中
            <p></p>
        </div>

        <LineTextLine>1.定位---盒子垂直居中</LineTextLine>
        <div class="pen-scenery">
            <p></p>
        </div>

        <LineTextLine>1.高为百分比时，display:table-cell文字垂直居中</LineTextLine>
        <div class="height-percentage">
            <span>文字垂直居中</span>
        </div>

        <LineTextLine>2.行和列</LineTextLine>
        <div class="list">
            <div class="list-cell02"></div>
            <div class="list-cell02"></div>
            <div class="list-cell02"></div>
        </div>

        <LineTextLine>3.等比伸缩</LineTextLine>
        <div class="grid">
            <div class="grid-cell03">1/3</div>
            <div class="grid-cell03">1/3</div>
            <div class="grid-cell03">1/3</div>
        </div>

        <LineTextLine>4.百分比布局</LineTextLine>
        <div class="percentage">
            <div class="percentage-cell04">5/10</div>
            <div class="percentage-cell04">4/10</div>
            <div class="percentage-cell04">1/10</div>
        </div>

        <LineTextLine>5.水平间隔:用margin分配剩余空间---大盒子固定宽，好用</LineTextLine>
        <div class="format">
            <div class="format-cell05">5/10</div>
            <div class="format-cell05">4/10</div>
            <div class="format-cell05">1/10</div>
        </div>

        <LineTextLine>6.流式布局---水平换行</LineTextLine>
        <div class="flowing">
            <div class="flowing-cell06"></div>
            <div class="flowing-cell06"></div>
            <div class="flowing-cell06"></div>
            <div class="flowing-cell06"></div>
            <div class="flowing-cell06"></div>
        </div>
        <!--
            ---好用
            flex: 1;某盒子划分剩余空间--（兄弟盒子中，只有一个盒子加flex: 1;）
            flex: 1;  flex: 2; flex: 3;按照倍数划分

            剩余空间分配相关属性
            flex 属性包括了 flex-basis、 flex-grow、flex-shrink
            flex-basis 用来定义子元素的默认宽或高（高需要设置flex-direction）----flex-basis: 80px;
            flex-grow 用来指定父容器多余空间的分配比率，默认值为0
            flex-shrink 用来指定父容器空间不够时子元素的缩小比例，默认为1，0不压缩
         -->
         <LineTextLine>7.高---划分剩余空间---大盒子固定高</LineTextLine>
        <div class="surplus01">
            <div class="surplus-cell17"></div>
            <div class="surplus-cell27"></div>
            <div class="surplus-cell37"></div>
        </div>

        <LineTextLine>7.宽---划分剩余空间---大盒子固定宽</LineTextLine>
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

    .list {
        display: flex;
        -flex-direction: row;// 行---默认，可以不写
        flex-direction: column;// 列
        .list-cell02 {
            // flex: 0 0 30%; //这个与flex-direction: column;冲突
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

    .grid {
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

    .percentage {
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

    .format {
        display: flex;
        justify-content: space-around; //margin左右间隔
        -justify-content: space-between;//中间隔
        background: white;
        .format-cell05 {
            flex: 0 0 26%;
            height: 30px;
            background: #333B4B;
        }
    }

    .flowing {
        width: 100%;
        min-height: 150px;
        display: flex;
        // flex-flow: row wrap; // flex-direction: row;和flex-wrap: wrap;的简写
        flex-wrap: wrap; // 水平换行
        background: yellowgreen;
        .flowing-cell06 {
            flex: 0 0 42%;
            height: 40px;
            background: #eee;
            margin: 7.5px;
        }
    }

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

    .surplus02 {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;//行，默认
        .surplus-cell17 {
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
