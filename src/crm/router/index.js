import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/crm/components/HelloWorld'

Vue.use(Router)

//Error: Avoided redundant navigation to current location
//重复点菜单，路由重复跳转报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  // return originalPush.call(this, location).catch(err => err)
  return originalPush.call(this, location)
}






/*
  study: 动态添加路由
  实例路由
  默认路由
  modules是模块化路由文件
 */
import firstFloor from './modules/firstFloor'
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: firstFloor
})

const router = createRouter()

// 退出登录调用重置路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
// 暴露
export default router

// 原来：实例路由并暴露
// export default new Router({
//   mode: 'history',//路由路径#
//   routes: [

//   ]
// })
