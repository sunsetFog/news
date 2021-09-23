<template>
<section id="management">
    <div class="example-frame">
        <img class="big-fish" src="@static/picture/login/fish.png"/>
        <div class="manage--content">
            <router-view v-if="!manage_state"></router-view>
            <div class="manage-content-left" v-if="manage_state">
                <el-scrollbar style="width:100%;height:100%;">
                    <el-menu
                    :router="true"
                    :default-active="$route.path"
                    :unique-opened="true"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#513663"
                    text-color="#d4c3b2"
                    active-text-color="#ffd04b"
                    >
                    
                    <el-menu-item index="/mcenter/crux"><div style="width: 100%;height: 100%;"><img class="icon-url-margin" src="@static/picture/center/shezhi.png"/>管理中心</div></el-menu-item>

                    <el-submenu :index="item.key" :key="item.key" v-for="(item,index01) in menuList">
                        <template slot="title">
                        <img class="icon-url-margin" :src="item.icon"/>
                        <span>{{item.label}}</span>
                        </template>

                        <section v-for="(term,index02) in item.effect">

                            <section v-if="term.effect.length!=0">
                                <el-submenu :index="term.key">
                                <template slot="title">
                                <img class="icon-url-margin" :src="term.icon"/>
                                <span>{{term.label}}</span>
                                </template>
                                <section v-for="(val,index03) in term.effect">
                                    <el-menu-item  :index="val.path">
                                        <img class="icon-url-margin" :src="val.icon"/>
                                        {{val.label}}
                                    </el-menu-item>
                                </section>
                                </el-submenu>
                            </section>
                            

                            <section v-else>
                                <el-menu-item :index="term.path">
                                    <img class="icon-url-margin" :src="term.icon"/>
                                    {{term.label}}
                                </el-menu-item>
                            </section>

                        </section>

                    </el-submenu>
                    </el-menu>
                           
                </el-scrollbar>
            
            </div>
            <div class="manage-content-right" v-if="manage_state">
                <router-view></router-view>
            </div>
        </div>
    </div>
    <footers :vip_foot="false"></footers>
</section>
</template>

<script>
import footers from '@/explore/components/footer.vue';
import lodash from 'lodash'
export default{
    name: 'management',
    components: {footers},
    data(){
        return{
            manage_state: true,//管理中心
            menuList: [
                {key: lodash.uniqueId('first_'), label: '标签样式', path: '', icon: require('@static/picture/center/shouyi.png'), effect:[
                    {key: lodash.uniqueId('second_'), label: '代码规范', path: '/mcenter/standard', icon: require('@static/picture/center/gonggao.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '样式', path: '/mcenter/css', icon: require('@static/picture/center/gonggao.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '标签', path: '/mcenter/tags', icon: require('@static/picture/center/gonggao.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'flex弹性布局', path: '/mcenter/flex', icon: require('@static/picture/center/gonggao.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '样式例子', path: '/mcenter/cssDemo', icon: require('@static/picture/center/gonggao.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '完整table', path: '/mcenter/table', icon: require('@static/picture/center/gonggao.png'), effect:[]},
                ]},
                {key: lodash.uniqueId('first_'), label: 'javaScript', path: '', icon: require('@static/picture/center/caiwu.png'), effect:[
                    {key: lodash.uniqueId('second_'), label: '必学1', path: '/mcenter/learn1?id=128', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '必学2', path: '/mcenter/learn2', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '必学3', path: '/mcenter/learn3', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '处理数据', path: '/mcenter/processing', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'es6', path: '/mcenter/es6', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'js例子', path: '/mcenter/jsDemo', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '赋值-浅拷贝-深拷贝', path: '/mcenter/research', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                ]},
                {key: lodash.uniqueId('first_'), label: 'vue知识点', path: '', icon: require('@static/picture/center/pai.png'), effect:[
                    {key: lodash.uniqueId('second_'), label: 'vue指令', path: '/mcenter/v_tag', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'vue修饰符', path: '/mcenter/modifier', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '生命周期', path: '/mcenter/lifecycle', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'vuex', path: '/mcenter/vuex', icon: require('@static/picture/center/tuandui.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '路由传参', path: '/mcenter/router', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '动态样式', path: '/mcenter/class', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '样式或js外引入', path: '/mcenter/quote', icon: require('@static/picture/center/shouyi.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '子父通讯', path: '/mcenter/parent', icon: require('@static/picture/center/tuiguang.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '全局方法', path: '/mcenter/public', icon: require('@static/picture/center/gonggao.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'watch监听', path: '/mcenter/watch', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'computed', path: '/mcenter/computed', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'filters过滤器', path: '/mcenter/filters', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'transition动画', path: '/mcenter/transition', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'refs操作Dom', path: '/mcenter/refs', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'mock模拟接口', path: '/mcenter/mock', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '浏览器缓存', path: '/mcenter/cache', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'axios配置', path: '/mcenter/axios', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '图片相对路径', path: '/mcenter/relativePath', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'mixins混合', path: '/mcenter/sunMixin', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'packageJson说明', path: '/packageTable', icon: require('@static/picture/center/caiwu.png'), effect:[]}
                ]},
                {key: lodash.uniqueId('first_'), label: 'vue功能集', path: '', icon: require('@static/picture/center/qipai.png'), effect: [
                    {key: lodash.uniqueId('second_'), label: '下载', path: '/mcenter/download_ex', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'copy复制', path: '/mcenter/copy', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '字段变量', path: '/mcenter/field', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '返回顶部', path: '/mcenter/backtotop', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '分页封装', path: '/mcenter/pagination', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '上传图片列表', path: '/mcenter/upload', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '单个上传图片', path: '/mcenter/upload1', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '懒加载', path: '/mcenter/lazy', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '视频', path: '/mcenter/video', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '文本编辑器', path: '/mcenter/editor', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '二维码', path: '/mcenter/vueqr', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '浏览器监听', path: '/mcenter/listener', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'websocket', path: '/mcenter/websocket', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'pc自适应', path: '/adaption', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '水波', path: '/wave', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '开新窗口', path: '/mcenter/window_tab', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'svg', path: '/mcenter/svgIcons', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'font-awesome', path: '/mcenter/awesomeIcons', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '分步引导', path: '/mcenter/guide', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '全屏', path: '/mcenter/screenfull', icon: require('@static/picture/center/qipai.png'), effect:[]}
                ]},
                {key: lodash.uniqueId('first_'), label: '项目报表', path: '', icon: require('@static/picture/center/tuiguang.png'), effect:[
                    {key: lodash.uniqueId('second_'), label: 'echart图表', path: '/mcenter/echartsDemo1', icon: require('@static/picture/center/daili.png'), effect:[]},
                ]},
                {key: lodash.uniqueId('first_'), label: '动画', path: '', icon: require('@static/picture/center/tuiguang.png'), effect:[

                ]},
                {key: lodash.uniqueId('first_'), label: '拓展知识', path: '', icon: require('@static/picture/center/tuiguang.png'), effect:[
                    {key: lodash.uniqueId('second_'), label: 'canvas', path: '/mcenter/canvas', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'base64解密', path: '/mcenter/base64', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                ]},
                {key: lodash.uniqueId('first_'), label: '面试要谈', path: '', icon: require('@static/picture/center/tuandui.png'), effect:[
                    {key: lodash.uniqueId('second_'), label: '要点1', path: '/mcenter/talk1', icon: require('@static/picture/center/tuiguang.png'), effect:[]},
                ]},
            ],
        }
    },
    methods:{
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
}
</script>

<style lang="less" scoped>
#management{
    width: 100%;
    .example-frame{
        width: 100%;
        height: 1200px;
        .mixin_image(url('~@static/picture/center/bg-guanli.jpg'));
        position: relative;
        .big-fish{
            .mixin_img(326px;387px);
            position: absolute;
            left: 0px;
            bottom: 0px;
        }
        .manage--content{
            width: 1200px;
            height: 1200px;
            background: rgba(88,51,82,0.6);
            border-left: 1px solid @color_blueviolet;
            border-right: 1px solid @color_blueviolet;
            position: absolute;
            left: 50%;
            top: 0px;
            margin-left: -600px;
            padding: 45px 43px 0px 43px;
            box-sizing: border-box;
            .manage-content-left{
                .mixin_float(230px,auto,left);
                background: #513663;
                margin-right: 40px;
                height: 1130px;
                text-align: left;
                .icon-url-margin{
                    .mixin_img(20px,20px);
                    margin-right: 11px;
                    margin-top: -5px;
                }
                /deep/.el-scrollbar__wrap{
                    overflow-x: hidden !important;
                }
            }
            .manage-content-right{
                .mixin_float(840px,1130px,right);
                overflow-x: hidden;
            }
        }
    }
}
</style>