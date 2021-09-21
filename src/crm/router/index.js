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




import firstFloor from './modules/firstFloor'
import homeChildren from './modules/homeChildren'

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

export default router

export const asyncRouterMap = [
  { type: 'homeChildren', router: homeChildren }
]


// export default new Router({
//   mode: 'history',//路由路径#
//   routes: [
//     {path: '/home', component: resolve => require(['@/crm/pages/home'],resolve),//下面有children，所以这里不用name，不然会有黄色警告
//       children: [
//         { path: '/world/world', name: 'world', meta: { title: '首页'},component: resolve => require(['@/crm/pages/world/world'],resolve) },
//         { path: '/administrators/setton', name: 'setton', meta: { title: '原版el-table'},component: resolve => require(['@/crm/pages/administrators/setton'],resolve) },
//         { path: '/jurisdiction/role', name: 'role', meta: { title: '角色列表'},component: resolve => require(['@/crm/pages/jurisdiction/role'],resolve) },
//         { path: '/jurisdiction/menu', name: 'menu', meta: { title: '菜单列表'},component: resolve => require(['@/crm/pages/jurisdiction/menu'],resolve) },
//         { path: '/system/initial', name: 'initial', meta: { title: '网络设置'},component: resolve => require(['@/crm/pages/system/initial'],resolve) },
//         { path: '/administrators/detail', name: 'detail', meta: { title: '详情页'},component: resolve => require(['@/crm/pages/administrators/detail'],resolve) },
//         { path: '/', redirect: '/world/world' }
//       ]
//     },
    // { path: '/login', name: 'Login', meta: { title: '登录'},component: resolve => require(['@/crm/pages/login'],resolve) },
    // { path: '/', redirect: '/login' }
  

//   ]
// })
