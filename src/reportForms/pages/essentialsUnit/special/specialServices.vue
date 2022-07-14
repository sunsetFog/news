<template>
    <div class="specialServices">
        <ul>
            <li v-for="(item, index) in comic_list" @click="appleWay(item, index)">
                <div class="atmosphere">
                    <div>
                        <img :src="item.icon"/>
                    </div>
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
                { title: '全部专题', icon: 'u88', path: '/essentials/homePage' },
                { title: '服装专题', icon: 'u88', path: '/essentials/classify' },
                { title: '餐厨专题', icon: 'u88', path: '/essentials/special' },
                { title: '配件专题', icon: 'u88', path: '/essentials/customer' }
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
    height: 90px;
    background: #fff;
    border-bottom: 1px solid @color_edge;
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        li {
            width: 18%;
            height: 100%;
            float: left;
            .atmosphere {
                width: 100%;
                height: 63px;
                display: flex;
                align-items: center;
                justify-content: center;
                div {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: @color_qianqing;
                    img {
                        width: 26px;
                        height: 22px;
                    }
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


