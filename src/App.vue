<template>
  <section id="main_app">
    <section v-show="stick">
<!-- element-ui/container容器布局 -->
<!-- 路由视图的用法:路由跳转只在视图内 -->
    <el-container>
      <el-header>
        <div style="font-size: 32px;letter-spacing:5px;">夕阳红雾</div>
          <!-- <span v-for="(item,index) in collectionList[0].effect" v-if="index<=-8">
            <router-link :to="{path:item.path}">
            <el-button style="width:90px;margin-right: 5px;">{{ item.label }}</el-button>
            </router-link>
          </span> -->
      </el-header>
          <el-container>
              <el-aside width="200px">
                <!-- <div v-for="(item,index) in collectionList[0].effect" v-if="index>8">
                  <router-link :to="{path:item.path}">
                  <el-button style="width:110px;margin:10px;">{{ item.label }}</el-button>
                  </router-link>
                </div> -->

                <el-menu
                  router
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose">

                  <el-submenu :index="item.key" :key="item.key" v-for="(item,index) in collectionList">
                    <template slot="title">
                      <i :class="item.icon"></i>
                      <span>{{item.title}}</span>
                    </template>
                    <section v-for="(term,index) in item.effect">
                        <el-menu-item :index="term.path">{{term.label}}</el-menu-item>
                    </section>
                  </el-submenu>
                </el-menu>
                <!-- router与index是配置路由链接 -->



              </el-aside>

              <el-main>
                <div class='contain'>
                  <!-- <keep-alive>包含<router-view>实现页面缓存，加速页面加载， -->
                  <keep-alive><!--缓存的页面-->
                    <router-view v-if="!$route.meta.keepAlive"></router-view>    <!-- 路由视图 -->
                  </keep-alive>
                  <router-view v-if="$route.meta.keepAlive"></router-view><!--不缓存的页面-->
                </div>
              </el-main>
          </el-container>
    </el-container>

  </section>
<!-- Vue2.0页面缓存和不缓存的方法，以及watch监听会遇到的问题 -->
<!-- 从缓存页面跳转到不缓存页面，或者从不缓存页面跳转到缓存页面的时候，会发现watch是不能监听路由的，
是因为缓存和不缓存页面分别在不同的div里面，一个div里面是不可能监听到另一个div的路由的，
所有需要把监听的路由都加上缓存（在路由添加 meta: { keepAlive: true }），路由在缓存页面之间进行跳转的时候，就可以通过监听路由来进行判断数据是否需要更新。 -->
    <div class='contain' v-show="!stick">
      <!-- <keep-alive>包含<router-view>实现页面缓存，加速页面加载， -->
      <keep-alive><!--缓存的页面-->
        <router-view v-if="!$route.meta.keepAlive"></router-view>    <!-- 路由视图 -->
      </keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view><!--不缓存的页面-->
    </div>



    <!-- 当引入keep-alive的时候，页面第一次进入，钩子的触发顺序created-> mounted-> activated，退出时触发deactivated.
      当再次进入（前进或者后退）时，只触发activated。 -->
    <Button v-if="foot" style="width: 100%;position: fixed;bottom: 0px;left: 0px;" type="warning">foot导航栏</Button>
  </section>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {
      collectionList: [{key: '1',title: '知识点',icon: 'el-icon-star-off',effect:[
          {key:'1-1',label: '路由',path:'/subroute'},
          {key:'1-2',label: '组件遍历',path:'/ergodic'},
          {key:'1-3',label: 'vuex',path: '/vuex'},
          {key:'1-4',label: 'canvas',path: '/canvas'},
          {key:'1-5',label: 'echart',path: '/echarts'},
          {key:'1-6',label: '子组件',path: '/children'},
          {key:'1-7',label: '父组件',path: '/parent'},
          {key:'1-8',label: '公用方法',path: '/public'},
          {key:'1-9',label: 'rem',path: '/rem'},
          {key:'1-10',label: 'class',path: '/class'},
          {key:'1-11',label: 'watch监听',path: '/watch'},
          {key:'1-12',label: 'computed',path: '/computed'},
          {key:'1-13',label: 'ref',path: '/refs'},
          {key:'1-14',label: 'filter',path: '/filters'},
          {key:'1-15',label: '元素',path: '/element'},
          {key:'1-16',label: 'mock',path: '/mock'},
          {key:'1-17',label: 'transition',path: '/transition'},
          {key:'1-18',label: '引用',path: '/quote'},
          {key:'1-19',label: 'es6',path: '/es6'},
          {key:'1-20',label: 'base解密',path: '/base64'},
          {key:'1-21',label: '路由传参',path: '/route'},
        ]},
        {key: '2',title: '效果集',icon: 'el-icon-refresh',effect: [
          {key: '2-1',label: '返回顶部',path: '/backtotop'},
          {key: '2-2',label: '分页封装',path: '/page'},
          {key: '2-3',label: '下拉加载',path: '/loadmore'},
          {key: '2-4',label: '上传图片列表',path: '/upload'},
          {key: '2-5',label: '单个上传图片',path: '/upload1'},
          {key: '2-6',label: '地址管理',path: '/address'},
          {key: '2-7',label: '复制',path: '/copy'},
          {key: '2-8',label: '签到',path: '/date'},
          {key: '2-9',label: '字段变量',path: '/field'}
        ]}
      ],
      foot: false,
      stick: false,
      transmit: ''
    }
  },
  watch: {
    //监听路由变化
      $route(to,from){
        if(to.meta.title){
          document.title = to.meta.title;
        }
        this.foot = to.meta.foot;
        if(to.meta.crux != undefined){
          this.stick = to.meta.crux;
        }else{
          this.stick = true;
        }
        console.log('监听路由变化',to,from,this.stick);
      }
  },
  created(){
    document.title = this.$route.meta.title;
    this.foot = this.$route.meta.foot;
     if(this.$route.meta.crux != undefined){
          this.stick = this.$route.meta.crux;
      }else{
          this.stick = true;
      }
    console.log('route路由参数',this.$route.meta.foot,this.$route.params,this.$route.meta.title,this.$route.meta.crux);//获取路由参数
    //全局接口，必定运行的,很适合用cookie,localStorage,session或vuex传值，避免跳链接,没设置,就获取为undefine的
    this.$http.post('http://localhost:8080/api/home').then((response) => {
        console.log('home++api',response);
        // vue-浏览器缓存
        window.localStorage.setItem('game',response.body.data.game);
        window.localStorage.setItem('stimulate',response.body.data.stimulate);
        this.transmit = window.localStorage.getItem('game');
        sessionStorage.setItem("game",'王者荣耀');
        this.transmit = sessionStorage.getItem("name");  
        console.log('原型prototype',this.$teacher());

        //vue-cookies的使用
        //https://www.jianshu.com/p/535b53989b39
        // https://www.npmjs.com/package/vue-cookies
        this.$cookies.set("token","GH1.1.1689020474.1484362313","10h");
        console.log('获取vue-cookies',this.$cookies.get("token"));
        //原生cookies的使用
        this.setCookies("easy","cool",3);
        console.log("简单型获取cookies",this.getCookies("easy"))

      // localStorage.clear()    //清除所有本地缓存
      // sessionStorage.clear()  //清除当前会话所有缓存
      // sessionStorage.removeItem('username') //清除指定缓存


        // unicode编码    后台编码encode(),前端解码decodeURI('string')
        //在线编码http://tool.chinaz.com/tools/unicode.aspx
        let stars = "";
        stars = decodeURI('\u5915\u9633\u7ea2');
        console.log('编码',stars);
		})
  },
  methods:{
    //简单的设置cookies
      setCookies: function (name, value, days) {
        var d = new Date;
        d.setTime(d.getTime() + 24*60*60*1000*days);
        window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
      },
    //简单的获取cookies
      getCookies: function (name) {
        var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
      },
    //简单的删除cookies
      deleteCookies: function (name) {
        this.set(name, '', -1);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
/* 多文件全局css，类级别最高,可覆盖类名作用 */
// 但是要有样式嵌套，不然影响全局
@import 'assets/app.css';
@import 'assets/index.less';
#main_app{
  .contain{
    width: 100%;
    overflow: hidden;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    min-height: 800px;
    padding-bottom: 50px;
    box-sizing: border-box;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    min-height: 800px;
    padding-bottom: 50px;
    box-sizing: border-box;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
   
}
</style>
