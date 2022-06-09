export default [
    { path: '*', name: 'error404', meta: { title: '找不到该页' }, component: resolve => require(['@/explore/pages/404.vue'], resolve) },
    { path: '/', name: 'defaultPath', meta: { title: '默认路由' }, component: resolve => require(['@/explore/pages/defaultPath'], resolve) }
]