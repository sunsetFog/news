import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 方法一：固定写法
// import pool from './modular/pool';
// import player from './modular/player';
// export default new Vuex.Store({
// 	modules: {// modules模块化vuex
// 		pool,
// 		player
// 	}
// })



// 方法二：动态写法

let store = new Vuex.Store({
    modules: {// modules模块化vuex

    }
})

//动态导入文件--require.context( )
//  正则: /\.js$/   获取modular文件下所有js文件
//  正则: /\.vuex\.js$/      文件取名test.vuex.js    获取以 `.vuex.js` 结尾的文件
const files = require.context('./modular', false, /\.js$/);
console.log('context===', files,'-转数组-',files.keys());// ["./player.js", "./pool.js"]
files.keys().forEach(key => {
    console.log('context---', key);// 结果./player.js
    const moduleName = key.replace(/(\.\/|\.js)/g, '');// 文件名  结果player
    console.log('moduleName---', moduleName);
    console.log('files---', files(key).default);
    // 动态注册vuex模块
    store.registerModule(moduleName, files(key).default);// store可以是引入本文见的暴露 import store from '@/vuex/store/index'
})

export default store;