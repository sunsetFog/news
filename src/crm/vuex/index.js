
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import user from './panama/user.js'
import login from './panama/login.js'

export default new Vuex.Store({
	modules: {// modules模块化vuex
		user,
		login
	}
})