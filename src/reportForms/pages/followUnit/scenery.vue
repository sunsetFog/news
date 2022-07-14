<template>
    <section id="scenery">
        <div class="cartoon" v-for="(item, index) in jupiter_list" @click="pathWay()">
            <div class="shang-pin">
                <img class="u88" src="@static/mall/homePage/u88.png"/>
            </div>
            <span class="box1">Victoria's Secret</span>
            <span class="box2">国际著名内衣品牌</span>
            <span class="box3">美国</span>
            <span class="box4">1000</span>
            <img class="u2279" src="@static/mall/follow/u2279.png"/>
            <img class="u193" src="@static/mall/follow/u193.png"/>
            <button @click="rainWay(index)">
                <img v-if="!item.active" src="@static/mall/follow/u2283.png"/>
                <img v-if="item.active" src="@static/mall/follow/u2284.png"/>
                <span v-if="!item.active">关注</span>
                <span v-if="item.active">已关注</span>
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name: "scenery",
    data() {
        return {
            jupiter_list: [
                { active: false },
                { active: false }
            ]
        }
    },
    methods: {
        pathWay() {
            this.$router.push({
                path: "/followDetails"
            })
        },
        rainWay(index) {
            // for (let i = 0; i < this.jupiter_list.length; indiex++) {
            //     let item = this.jupiter_list[i];
            //     item.active = false;
            // }
            this.jupiter_list[index].active = true;
        }
    }
}
</script>

<style lang="less" scoped>
#scenery {
    width: 100%;
    height: 120px;
    .cartoon {
        width: 100%;
        height: 120px;
        background: #fff;
        margin: 10px 0;
        position: relative;
        .shang-pin {
            width: 82px;
            height: 82px;
            background: @color_qianqing;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 20px;
            bottom: 20px;
            .u88 {
                width: 40px;
                height: 31px;
            }
        }
        .box1 {
            font-size: 14px;
            position: absolute;
            left: 130px;
            top: 23px;
        }
        .box2 {
            font-size: 13px;
            position: absolute;
            left: 130px;
            top: 47px;
        }
        .box3 {
            font-size: 13px;
            color: @color_huise;
            position: absolute;
            left: 152px;
            top: 78px;
        }
        .box4 {
            font-size: 13px;
            color: @color_huise;
            position: absolute;
            left: 225px;
            top: 80px;
        }
        .u2279 {
            width: 13px;
            height: 19px;
            position: absolute;
            left: 130px;
            top: 78px;
        }
        .u193 {
            width: 26px;
            height: 22px;
            position: absolute;
            left: 190px;
            top: 77px;
        }
        button {
            width: 81px;
            height: 32px;
            line-height: 32px;
            background: @color_lv;
            font-size: 13px;
            color: #fff;
            text-align: center;
            padding: 0 0 0 20px;
            box-sizing: border-box;
            border-radius: 5px;
            position: absolute;
            right: 22px;
            top: 43px;
            img {
                width: 15px;
                height: 15px;
                position: absolute;
                left: 10px;
                top: 8px;
            }
        }
    }
}
</style>


