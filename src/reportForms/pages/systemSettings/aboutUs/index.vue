<template>
    <section id="aboutUs">
        <headDesign title="关于我们"></headDesign>
        <div class="cartoon-apt">
            <img src="@static/mall/login/u2808.png"/>
        </div>
        <p class="jupiter">夕阳商城</p>
        <p class="saturn">客服热线：400-0000-000</p>
        <p class="saturn">客服邮箱：service@site.com</p>
        <p class="saturn">当前版本：v 4.0.0</p>
    </section>
</template>

<script>
export default {
    name: "aboutUs"
}
</script>

<style lang="less" scoped>
#aboutUs {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 20px 0 20px;
    box-sizing: border-box;
    .cartoon-apt {
        width: 100%;
        height: 96px;
        margin-top: 99px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            height: 100%;
        }
    }
    .jupiter {
        width: 100%;
        text-align: center;
        font-size: 23px;
        padding: 20px 0 35px 0;
        box-sizing: border-box;
    }
    .saturn {
        width: 100%;
        padding: 8px 0;
        box-sizing: border-box;
        font-size: 13px;
        color: @color_huise;
        text-align: center;
    }
}
</style>


