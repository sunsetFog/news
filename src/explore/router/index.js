import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/explore/pages/login/login'

Vue.use(Router)


//Error: Avoided redundant navigation to current location
//重复点菜单，路由重复跳转报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
  // return originalPush.call(this, location)
}






export default new Router({
  //  mode: 'history',//去掉路由路径#    默认mode: 'hash'  ---最好别加，apache服务器或其他服务器，部署项目时有刷新404问题
  // base: '/root/', // 添加根目录,对应服务器部署子目录 ---最好别加
  routes: [
    /* 
      路由配置要点:
      命名：最好path与文件夹路径一致
      path: '*'找不到路径， 相当于if的else判断
      path: '/'  默认路由
      children是用来搭建路由视图，要有{ path: '/', redirect: '/home' }  默认值：children里的重定向
      children里的path前没有/，表示path叠加，若加了/就不会叠加
      meta路由元信息，是用来存路由参数，比如title

      有children字段的，没有name字段和meta字段

      redirect重定：A找B要图片资源，B说C那才有，最后A改找C-------url的path变化了   302
      转发：A找B要图片资源，B没有，B去问C要到了，最后B发给了A------url的path没变  307


      前后端路由权限：
        1.不需要设权限，前端写一个路由数组，与后端无关
        2.需要设权限
          前端写另一个路由数组，有权限与无权限都有
          路由加属性permission: "caidan:shezhi", 与后端一个数组的permission字段做判断，得出有权限数组
          最后动态添加路由
    */
   { path: '/login', name: 'Login', meta: { title: '登陆' }, component: resolve => require(['@/explore/pages/login/index'], resolve) }

  ]
})
