import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import getters from './getters';
// 方法一：固定写法----缺点：要一个个文件导入，麻烦
// import pool from './modular/pool';
// import player from './modular/player';
// import login from './modular/login';
// export default new Vuex.Store({
// 	modules: {// modules模块化vuex
// 		pool,
//         player,
//         login
// 	},
//  getters: getters
// })



/*
    方法二：动态引入文件夹里所有导出----优点：解决一个个文件导入问题
*/

let saveObj = {};

const files = require.context('./modular', false, /\.js$/);
console.log('context===', files,'-转数组-',files.keys());// ["./player.js", "./pool.js"]
files.keys().forEach(key => {
    console.log('context---', key);// 结果./player.js
    const moduleName = key.replace(/(\.\/|\.js)/g, '');
    console.log('moduleName---', moduleName);// 结果player  文件名
    console.log('vuex文件导出内容', files(key).default);

    saveObj[moduleName] = files(key).default;
})

let store = new Vuex.Store({
        modules: saveObj,
        getters: getters
    })
export default store;





/*
方法三：动态注册vuex，理解和动态路由一样

require.context( ) --- 获取modular文件下所有js文件
参数一:文件所在目录
参数二:是否要查询子文件夹
参数三:要匹配的文件的后缀,是一个正则表达式

正则: /\.js$/   匹配所有js文件
正则: /\.vuex\.js$/   匹配以 `.vuex.js` 结尾的文件    文件取名test.vuex.js

store.registerModule() --- 动态注册vuex模块
要是在其他文件里动态注册vuex，那么要引入store变量：import store from '@/explore/vuex/store/index'

 */

// let store = new Vuex.Store({
//         modules: {// modules模块化vuex
    
//         },
//         getters: getters
//     })

// const files = require.context('./modular', false, /\.js$/);
// console.log('context===', files,'-转数组-',files.keys());// ["./player.js", "./pool.js"]
// files.keys().forEach(key => {
//     console.log('context---', key);// 结果./player.js
//     const moduleName = key.replace(/(\.\/|\.js)/g, '');
//     console.log('moduleName---', moduleName);// 结果player  文件名
//     console.log('vuex文件导出内容', files(key).default);

//     store.registerModule(moduleName, files(key).default);// 重点
// })

// export default store;