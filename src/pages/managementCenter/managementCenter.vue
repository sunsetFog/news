<template>
<section id="management">
    <div class="example_frame">
        <img class="big_fish" src="../../../static/dream/login/fish.png"/>
        <div class="manage_content">
            <router-view v-if="!manage_state"></router-view>
            <div class="manage_content_left" v-if="manage_state">
                <el-scrollbar>
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
                    
                    <el-menu-item index="/mcenter/crux"><div style="width: 100%;height: 100%;"><img class="icon_url_margin" src="../../../static/dream/center/shezhi.png"/>管理中心</div></el-menu-item>

                    <el-submenu :index="item.key" :key="item.key" v-for="(item,index) in menuList">
                        <template slot="title">
                        <img class="icon_url_margin" :src="item.icon"/>
                        <span>{{item.label}}</span>
                        </template>

                        <section v-for="(term,index) in item.effect">

                            <section v-if="term.effect.length!=0">
                                <el-submenu :index="term.key">
                                <template slot="title">
                                <img class="icon_url_margin" :src="term.icon"/>
                                <span>{{term.label}}</span>
                                </template>
                                <section v-for="(val,index) in term.effect">
                                    <el-menu-item  :index="val.path">
                                        <img class="icon_url_margin" :src="val.icon"/>
                                        {{val.label}}
                                    </el-menu-item>
                                </section>
                                </el-submenu>
                            </section>
                            

                            <section v-else>
                                <el-menu-item :index="term.path">
                                    <img class="icon_url_margin" :src="term.icon"/>
                                    {{term.label}}
                                </el-menu-item>
                            </section>

                        </section>

                    </el-submenu>
                    </el-menu>
                           
                </el-scrollbar>
            
            </div>
            <div class="manage_content_right" v-if="manage_state">
                <router-view></router-view>
            </div>
        </div>
    </div>
    <footers :vip_foot="false"></footers>
</section>
</template>

<script>
import footers from '../../components/footer.vue';
export default{
    name: 'management',
    components: {footers},
    data(){
        return{
            manage_state: true,//管理中心
            menuList: [
                {key: '1',label: '标签样式',path: '',icon: '../../../static/dream/center/shouyi.png',effect:[
                    {key:'1-2-1',label: '代码规范',path: '/mcenter/standard',icon: '../../../static/dream/center/gonggao.png',effect:[]},
                    {key:'1-2-2',label: '样式',path: '/mcenter/css',icon: '../../../static/dream/center/gonggao.png',effect:[]},
                    {key:'1-2-3',label: '标签',path: '/mcenter/tags',icon: '../../../static/dream/center/gonggao.png',effect:[]},
                    {key:'1-2-4',label: 'flex弹性布局',path: '/mcenter/flex',icon: '../../../static/dream/center/gonggao.png',effect:[]},
                ]},
                {key: '2',label: 'javaScript',path: '',icon: '../../../static/dream/center/caiwu.png',effect:[
                    {key:'2-2-1',label: '必学1',path: '/mcenter/learn1?id=128',icon: '../../../static/dream/center/wanjia.png',effect:[]},
                    {key:'2-2-2',label: '必学2',path: '/mcenter/learn2',icon: '../../../static/dream/center/wanjia.png',effect:[]},
                    {key:'2-2-3',label: '必学3',path: '/mcenter/learn3',icon: '../../../static/dream/center/wanjia.png',effect:[]},
                    {key:'2-2-4',label: '处理数据',path: '/mcenter/processing',icon: '../../../static/dream/center/wanjia.png',effect:[]},
                    {key:'2-2-5',label: '小练习',path: '/mcenter/practice',icon: '../../../static/dream/center/wanjia.png',effect:[]},
                    {key:'2-2-6',label: 'es6',path: '/mcenter/es6',icon: '../../../static/dream/center/wanjia.png',effect:[]},
                ]},
                {key: '3',label: 'vue知识点',path: '',icon: '../../../static/dream/center/pai.png',effect:[
                    {key:'3-2-1',label: 'v-标签',path: '/mcenter/v_tag',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key:'3-2-2',label: 'vue修饰符',path: '/mcenter/modifier',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key:'3-2-3',label: '生命周期',path: '/mcenter/lifecycle',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key:'3-2-4',label: 'vuex',path: '/mcenter/vuex',icon: '../../../static/dream/center/tuandui.png',effect:[]},
                    {key:'3-2-5',label: '组件遍历',path: '/mcenter/ergodic',icon: '../../../static/dream/center/daili.png',effect:[]},
                    {key:'3-2-6',label: '路由传参',path: '/mcenter/router',icon: '../../../static/dream/center/wanjia.png',effect:[]},
                    {key:'3-2-7',label: '动态样式',path: '/mcenter/class',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                    {key:'3-2-8',label: '引用less',path: '/mcenter/quote',icon: '../../../static/dream/center/shouyi.png',effect:[]},
                    {key:'3-2-9',label: '子父通讯',path: '/mcenter/parent',icon: '../../../static/dream/center/tuiguang.png',effect:[]},
                    {key:'3-2-10',label: '全局方法',path: '/mcenter/public',icon: '../../../static/dream/center/gonggao.png',effect:[]},
                    {key:'3-2-11',label: 'watch监听',path: '/mcenter/watch',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                    {key:'3-2-12',label: 'computed',path: '/mcenter/computed',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                    {key:'3-2-13',label: 'filters',path: '/mcenter/filters',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                    {key:'3-2-14',label: 'transition',path: '/mcenter/transition',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                    {key:'3-2-15',label: 'refs',path: '/mcenter/refs',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                    {key:'3-2-16',label: 'canvas',path: '/mcenter/canvas',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                    {key:'3-2-17',label: 'echarts图表',path: '/mcenter/echarts',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                    {key:'3-2-18',label: 'base64解密',path: '/mcenter/base64',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                    {key:'3-2-19',label: 'mock模拟接口',path: '/mcenter/mock',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                    {key:'3-2-20',label: '缓存',path: '/mcenter/cache',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                    {key:'3-2-21',label: 'axios配置',path: '/mcenter/axios',icon: '../../../static/dream/center/caiwu.png',effect:[]}
                ]},
                {key: '4',label: 'vue功能集',path: '',icon: '../../../static/dream/center/qipai.png',effect: [
                    {key: '4-2-1',label: '下载',path: '/mcenter/download_ex',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key: '4-2-2',label: 'copy复制',path: '/mcenter/copy',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key: '4-2-3',label: '字段变量',path: '/mcenter/field',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key: '4-2-4',label: '返回顶部',path: '/mcenter/backtotop',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key: '4-2-5',label: '分页封装',path: '/mcenter/pagination',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key: '4-2-6',label: '上传图片列表',path: '/mcenter/upload',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key: '4-2-7',label: '单个上传图片',path: '/mcenter/upload1',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key: '4-2-8',label: '懒加载',path: '/mcenter/lazy',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key: '4-2-9',label: '视频',path: '/mcenter/video',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key: '4-2-10',label: '文本编辑器',path: '/mcenter/editor',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key: '4-2-11',label: '二维码',path: '/mcenter/vueqr',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key: '4-2-12',label: '浏览器监听',path: '/mcenter/listener',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key: '4-2-13',label: 'websocket',path: '/mcenter/websocket',icon: '../../../static/dream/center/qipai.png',effect:[]},
                    {key: '4-2-14',label: 'pc自适应',path: '/mcenter/adaption',icon: '../../../static/dream/center/qipai.png',effect:[]},
                ]},
                {key: '5',label: '拓展知识',path: '',icon: '../../../static/dream/center/tuiguang.png',effect:[
                    {key:'5-2-1',label: '知识1',path: '/mcenter/research',icon: '../../../static/dream/center/daili.png',effect:[]},
                ]},
                {key: '6',label: '面试要谈',path: '',icon: '../../../static/dream/center/tuandui.png',effect:[
                    {key:'6-2-1',label: '要点1',path: '/mcenter/talk1',icon: '../../../static/dream/center/tuiguang.png',effect:[]},
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
    .example_frame{
        width: 100%;
        height: 1200px;
        .mixin_image(url('../../../static/dream/center/bg-guanli.jpg'));
        position: relative;
        .big_fish{
            .mixin_img(426px;487px);
            position: absolute;
            left: 0px;
            bottom: 0px;
        }
        .manage_content{
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
            .manage_content_left{
                .mixin_float(230px,auto,left);
                background: #513663;
                margin-right: 40px;
                min-height: 1130px;
                text-align: left;
                .icon_url_margin{
                    .mixin_img(20px,20px);
                    margin-right: 11px;
                    margin-top: -5px;
                }
            }
            .manage_content_right{
                .mixin_float(840px,1130px,right);
                overflow-x: hidden;
            }
        }
    }
}
</style>