<template>
    <section id="followUnit">
        <headDesign title="Ta关注的品牌"></headDesign>
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
    name: "followUnit",
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
                path: "/followUnit/followDetails/index"
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
@import './sky.less';
#followUnit {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
}
</style>

