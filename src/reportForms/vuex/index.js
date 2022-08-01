import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import login from './modular/login';
import pool from './modular/pool';
import player from './modular/player';


export default new Vuex.Store({
	modules: {// modules模块化vuex
		login,
		pool,
		player
	}
})
