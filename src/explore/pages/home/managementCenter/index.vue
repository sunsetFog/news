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
                        <span>{{item.title}}</span>
                        </template>

                        <section v-for="(term,index02) in item.children">

                            <section v-if="term.children.length!=0">
                                <el-submenu :index="term.key">
                                <template slot="title">
                                <img class="icon-url-margin" :src="term.icon"/>
                                <span>{{term.title}}</span>
                                </template>
                                <section v-for="(val,index03) in term.children">
                                    <el-menu-item  :index="val.path">
                                        <img class="icon-url-margin" :src="val.icon"/>
                                        {{val.title}}
                                    </el-menu-item>
                                </section>
                                </el-submenu>
                            </section>
                            

                            <section v-else>
                                <el-menu-item :index="term.path">
                                    <img class="icon-url-margin" :src="term.icon"/>
                                    {{term.title}}
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
import {mapMutations,mapGetters,mapActions} from 'vuex';
export default{
    name: 'management',
    components: {footers},
    data(){
        return{
            manage_state: true,//管理中心
            // menuList: [
            //     {key: lodash.uniqueId('first_'), title: '标签样式', path: '', icon: require('@static/picture/center/shouyi.png'), children:[
            //         {key: lodash.uniqueId('second_'), title: '样式', path: '/home/managementCenter/tagStyle/css', icon: require('@static/picture/center/gonggao.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '标签', path: '/home/managementCenter/tagStyle/tags', icon: require('@static/picture/center/gonggao.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'flex弹性布局', path: '/home/managementCenter/tagStyle/flex', icon: require('@static/picture/center/gonggao.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '样式例子', path: '/home/managementCenter/tagStyle/cssDemo', icon: require('@static/picture/center/gonggao.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '完整table', path: '/home/managementCenter/tagStyle/table', icon: require('@static/picture/center/gonggao.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '样式例子2', path: '/home/managementCenter/tagStyle/cssDemo2', icon: require('@static/picture/center/gonggao.png'), children:[]},
            //     ]},
            //     {key: lodash.uniqueId('first_'), title: 'javaScript', path: '', icon: require('@static/picture/center/caiwu.png'), children:[
            //         {key: lodash.uniqueId('second_'), title: '字符串', path: '/home/managementCenter/javaScript/isString', icon: require('@static/picture/center/wanjia.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '对象', path: '/home/managementCenter/javaScript/isObject', icon: require('@static/picture/center/wanjia.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '数组', path: '/home/managementCenter/javaScript/isArray', icon: require('@static/picture/center/wanjia.png'), children:[]},

            //         {key: lodash.uniqueId('second_'), title: '必学1', path: '/home/managementCenter/javaScript/learn1?id=128', icon: require('@static/picture/center/wanjia.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '必学2', path: '/home/managementCenter/javaScript/learn2', icon: require('@static/picture/center/wanjia.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '必学3', path: '/home/managementCenter/javaScript/learn3', icon: require('@static/picture/center/wanjia.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '处理数据', path: '/home/managementCenter/javaScript/processing', icon: require('@static/picture/center/wanjia.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'es6', path: '/home/managementCenter/javaScript/es6', icon: require('@static/picture/center/wanjia.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'js例子', path: '/home/managementCenter/javaScript/jsDemo', icon: require('@static/picture/center/wanjia.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '赋值-浅拷贝-深拷贝', path: '/home/managementCenter/javaScript/research', icon: require('@static/picture/center/wanjia.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'url_base64_blob', path: '/home/managementCenter/javaScript/url_base64_blob', icon: require('@static/picture/center/wanjia.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '时间日期', path: '/home/managementCenter/javaScript/isDate', icon: require('@static/picture/center/wanjia.png'), children:[]},
            //     ]},
            //     {key: lodash.uniqueId('first_'), title: 'vue知识点', path: '', icon: require('@static/picture/center/pai.png'), children:[
            //         {key: lodash.uniqueId('second_'), title: 'vue指令', path: '/home/managementCenter/knowledge/v_tag', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'vue修饰符', path: '/home/managementCenter/knowledge/modifier', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '生命周期', path: '/home/managementCenter/knowledge/lifeCycle', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'vuex', path: '/home/managementCenter/knowledge/vuex', icon: require('@static/picture/center/tuandui.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '路由传参', path: '/home/managementCenter/knowledge/router', icon: require('@static/picture/center/wanjia.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '动态样式', path: '/home/managementCenter/knowledge/class', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '导出与导入', path: '/home/managementCenter/knowledge/exportImport', icon: require('@static/picture/center/shouyi.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '子父通讯', path: '/home/managementCenter/knowledge/parent', icon: require('@static/picture/center/tuiguang.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '全局方法', path: '/home/managementCenter/knowledge/public', icon: require('@static/picture/center/gonggao.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'watch监听', path: '/home/managementCenter/knowledge/watch', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'computed', path: '/home/managementCenter/knowledge/computed', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'filters过滤器', path: '/home/managementCenter/knowledge/filters', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'transition动画', path: '/home/managementCenter/knowledge/transition', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'refs操作Dom', path: '/home/managementCenter/knowledge/refs', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'mock模拟接口', path: '/home/managementCenter/knowledge/mock', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '浏览器缓存', path: '/home/managementCenter/knowledge/cache', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'axios配置', path: '/home/managementCenter/knowledge/axios', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '图片相对路径', path: '/home/managementCenter/knowledge/relativePath', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'mixins混合', path: '/home/managementCenter/knowledge/vueMixin', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '动态渲染组件', path: '/home/managementCenter/knowledge/vueExtend', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'less预处理样式', path: '/home/managementCenter/knowledge/isLess', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'scss预处理样式', path: '/home/managementCenter/knowledge/isSassScss', icon: require('@static/picture/center/caiwu.png'), children:[]}
            //     ]},
            //     {key: lodash.uniqueId('first_'), title: 'vue功能集', path: '', icon: require('@static/picture/center/qipai.png'), children: [
            //         {key: lodash.uniqueId('second_'), title: '下载', path: '/home/managementCenter/children/download', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'copy复制', path: '/home/managementCenter/children/copy', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '字段变量', path: '/home/managementCenter/children/field', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '返回顶部', path: '/home/managementCenter/children/backToTop', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '分页封装', path: '/home/managementCenter/children/pagination', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '上传图片列表', path: '/home/managementCenter/children/upload', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '单个上传图片', path: '/home/managementCenter/children/upload1', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '懒加载', path: '/home/managementCenter/children/lazy', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '视频', path: '/home/managementCenter/children/video', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '文本编辑器', path: '/home/managementCenter/children/editor', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '二维码', path: '/home/managementCenter/children/vueqr', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '浏览器监听', path: '/home/managementCenter/children/listener', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'websocket', path: '/home/managementCenter/children/websocket', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'pc自适应', path: '/adaption/index', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '水波', path: '/home/managementCenter/effect/wave', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '开新窗口', path: '/home/managementCenter/children/windowTab', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'svg', path: '/home/managementCenter/children/svgIcons', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'font-awesome', path: '/home/managementCenter/children/awesomeIcons', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '分步引导', path: '/home/managementCenter/children/guide', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '全屏', path: '/home/managementCenter/children/screenfull', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '音频', path: '/home/managementCenter/children/isAudio', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '图片预览', path: '/home/managementCenter/children/previewPictures', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '表单校验', path: '/home/managementCenter/children/inputeCheck', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '头像上传裁切', path: '/home/managementCenter/children/customAvatar', icon: require('@static/picture/center/qipai.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: '悬浮图片', path: '/home/managementCenter/children/suspension', icon: require('@static/picture/center/qipai.png'), children:[]}
            //     ]},
            //     {key: lodash.uniqueId('first_'), title: '项目报表', path: '', icon: require('@static/picture/center/tuiguang.png'), children:[
            //         {key: lodash.uniqueId('second_'), title: 'echart图表', path: '/home/managementCenter/reportForm/demo1', icon: require('@static/picture/center/daili.png'), children:[]},
            //     ]},
            //     {key: lodash.uniqueId('first_'), title: '动画', path: '', icon: require('@static/picture/center/tuiguang.png'), children:[

            //     ]},
            //     {key: lodash.uniqueId('first_'), title: '拓展知识', path: '', icon: require('@static/picture/center/tuiguang.png'), children:[
            //         {key: lodash.uniqueId('second_'), title: 'canvas', path: '/home/managementCenter/expand/canvas', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //         {key: lodash.uniqueId('second_'), title: 'base64解密', path: '/home/managementCenter/expand/base64', icon: require('@static/picture/center/caiwu.png'), children:[]},
            //     ]},
            //     {key: lodash.uniqueId('first_'), title: '面试要谈', path: '', icon: require('@static/picture/center/tuandui.png'), children:[
            //         {key: lodash.uniqueId('second_'), title: '面试要点1', path: '/home/managementCenter/talk/talk1', icon: require('@static/picture/center/tuiguang.png'), children:[]},
            //     ]},
            // ],
        }
    },
    computed: {
        ...mapGetters(['menuList'])
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