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
                { title: '话题', icon: 'u60', path: '/essentials/homePage' },
                { title: '优选', icon: 'u65', path: '/essentials/classify' },
                { title: '特惠', icon: 'u69', path: '/essentials/special' },
                { title: '签到', icon: 'u73', path: '/essentials/customer' }
            ]
        }
    },
    created() {
        for (let index = 0; index < this.comic_list.length; index++) {
            let item = this.comic_list[index];
            item.icon = require('@static/mall/homePage/' + item.icon + '.png');
        }
    }
}
</script>

<style lang="less" scoped>
.specialServices {
    width: 100%;
    height: 70px;
    background: #fff;
    border-bottom: 1px solid @color_edge;
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        li {
            width: 16%;
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


