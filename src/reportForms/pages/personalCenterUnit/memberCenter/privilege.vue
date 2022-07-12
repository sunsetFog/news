<template>
    <div class="privilege">
        <ul>
            <li v-for="(item, index) in comic_list" @click="appleWay(item, index)">
                <div>
                    <img :src="item.icon"/>
                </div>
                <span>{{item.title}}</span>
                <img v-if="item.active" class="u2692" src="@static/mall/memberCenter/u2692.png"/>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "privilege",
    data() {
        return {
            comic_list: [
                { title: '满免运费', icon: 'p16', path: '/essentials/homePage', active: false },
                { title: '签到奖励', icon: 'p17', path: '/essentials/classify', active: false },
                { title: '评价奖励', icon: 'p18', path: '/essentials/special', active: false },
                { title: '专享活动', icon: 'p19', path: '/essentials/customer', active: false },
                { title: '会员特价', icon: 'p20', path: '/essentials/special', active: true },
                { title: '生日礼包', icon: 'p21', path: '/essentials/customer', active: true }
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
.privilege {
    width: 100%;
    height: 245px;
    background: #fff;
    border-top: 1px solid @color_edge;
    ul {
        width: 100%;
        height: 100%;
        li {
            width: 33.3%;
            height: 50%;
            float: left;
            border-right: 1px solid @color_edge;
            border-bottom: 1px solid @color_edge;
            position: relative;
            div {
                width: 100%;
                height: 68%;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: 52px;
                    height: 52px;
                }
            }
            span {
                width: 100%;
                height: 15px;
                text-align: center;
                line-height: 15px;
                font-size: 13px;
                display: inline-block;
                margin-top: 5px;
            }
            .u2692 {
                width: 40px;
                height: 40px;
                position: absolute;
                right: 0px;
                top: 0px;
            }
        }
    }
}
</style>


