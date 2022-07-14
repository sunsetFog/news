import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


//Error: Avoided redundant navigation to current location
//重复点菜单，路由重复跳转报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    // return originalPush.call(this, location).catch(err => err)
    return originalPush.call(this, location)
}



export default new Router({
    // mode: 'history',//去掉路由路径#    默认mode: 'hash'  ---最好别加，apache服务器或其他服务器，部署项目时有刷新404问题
    // base: '/root/', // 添加根目录,对应服务器部署子目录 ---最好别加
    routes: [
        { path: '*', name: 'error', meta: { title: '找不到该页', key: 404 }, component: resolve => require(['@/reportForms/pages/error.vue'], resolve) },
        { path: '/', name: 'homeDefault', meta: { title: '首页', key: 1 }, component: resolve => require(['@/reportForms/pages/home'], resolve) },
        { path: '/home', name: 'home', meta: { title: '首页', key: 1 }, component: resolve => require(['@/reportForms/pages/home'], resolve) },
        { path: '/priceManage/priceManage', name: 'priceManage', meta: { title: '价格地图', key: 1 }, component: resolve => require(['@/reportForms/pages/priceManage/priceManage'], resolve) },
        { path: '/priceManage/PriceAnalysis', name: 'PriceAnalysis', meta: { title: '价格详情', key: 1 }, component: resolve => require(['@/reportForms/pages/priceManage/PriceAnalysis'], resolve) },
        { path: '/receivable/AR', name: 'AR', meta: { title: '应收账款', key: 1 }, component: resolve => require(['@/reportForms/pages/receivable/AR'], resolve) },
        { path: '/luckDraw', name: 'luckDraw', meta: { title: '抽奖活动', key: 1 }, component: resolve => require(['@/reportForms/pages/luckDraw/index'], resolve) },
        { path: '/luckDraw2', name: 'luckDraw2', meta: { title: '抽奖活动2', key: 1 }, component: resolve => require(['@/reportForms/pages/luckDraw/index2'], resolve) },
        { path: '/loadmore', name: 'loadmore', meta: { title: '下拉刷新', key: 1 }, component: resolve => require(['@/reportForms/pages/loadmore/index'], resolve) },
        { path: '/privacy', name: 'privacy', meta: { title: '隐私政策', key: 1 }, component: resolve => require(['@/reportForms/pages/privacy/index'], resolve) },
        { path: '/searchFor', name: 'searchFor', meta: { title: '搜索页', key: 1 }, component: resolve => require(['@/reportForms/pages/searchFor/index'], resolve) },
        { path: '/customAvatar', name: 'customAvatar', meta: { title: '裁切头像', key: 1 }, component: resolve => require(['@/reportForms/pages/customAvatar/index'], resolve) },
        { path: '/liveBroadcast', name: 'liveBroadcast', meta: { title: '直播间', key: 1 }, component: resolve => require(['@/reportForms/pages/liveBroadcast/index'], resolve) },


        { path: '/login', name: 'login', meta: { title: '登录', key: 1 }, component: resolve => require(['@/reportForms/pages/loginUnit/index'], resolve) },
        { path: '/register', name: 'register', meta: { title: '注册', key: 1 }, component: resolve => require(['@/reportForms/pages/registerUnit/index'], resolve) },
        { path: '/forgetPassword', name: 'forgetPassword', meta: { title: '忘记密码', key: 1 }, component: resolve => require(['@/reportForms/pages/forgetPasswordUnit/index'], resolve) },
        { path: '/essentials', name: 'essentials', meta: { title: '主页', key: 1 }, component: resolve => require(['@/reportForms/pages/essentialsUnit/index'], resolve),
            children: [
                { path: 'homePage', name: 'homePage', meta: { title: '首页', key: 0 }, component: resolve => require(['@/reportForms/pages/essentialsUnit/homePage/index'], resolve) },
                { path: 'classify', name: 'classify', meta: { title: '分类', key: 1 }, component: resolve => require(['@/reportForms/pages/essentialsUnit/classify/index'], resolve) },
                { path: 'special', name: 'special', meta: { title: '专题', key: 2 }, component: resolve => require(['@/reportForms/pages/essentialsUnit/special/index'], resolve) },
                { path: 'customer', name: 'customer', meta: { title: '我的', key: 3 }, component: resolve => require(['@/reportForms/pages/essentialsUnit/customer/index'], resolve) },
                { path: '/', redirect: '/essentials/homePage' }
            ]
        },
        { path: '/personalCenter', name: 'personalCenter', meta: { title: '个人中心', key: 1 }, component: resolve => require(['@/reportForms/pages/personalCenterUnit/index'], resolve) },
        { path: '/personalInfo', name: 'personalInfo', meta: { title: '个人信息', key: 1 }, component: resolve => require(['@/reportForms/pages/personalCenterUnit/personalInfo/index'], resolve) },
        { path: '/changePassword', name: 'changePassword', meta: { title: '修改密码', key: 1 }, component: resolve => require(['@/reportForms/pages/personalCenterUnit/changePassword/index'], resolve) },
        { path: '/changePhone', name: 'changePhone', meta: { title: '修改手机', key: 1 }, component: resolve => require(['@/reportForms/pages/personalCenterUnit/changePhone/index'], resolve) },
        { path: '/memberCenter', name: 'memberCenter', meta: { title: '会员中心', key: 1 }, component: resolve => require(['@/reportForms/pages/personalCenterUnit/memberCenter/index'], resolve) },
        { path: '/integral', name: 'integral', meta: { title: '我的积分', key: 1 }, component: resolve => require(['@/reportForms/pages/integralUnit/index'], resolve) },
        { path: '/coupon', name: 'coupon', meta: { title: '我的优惠券', key: 1 }, component: resolve => require(['@/reportForms/pages/couponUnit/index'], resolve) },
        { path: '/couponDetails', name: 'couponDetails', meta: { title: '优惠券详情', key: 1 }, component: resolve => require(['@/reportForms/pages/couponUnit/couponDetails/index'], resolve) },
        { path: '/follow', name: 'follow', meta: { title: '关注', key: 1 }, component: resolve => require(['@/reportForms/pages/followUnit/index'], resolve) },
        { path: '/followDetails', name: 'followDetails', meta: { title: '关注详情', key: 1 }, component: resolve => require(['@/reportForms/pages/followUnit/followDetails/index'], resolve) },
        { path: '/order', name: 'order', meta: { title: '订单', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/index'], resolve) },
    ]
})
