import router from '@/crm/router'
const user = {
    state: {
        menuIndex: null,
        tabList: [
            // {
            //     title: 'Tab 1',
            //     path: '/administrators/setton',
            //     save_bread: [],
            //     tab_active: false
            // },
            // {
            //     title: 'Tab 2',
            //     path: '/administrators/setton',
            //     save_bread: [],
            //     tab_active: false
            // }
        ]
    },
    mutations: {
        menuIndex(state,value){// 添加bread数组
            sessionStorage.setItem('menuIndex',value);
            state.menuIndex = value
        },
        chaActive(state,value){// 标签页颜色
            for (let i = 0; i < state.tabList.length; i++) {
                state.tabList[i].tab_active = false
            }
            if(value == 'zuohou'){ // 标签页最后一个高亮
                state.tabList[state.tabList.length-1].tab_active = true
            }else {// 标签页指定下标高亮
                state.tabList[value].tab_active = true
            }
            // 缓存tabList数组
            let wa2 = state.tabList
            sessionStorage.setItem('tabList',JSON.stringify(wa2))
        },
        // modifyBread(state,value){// 赋值修改bread数组
        //     state.bread = value
        // },
        modifyTab(state,value){// 赋值修改tabList数组
            state.tabList = value
        },
        addPane(state,value){// 添加tabList数组
            // console.log('pane===',value)
            for(let i = 0; i < state.tabList.length; i++){// 防止重复添加
                if(state.tabList[i].path == value.path){
                    return
                }
            }
            state.tabList.push(value)
            // 缓存tabList数组
            let wa2 = state.tabList
            sessionStorage.setItem('tabList',JSON.stringify(wa2))
        },
        removePane(state,value){// 删除tabList数组一项
            state.tabList.splice(value, 1)
        }
    },
    getters: {
        menuIndex(state){
            return state.menuIndex
        },
        tabList(state){
            return state.tabList
        }
    },
    actions: {
        
    },
}

export default user;