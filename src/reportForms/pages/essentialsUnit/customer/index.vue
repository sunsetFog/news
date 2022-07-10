<template>
    <section id="customer">
        <div class="yong-hu">
            <img class="u208" src="@static/mall/customer/u208.png"/>
            <img class="u211" src="@static/mall/customer/u211.png"/>
            <span>customer</span>
            <button>黄金会员</button>
        </div>
        <div class="cartoon-apt">
            <ul>
                <li v-for="(item, index) in with_list">
                    <span>{{item.title}}</span>
                    <span>{{item.value}}</span>
                </li>
            </ul>
        </div>

        <specialServices></specialServices>

        <div class="rainbow-apt" v-for="(item,index) in mercury_list" :style="{ marginTop: item.margin }">
            <img :src="item.icon"/>
            <span class="venus">{{item.title}}</span>
            <span class="saturn">{{item.note}}</span>
            <img src="@static/mall/customer/u286.png"/>
        </div>
    </section>
</template>

<script>
import specialServices from "./specialServices";
export default {
    name: "customer",
    components: { specialServices },
    data() {
        return {
            with_list: [
                { title: '积分', value: 100 },
                { title: '优惠券', value: 100 },
                { title: '关注', value: 100 }
            ],
            mercury_list: [
                { title: '我的收藏', icon: 'u262', note: '', margin: '20px', path: ''},
                { title: '我的足迹', icon: 'u282', note: 10, margin: '15px', path: ''},
                { title: '我的评价', icon: 'u293', note: 10, margin: '', path: ''},
                { title: '地址管理', icon: 'u298', note: '', margin: '', path: ''},
                { title: '我的会员', icon: 'u305', note: '黄金会员', margin: '15px', path: ''},
                { title: '服务中心', icon: 'u313', note: '', margin: '', path: ''},
                { title: '系统设置', icon: 'u318', note: '', margin: '', path: ''}
            ]
        }
    },
    created() {
        for (let index = 0; index < this.mercury_list.length; index++) {
            let item = this.mercury_list[index];
            item.icon = require('@static/mall/customer/' + item.icon + '.png');
        }
    }
}
</script>

<style lang="less" scoped>
#customer {
    width: 100%;
    background: @color_beijing;
    padding: 0 0 15px 0;
    box-sizing: border-box;
    .yong-hu {
        width: 100%;
        height: 170px;
        background: #3F4552;
        position: relative;
        .u208 {
            width: 80px;
            height: 80px;
            position: absolute;
            left: 40px;
            top: 42px;
        }
        .u211 {
            height: 25px;
            position: absolute;
            right: 22px;
            top: 70px;
        }
        span {
            color: #FFFFFF;
            font-size: 13px;
            position: absolute;
            left: 158px;
            top: 58px;
        }
        button {
            width: 67px;
            height: 25px;
            border: 1px solid #D2D4D6;
            color: #FFFFFF;
            text-align: center;
            line-height: 22px;
            font-size: 13px;
            border-radius: 5px;
            position: absolute;
            left: 158px;
            top: 88px;
        }
    }
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
                span {
                    width: 100%;
                    height: 15px;
                    line-height: 15px;
                    margin: 4px 0;
                    display: inline-block;
                    font-size: 13px;
                }
                span:nth-of-type(1) {
                    margin-top: 10px;
                }
                span:nth-of-type(2) {
                    font-size: 15px;
                    color: @color_lv;
                    font-weight: 600;
                }
            }
        }
    }
    .rainbow-apt {
        width: 100%;
        height: 48px;
        border-top: 1px solid @color_edge;
        border-bottom: 1px solid @color_edge;
        background: #fff;
        position: relative;
        img:nth-of-type(1) {
            width: 28px;
            height: 28px;
            position: absolute;
            left: 20px;
            top: 9px;
        }
        .venus {
            font-size: 14px;
            position: absolute;
            left: 58px;
            top: 12px;
        }
        .saturn {
            height: 15px;
            line-height: 15px;
            display: inline-block;
            font-size: 12px;
            position: absolute;
            right: 42px;
            top: 14px;
        }
        img:nth-of-type(2) {
            height: 26px;
            position: absolute;
            right: 14px;
            top: 9px;
        }
    }
}
</style>


