
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import tabs from './modular/tabs.js'
// import login from '@/explore/vuex/modular/login.js'
import login from './modular/login.js'


export default new Vuex.Store({
	modules: {// modules模块化vuex
		tabs,
		login
	}
})