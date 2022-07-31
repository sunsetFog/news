<template>
    <div class="specialServices">
        <ul>
            <li v-for="(item, index) in comic_list" @click="appleWay(item, index)">
                <div>
                    <img :src="item.icon"/>
                </div>
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "specialServices",
    data() {
        return {
            comic_list: [
                { title: '我的订单', icon: 'u227', path: '/orderUnit/index?status=0' },
                { title: '待付款', icon: 'u233', path: '/orderUnit/index?status=1' },
                { title: '待收货', icon: 'u245', path: '/orderUnit/index?status=2' },
                { title: '待评价', icon: 'u252', path: '/orderUnit/evaluate/evaluateList/index' },
                { title: '售后服务', icon: 'u256', path: '/orderUnit/afterSales/afterSalesList/index' }
            ]
        }
    },
    created() {
        for (let index = 0; index < this.comic_list.length; index++) {
            let item = this.comic_list[index];
            item.icon = require('@static/mall/customer/' + item.icon + '.png');
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
.specialServices {
    width: 100%;
    height: 70px;
    background: #fff;
    border-top: 1px solid @color_edge;
    border-bottom: 1px solid @color_edge;
    margin-top: 12px;
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        li {
            width: 14%;
            height: 100%;
            float: left;
            div {
                width: 100%;
                height: 43px;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: 28px;
                    height: 28px;
                }
            }
            span {
                width: 100%;
                height: 15px;
                text-align: center;
                line-height: 15px;
                font-size: 13px;
                display: inline-block;
            }
        }
    }
}
</style>


