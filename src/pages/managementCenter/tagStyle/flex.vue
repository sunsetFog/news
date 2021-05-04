<template>
    <section id="flex-index">
        <hr>1.盒子和文字垂直居中</hr>
        <!-- 问题：高为百分比时，文字垂直居中？     line-height: 100%;和字体大小一样大，不能用 -->
        <div class="vertical-center">
            <!-- 答1.用弹性布局，使文字垂直居中 -->
            文字垂直居中
            <p>盒子垂直居中</p>
        </div>
        <div class="pen-scenery">
            <p>盒子垂直居中</p>
        </div>
        <!-- 答2.用display:table-cell，使文字垂直居中 -->
        <div class="height-percentage">
            <span>文字垂直居中</span>
        </div>
        <hr>2.是否浮动</hr>
        <div class="list">
            <div class="list-cell"></div>
            <div class="list-cell"></div>
            <div class="list-cell"></div>
        </div>
        <hr>3.网格等比布局</hr>
        <div class="Grid">
            <div class="Grid-cell">1/3</div>
            <div class="Grid-cell">1/3</div>
            <div class="Grid-cell">1/3</div>
        </div>
        <hr>4.百分比布局</hr>
        <div class="percentage">
            <div class="percentage-cell">5/10</div>
            <div class="percentage-cell">4/10</div>
            <div class="percentage-cell">1/10</div>
        </div>
        <hr>5.水平对齐布局</hr>
        <div class="format">
            <div class="format-cell">5/10</div>
            <div class="format-cell">4/10</div>
            <div class="format-cell">1/10</div>
        </div>
        <hr>6.流式布局</hr>
        <div class="flowing">
            <div class="flowing-cell"></div>
            <div class="flowing-cell"></div>
            <div class="flowing-cell"></div>
            <div class="flowing-cell"></div>
            <div class="flowing-cell"></div>
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
    color: white;

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
        -flex-direction: row; // 默认浮动，可以不写
        flex-direction: column;
        .list-cell {
            // flex: 0 0 30%; // 用flex-direction: column;不要这个
            height: 30px;
        }
        .list-cell:nth-of-type(1) {
            background: yellowgreen;
        }
        .list-cell:nth-of-type(2) {
            background: violet;
        }
        .list-cell:nth-of-type(3) {
            background: brown;
        }
    }

    .Grid {
        display: flex;
        .Grid-cell {
            flex: 1; // 等比伸缩   相对与flex: 0 0 33.33%;
        }
        .Grid-cell:nth-of-type(1) {
            background: yellowgreen;
        }
        .Grid-cell:nth-of-type(2) {
            background: violet;
        }
        .Grid-cell:nth-of-type(3) {
            background: brown;
        }
    }

    .percentage {
        display: flex;
        .percentage-cell:nth-of-type(1) {
            flex: 0 0 50%;
            background: yellowgreen;
        }
        .percentage-cell:nth-of-type(2) {
            flex: 0 0 40%;
            background: violet;
        }
        .percentage-cell:nth-of-type(3) {
            flex: 0 0 10%;
            background: brown;
        }
    }

    .format {
        display: flex;
        -justify-content: space-around; // 水平-对齐方式
        justify-content: space-between;
        background: white;
        .format-cell {
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
        flex-wrap: wrap; // 水平排不下就换行
        background: yellowgreen;
        .flowing-cell {
            flex: 0 0 42%;
            height: 40px;
            background: #eee;
            margin: 7.5px;
        }
    }
}
</style>
