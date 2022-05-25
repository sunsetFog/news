import router from '@/crm/router'
const isMenu = {
    state: {
        menu_value: null
    },
    mutations: {
        // 菜单选中值
        menuOfValue(state,value){
            console.log("--menuOfValue--", value);
            sessionStorage.setItem('menu_value', value);
            state.menu_value = value
        }
    },
    getters: {
        menuValue(state){
            return state.menu_value
        }
    },
    actions: {
        
    },
}

export default isMenu;