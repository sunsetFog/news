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
                    
                    <el-menu-item index="/home/managementCenter/crux"><div style="width: 100%;height: 100%;"><img class="icon-url-margin" src="@static/picture/center/shezhi.png"/>管理中心</div></el-menu-item>

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
                    {key: lodash.uniqueId('second_'), label: '样式', path: '/home/managementCenter/tagStyle/css', icon: require('@static/picture/center/gonggao.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '标签', path: '/home/managementCenter/tagStyle/tags', icon: require('@static/picture/center/gonggao.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'flex弹性布局', path: '/home/managementCenter/tagStyle/flex', icon: require('@static/picture/center/gonggao.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '样式例子', path: '/home/managementCenter/tagStyle/cssDemo', icon: require('@static/picture/center/gonggao.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '完整table', path: '/home/managementCenter/tagStyle/table', icon: require('@static/picture/center/gonggao.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '样式例子2', path: '/home/managementCenter/tagStyle/cssDemo2', icon: require('@static/picture/center/gonggao.png'), effect:[]},
                ]},
                {key: lodash.uniqueId('first_'), label: 'javaScript', path: '', icon: require('@static/picture/center/caiwu.png'), effect:[
                    {key: lodash.uniqueId('second_'), label: '字符串', path: '/home/managementCenter/javaScript/isString', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '对象', path: '/home/managementCenter/javaScript/isObject', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '数组', path: '/home/managementCenter/javaScript/isArray', icon: require('@static/picture/center/wanjia.png'), effect:[]},

                    {key: lodash.uniqueId('second_'), label: '必学1', path: '/home/managementCenter/javaScript/learn1?id=128', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '必学2', path: '/home/managementCenter/javaScript/learn2', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '必学3', path: '/home/managementCenter/javaScript/learn3', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '处理数据', path: '/home/managementCenter/javaScript/processing', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'es6', path: '/home/managementCenter/javaScript/es6', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'js例子', path: '/home/managementCenter/javaScript/jsDemo', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '赋值-浅拷贝-深拷贝', path: '/home/managementCenter/javaScript/research', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'url_base64_blob', path: '/home/managementCenter/javaScript/url_base64_blob', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '时间日期', path: '/home/managementCenter/javaScript/isDate', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                ]},
                {key: lodash.uniqueId('first_'), label: 'vue知识点', path: '', icon: require('@static/picture/center/pai.png'), effect:[
                    {key: lodash.uniqueId('second_'), label: 'vue指令', path: '/home/managementCenter/knowledge/v_tag', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'vue修饰符', path: '/home/managementCenter/knowledge/modifier', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '生命周期', path: '/home/managementCenter/knowledge/lifeCycle', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'vuex', path: '/home/managementCenter/knowledge/vuex', icon: require('@static/picture/center/tuandui.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '路由传参', path: '/home/managementCenter/knowledge/router', icon: require('@static/picture/center/wanjia.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '动态样式', path: '/home/managementCenter/knowledge/class', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '导出与导入', path: '/home/managementCenter/knowledge/exportImport', icon: require('@static/picture/center/shouyi.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '子父通讯', path: '/home/managementCenter/knowledge/parent', icon: require('@static/picture/center/tuiguang.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '全局方法', path: '/home/managementCenter/knowledge/public', icon: require('@static/picture/center/gonggao.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'watch监听', path: '/home/managementCenter/knowledge/watch', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'computed', path: '/home/managementCenter/knowledge/computed', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'filters过滤器', path: '/home/managementCenter/knowledge/filters', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'transition动画', path: '/home/managementCenter/knowledge/transition', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'refs操作Dom', path: '/home/managementCenter/knowledge/refs', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'mock模拟接口', path: '/home/managementCenter/knowledge/mock', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '浏览器缓存', path: '/home/managementCenter/knowledge/cache', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'axios配置', path: '/home/managementCenter/knowledge/axios', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '图片相对路径', path: '/home/managementCenter/knowledge/relativePath', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'mixins混合', path: '/home/managementCenter/knowledge/vueMixin', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'packageJson说明', path: '/packageTable', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '动态渲染组件', path: '/home/managementCenter/knowledge/vueExtend', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'less预处理样式', path: '/home/managementCenter/knowledge/isLess', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'scss预处理样式', path: '/home/managementCenter/knowledge/isSassScss', icon: require('@static/picture/center/caiwu.png'), effect:[]}
                ]},
                {key: lodash.uniqueId('first_'), label: 'vue功能集', path: '', icon: require('@static/picture/center/qipai.png'), effect: [
                    {key: lodash.uniqueId('second_'), label: '下载', path: '/home/managementCenter/effect/download', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'copy复制', path: '/home/managementCenter/effect/copy', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '字段变量', path: '/home/managementCenter/effect/field', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '返回顶部', path: '/home/managementCenter/effect/backToTop', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '分页封装', path: '/home/managementCenter/effect/pagination', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '上传图片列表', path: '/home/managementCenter/effect/upload', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '单个上传图片', path: '/home/managementCenter/effect/upload1', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '懒加载', path: '/home/managementCenter/effect/lazy', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '视频', path: '/home/managementCenter/effect/video', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '文本编辑器', path: '/home/managementCenter/effect/editor', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '二维码', path: '/home/managementCenter/effect/vueqr', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '浏览器监听', path: '/home/managementCenter/effect/listener', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'websocket', path: '/home/managementCenter/effect/websocket', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'pc自适应', path: '/adaption', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '水波', path: '/wave', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '开新窗口', path: '/home/managementCenter/effect/windowTab', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'svg', path: '/home/managementCenter/effect/svgIcons', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'font-awesome', path: '/home/managementCenter/effect/awesomeIcons', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '分步引导', path: '/home/managementCenter/effect/guide', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '全屏', path: '/home/managementCenter/effect/screenfull', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '音频', path: '/home/managementCenter/effect/isAudio', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '图片预览', path: '/home/managementCenter/effect/previewPictures', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '表单校验', path: '/home/managementCenter/effect/inputeCheck', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '头像裁切上传', path: '/home/managementCenter/effect/customAvatar', icon: require('@static/picture/center/qipai.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: '悬浮图片', path: '/home/managementCenter/effect/suspension', icon: require('@static/picture/center/qipai.png'), effect:[]}
                ]},
                {key: lodash.uniqueId('first_'), label: '项目报表', path: '', icon: require('@static/picture/center/tuiguang.png'), effect:[
                    {key: lodash.uniqueId('second_'), label: 'echart图表', path: '/home/managementCenter/reportForm/demo1', icon: require('@static/picture/center/daili.png'), effect:[]},
                ]},
                {key: lodash.uniqueId('first_'), label: '动画', path: '', icon: require('@static/picture/center/tuiguang.png'), effect:[

                ]},
                {key: lodash.uniqueId('first_'), label: '拓展知识', path: '', icon: require('@static/picture/center/tuiguang.png'), effect:[
                    {key: lodash.uniqueId('second_'), label: 'canvas', path: '/home/managementCenter/expand/canvas', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                    {key: lodash.uniqueId('second_'), label: 'base64解密', path: '/home/managementCenter/expand/base64', icon: require('@static/picture/center/caiwu.png'), effect:[]},
                ]},
                {key: lodash.uniqueId('first_'), label: '面试要谈', path: '', icon: require('@static/picture/center/tuandui.png'), effect:[
                    {key: lodash.uniqueId('second_'), label: '要点1', path: '/home/managementCenter/talk/talk1', icon: require('@static/picture/center/tuiguang.png'), effect:[]},
                ]},
            ],
        }
    },
    created() {
        console.log('---managementCenter-created---');
    },
    activated() {
        console.log('---managementCenter-activated---');
    },
    deactivated() {
        console.log('---managementCenter-deactivated---');
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
                color: #fff;
            }
        }
    }
}
</style>