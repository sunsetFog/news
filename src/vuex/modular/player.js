const player = {
    state: {
        userInfo: {},
        seed: '种子'
    },
    mutations: {// 不可以异步操作，commit调用

    },
    getters: {// 监听state数据变化
        player_info: state => state.userInfo,
        money(state){
            //console.log('player_money',state.userInfo.money);
            let money = state.userInfo.money/10000;
            // let money = 88888865999990/10000;

            money = Number(money.toFixed(2));
            // money = parseInt(money*100)/100;
            return money;
        }
    },
    actions: {// 可以异步操作，dispatch调用
        getPlayerInfo({state,commit,dispatch},response){
            //console.log('player',response);
            state.userInfo = response;
            sessionStorage.setItem('token',response.token);
        },
        fragrant({state,commit,dispatch}, params){
            console.log('action异步', params);
            return new Promise((resolve) => {
                console.log("new Promise是同步任务", params);
                resolve({ message: "then参数" });
            });
        }
    }
}

export default player;