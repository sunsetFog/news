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
                { title: '普通会员', icon: 'u2667', path: '/essentials/homePage' },
                { title: '黄金会员', icon: 'u2671', path: '/essentials/classify' },
                { title: '白金会员', icon: 'u2675', path: '/essentials/special' },
                { title: '钻石会员', icon: 'u2680', path: '/essentials/customer' }
            ]
        }
    },
    created() {
        for (let index = 0; index < this.comic_list.length; index++) {
            let item = this.comic_list[index];
            item.icon = require('@static/mall/memberCenter/' + item.icon + '.png');
        }
    }
}
</script>

<style lang="less" scoped>
.specialServices {
    width: 100%;
    height: 70px;
    background: #fff;
    padding: 0 20px;
    box-sizing: border-box;
    position: absolute;
    bottom: 37px;
    left: 0px;
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        li {
            width: 20%;
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


