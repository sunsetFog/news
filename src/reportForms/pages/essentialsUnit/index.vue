<template>
    <section id="essentialsUnit">
        essentialsUnit

        <section class="footerDesign">
            <ul>
                <li v-for="(item, index) in with_list" @click="appleWay(index)">
                    <div>
                        <img v-if="!item.active" :src="item.icon"/>
                        <img v-else :src="item.url"/>
                    </div>
                    <span :class="{'to-active': item.active}">{{item.title}}</span>
                </li>
            </ul>
        </section>
    </section>
</template>

<script>
export default {
    name: "essentialsUnit",
    data() {
        return {
            with_list: [
                { title: '首页', icon: 'u35', url: '', active: false },
                { title: '分类', icon: 'u31', url: '', active: false },
                { title: '专题', icon: 'u27', url: '', active: false },
                { title: '我的', icon: 'u23', url: '', active: false }
            ]
        }
    },
    created() {
        for (let index = 0; index < this.with_list.length; index++) {
            let item = this.with_list[index];
            item.url = require('@static/mall/essentials/' + item.icon + '_selected.png');
            item.icon = require('@static/mall/essentials/' + item.icon + '.png');
        }
    },
    methods: {
        appleWay(index) {
            for (let i = 0; i < this.with_list.length; i++) {
                let item = this.with_list[i];
                item.active = false;
            }
            this.with_list[index].active = true;
        }
    }
}
</script>

<style lang="less" scoped>
#essentialsUnit {
    width: 100%;
    padding: 0 0 60px 0;
    box-sizing: border-box;
    .footerDesign {
        width: 100%;
        height: 50px;
        background: #F8F8F8;
        border-top: 1px solid @color_edge;
        position: fixed;
        left: 0px;
        bottom: 0px;
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
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        width: 20px;
                        height: 20px;
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
                .to-active {
                    color: @color_lv;
                }
            }
        }
    }
}
</style>


