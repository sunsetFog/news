<template>
    <section id="summer">
        <div class="fabulous" v-for="(item,index) in 5" @click="appleWay">
            <div :class="{'comic': true, 'magic': tab_active != 0}">
                <p>￥10</p>
                <p>满100可用</p>
            </div>
            <span>全品类通用券</span>
            <span>适用平台：全平台</span>
            <span>有效期至：2018-08-01</span>
            <img v-if="tab_active == 0" class="u286" src="@static/mall/customer/u286.png"/>
            <img v-if="tab_active == 1" class="u3167" src="@static/mall/coupon/u3167.png"/>
            <img v-if="tab_active == 2" class="u3167" src="@static/mall/coupon/u3178.png"/>
            <img v-if="tab_active == 0" class="u3157" src="@static/mall/coupon/u3157.png"/>
            <label v-if="tab_active == 0">新到</label>
        </div>
    </section>
</template>

<script>
export default {
    name: "summer",
    props: {
        tab_active: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {

        }
    },
    methods: {
        appleWay() {
            if(this.tab_active != 0) return;
            this.$router.push({
                path: "/couponUnit/couponDetails/index"
            });
        }
    }
}
</script>

<style lang="less" scoped>
#summer {
    width: 100%;
    .fabulous {
        width: 100%;
        height: 110px;
        background: #fff;
        margin: 10px 0;
        position: relative;
        .comic {
            width: 145px;
            height: 100%;
            background: url("~@static/mall/coupon/u3148.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            left: 0px;
            top: 0px;
            padding: 18px 0 0 0;
            box-sizing: border-box;
            p {
                width: 100%;
                padding: 6px 0;
                box-sizing: border-box;
                color: #fff;
            }
            p:nth-of-type(1) {
                font-size: 20px;
                font-weight: 600;
            }
            p:nth-of-type(2) {
                font-size: 13px;
            }
        }
        .magic {
            background: url("~@static/mall/coupon/u3161.png");
        }
        span {
            position: absolute;
            left: 168px;
        }
        span:nth-of-type(1) {
            top: 15px;
            font-size: 14px;
            font-weight: 600;
        }
        span:nth-of-type(2) {
            top: 47px;
            color: @color_huise;
            font-size: 13px;
        }
        span:nth-of-type(3) {
            top: 76px;
            color: @color_huise;
            font-size: 13px;
        }
        .u286 {
            height: 20px;
            position: absolute;
            right: 26px;
            top: 44px;
        }
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
        .u3167 {
            width: 50px;
            height: 50px;
            position: absolute;
            right: 6px;
            bottom: 30px;
        }
    }
}
</style>


