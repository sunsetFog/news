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
    { path: '*', name: 'error', meta: { title: '找不到该页',key: 404}, component: resolve => require(['@/reportForms/pages/error.vue'], resolve) },
    { path: '/', name: 'home', meta: { title: '首页',key: 1}, component: resolve => require(['@/reportForms/pages/home'], resolve) },
    { path: '/priceManage', name: 'priceManage', meta: { title: '价格地图',key: 1}, component: resolve => require(['@/reportForms/pages/priceManage/priceManage'], resolve) },
    { path: '/PriceAnalysis', name: 'PriceAnalysis', meta: { title: '价格详情',key: 1}, component: resolve => require(['@/reportForms/pages/priceManage/PriceAnalysis'], resolve) },
    { path: '/AR', name: 'AR', meta: { title: '应收账款',key: 1}, component: resolve => require(['@/reportForms/pages/receivable/receivable'], resolve) },
    { path: '/luckDraw', name: 'luckDraw', meta: { title: '抽奖活动',key: 1}, component: resolve => require(['@/reportForms/pages/luckDraw/index'], resolve) }
  ]
})
