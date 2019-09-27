import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


import pool from './modules/pool';
import player from './modules/player';


export default new Vuex.Store({
	modules: {
		pool,
		player
	}
})
