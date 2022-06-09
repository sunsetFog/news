export default [
    { path: '/login', name: 'Login', meta: { title: '登录' }, component: resolve => require(['@/crm/pages/login'],resolve) }
]