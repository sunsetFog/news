export default [
    // 使用动态路由，404路由要放最后
    { path: '*', name: 'error404', meta: { title: '找不到该页' }, component: resolve => require(['@/explore/pages/404.vue'], resolve) },
]