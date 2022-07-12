<template>
    <section id="couponDetails">
        <headDesign title="优惠券详情">
            <img class="summer" src="@static/mall/memberCenter/u2518.png"/>
        </headDesign>
        <div class="scenery">
            <img class="u3157" src="@static/mall/coupon/u3157.png"/>
            <label>新到</label>

            <p>全品类通用券</p>
            <p>￥10</p>
            <p>满100可用</p>
            <div>• 适用平台：全平台</div>
            <div>• 有效期至：2018-08-01</div>
            <div>• 详细说明：全场通用，不限条件，特殊商品除外。</div>
            <button>立即使用</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "couponDetails"
}
</script>

<style lang="less" scoped>
#couponDetails {
    width: 100%;
    min-height: 100%;
    background: @color_lv;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    .summer {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .scenery {
        width: 325px;
        height: 580px;
        background: url("~@static/mall/coupon/u3207.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
        padding: 20px 0 0 0;
        box-sizing: border-box;
        .u3157 {
            width: 57px;
            height: 57px;
            position: absolute;
            right: 0px;
            top: 0px;
        }
        label {
            font-size: 13px;
            color: #fff;
            transform: rotate(45deg);
            position: absolute;
            right: 6px;
            top: 10px;
        }
        p {
            padding: 8px 0;
            box-sizing: border-box;
            text-align: center;
            font-size: 13px;
        }
        p:nth-of-type(1) {
            font-size: 14px;
            font-weight: 600;
        }
        p:nth-of-type(2) {
            font-size: 25px;
            font-weight: 600;
        }
        div {
            padding: 10px 0 10px 15px;
            box-sizing: border-box;
            text-align: left;
            color: @color_huise;
            font-size: 13px;
        }
        div:nth-of-type(1) {
            margin-top: 80px;
        }
        button {
            width: 295px;
            height: 42px;
            background: @color_lv;
            border-radius: 20px;
            color: #fff;
            text-align: center;
            line-height: 42px;
            margin-top: 150px;
        }
    }
}
</style>


