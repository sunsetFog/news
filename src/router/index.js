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
  mode: 'history',//路由路径#
  base: '/root/', // 添加根目录,对应服务器部署子目录
  routes: [
    { path: '*', name: 'error', meta: { title: '找不到该页',key: 404}, component: resolve => require(['@/pages/error.vue'], resolve) },
    { path: '/', name: 'home', meta: { title: '首页',key: 1}, component: resolve => require(['@/pages/home'], resolve) },
    { path: '/priceManage', name: 'priceManage', meta: { title: '价格地图',key: 1}, component: resolve => require(['@/pages/priceManage/priceManage'], resolve) },
    { path: '/PriceAnalysis', name: 'PriceAnalysis', meta: { title: '价格详情',key: 1}, component: resolve => require(['@/pages/priceManage/PriceAnalysis'], resolve) },
    { path: '/AR', name: 'AR', meta: { title: '应收账款',key: 1}, component: resolve => require(['@/pages/receivable/receivable'], resolve) },
  ]
})
