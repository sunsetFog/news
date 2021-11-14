export default [
    { path: '/login', name: 'Login', meta: { title: '登录'},component: resolve => require(['@/crm/pages/login'],resolve) },
    { path: '*', name: 'no-404', meta: { title: '404'},component: resolve => require(['@/crm/pages/404'],resolve) },
    { path: '/', name: 'defaultPath', meta: { title: '默认路由'},component: resolve => require(['@/crm/pages/defaultPath'],resolve) }
]