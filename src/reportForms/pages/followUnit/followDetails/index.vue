<template>
    <section id="followDetails">
        <headDesign title="Victoria's Secret">
            <img class="summer" src="@static/mall/follow/u1033.png"/>
        </headDesign>
        <div class="mercury">
            <img src="@static/mall/homePage/u40.png"/>
            <button>制造商直供</button>
        </div>
        <div class="cartoon" style="margin: 0;">
            <div class="shang-pin">
                <img class="u88" src="@static/mall/homePage/u88.png"/>
            </div>
            <span class="box1">Victoria's Secret</span>
            <span class="box2">国际著名内衣品牌</span>
            <span class="box3">美国</span>
            <span class="box4">1000</span>
            <img class="u2279" src="@static/mall/follow/u2279.png"/>
            <img class="u193" src="@static/mall/follow/u193.png"/>
            <button @click="rainWay()">
                <img v-if="!rainbow.active" src="@static/mall/follow/u2283.png"/>
                <img v-if="rainbow.active" src="@static/mall/follow/u2284.png"/>
                <span v-if="!rainbow.active">关注</span>
                <span v-if="rainbow.active">已关注</span>
            </button>
        </div>
        <div class="jupiter" :style="{height: bean}" :class="{'cosplay': !fabulous}">
            &nbsp;&nbsp;&nbsp;&nbsp;品牌故事：Victoria's Secret成立于20世纪70年代初，是美国最大的女性成衣零售店，也是领跑全球的最著名内衣品牌之一。它以性感美艳为主题的内衣吸引着大量的追随者，公司每分钟的内衣销量可以多达600多件。
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;维多利亚的秘密最初建立是为了方便男士为女士挑选内衣，希望借此环境消除男士的尴尬。如今她已发展为主旨是“魅力、美丽、时尚、浪漫”的风靡全球的内衣品牌，引人遐想的名字也给产品带来了无限的神秘与高贵感。
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;维多利亚的秘密的产品种类包括了女式内衣、睡衣、短裤、香水化妆品以及相关书籍等。自1995年起，维多利亚的秘密开始举行年度时尚秀，也借由性感的服饰、华丽的舞台效果而捧红了因具备姣好容貌和傲人身材的维密天使们。
        </div>
        <div class="saturn">
            <img v-if="!fabulous" @click="honey" src="@static/mall/follow/u2288.png"/>
            <img v-else @click="honey" src="@static/mall/follow/u2306.png"/>
        </div>

        <div class="comic">
            相关商品<span>2</span>
        </div>

        <fresh></fresh>
    </section>
</template>

<script>
import fresh from '@/reportForms/pages/essentialsUnit/homePage/fresh.vue';
export default {
    name: "followDetails",
    components: { fresh },
    data() {
        return {
            rainbow: {
                active: false
            },
            fabulous: false,
            bean: '80px'
        }
    },
    methods: {
        rainWay() {
            this.rainbow.active = !this.rainbow.active;
        },
        honey() {
            if (this.fabulous) {
                this.fabulous = false;
                this.bean = '80px';
            } else {
                this.fabulous = true;
                this.bean = 'auto';
            }
            
        }
    }
}
</script>

<style lang="less" scoped>
@import '../sky.less';
#followDetails {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .summer {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .mercury {
        width: 100%;
        height: 180px;
        background: @color_qianqing;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        img {
            width: 72px;
            height: 54px;
        }
        button {
            width: 82px;
            height: 28px;
            background: #737376;
            color: #ffffff;
            font-size: 12px;
            text-align: center;
            line-height: 28px;
            border-radius: 20px;
            position: absolute;
            right: 28px;
            bottom: 10px;
        }
    }
    .jupiter {
        width: 100%;
        background: #fff;
        border-top: 1px solid @color_edge;
        font-size: 12px;
        color: @color_huise;
        text-align: left;
    }
    .magic {
        /*单行：css文字溢出隐藏为三个点...*/
        overflow: hidden;
        text-overflow: ellipsis;// 显示省略符号 ... 来代表被修剪的文本。
        white-space: nowrap;//文本强制不换行 
    }
    .cosplay {
        /*多行：css文字溢出隐藏为三个点...*/
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;// 流体盒模型
        -webkit-line-clamp: 5;// 设置显示的行数
        -webkit-box-orient: vertical;// 垂直
    }
    .saturn {
        width: 100%;
        height: 40px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            height: 12px;
        }
    }
    .comic {
        width: 100%;
        height: 42px;
        text-align: left;
        line-height: 42px;
        color: @color_huise;
        background: #fff;
        font-size: 14px;
        padding: 0 0 0 20px;
        box-sizing: border-box;
        margin-top: 15px;
        span {
            margin-left: 10px;
        }
    }
}
</style>


