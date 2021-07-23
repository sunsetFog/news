export default [
    { path: '/login', name: 'Login', meta: { title: '登录'},component: resolve => require(['@/crm/pages/login'],resolve) },
    { path: '*', name: 'no-404', meta: { title: '404'},component: resolve => require(['@/crm/pages/404'],resolve) }
]