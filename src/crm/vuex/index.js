
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import menu from './modular/menu.js'
import tabs from './modular/tabs.js'
import login from '@/explore/vuex/modular/login.js'


export default new Vuex.Store({
	modules: {// modules模块化vuex
		menu,
		tabs,
		login
	}
})