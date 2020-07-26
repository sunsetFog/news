import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/pages/login/login'

Vue.use(Router)


//Error: Avoided redundant navigation to current location
//重复点菜单，路由重复跳转报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



export default new Router({
  mode: 'history',//路由路径#
  base: '/root/', // 添加根目录,对应服务器部署子目录
  routes: [
    {
      path: '/', component: resolve => require(['@/pages/home'], resolve),
      children: [
        { path: 'home', name: 'home', meta: { title: '首页',key: 0}, component: resolve => require(['@/pages/homePage/index.vue'], resolve) },
        { path: 'lottery', meta: { title: '彩票',key: 1}, component: resolve => require(['@/pages/lottery/lottery.vue'], resolve) },
        { path: 'realperson', name: 'realPerson', meta: { title: '真人',key: 2}, component: resolve => require(['@/pages/realPerson/realPerson.vue'], resolve) },
        { path: 'sports', name: 'sports', meta: { title: '体育',key: 3}, component: resolve => require(['@/pages/sports/sports.vue'], resolve) },
        { path: 'videogame', name: 'videoGame', meta: { title: '电玩',key: 4}, component: resolve => require(['@/pages/videoGame/videoGame.vue'], resolve) },
        { path: 'agentsystem', name: 'agentSystem', meta: { title: '代理',key: 5}, component: resolve => require(['@/pages/agentSystem/agentSystem.vue'], resolve) },
        {
          path: 'mcenter', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/managementCenter.vue'], resolve),
          children: [
            { path: 'crux', name: 'crux', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/crux.vue'], resolve) },

            { path: 'css', name: 'css', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/tagStyle/css.vue'], resolve) },
            { path: 'tags', name: 'tags', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/tagStyle/tags.vue'], resolve) },

            { path: 'data_type', name: 'data_type', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/javaScript/dataType.vue'], resolve) },
            { path: 'processing', name: 'processing', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/javaScript/processing.vue'], resolve) },

            { path: 'v_tag', name: 'v_tag', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/v_tag.vue'], resolve) },
            { path: 'modifier', name: 'modifier', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/modifier.vue'], resolve) },
            { path: 'lifecycle', name: 'lifeCycle', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/lifeCycle.vue'], resolve) },
            { path: 'vuex', name: 'vuex', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/vuex.vue'], resolve) },
            { path: 'ergodic', name: 'ergodic', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/ergodic.vue'], resolve) },
            { path: 'router', name: 'router', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/router.vue'], resolve) },
            { path: 'class', name: 'class', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/class.vue'], resolve) },
            { path: 'quote', name: 'quote', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/quote.vue'], resolve) },
            { path: 'parent', name: 'parent', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/parent.vue'], resolve) },
            { path: 'public', name: 'public', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/public.vue'], resolve) },
            { path: 'watch', name: 'watch', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/watch.vue'], resolve) },
            { path: 'computed', name: 'computed', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/computed.vue'], resolve) },
            { path: 'es6', name: 'es6', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/es6.vue'], resolve) },
            { path: 'filters', name: 'filters', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/filters.vue'], resolve) },
            { path: 'transition', name: 'transition', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/transition.vue'], resolve) },
            { path: 'refs', name: 'refs', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/refs.vue'], resolve) },
            { path: 'canvas', name: 'canvas', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/canvas.vue'], resolve) },
            { path: 'echarts', name: 'echarts', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/echarts.vue'], resolve) },
            { path: 'base64', name: 'base64', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/base64.vue'], resolve) },
            { path: 'mock', name: 'mock', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/mock.vue'], resolve) },
            { path: 'cache', name: 'cache', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/cache.vue'], resolve) },
            { path: 'axios', name: 'axios', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/knowledge/axios.vue'], resolve) },

            { path: 'download_ex', name: 'download_ex', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/effect/download.vue'], resolve) },
            { path: 'copy', name: 'copy', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/effect/copy.vue'], resolve) },
            { path: 'field', name: 'field', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/effect/field.vue'], resolve) },
            { path: 'backtotop', name: 'backtotop', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/effect/backToTop.vue'], resolve) },
            { path: 'pagination', name: 'pagination', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/effect/pagination.vue'], resolve) },
            { path: 'upload', name: 'upload', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/effect/upload.vue'], resolve) },
            { path: 'upload1', name: 'upload1', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/effect/upload1.vue'], resolve) },
            { path: 'lazy', name: 'lazy', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/effect/lazy.vue'], resolve) },
            { path: 'video', name: 'video', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/effect/video.vue'], resolve) },
            { path: 'editor', name: 'editor', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/effect/editor.vue'], resolve) },
            { path: 'vueqr', name: 'vueqr', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/effect/vueqr.vue'], resolve) },
            { path: 'listener', name: 'listener', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/effect/listener.vue'], resolve) },
            { path: 'websocket', name: 'websocket', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/effect/websocket.vue'], resolve) },

            { path: 'research', name: 'research', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/pages/managementCenter/expand/research.vue'], resolve) },
            { path: '/', redirect: '/mcenter/crux' }
          ]
        },
        { path: '/', redirect: '/home' }
      ]
    },
    { path: '/login', name: 'Login', meta: { title: '登陆',key: 404}, component: resolve => require(['@/pages/login/login'], resolve) },
    { path: '/line', name: 'Line', meta: { title: '线路检测',key: 404}, component: resolve => require(['@/pages/login/line'], resolve) },
    { path: '/register', name: 'Register', meta: { title: '注册',key: 404}, component: resolve => require(['@/pages/register/register'], resolve) },
    { path: '/game', name: 'game', meta: { title: '首页',key: 404}, component: resolve => require(['@/pages/game/game.vue'], resolve) },
    { path: '/neutralgear', name: 'neutralGear', meta: { title: '加载中',key: 404}, component: resolve => require(['@/pages/neutralGear/neutralGear'], resolve) },
    { path: '/download', name: 'download', meta: { title: '下载中心',key: 404}, component: resolve => require(['@/pages/download/download'], resolve) }
  ]
})
