<template>
    <section id="personalCenterUnit">
        <headDesign title="个人中心"></headDesign>
        <div class="cartoon">
            <img src="@static/mall/personalCenter/u2943.png"/>
            <span>Windir</span>
        </div>

        <div class="rainbow-apt"
            v-for="(item,index) in mercury_list"
            :style="{ marginTop: item.margin, borderTop: item.borderTop }"
            @click="appleWay(item,index)">
            <span class="venus">{{item.title}}</span>
            <span class="saturn">{{item.note}}</span>
            <img src="@static/mall/customer/u286.png"/>
        </div>
    </section>
</template>

<script>
export default {
    name: "personalCenterUnit",
    data() {
        let haha = '1px solid #D5D5D5'
        return {
            mercury_list: [
                { title: '个人信息', note: '', margin: '30px', borderTop: haha, path: '/personalInfo'},
                { title: '修改密码', note: '', margin: '', borderTop: '', path: '/changePassword'},
                { title: '修改手机', note: '180******3672', margin: '', borderTop: '', path: '/changePhone'},
                { title: '我的会员', note: '普通会员', margin: '20px', borderTop: haha, path: '/memberCenter'}
            ]
        }
    },
    methods: {
        appleWay(item, index) {
            this.$router.push({
                path: item.path
            });
        }
    }
}
</script>

<style lang="less" scoped>
#personalCenterUnit {
    width: 100%;
    height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .cartoon {
        width: 100%;
        height: 140px;
        position: relative;
        border-bottom: 1px solid @color_edge;
        background: #fff;
        img {
            width: 82px;
            height: 82px;
            position: absolute;
            left: 27px;
            top: 25px;
        }
        span {
            font-size: 14px;
            position: absolute;
            left: 132px;
            top: 58px;
        }
    }

    .rainbow-apt {
        width: 100%;
        height: 42px;
        border-bottom: 1px solid @color_edge;
        background: #fff;
        position: relative;
        .venus {
            font-size: 14px;
            position: absolute;
            left: 20px;
            top: 9px;
        }
        .saturn {
            height: 15px;
            line-height: 15px;
            display: inline-block;
            font-size: 12px;
            position: absolute;
            right: 42px;
            top: 12px;
        }
        img {
            height: 20px;
            position: absolute;
            right: 14px;
            top: 9px;
        }
    }
}
</style>


