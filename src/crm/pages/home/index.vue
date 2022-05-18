<template>
  <div id="home-box">
    <div class="home-left" :style="{width: left_width}">
      <div class="logo-name">
        <img :class="{'logo-img': true,'logo-active': isCollapse}" src="@static/crm/image/logo.png">
        <span v-show="!isCollapse">娱乐管理后台</span>
      </div>
      <el-menu
        @select="selectMenu"
        @open="openMenu"
        @close="closeMenu"
        :default-active="menuValue"
        background-color="#fff"
        text-color="black"
        unique-opened
        active-text-color="#ffd04b"
        mode="vertical"
        :collapse="isCollapse"
      >
        <div v-for="(item,index) in menuList" :key="index+'w'">
          <el-submenu :index="item.path?item.path:'no_path'+index">
            <template slot="title">
              <i class="el-icon-arrow-right" v-if="!item.open_active&&item.children.length!=0"></i>
              <i class="el-icon-arrow-down" v-if="item.open_active&&item.children.length!=0"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group v-if="item.children.length!=0">
              <div v-for="(val,ind) in item.children" :key="index+ind+'v'">
                <el-menu-item :index="val.path?val.path:'no_path'+index">
                  <div style="width: 100%;height: 100%;text-indent: 25px;">{{val.title}}</div>
                </el-menu-item>
              </div>
            </el-menu-item-group>
          </el-submenu>
        </div>
      </el-menu>
    </div>
    <div class="home-right">
      <div class="header">
        <i class="el-icon-menu show-menu" @click="collapseEvent"></i>
      </div>
      <div class="navigation-tab">
        <el-tabs
          v-model="tabs_value"
          type="card"
          closable
          @tab-click="penTab"
          @tab-remove="removeTab"
        >
          <el-tab-pane
            v-for="(item, index) in tabList"
            :key="item.path"
            :label="item.title"
            :name="item.path"
          ></el-tab-pane>
        </el-tabs>
      </div>
      <div class="pen-router-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
    
<script>
import lodash from "lodash";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  data() {
    return {
      isCollapse: false,
      left_width: "300px",
      tabs_value: ""
    };
  },
  created() {
    console.log("loca===", lodash.uniqueId("contact_"), this.menuList);
    console.log("tabList===", this.tabList);
  },
  watch: {
    $route(to, from) {
      console.log("bttt-88", to, from);
    },
    // 报错：Computed property "XXX" was assigned to but it has no setter
    // computed没有set函数，因为vuex中，computed和v-model冲突
    tabsValue(cur, old) {
      this.tabs_value = cur;
    }
  },
  computed: {
    ...mapGetters(["tabList", "menuList", "menuValue", "tabsValue"])
  },
  mounted() {},
  methods: {
    collapseEvent() {
      if (this.isCollapse) {
        this.isCollapse = false;
        this.left_width = "300px";
      } else {
        this.isCollapse = true;
        this.left_width = "63px";
      }
    },
    // 标签页事情
    penTab(item) {
      let index = Number(item.index);
      console.log("penTab====", index);
      this.$store.commit("menuValue", this.tabList[index].menu_active);
      this.$store.commit("modifyTab", this.tabList[index].path);
      this.$router.push({ path: this.tabList[index].path });
    },
    // 关闭标签页事件
    removeTab(item) {
      let index = Number(item.index);
      console.log("removeTab====", index);
      this.$store.commit("removePane", index);
    },
    // 展开菜单
    openMenu(path) {
      console.log("openMenu", path);
      this.initialization();
      for (let i = 0; i < this.menuList.length; i++) {
        if (path == this.menuList[i].id) {
          this.menuList[i].open_active = true;
        }
      }
      if (path == "/home/world/world") {
        this.flower(path);
      }
    },
    closeMenu(path) {
      console.log("closeMenu", path);
      this.initialization();
    },
    initialization() {
      for (let i = 0; i < this.menuList.length; i++) {
        this.menuList[i].open_active = false;
      }
    },
    // 选中菜单
    selectMenu(path) {
      console.log("selectMenu", path);
      this.flower(path);
    },
    flower(path) {
      this.$store.commit("modifyTab", path);
      this.$store.commit("menuValue", path);
      this.$router.push({ path: path });
      for (let i = 0; i < this.menuList.length; i++) {
        if (path.indexOf("no_path") != -1 || path == "/home/world/world") {
          this.$store.commit("addPane", {
            title: this.menuList[i].title,
            path: this.menuList[i].path,
            menu_active: path
          });
          return;
        }
        for (let j = 0; j < this.menuList[i].children.length; j++) {
          if (path == this.menuList[i].children[j].path) {
            this.$store.commit("addPane", {
              title: this.menuList[i].children[j].title,
              path: this.menuList[i].children[j].path,
              menu_active: path
            });
          }
        }
      }
    }
  }
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
    /deep/.el-menu {
      flex: 1;
    }
    /*由于 element-ui 的<el-menu>标签本身希望里面嵌套的是<el-menu-item>,<el-submenu>,<el-menu-item-group>之一，但是却嵌套了<div>,而导致收折就隐藏不了文字*/
    /*隐藏文字*/
    /deep/.el-menu--collapse .el-submenu__title span {
      display: none;
    }
    /*隐藏 > */
    /deep/.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
      display: none;
    }

    /*菜单关闭*/
    /deep/.el-submenu>.el-submenu__title .el-submenu__icon-arrow{
      -webkit-transform: rotateZ(-90deg); 
      -ms-transform: rotate(-90deg);
      transform: rotateZ(-90deg); 
    }
    /*菜单展开*/
    /deep/.el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow{
      -webkit-transform: rotateZ(0deg); 
      -ms-transform: rotate(0deg);
      transform: rotateZ(0deg); 
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
      /deep/.el-tabs__header {
        border-bottom: 0px solid #E4E7ED;
        margin: 0;
      }
      /deep/ .el-tabs__nav {
        border-bottom: 1px solid #E4E7ED;
      }
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