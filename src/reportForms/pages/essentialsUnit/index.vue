<template>
    <section id="essentialsUnit">
        <section class="headDesign">
            <img class="u13" src="@static/mall/essentials/u13.png" @click="magicWay"/>
            <img class="u17" src="@static/mall/essentials/u17.png" @click="magicWay"/>
            <span>夕阳商城</span>
            <img class="u14" src="@static/mall/essentials/u14.png" @click="searchWay"/>
            <img class="u15" src="@static/mall/essentials/u15.png" @click="comicWay"/>
            <div @click="comicWay">66</div>
        </section>

        <router-view></router-view>

        <section class="footerDesign">
            <ul>
                <li v-for="(item, index) in with_list" @click="appleWay(item, index)">
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
                { title: '首页', icon: 'u35', url: '', active: false, path: '/essentialsUnit/homePage/index' },
                { title: '分类', icon: 'u31', url: '', active: false, path: '/essentialsUnit/classify/index' },
                { title: '专题', icon: 'u27', url: '', active: false, path: '/essentialsUnit/special/index' },
                { title: '我的', icon: 'u23', url: '', active: false, path: '/essentialsUnit/customer/index' }
            ]
        }
    },
    // watch: {
    //     $route(to, from) {
    //         console.log("-$route-", to);
    //         this.beanWay(to.meta.key);
    //     }
    // },
    created() {
        for (let index = 0; index < this.with_list.length; index++) {
            let item = this.with_list[index];
            item.url = require('@static/mall/essentials/' + item.icon + '_selected.png');
            item.icon = require('@static/mall/essentials/' + item.icon + '.png');
            item.active = false;
            if(this.$route.path == item.path) {
                item.active = true;
            }
        }
    },
    methods: {
        searchWay() {
            this.$router.push({
                path: '/searchUnit/index'
            });
        },
        magicWay() {
            this.$router.push({
                path: '/messageCenter/index'
            });
        },
        // 购物车
        comicWay() {
            this.$router.push({
                path: '/orderUnit/shoppingCart/index'
            });
        },
        appleWay(item, index) {
            this.beanWay(index);
            
            if(this.$route.path == item.path) return;
            this.$router.push({
                path: item.path
            });
        },
        beanWay(index) {
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
    padding: 45px 0 50px 0;
    box-sizing: border-box;
    .headDesign {
        width: 100%;
        height: 45px;
        text-align: center;
        line-height: 45px;
        background: @color_beijing;
        position: fixed;
        left: 0px;
        top: 0px;
        z-index: 999;
        .u13 {
            height: 28px;
            position: absolute;
            left: 20px;
            top: 8px;
        }
        .u17 {
            height: 9px;
            position: absolute;
            left: 40px;
            top: 5px;
        }
        .u14 {
            height: 28px;
            position: absolute;
            right: 50px;
            top: 8px;
        }
        .u15 {
            height: 28px;
            position: absolute;
            right: 10px;
            top: 8px;
        }
        span {
            font-size: 15px;
        }
        div {
            width: 18px;
            height: 18px;
            text-align: center;
            line-height: 18px;
            color: #fff;
            font-size: 12px;
            background: url("~@static/mall/essentials/u16.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            right: 8px;
            top: 1px;
        }
    }
    .footerDesign {
        width: 100%;
        height: 50px;
        background: @color_beijing;
        border-top: 1px solid @color_edge;
        position: fixed;
        left: 0px;
        bottom: 0px;
        z-index: 100;
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


