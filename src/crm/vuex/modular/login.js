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
function luyou(arr) {
    arr = arr || []; //退出递归1. 空数组不会遍历，就不会调用自己了
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        item.name = lodash.uniqueId('mark-');
        item.meta = { 
            title: item.title,
            hidden: item.hidden,
            icon: item.icon,
            cache: item.cache
        }
        item.component = resolve => require([ '@/crm/pages' + item.path + '.vue' ],resolve);
        delete item.cache;
        delete item.createTime;
        delete item.hidden;
        delete item.icon;
        delete item.id;
        delete item.menuLevel;
        delete item.menuParentId;
        delete item.routerLevel;
        delete item.routerParentId;
        delete item.sort;
        delete item.subject;
        delete item.title;
        luyou(item.children);
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
                url: process.env.core_url + '/sky/menu/treeRouter',
                method: 'get',
                params: {
                    subject: 'crm'
                }
            }).then((res) => {
                let list = res.data;
                dispatch('dynamicRouter', list);
            }).catch((err) => {
                console.log('error',err);
            })

            await apiHttp({
                url: process.env.core_url + '/sky/menu/treeMenu',
                method: 'get',
                params: {
                    subject: 'crm'
                }
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
            luyou(params);
            console.log("--dynamicRouter--", params);
            params = [...params, ...finalRouter];
            state.routerList = params;
        },
        dynamicMenu({state, commit, dispatch}, params) {
            console.log("--dynamicMenu--", params);
            state.menuList = params
        }
    }
}

export default login;