import apiHttp from '@/explore/api/http.js';
import lodash from 'lodash'

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
                console.log('--Router--', res);
                params = res.data.routerList
                
                dispatch('dynamicRouter', params);
            }).catch((err)=>{
                console.log('error',err);
            })
            console.log("--routerApple-2-");
            return state.routerList;
            
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
                item.meta = { title: item.metaTitle, key: item.metaKey }
                item.component = resolve => require([ '@/explore/pages' + item.importPath + '.vue' ],resolve)
                item.name = lodash.uniqueId('mark-')
                item.redirect = item.importPath


                if(item.id > 1000000 && item.id < 2000000) {
                    oneLevel.push(item)
                }
                if(item.id > 2000000 && item.id < 3000000) {
                    twoLevel.push(item)
                }
                if(item.id > 3000000 && item.id < 4000000) {
                    threeLevel.push(item)
                }
            }
            console.log('--oneLevel--', oneLevel)
            console.log('--twoLevel--', twoLevel)
            console.log('--threeLevel--', threeLevel)
            dispatch('dynamicMenu', threeLevel)

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
            console.log('--routerList--', routerArr)
            state.routerList = routerArr
        },
        dynamicMenu({state, commit, dispatch}, params) {
            console.log('--dynamicMenu--', params)
            let menuArr = []
            let nice =  { key: '', label: '', path: '', icon: require('@static/picture/center/shouyi.png'), effect:[] }

            let titleArr = [
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

            for (let i = 0; i < titleArr.length; i++) {
                let strip = titleArr[i];
                let first = JSON.parse(JSON.stringify(nice));
                first.key = lodash.uniqueId('menu-');
                first.label = strip.name;

                for (let k = 0; k < params.length; k++) {
                    let item = params[k];
                    let type = item.path.split('/')[0];
                    if(type == strip.file) {
                        let second = JSON.parse(JSON.stringify(nice));
                        second.key = lodash.uniqueId('menu-');
                        second.label = item.metaTitle;
                        second.path = item.importPath;
                        first.effect.push(second);
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