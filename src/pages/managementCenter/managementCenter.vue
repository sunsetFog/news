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
                    
                    <el-menu-item index="/crux"><div style="width: 100%;height: 100%;"><img class="icon_url_margin" src="../../../static/dream/center/shezhi.png"/>管理中心</div></el-menu-item>

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
            menuList: [{key: '1',label: '知识点',path: '',icon: '../../../static/dream/center/pai.png',effect:[
                {key:'1-2-1',label: '生命周期',path:'/lifecycle',icon: '../../../static/dream/center/qipai.png',effect:[]},
                {key:'1-2-2',label: 'vuex',path: '/vuex',icon: '../../../static/dream/center/tuandui.png',effect:[]},
                {key:'1-2-3',label: '组件遍历',path: '/ergodic',icon: '../../../static/dream/center/daili.png',effect:[]},
                {key:'1-2-4',label: '路由传参',path: '/router',icon: '../../../static/dream/center/wanjia.png',effect:[]},
                {key:'1-2-5',label: '动态样式',path: '/class',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                {key:'1-2-6',label: '引用less',path: '/quote',icon: '../../../static/dream/center/shouyi.png',effect:[]},
                {key:'1-2-7',label: '子父通讯',path: '/parent',icon: '../../../static/dream/center/tuiguang.png',effect:[]},
                {key:'1-2-8',label: '全局方法',path: '/public',icon: '../../../static/dream/center/gonggao.png',effect:[]},
                {key:'1-2-9',label: 'watch监听',path: '/watch',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                {key:'1-2-10',label: 'computed',path: '/computed',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                {key:'1-2-11',label: 'es6',path: '/es6',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                {key:'1-2-12',label: 'filters',path: '/filters',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                {key:'1-2-13',label: 'transition',path: '/transition',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                {key:'1-2-14',label: 'refs',path: '/refs',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                {key:'1-2-15',label: 'canvas',path: '/canvas',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                {key:'1-2-16',label: 'echarts图表',path: '/echarts',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                {key:'1-2-17',label: 'base64解密',path: '/base64',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                {key:'1-2-18',label: 'mock模拟接口',path: '/mock',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                {key:'1-2-19',label: '缓存',path: '/cache',icon: '../../../static/dream/center/caiwu.png',effect:[]},
                {key:'1-2-20',label: 'axios配置',path: '/axios',icon: '../../../static/dream/center/caiwu.png',effect:[]}
                ]},
                {key: '2',label: '效果集',path: '',icon: '../../../static/dream/center/qipai.png',effect: [
                {key: '2-2-1',label: '下载',path: '/download_ex',icon: '../../../static/dream/center/qipai.png',effect:[]},
                {key: '2-2-2',label: 'copy复制',path: '/copy',icon: '../../../static/dream/center/qipai.png',effect:[]},
                {key: '2-2-3',label: '字段变量',path: '/field',icon: '../../../static/dream/center/qipai.png',effect:[]},
                {key: '2-2-4',label: '返回顶部',path: '/backtotop',icon: '../../../static/dream/center/qipai.png',effect:[]},
                {key: '2-2-5',label: '分页封装',path: '/pagination',icon: '../../../static/dream/center/qipai.png',effect:[]},
                {key: '2-2-6',label: '上传图片列表',path: '/upload',icon: '../../../static/dream/center/qipai.png',effect:[]},
                {key: '2-2-7',label: '单个上传图片',path: '/upload1',icon: '../../../static/dream/center/qipai.png',effect:[]},
                {key: '2-2-8',label: '懒加载',path: '/lazy',icon: '../../../static/dream/center/qipai.png',effect:[]},
                {key: '2-2-9',label: '视频',path: '/video',icon: '../../../static/dream/center/qipai.png',effect:[]},
                {key: '2-2-10',label: '文本编辑器',path: '/editor',icon: '../../../static/dream/center/qipai.png',effect:[]},
                {key: '2-2-11',label: '二维码',path: '/vueqr',icon: '../../../static/dream/center/qipai.png',effect:[]},
                {key: '2-2-12',label: '浏览器监听',path: '/listener',icon: '../../../static/dream/center/qipai.png',effect:[]},
                ]}
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
                .mixin_float(840px,905px,right);
                overflow-x: hidden;
            }
        }
    }
}
</style>