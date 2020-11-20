import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


import pool from './modular/pool';
import player from './modular/player';


export default new Vuex.Store({
	modules: {
		pool,
		player
	}
})
