<template>
    <section id="noticeBar">
        <van-notice-bar :scrollable="false">
            <div slot="left-icon" class="venus">
                <img class="u76" src="@static/mall/homePage/u76.png"/>
            </div>
            <van-swipe
                vertical
                class="notice-swipe"
                :autoplay="3000"
                :show-indicators="false"
            >
                <van-swipe-item>明月直入，无心可猜。</van-swipe-item>
                <van-swipe-item>仙人抚我顶，结发受长生。</van-swipe-item>
                <van-swipe-item>今人不见古时月，今月曾经照古人。</van-swipe-item>
            </van-swipe>
        </van-notice-bar>
    </section>
</template>

<script>
export default {
    name: "noticeBar"
}
</script>

<style lang="less" scoped>
#noticeBar {
    width: 100%;
    height: 36px;
    overflow: hidden;
    border-bottom: 1px solid @color_edge;
    .venus {
        margin-top: 5px;
        margin-right: 15px;
        .u76 {
            width: 22px;
            height: 21px;
        }
    }
    .notice-swipe {
        height: 36px;
        line-height: 36px;
    }
    /deep/.van-notice-bar {
       height: 36px; 
    }
    /deep/.van-swipe-item {
        height: 36px;
        line-height: 36px;
    }
}
</style>


