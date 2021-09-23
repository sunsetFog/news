import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/explore/pages/login/login'

Vue.use(Router)


//Error: Avoided redundant navigation to current location
//重复点菜单，路由重复跳转报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  // return originalPush.call(this, location).catch(err => err)
  return originalPush.call(this, location)
}



export default new Router({
  //  mode: 'history',//去掉路由路径#    默认mode: 'hash'  ---最好别加，apache服务器或其他服务器，部署项目时有刷新404问题
  // base: '/root/', // 添加根目录,对应服务器部署子目录 ---最好别加
  routes: [
    /* 
      路由配置要点:
      1.path: '*'找不到路径， 相当于if的else判断
      2.path: '/'  默认值
      3.children是用来搭建路由视图，包有{ path: '/', redirect: '/home' }  默认值：children里的重定向
      4.meta路由元信息，是用来存路由参数，比如title
    */
    { path: '*', name: 'error', meta: { title: '找不到该页',key: 404}, component: resolve => require(['@/explore/pages/404.vue'], resolve) },
    { path: '/noPermission', name: 'noPermission', meta: { title: '无权限访问该页',key: 401}, component: resolve => require(['@/explore/pages/401.vue'], resolve) },
    {
      path: '/', component: resolve => require(['@/explore/pages/home'], resolve),
      children: [
        { path: 'home', name: 'home', meta: { title: '首页',key: 0}, component: resolve => require(['@/explore/pages/homePage/index.vue'], resolve) },
        { path: 'lottery', meta: { title: '彩票',key: 1}, component: resolve => require(['@/explore/pages/lottery/lottery.vue'], resolve) },
        { path: 'realperson', name: 'realPerson', meta: { title: '真人',key: 2}, component: resolve => require(['@/explore/pages/realPerson/realPerson.vue'], resolve) },
        { path: 'sports', name: 'sports', meta: { title: '体育',key: 3}, component: resolve => require(['@/explore/pages/sports/sports.vue'], resolve) },
        { path: 'videogame', name: 'videoGame', meta: { title: '电玩',key: 4}, component: resolve => require(['@/explore/pages/videoGame/videoGame.vue'], resolve) },
        { path: 'agentsystem', name: 'agentSystem', meta: { title: '代理',key: 5}, component: resolve => require(['@/explore/pages/agentSystem/agentSystem.vue'], resolve) },
        {
          path: 'mcenter', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/managementCenter.vue'], resolve),
          children: [
            { path: 'crux', name: 'crux', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/crux.vue'], resolve) },

            { path: 'standard', name: 'standard', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/tagStyle/standard.vue'], resolve) },
            { path: 'css', name: 'css', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/tagStyle/css.vue'], resolve) },
            { path: 'tags', name: 'tags', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/tagStyle/tags.vue'], resolve) },
            { path: 'flex', name: 'flex', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/tagStyle/flex.vue'], resolve) },
            { path: 'cssDemo', name: 'cssDemo', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/tagStyle/cssDemo.vue'], resolve) },
            { path: 'table', name: 'table', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/tagStyle/table.vue'], resolve) },

            { path: 'learn1', name: 'learn1', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/javaScript/learn1.vue'], resolve) },
            { path: 'learn2', name: 'learn2', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/javaScript/learn2.vue'], resolve) },
            { path: 'learn3', name: 'learn3', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/javaScript/learn3.vue'], resolve) },
            { path: 'processing', name: 'processing', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/javaScript/processing.vue'], resolve) },
            { path: 'es6', name: 'es6', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/javaScript/es6.vue'], resolve) },
            { path: 'jsDemo', name: 'jsDemo', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/javaScript/jsDemo.vue'], resolve) },
            { path: 'research', name: 'research', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/javaScript/research.vue'], resolve) },

            { path: 'v_tag', name: 'v_tag', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/v_tag.vue'], resolve) },
            { path: 'modifier', name: 'modifier', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/modifier.vue'], resolve) },
            { path: 'lifecycle', name: 'lifeCycle', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/lifeCycle.vue'], resolve) },
            { path: 'vuex', name: 'vuex', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/vuex.vue'], resolve) },
            { path: 'router', name: 'router', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/router.vue'], resolve) },
            { path: 'class', name: 'class', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/class.vue'], resolve) },
            { path: 'quote', name: 'quote', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/quote.vue'], resolve) },
            { path: 'parent', name: 'parent', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/parent.vue'], resolve) },
            { path: 'public', name: 'public', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/public.vue'], resolve) },
            { path: 'watch', name: 'watch', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/watch.vue'], resolve) },
            { path: 'computed', name: 'computed', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/computed.vue'], resolve) },
            { path: 'filters', name: 'filters', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/filters.vue'], resolve) },
            { path: 'transition', name: 'transition', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/transition.vue'], resolve) },
            { path: 'refs', name: 'refs', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/refs.vue'], resolve) },
            { path: 'mock', name: 'mock', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/mock.vue'], resolve) },
            { path: 'cache', name: 'cache', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/cache.vue'], resolve) },
            { path: 'axios', name: 'axios', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/axios.vue'], resolve) },
            { path: 'relativePath', name: 'relativePath', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/relativePath.vue'], resolve) },
            { path: 'sunMixin', name: 'sunMixin', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/knowledge/sunMixin.vue'], resolve) },

            { path: 'download_ex', name: 'download_ex', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/download.vue'], resolve) },
            { path: 'copy', name: 'copy', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/copy.vue'], resolve) },
            { path: 'field', name: 'field', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/field.vue'], resolve) },
            { path: 'backtotop', name: 'backtotop', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/backToTop.vue'], resolve) },
            { path: 'pagination', name: 'pagination', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/pagination.vue'], resolve) },
            { path: 'upload', name: 'upload', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/upload.vue'], resolve) },
            { path: 'upload1', name: 'upload1', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/upload1.vue'], resolve) },
            { path: 'lazy', name: 'lazy', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/lazy.vue'], resolve) },
            { path: 'video', name: 'video', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/video.vue'], resolve) },
            { path: 'editor', name: 'editor', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/editor.vue'], resolve) },
            { path: 'vueqr', name: 'vueqr', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/vueqr.vue'], resolve) },
            { path: 'listener', name: 'listener', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/listener.vue'], resolve) },
            { path: 'websocket', name: 'websocket', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/websocket.vue'], resolve) },
            { path: 'window_tab', name: 'window_tab', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/windowTab.vue'], resolve) },
            { path: 'svgIcons', name: 'svgIcons', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/svgIcons.vue'], resolve) },
            { path: 'awesomeIcons', name: 'awesomeIcons', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/awesomeIcons.vue'], resolve) },
            { path: 'guide', name: 'guide', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/guide.vue'], resolve) },
            { path: 'screenfull', name: 'screenfull', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/effect/screenfull.vue'], resolve) },

            { path: 'echartsDemo1', name: 'echartsDemo1', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/reportForm/demo1.vue'], resolve) },

            { path: 'canvas', name: 'canvas', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/expand/canvas.vue'], resolve) },
            { path: 'base64', name: 'base64', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/expand/base64.vue'], resolve) },

            { path: 'talk1', name: 'talk1', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/managementCenter/talk/talk1.vue'], resolve) },
            { path: '/', redirect: '/mcenter/crux' }
          ]
        },
        { path: '/', redirect: '/home' }
      ]
    },
    { path: '/adaption', name: 'adaption', meta: { title: 'pc自适应',key: 404}, component: resolve => require(['@/explore/pages/managementCenter/effect/adaption.vue'], resolve) },
    { path: '/wave', name: 'wave', meta: { title: '水波',key: 404}, component: resolve => require(['@/explore/pages/managementCenter/effect/wave.vue'], resolve) },
    { path: '/login', name: 'Login', meta: { title: '登陆',key: 404}, component: resolve => require(['@/explore/pages/login/login'], resolve) },
    { path: '/line', name: 'Line', meta: { title: '线路检测',key: 404}, component: resolve => require(['@/explore/pages/login/line'], resolve) },
    { path: '/register', name: 'Register', meta: { title: '注册',key: 404}, component: resolve => require(['@/explore/pages/register/register'], resolve) },
    { path: '/game', name: 'game', meta: { title: '首页',key: 404}, component: resolve => require(['@/explore/pages/game/game.vue'], resolve) },
    { path: '/neutralgear', name: 'neutralGear', meta: { title: '加载中',key: 404}, component: resolve => require(['@/explore/pages/neutralGear/neutralGear'], resolve) },
    { path: '/download', name: 'download', meta: { title: '下载中心',key: 404}, component: resolve => require(['@/explore/pages/download/download'], resolve) },
    { path: '/attachmentUpload', name: 'attachmentUpload', meta: { title: '发票识别',key: 404}, component: resolve => require(['@/explore/pages/managementCenter/effect/attachmentUpload.vue'], resolve) },
    { path: '/packageTable', name: 'packageTable', meta: { title: 'packageJson说明',key: 404}, component: resolve => require(['@/explore/pages/managementCenter/effect/packageTable.vue'], resolve) },
    { path: '/openTab', name: 'openTab', meta: { title: 'openTab',key: 404}, component: resolve => require(['@/explore/pages/managementCenter/effect/openTab.vue'], resolve) },
    { path: '/priceManage', name: 'priceManage', meta: { title: '价格地图',key: 404}, component: resolve => require(['@/explore/pages/priceManage/index.vue'], resolve) }

  ]
})
