const player = {
    state: {
        userInfo: {}
    },
    mutations: {

    },
    getters: {
        player_info: state => state.userInfo,
        money(state){
            //console.log('player_money',state.userInfo.money);
            let money = state.userInfo.money/10000;
            // let money = 88888865999990/10000;
            if(money.toString().indexOf('.')==-1){
                money = money.toFixed(2);
            }else{
                money = parseInt(money*100)/100;
            }
            return money;
        }
    },
    actions: {
        getPlayerInfo({state,commit,dispatch},response){
            console.log('player',response);
            state.userInfo = response;
            sessionStorage.setItem('token',response.token);
        }
    }
}

export default player;