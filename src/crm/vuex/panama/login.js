import router from '@/crm/router'
import lodash from 'lodash'
import { asyncRouterMap } from '@/crm/router'

const login = {
    state: {
        addRouters: [],
        addMenu: []
    },
    mutations: {
        setAddRouter(state,params){
            state.addRouters = params
        },
        setAddMenu(state,params){
            state.addMenu = params
        }
    },
    getters: {
        addRouters(state){
            return state.addRouters
        },
        addMenu(state){
            return state.addMenu
        }
    },
    actions: {
        GenerateRoutes({state,commit,dispatch},params){
            // console.log('GenerateRoutes--',params);
            // 踩坑，state.addRouters用JSON.stringify()和JSON.parse()转化后的component为undefined，导致跳转空白
            dispatch('dynamicMenu',params);
            dispatch('dynamicRouter',params);
            return new Promise(resolve => {
                console.log('new Promise是同步任务');
                resolve(state.addRouters);
            })
        },
        dynamicMenu({state,commit,dispatch},params){
            for(let i=0;i<params.length;i++){
                params[i].open_active = false;
                delete params[i]["parentId"];
                delete params[i]["type"];
                if (params[i].children.length != 0) {
                    dispatch('dynamicMenu',params[i].children);
                }
            }
            commit('setAddMenu', params);
            console.log('dynamicMenu----',params);
        },
        dynamicRouter({state,commit,dispatch},params){
            
            let initial = [
                {
                    path: '/home',
                    component: resolve => require(['@/crm/pages/home'],resolve),
                    // component: () => import('@/crm/pages/home'),
                    children: [
                        { path: '/', redirect: '/world/world' }
                    ]
                }
            ]
            for(let i=0;i<params.length;i++){
                if(params[i].path){
                    initial[0].children.unshift({
                        path: params[i].path,
                        name: lodash.uniqueId('name'+i),
                        meta: { title: params[i].title },
                        component: resolve => require(['@/crm/pages' + params[i].path],resolve)
                        // component: () => import('@/crm/pages' + params[i].path)
                    })
                }
                for(let k=0;k<params[i].children.length;k++){
                    initial[0].children.unshift({
                        path: params[i].children[k].path,
                        name: lodash.uniqueId('name'+i+k),
                        meta: { title: params[i].children[k].title },
                        component: resolve => require(['@/crm/pages' + params[i].children[k].path],resolve)
                        // component: () => import('@/crm/pages' + params[i].children[k].path)
                    })
                    for(let h=0;h<params[i].children[k].children.length;h++){
                        initial[0].children.unshift({
                            path: params[i].children[k].children[h].path,
                            name: lodash.uniqueId('name'+i+k+h),
                            meta: { title: params[i].children[k].children[h].title },
                            component: resolve => require(['@/crm/pages' + params[i].children[k].children[h].path],resolve)
                            // component: () => import('@/crm/pages' + params[i].children[k].children[h].path)
                        })
                    }
                }
            }
            asyncRouterMap.forEach(item => {
                if (item.type == 'homeChildren'){
                    // console.log('homeChildren',item.router);
                    item.router.forEach(value => {
                        initial[0].children.unshift(value);
                    })
                }
            });
            // console.log('homeChildren---',initial);
            commit('setAddRouter', initial);
        }
    },
}

export default login;