<template>
    <div class="cartoon-apt">
        <ul>
            <li v-for="(item, index) in with_list" @click="appleWay(item, index)">
                <p>{{item.title}}</p>
                <p>{{item.value}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "cartoon",
    data() {
        return {
            with_list: [
                { title: '积分', value: 100, path: '/integralUnit/index' },
                { title: '优惠券', value: 100, path: '/couponUnit/index' },
                { title: '关注', value: 100, path: '/followUnit/index' }
            ],
        }
    },
    methods: {
        appleWay(item, index) {
            this.$router.push({
                path: item.path
            })
        }
    }
}
</script>

<style lang="less" scoped>
.cartoon-apt {
    width: 100%;
    height: 60px;
    background: #fff;
    border: 1px solid @color_edge;
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        li {
            width: 18%;
            height: 100%;
            float: left;
            padding: 5px 0 0 0;
            box-sizing: border-box;
            p {
                width: 100%;
                padding: 4px 0;
                box-sizing: border-box;
                font-size: 13px;
            }
            p:nth-of-type(1) {

            }
            p:nth-of-type(2) {
                font-size: 15px;
                color: @color_lv;
                font-weight: 600;
            }
        }
    }
}
</style>

