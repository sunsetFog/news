<template>
  <section id="home-box">
    <div class="home-left" :style="{width: left_width}">
      <div class="logo-name">
        <img :class="{'logo-img': true,'logo-active': isCollapse}" src="@static/crm/image/logo.png">
        <span v-show="!isCollapse">娱乐管理后台</span>
      </div>
      <menuDesign :isCollapse="isCollapse"></menuDesign>
    </div>

    <div class="home-right">
      <div class="header">
        <i class="el-icon-menu show-menu" @click="collapseEvent"></i>
      </div>
      <div class="navigation-tab">
          <tabsDesign></tabsDesign>
      </div>
      <div class="pen-router-view">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>
    
<script>
import menuDesign from '@/crm/components/menuDesign.vue';
import tabsDesign from '@/crm/components/tabsDesign.vue';
export default {
    name: 'home',
    components: { menuDesign, tabsDesign },
    data() {
        return {
            isCollapse: false,
            left_width: '300px'
        };
    },
    created() {

    },
    watch: {
        $route(to, from) {
            console.log('bttt-88', to, from);
        }
    },

    mounted() {},
    methods: {
        collapseEvent() {
            if (this.isCollapse) {
                this.isCollapse = false;
                this.left_width = '300px';
            } else {
                this.isCollapse = true;
                this.left_width = '63px';
            }
        },
    },
};
</script>

<style lang="less" scoped>
#home-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    .home-left {
        height: 100%;
        float: left;
        box-shadow: 0 1px 2px #999999;
        display: flex;
        flex-direction: column;
        .logo-name {
            width: 100%;
            height: 50px;
            margin: 20px 0 30px 0;
            .logo-img {
                width: 50px;
                height: 50px;
                float: left;
                margin: 0 10px;
            }
            .logo-active {
                width: 30px;
                height: 30px;
                margin: 0 0px 0 16px;
            }
            span {
                height: 50px;
                line-height: 50px;
                display: inline-block;
                float: left;
                color: #435ebe;
                font-weight: 600;
                font-size: 24px;
            }
        }
        
    }
    .home-right {
        flex: 1;
        height: 100%;
        float: right;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .header {
            width: 100%;
            height: 50px;
            line-height: 50px;
            padding: 0 20px;
            box-shadow: 0 0.5px 2px #999999;
            .show-menu {
                font-size: 24px;
            }
        }
        .navigation-tab {
            width: 100%;
            height: 50px;
            padding: 5px 10px 0px 10px;
            box-shadow: 0 0.5px 2px #999999;
        }
        .pen-router-view {
            width: 100%;
            flex: 1;
            padding: 8px 10px 0px 10px;
            overflow: auto;
        }
    }
}
</style>