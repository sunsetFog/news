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

import firstFloor from './modules/firstFloor'

export default new Router({
    // mode: 'history',//去掉路由路径#    默认mode: 'hash'  ---最好别加，apache服务器或其他服务器，部署项目时有刷新404问题
    // base: '/root/', // 添加根目录,对应服务器部署子目录 ---最好别加
    routes: firstFloor
    // [
    //     { path: '*', name: 'error', meta: { title: '找不到该页', key: 404 }, component: resolve => require(['@/reportForms/pages/404.vue'], resolve) },
    //     { path: '/home', name: 'home', meta: { title: '首页', key: 1 }, component: resolve => require(['@/reportForms/pages/home'], resolve) },
    //     { path: '/priceManage/index', name: 'priceManage', meta: { title: '价格地图', key: 1 }, component: resolve => require(['@/reportForms/pages/priceManage/index'], resolve) },
    //     { path: '/priceManage/PriceAnalysis', name: 'PriceAnalysis', meta: { title: '价格详情', key: 1 }, component: resolve => require(['@/reportForms/pages/priceManage/PriceAnalysis'], resolve) },
    //     { path: '/receivable/AR', name: 'AR', meta: { title: '应收账款', key: 1 }, component: resolve => require(['@/reportForms/pages/receivable/AR'], resolve) },
    //     { path: '/luckDraw/index', name: 'luckDraw', meta: { title: '抽奖活动', key: 1 }, component: resolve => require(['@/reportForms/pages/luckDraw/index'], resolve) },
    //     { path: '/luckDraw/index2', name: 'luckDraw2', meta: { title: '抽奖活动2', key: 1 }, component: resolve => require(['@/reportForms/pages/luckDraw/index2'], resolve) },
    //     { path: '/loadmore/index', name: 'loadmore', meta: { title: '下拉刷新', key: 1 }, component: resolve => require(['@/reportForms/pages/loadmore/index'], resolve) },
    //     { path: '/privacy/index', name: 'privacy', meta: { title: '隐私政策', key: 1 }, component: resolve => require(['@/reportForms/pages/privacy/index'], resolve) },
    //     { path: '/searchFor/index', name: 'searchFor', meta: { title: '搜索页', key: 1 }, component: resolve => require(['@/reportForms/pages/searchFor/index'], resolve) },
    //     { path: '/customAvatar/index', name: 'customAvatar', meta: { title: '裁切头像', key: 1 }, component: resolve => require(['@/reportForms/pages/customAvatar/index'], resolve) },
    //     { path: '/liveBroadcast/index', name: 'liveBroadcast', meta: { title: '直播间', key: 1 }, component: resolve => require(['@/reportForms/pages/liveBroadcast/index'], resolve) },


    //     { path: '/login', name: 'login', meta: { title: '登录', key: 1 }, component: resolve => require(['@/reportForms/pages/login'], resolve) },
    //     { path: '/registerUnit/index', name: 'register', meta: { title: '注册', key: 1 }, component: resolve => require(['@/reportForms/pages/registerUnit/index'], resolve) },
    //     { path: '/forgetPasswordUnit/index', name: 'forgetPassword', meta: { title: '忘记密码', key: 1 }, component: resolve => require(['@/reportForms/pages/forgetPasswordUnit/index'], resolve) },
    //     { path: '/essentials', name: 'essentials', meta: { title: '主页', key: 1 }, component: resolve => require(['@/reportForms/pages/essentialsUnit/index'], resolve),
    //         children: [
    //             { path: '/essentialsUnit/homePage/index', name: 'homePage', meta: { title: '首页', key: 0 }, component: resolve => require(['@/reportForms/pages/essentialsUnit/homePage/index'], resolve) },
    //             { path: '/essentialsUnit/classify/index', name: 'classify', meta: { title: '分类', key: 1 }, component: resolve => require(['@/reportForms/pages/essentialsUnit/classify/index'], resolve) },
    //             { path: '/essentialsUnit/special/index', name: 'special', meta: { title: '专题', key: 2 }, component: resolve => require(['@/reportForms/pages/essentialsUnit/special/index'], resolve) },
    //             { path: '/essentialsUnit/customer/index', name: 'customer', meta: { title: '我的', key: 3 }, component: resolve => require(['@/reportForms/pages/essentialsUnit/customer/index'], resolve) },
    //             { path: '/', redirect: '/essentialsUnit/homePage/index' }
    //         ]
    //     },
    //     { path: '/personalCenterUnit/index', name: 'personalCenter', meta: { title: '个人中心', key: 1 }, component: resolve => require(['@/reportForms/pages/personalCenterUnit/index'], resolve) },
    //     { path: '/personalCenterUnit/personalInfo/index', name: 'personalInfo', meta: { title: '个人信息', key: 1 }, component: resolve => require(['@/reportForms/pages/personalCenterUnit/personalInfo/index'], resolve) },
    //     { path: '/personalCenterUnit/changePassword/index', name: 'changePassword', meta: { title: '修改密码', key: 1 }, component: resolve => require(['@/reportForms/pages/personalCenterUnit/changePassword/index'], resolve) },
    //     { path: '/personalCenterUnit/changePhone/index', name: 'changePhone', meta: { title: '修改手机', key: 1 }, component: resolve => require(['@/reportForms/pages/personalCenterUnit/changePhone/index'], resolve) },
    //     { path: '/personalCenterUnit/memberCenter/index', name: 'memberCenter', meta: { title: '会员中心', key: 1 }, component: resolve => require(['@/reportForms/pages/personalCenterUnit/memberCenter/index'], resolve) },
    //     { path: '/integralUnit/index', name: 'integral', meta: { title: '我的积分', key: 1 }, component: resolve => require(['@/reportForms/pages/integralUnit/index'], resolve) },
    //     { path: '/couponUnit/index', name: 'coupon', meta: { title: '我的优惠券', key: 1 }, component: resolve => require(['@/reportForms/pages/couponUnit/index'], resolve) },
    //     { path: '/couponUnit/couponDetails/index', name: 'couponDetails', meta: { title: '优惠券详情', key: 1 }, component: resolve => require(['@/reportForms/pages/couponUnit/couponDetails/index'], resolve) },
    //     { path: '/followUnit/index', name: 'follow', meta: { title: '关注', key: 1 }, component: resolve => require(['@/reportForms/pages/followUnit/index'], resolve) },
    //     { path: '/followUnit/followDetails/index', name: 'followDetails', meta: { title: '关注详情', key: 1 }, component: resolve => require(['@/reportForms/pages/followUnit/followDetails/index'], resolve) },
    //     { path: '/orderUnit/index', name: 'order', meta: { title: '订单', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/index'], resolve) },
    //     { path: '/orderUnit/payOrder/index', name: 'payOrder', meta: { title: '支付订单', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/payOrder/index'], resolve) },
    //     { path: '/orderUnit/paySuccess/index', name: 'paySuccess', meta: { title: '支付成功', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/paySuccess/index'], resolve) },
    //     { path: '/orderUnit/logistics/index', name: 'logistics', meta: { title: '订单跟踪', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/logistics/index'], resolve) },
    //     { path: '/orderUnit/shoppingCart/index', name: 'shoppingCart', meta: { title: '购物车', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/shoppingCart/index'], resolve) },
    //     { path: '/orderUnit/fillOrder/index', name: 'fillOrder', meta: { title: '填写订单', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/fillOrder/index'], resolve) },
    //     { path: '/orderUnit/address/index', name: 'address', meta: { title: '地址管理', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/address/index'], resolve) },
    //     { path: '/orderUnit/address/addressEdit/index', name: 'addressEdit', meta: { title: '新增收货人', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/address/addressEdit/index'], resolve) },
    //     { path: '/orderUnit/evaluate/addEvaluate/index', name: 'addEvaluate', meta: { title: '发布评价', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/evaluate/addEvaluate/index'], resolve) },
    //     { path: '/orderUnit/evaluate/evaluateDetails/index', name: 'evaluateDetails', meta: { title: '评价详情', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/evaluate/evaluateDetails/index'], resolve) },
    //     { path: '/orderUnit/evaluate/evaluateList/index', name: 'evaluateList', meta: { title: '我的评价', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/evaluate/evaluateList/index'], resolve) },
    //     { path: '/orderUnit/afterSales/afterSalesList/index', name: 'afterSalesList', meta: { title: '退换售后', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/afterSales/afterSalesList/index'], resolve) },
    //     { path: '/orderUnit/afterSales/applyReturn/index', name: 'applyReturn', meta: { title: '申请退货', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/afterSales/applyReturn/index'], resolve) },
    //     { path: '/orderUnit/afterSales/applyReturnDetails/index', name: 'applyReturnDetails', meta: { title: '记录详情', key: 1 }, component: resolve => require(['@/reportForms/pages/orderUnit/afterSales/applyReturnDetails/index'], resolve) },
    //     { path: '/collectionUnit/index', name: 'collection', meta: { title: '我的收藏', key: 1 }, component: resolve => require(['@/reportForms/pages/collectionUnit/index'], resolve) },
    //     { path: '/productDetails/index', name: 'productDetails', meta: { title: '商品信息', key: 1 }, component: resolve => require(['@/reportForms/pages/productDetails/index'], resolve) },
    //     { path: '/subjectDetails/index', name: 'subjectDetails', meta: { title: '专题详情', key: 1 }, component: resolve => require(['@/reportForms/pages/subjectDetails/index'], resolve) },
    //     { path: '/topicDetails/index', name: 'topicDetails', meta: { title: '参与话题', key: 1 }, component: resolve => require(['@/reportForms/pages/topicDetails/index'], resolve) },
    //     { path: '/footprintUnit/index', name: 'footprintUnit', meta: { title: '我的足迹', key: 1 }, component: resolve => require(['@/reportForms/pages/footprintUnit/index'], resolve) },
    //     { path: '/serviceCenter/index', name: 'serviceCenter', meta: { title: '服务中心', key: 1 }, component: resolve => require(['@/reportForms/pages/serviceCenter/index'], resolve) },
    //     { path: '/serviceCenter/problem/index', name: 'problem', meta: { title: '问题详情', key: 1 }, component: resolve => require(['@/reportForms/pages/serviceCenter/problem/index'], resolve) },
    //     { path: '/systemSettings/index', name: 'systemSettings', meta: { title: '系统设置', key: 1 }, component: resolve => require(['@/reportForms/pages/systemSettings/index'], resolve) },
    //     { path: '/systemSettings/feedback/index', name: 'feedback', meta: { title: '意见反馈', key: 1 }, component: resolve => require(['@/reportForms/pages/systemSettings/feedback/index'], resolve) },
    //     { path: '/systemSettings/aboutUs/index', name: 'aboutUs', meta: { title: '关于我们', key: 1 }, component: resolve => require(['@/reportForms/pages/systemSettings/aboutUs/index'], resolve) },
    //     { path: '/systemSettings/versionDescription/index', name: 'versionDescription', meta: { title: '版本说明', key: 1 }, component: resolve => require(['@/reportForms/pages/systemSettings/versionDescription/index'], resolve) },
    //     { path: '/messageCenter/index', name: 'messageCenter', meta: { title: '消息中心', key: 1 }, component: resolve => require(['@/reportForms/pages/messageCenter/index'], resolve) },
    //     { path: '/searchUnit/index', name: 'searchUnit', meta: { title: '搜索', key: 1 }, component: resolve => require(['@/reportForms/pages/searchUnit/index'], resolve) },
    //     { path: '/searchUnit/searchProducts/index', name: 'searchProducts', meta: { title: '搜索商品', key: 1 }, component: resolve => require(['@/reportForms/pages/searchUnit/searchProducts/index'], resolve) },
    // ]
})
