<template>
<section id="management">
    <div class="example-frame">
        <img class="big-fish" src="@static/picture/login/fish.png"/>
        <div class="manage--content">
            <router-view v-if="!manage_state"></router-view>
            <div class="manage-content-left" v-if="manage_state">
                <el-scrollbar style="width:100%;height:100%;">
                    <el-menu
                    :default-active="menuValue"
                    :unique-opened="true"
                    class="el-menu-vertical-demo"
                    @select="selectMenu"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#513663"
                    text-color="#d4c3b2"
                    active-text-color="#ffd04b"
                    >
                    <template v-for="(item, index01) in menuList">
                        <!-- 第一级 -->
                        <!-- el-menu-item的index绑定是@select事件的参数,也是:default-active的参数 -->
                        <el-menu-item :index="item.key" v-if="item.children.length == 0" :key="item.key">
                            <div style="width: 100%;height: 100%;">
                                <img class="icon-url-margin" src="@static/picture/center/shezhi.png"/>
                                管理中心
                            </div>
                        </el-menu-item>
                        <!-- el-submenu的index绑定是@open事件的参数 -->
                        <el-submenu :index="item.key" v-else :key="item.key">
                            <template slot="title">
                            <img class="icon-url-margin" :src="item.icon"/>
                            <span>{{item.title}}</span>
                            </template>

                            <section v-for="(row, index02) in item.children">
                                <!-- 第二级 -->
                                <el-menu-item :index="row.key" v-if="row.children.length == 0">
                                    <img class="icon-url-margin" :src="row.icon"/>
                                    {{row.title}}
                                </el-menu-item>
                                
                                <el-submenu :index="row.key" v-else>
                                    <template slot="title">
                                    <img class="icon-url-margin" :src="row.icon"/>
                                    <span>{{row.title}}</span>
                                    </template>
                                    <section v-for="(val,index03) in row.children">
                                        <!-- 第三级 -->
                                        <el-menu-item  :index="val.key">
                                            <img class="icon-url-margin" :src="val.icon"/>
                                            {{val.title}}
                                        </el-menu-item>
                                    </section>
                                </el-submenu>            

                            </section>

                        </el-submenu>
                    </template>

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
            manage_state: true,// 管理中心
        }
    },
    computed: {
        ...mapGetters(['menuList', 'menuValue'])
    },
    created() {
        console.log('---managementCenter-created---');
        // 刷新初始化赋值
        this.$store.commit("menuOfValue", sessionStorage.getItem('menu_value'));
    },
    activated() {
        console.log('---managementCenter-activated---');
    },
    deactivated() {
        console.log('---managementCenter-deactivated---');
    },
    methods:{
        // 选中菜单
        selectMenu(key) {
            this.recursion(this.menuList, key);
            console.log('selectMenu', key);
        },
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
        recursion(arr, key) {
            arr = arr || [];//退出遍历1. 空数组不会遍历，就不会调用自己了
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];

                if(item.key == key) {
                    console.log("--小白兔--", item);
                    // 菜单选中值
                    this.$store.commit('menuOfValue', item.key);
                    // 跳转
                    this.$router.push({ path: item.path });
                    break;
                }
                this.recursion(item.children, key);
            }
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