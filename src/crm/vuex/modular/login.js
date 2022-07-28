import apiHttp from '@/explore/api/http.js';
import lodash from 'lodash'
import finalRouter from '@/crm/router/modules/finalRouter.js'

function recursion(arr) {
    arr = arr || []; //退出递归1. 空数组不会遍历，就不会调用自己了
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        item.key = lodash.uniqueId('menu-');
        recursion(item.children);
    }
}

const login = {
    state: {
        routerList: [],
        menuList: []
    },
    mutations: {
        
    },
    getters: {
        routerList: state => state.routerList,
        menuList: state => state.menuList
    },
    actions: {
        async routerApple({state, commit, dispatch}, params) {
            console.log("--routerApple-1-");

            await apiHttp({
                url: process.env.core_url + '/sky/menu/routerList',
                method: 'post',
                data: {}
            }).then((res) => {
                let list = res.data;
                list = list.filter(function(item, index) {
                    return item.path;
                });
                dispatch('dynamicRouter', list);
            }).catch((err) => {
                console.log('error',err);
            })

            await apiHttp({
                url: process.env.core_url + '/sky/menu/treeList',
                method: 'get',
                data: {}
            }).then((res) => {
                let list = res.data;
                recursion(list);
                dispatch('dynamicMenu', list);
            }).catch((err) => {
                console.log('error',err);
            })
            console.log("--routerApple-2-", state);

            return state.routerList;
            
        },
        dynamicRouter({state, commit, dispatch}, params) {
            let flower = [
                { path: '/home', name: 'Home', meta: { title: '主页' }, component: resolve => require([ '@/crm/pages/home/index.vue' ],resolve), children: [] },
                ...finalRouter
            ];
            for (let index = 0; index < params.length; index++) {
                let item = params[index];
                flower[0].children.push({
                    path: item.path,
                    name: lodash.uniqueId('mark-'),
                    meta: { 
                        title: item.title,
                        hidden: item.hidden,
                        icon: item.icon,
                        cache: item.cache
                    },
                    component: resolve => require([ '@/crm/pages' + item.path + '.vue' ],resolve)
                })
            }
            flower[0].children.push({
                path: '/',
                redirect: params[0].path
            });
            state.routerList = flower;
        },
        dynamicMenu({state, commit, dispatch}, params) {
            console.log("--dynamicMenu--", params);
            state.menuList = params
        }
    }
}

export default login;