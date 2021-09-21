import router from '@/crm/router'
const user = {
    state: {
        menuValue: null,
        tabList: [],
        tabs_value: null
    },
    mutations: {
        menuValue(state,value){// 添加bread数组
            sessionStorage.setItem('menuValue',value);
            state.menuValue = value
        },
        modifyTab(state,value){// 赋值修改tabList数组
            console.log('modifyTab===',value)
            if (Array.isArray(value)) {
                state.tabList = value
                return;
            }
            state.tabs_value = value;
            // 缓存tabList数组
            sessionStorage.setItem('tabList',JSON.stringify(state.tabList))
        },
        addPane(state,value){// 添加tabList数组
            console.log('addPane===',value)
            for(let i = 0; i < state.tabList.length; i++){// 防止重复添加
                if(state.tabList[i].path == value.path){
                    return
                }
            }
            state.tabList.push(value)
            // 缓存tabList数组
            sessionStorage.setItem('tabList',JSON.stringify(state.tabList))
        },
        removePane(state,value){// 删除tabList数组一项
            state.tabList.splice(value, 1)
        }
    },
    getters: {
        menuValue(state){
            return state.menuValue
        },
        tabList(state){
            return state.tabList
        },
        tabsValue(state){
            return state.tabs_value
        }
    },
    actions: {
        
    },
}

export default user;