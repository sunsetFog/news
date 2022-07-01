import apiHttp from '@/explore/api/http.js';
import lodash from 'lodash'
import finalRouter1 from '@/explore/router/modules/finalRouter.js'
import finalRouter2 from '@/crm/router/modules/finalRouter.js'

function routerOptions(item) {
    // console.log('--选项--', item)
    let tiao = {}
    if(item.metaTitle == '默认重定向') {
        tiao = {
            path: item.path,
            redirect: item.redirect
        }
    } else if(!item.metaTitle) {
        tiao = {
            path: item.path,
            component: item.component,
            children: item.children
        }
    } else {
        tiao = {
            path: item.path,
            name: item.name,
            meta: item.meta,
            component: item.component,
            children: item.children
        }
    }
    return tiao
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
                url: process.env.core_url + '/sky/newsRouterList',
                method: 'get',
                params: {}
            }).then((res) => {
                sessionStorage.setItem('buttonPermissions',JSON.stringify(res.data.operationList));
                
                params = res.data.routerList;
                let newArr = [];
                for (let index = 0; index < params.length; index++) {
                    let item = params[index];
                    let level = item.id;
                        level = String(level).charAt(0);
                    if (sessionStorage.getItem("entry_config") == 'explore' && level == 1) {
                        newArr.push(item);
                    } else if (sessionStorage.getItem("entry_config") == 'crm' && level == 2) {
                        newArr.push(item);
                    }
                }
                console.log('--Router--', newArr);
                
                dispatch('dynamicRouter', newArr);
            }).catch((err)=>{
                console.log('error',err);
            })
            console.log("--routerApple-2-");

            let finalArr = []
            if (sessionStorage.getItem("entry_config") == 'explore') {
                finalArr = [...state.routerList, ...finalRouter1]
            } else if (sessionStorage.getItem("entry_config") == 'crm') {
                finalArr = [...state.routerList, ...finalRouter2]
            }
            return finalArr;
            
        },
        dynamicRouter({state, commit, dispatch}, params) {
            console.log('--dynamicRouter--', params)
            // 3级分类
            let oneLevel = []
            let twoLevel = []
            let threeLevel = []
            for (let i = 0; i < params.length; i++) {
                let item = params[i]
                item.children = []
                item.meta = { title: item.metaTitle }

                if (sessionStorage.getItem("entry_config") == 'explore') {
                    item.component = resolve => require([ '@/explore/pages' + item.importPath + '.vue' ],resolve)
                } else if (sessionStorage.getItem("entry_config") == 'crm') {
                    item.component = resolve => require([ '@/crm/pages' + item.importPath + '.vue' ],resolve)
                }
                
                item.name = lodash.uniqueId('mark-')
                item.redirect = item.importPath

                let level = item.id;
                    level = String(level).charAt(2);
                if(level == 1) {
                    oneLevel.push(item)
                }
                if(level == 2) {
                    twoLevel.push(item)
                }
                if(level == 3) {
                    threeLevel.push(item)
                }
            }
            console.log('--oneLevel--', oneLevel)
            console.log('--twoLevel--', twoLevel)
            console.log('--threeLevel--', threeLevel)
            
            if (sessionStorage.getItem("entry_config") == 'explore') {
                dispatch('dynamicMenu', threeLevel)
            } else if (sessionStorage.getItem("entry_config") == 'crm') {
                dispatch('dynamicMenu', twoLevel)
            }

            for (let i = 0; i < threeLevel.length; i++) {
                let item3 = threeLevel[i]
                for (let k = 0; k < twoLevel.length; k++) {
                    let item2 = twoLevel[k]
                    if(item3.parentId == item2.id) {
                        item2.children.push(routerOptions(item3))
                    }
                }
            }
            console.log('-twoLevel-222', twoLevel)

            for (let i = 0; i < twoLevel.length; i++) {
                let item2 = twoLevel[i]
                for (let k = 0; k < oneLevel.length; k++) {
                    let item1 = oneLevel[k]
                    
                    if(item2.parentId == item1.id) {
                        item1.children.push(routerOptions(item2))
                    }
                }
                
            }

            let routerArr = []
            for (let i = 0; i < oneLevel.length; i++) {
                let item = oneLevel[i]
                routerArr.push(routerOptions(item))
            }
            console.log('--routerList--', routerArr);
            state.routerList = routerArr
        },
        dynamicMenu({state, commit, dispatch}, params) {
            console.log('--dynamicMenu--', params)
            let menuArr = []
            let nice =  { key: '', title: '', path: '', icon: require('@static/picture/center/shouyi.png'), children: [] }

            let titleArr = []
            if (sessionStorage.getItem("entry_config") == 'explore') {
                titleArr = [
                    { name: '标签样式', file: 'tagStyle' },
                    { name: 'javaScript', file: 'javaScript' },
                    { name: 'vue知识点', file: 'knowledge' },
                    { name: 'vue功能集', file: 'effect' },
                    { name: 'vue插件', file: 'plugin' },
                    { name: '项目报表', file: 'reportForm' },
                    { name: '动画', file: 'animation' },
                    { name: '拓展知识', file: 'expand' },
                    { name: '面试要谈', file: 'talk' }
                ]
            } else if (sessionStorage.getItem("entry_config") == 'crm') {
                titleArr = [
                    { name: '首页', file: 'world' },
                    { name: '季节', file: 'season' },
                    { name: '商品', file: 'shopUnit' },
                    { name: '订单', file: 'orderUnit' },
                    { name: '权限管理', file: 'jurisdiction' },
                    { name: '系统设置', file: 'system' }
                ]
            }
            // 不是菜单的数组
            let noMenu = [
                "jurisdiction/role/assignMenu",
                "jurisdiction/role/allocateResources",
                "jurisdiction/resource/resourceCategory/index",
                "shopUnit/productAttr/productAttrList/index",
                "orderUnit/orderList/orderDetail/index"
            ]


            for (let i = 0; i < titleArr.length; i++) {
                let strip = titleArr[i];
                let first = JSON.parse(JSON.stringify(nice));
                first.key = lodash.uniqueId('menu-');
                first.title = strip.name;

                for (let k = 0; k < params.length; k++) {
                    let item = params[k];
                    let type = item.path.split('/')[0];
                    if(type == strip.file && noMenu.indexOf(item.path) == -1) {
                        let second = JSON.parse(JSON.stringify(nice));
                        second.key = lodash.uniqueId('menu-');
                        second.path = item.importPath;
                        second.title = item.metaTitle;
                        first.children.push(second);
                    }
                }
                menuArr.push(first)
            }
            state.menuList = menuArr
            console.log('--menuArr--', menuArr)
                
        }
    }
}
export default login;