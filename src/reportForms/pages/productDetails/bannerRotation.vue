<template>
    <section id="bannerRotation">
        <van-swipe indicator-color="white" style="width: 100%;height: 100%;">
            <van-swipe-item>
                <div class="mei-you">
                    <img src="@static/mall/homePage/u40.png"/>
                </div>
            </van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </section>
</template>

<script>
export default {
    name: "bannerRotation"
}
</script>

<style lang="less" scoped>
#bannerRotation {
    width: 100%;
    height: 280px;
    background: @color_qianqing;
    .mei-you {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 143px;
            height: 114px;
        }
    }
}
</style>


