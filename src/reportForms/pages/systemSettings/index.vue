<template>
<section id="systemSettings">
    <headDesign title="系统设置"></headDesign>
    <div :class="{'atmosphere': true, 'honey': index == 0}" v-for="(item,index) in cartoon_list" @click="comic(item)">
        <label>{{item.title}}</label>
        <span v-if="index == 0">10.00MB</span>
        <img class="u2637" src="@static/mall/order/u2637.png"/>
    </div>
    <div class="fabulous">
        <button @click="signOut">退出登录</button>
    </div>
</section>
</template>

<script>
export default {
    name: "systemSettings",
    data() {
        return {
            cartoon_list: [
                { title: '清除缓存', path: '' },
                { title: '意见反馈', path: '/feedback' },
                { title: '关于我们', path: '/aboutUs' },
                { title: '版本说明', path: '/versionDescription' },
                { title: '好评鼓励', path: '' }
            ]
        }
    },
    methods: {
        comic(item) {
            this.$router.push({
                path: item.path
            });
        },
        signOut() {
            this.$router.push({
                path: '/login'
            })
        }
    }
}
</script>

<style lang="less" scoped>
#systemSettings {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 60px 0 0 0;
    box-sizing: border-box;
    .atmosphere {
        width: 100%;
        height: 42px;
        background: #fff;
        border-bottom: 1px solid @color_edge;
        position: relative;
        label {
            font-size: 13px;
            position: absolute;
            left: 20px;
            top: 10px;
        }
        span {
            color: @color_huise;
            font-size: 13px;
            position: absolute;
            left: 270px;
            top: 11px;
        }
        .u2637 {
            height: 18px;
            position: absolute;
            right: 20px;
            top: 11px;
        }
    }
    .honey {
        border-top: 1px solid @color_edge;
    }
    .fabulous {
        width: 100%;
        height: 42px;
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        button {
            width: 296px;
            height: 100%;
            text-align: center;
            line-height: 42px;
            background: @color_lv;
            color: #fff;
            font-size: 14px;
            border-radius: 20px;
        }
    }
}
</style>
