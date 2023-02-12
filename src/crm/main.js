// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// study: 国际多语言
import i18n from '@/crm/i18n/lang';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
Vue.use(ElementUI, {
    size: 'mini',
    i18n: (key, value) => i18n.t(key, value),
});

import store from './vuex/index';

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';
Vue.use(Viewer);
Viewer.setDefaults({
    Options: {
        inline: true,
        button: true,
        navbar: true,
        title: true,
        toolbar: true,
        tooltip: true,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: true,
        transition: true,
        fullscreen: true,
        keyboard: true,
        url: 'data-source',
    },
});

import searchDesign from '@/crm/components/searchDesign.vue';
Vue.component('searchDesign', searchDesign);
import pagination from '@/explore/components/pagination.vue';
Vue.component('pagination', pagination);
import upload1 from '@/explore/pages/home/managementCenter/effect/upload/upload1.vue';
Vue.component('upload1', upload1);
import previewPictures from '@/explore/pages/home/managementCenter/plugin/previewPictures.vue';
Vue.component('previewPictures', previewPictures);

import means from '@/explore/public/index.js';
Vue.prototype.$means = means;
// 刷新皮肤保持不变   study: 皮肤切换
means.initTheme();

import './database/index'; // 不能用if动态加载js

import apiHttp from '@/explore/api/http.js';
Vue.prototype.$apihttp = apiHttp;

// 全局注册自定义指令
import * as directives from '@/explore/directive';
Object.keys(directives).forEach(key => {
    directives[key].install(Vue);
});
// 全局注册过滤器
import filters from '@/explore/filters';
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});


Vue.config.productionTip = false;

// 使用vue-cookies
import VueCookies from 'vue-cookies';
Vue.use(VueCookies);

router.beforeEach((to, from, next) => {
    console.log('beforeEach--3983', to, from);
    document.title = to.meta.title;

    if (to.path == '/login') {
        VueCookies.remove('token');
        sessionStorage.removeItem('tabList');
    }

    // 刷新执行，且不是登录页，且要有token
    if (from.path == '/' && to.path != '/login') {
        if (VueCookies.get('token')) {
            store.dispatch('routerApple').then(function(value) {
                console.log('--then结束--');
                router.addRoutes(value);
                // next({ path: sessionStorage.getItem('currentPath') });
                next();
            });
        } else {
            next({ path: '/login' });
        }
    }

    next();
});
router.afterEach(transition => {
    // console.log('router.afterEach---', transition)
});
router.onError(error => {
    // console.log('router.onError---',error);
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    if (isChunkLoadFailed) {
        router.replace(targetPath);
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    components: { App },
    template: '<App/>',
});
