<template>
    <section id="messageCenter">
        <headDesign title="消息中心"></headDesign>
        <div class="atmosphere" v-for="(item,index) in comic_list">
            <img class="u313" :src="item.icon"/>
            <span>{{item.title}}</span>
            <span>{{item.subtitle}}</span>
            <div v-if="item.num">{{item.num}}</div>
            <img class="u286" src="@static/mall/customer/u286.png"/>
        </div>
    </section>
</template>

<script>
export default {
    name: "messageCenter",
    data() {
        return {
            comic_list: [
                { title: '在线客服', subtitle: '查看与客服的沟通记录', num: '', icon: 'u313' },
                { title: '活动消息', subtitle: '你的地球日活动福利来了', num: '10', icon: 'u346' },
                { title: '服务消息', subtitle: '您有一张优惠券到账了', num: '10', icon: 'u362' },
                { title: '系统消息', subtitle: '秒杀专区下线公告', num: '10', icon: 'u363' }
            ]
        }
    },
    created() {
        for (let index = 0; index < this.comic_list.length; index++) {
            let item = this.comic_list[index];
            item.icon = require("@static/mall/messageCenter/" + item.icon + ".png");
        }
    }
}
</script>

<style lang="less" scoped>
#messageCenter {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .atmosphere {
        width: 100%;
        height: 72px;
        background: #fff;
        border-top: 1px solid @color_edge;
        border-bottom: 1px solid @color_edge;
        margin-top: 15px;
        position: relative;
        .u313 {
            width: 30px;
            height: 30px;
            position: absolute;
            left: 25px;
            top: 22px;
        }
        span {
            font-size: 13px;
            position: absolute;
            left: 66px;
        }
        span:nth-of-type(1) {
            font-size: 14px;
            top: 15px;
        }
        span:nth-of-type(2) {
            color: @color_huise;
            top: 41px;
        }
        div {
            width: 24px;
            height: 24px;
            text-align: center;
            line-height: 24px;
            background: @color_hong;
            color: #fff;
            border-radius: 50%;
            position: absolute;
            right: 42px;
            top: 22px;
        }
        .u286 {
            height: 18px;
            position: absolute;
            right: 20px;
            top: 26px;
        }
    }
}
</style>


