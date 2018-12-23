<template>
  <section class="layout">
    <div class="case" v-show="stick">
      <ul v-for="item in collectionList">
        <router-link active-class="active" :to="{path:item.path}" tag="li">
          <span>{{ item.label }}</span>
        </router-link>
      </ul>
    </div>
<!-- Vue2.0页面缓存和不缓存的方法，以及watch监听会遇到的问题 -->
<!-- 从缓存页面跳转到不缓存页面，或者从不缓存页面跳转到缓存页面的时候，会发现watch是不能监听路由的，
是因为缓存和不缓存页面分别在不同的div里面，一个div里面是不可能监听到另一个div的路由的，
所有需要把监听的路由都加上缓存（在路由添加 meta: { keepAlive: true }），路由在缓存页面之间进行跳转的时候，就可以通过监听路由来进行判断数据是否需要更新。 -->

    <div class='contain'>
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
      collectionList: [
        {label: '路由',path:'/subroute'},
        {label: '组件遍历',path:'/ergodic'},
        {label: 'vuex',path: '/vuex'},
        {label: 'canvas',path: '/canvas'},
        {label: 'echart',path: '/echarts'},
        {label: '子组件',path: '/children'},
        {label: '父组件',path: '/parent'},
        {label: '公用方法',path: '/public'},
        {label: 'class',path: '/class'},
        {label: 'watch监听',path: '/watch'},
        {label: 'computed',path: '/computed'},
        {label: 'ref',path: '/refs'},
        {label: 'filter',path: '/filters'},
        {label: '元素',path: '/element'},
        {label: 'mock',path: '/mock'},
        {label: 'transition',path: '/transition'},
        {label: '引用',path: '/quote'},
        {label: 'es6',path: '/es6'},
        {label: 'base解密',path: '/base64'},
        {label: '路由传参',path: '/route'},
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
  mounted(){
    document.title = this.$route.meta.title;
    this.foot = this.$route.meta.foot;
     if(this.$route.meta.crux != undefined){
          this.stick = this.$route.meta.crux;
      }else{
          this.stick = true;
      }
    console.log('route路由参数',this.$route.meta.foot,this.$route.params,this.$route.meta.title,this.$route.meta.crux);//获取路由参数
    //全局接口，必定运行的,很适合用cookie,localStorage,session或vuex传值，避免跳链接,没设置,就获取为undefine的
    this.$http.post('http://192.168.0.112:8080/api/home').then((response) => {
        console.log('home++api',response);
        // vue-浏览器缓存
        window.localStorage.setItem('game',response.body.data.game);
        window.localStorage.setItem('stimulate',response.body.data.stimulate);
        this.transmit = window.localStorage.getItem('game');
        sessionStorage.setItem("game",'王者荣耀');
        this.transmit = sessionStorage.getItem("name");  
        console.log('原型prototype',this.$teacher());
        this.setCookie('setCookie',"存储cookie",1);
        this.transmit = this.getCookie('setCookie'); 
        // document.cookie = "name=play;value=vlue";

      // localStorage.clear()    //清除所有本地缓存
      // sessionStorage.clear()  //清除当前会话所有缓存
      // sessionStorage.removeItem('username') //清除指定缓存


        let stars = "";
        // unicode编码    后台编码encode(),前端解码decodeURI('string')
        //在线编码http://tool.chinaz.com/tools/unicode.aspx
        stars = decodeURI('\u5915\u9633\u7ea2');
        console.log('编码',stars);
		})
  },
  methods:{

  }
}
</script>

<style scoped>

</style>

<style>
/* 多文件全局css，类级别最高,可覆盖类名作用 */
@import 'assets/app.css';
@import 'assets/index.css';
</style>
