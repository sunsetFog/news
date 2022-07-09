<template>
    <section id="customer">
        <div class="yong-hu">
            <img class="u208" src="@static/mall/customer/u208.png"/>
            <img class="u211" src="@static/mall/customer/u211.png"/>
            <span>customer</span>
            <button>黄金会员</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "customer"
}
</script>

<style lang="less" scoped>
#customer {
    width: 100%;
    .yong-hu {
        width: 100%;
        height: 170px;
        background: #3F4552;
        position: relative;
        .u208 {
            width: 80px;
            height: 80px;
            position: absolute;
            left: 40px;
            top: 42px;
        }
        .u211 {
            height: 25px;
            position: absolute;
            right: 22px;
            top: 70px;
        }
        span {
            color: #FFFFFF;
            font-size: 13px;
            position: absolute;
            left: 158px;
            top: 58px;
        }
        button {
            width: 67px;
            height: 25px;
            border: 1px solid #D2D4D6;
            color: #FFFFFF;
            text-align: center;
            line-height: 22px;
            font-size: 13px;
            border-radius: 5px;
            position: absolute;
            left: 158px;
            top: 88px;
        }
    }
}
</style>


