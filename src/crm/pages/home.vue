<template>
    <div id="home">
          <div class="heart-left" :style="{width: left_width}">
              <div class="logo-name">
                  <img :class="{'logo-img': true,'logo-active': isCollapse}" src="@static/crm/image/logo.png"/>
                  <span v-show="!isCollapse">娱乐管理后台</span>
              </div>
              <el-menu
                @select="summer"
                @open="handleOpen"
                @close="handleClose"
                :default-active="menuIndex"
                background-color="#fff"
                text-color="black"
                unique-opened
                active-text-color="#ffd04b"
                mode="vertical"
                :collapse="isCollapse"
            >
                <div v-for="(item,index) in navmenuArr" :key="index+'w'">
                  <el-submenu :index="item.id" >
                    <template slot="title">
                      <i class="el-icon-arrow-right" v-if="!item.open_active&&item.children.length!=0"></i>
                      <i class="el-icon-arrow-down" v-if="item.open_active&&item.children.length!=0"></i>
                      <span>{{item.title}}</span>
                    </template>
                    <el-menu-item-group v-if="item.children.length!=0">
                      <div v-for="(val,ind) in item.children" :key="index+ind+'v'">
                        <el-menu-item :index="val.id"><div style="width: 100%;height: 100%;text-indent: 25px;">{{val.title}}</div></el-menu-item>
                      </div>
                    </el-menu-item-group>
                  </el-submenu>
                </div>
              </el-menu>
          </div>
          <div class="heart-right">
              <div class="header">
                    <i class="el-icon-menu show-menu" @click="collapseEvent"></i>
                </div>
              <div class="cha-tibs">
                  <ul>
                    <li  v-for="(item,index) in tabList" :key="index" :class="{'pen-nice': item.tab_active}" @click="penTab(index)">{{item.title}}<i class="el-icon-close" @click.stop="closeTab(index)"></i></li>
                  </ul>
              </div>
              <div class="pen-router-view">
                  <router-view></router-view>
              </div>
          </div>
        
    </div>
</template>
    
<script>
import lodash from 'lodash'
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  data() {
    return {
        isCollapse: false,
        left_width: '300px',
      navmenuArr: [
        {
          title: "首页",
          id: "1",
          open_active: false,
          path: "/world/world",
          children: []
        },
        {
          title: "表格",
          id: "2",
          open_active: false,
          path: "/",
          children: [{ title: "原版el-table", id: "2-1", open_active: false, path: "/administrators/setton" }],
        },
        {
          title: "权限管理",
          id: "3",
          open_active: false,
          path: "/",
          children: [
            { title: "角色列表", id: "3-1", open_active: false, path: "/jurisdiction/role" },
            { title: "菜单列表", id: "3-2", open_active: false, path: "/jurisdiction/menu" }
          ],
        },
        {
          title: "系统设置",
          id: "4",
          open_active: false,
          path: "/",
          children: [{ title: "网站设置", id: "4-1", open_active: false, path: "/system/initial" }],
        },
      ],
    };
  },
  created() {
    this.navmenuArr = this.addMenu;
      console.log('loca===', lodash.uniqueId('contact_'),this.navmenuArr)
  },
  watch: {
    $route(to, from) {
      console.log("bttt-88", to, from);
    },
  },
  computed: {
    ...mapGetters(["tabList","addMenu","menuIndex"]),
  },
  mounted() {
  },
  methods: {
    collapseEvent() {
      if(this.isCollapse) {
        this.isCollapse = false;
        this.left_width = '300px';
      } else {
        this.isCollapse = true;
        this.left_width = '63px';
      }
    },
    penTab(index) {
      // 标签页事件
      this.$store.commit("menuIndex", this.tabList[index].id);
      this.$store.commit("chaActive", index);
      this.$router.push({ path: this.tabList[index].path });
    },
    closeTab(index) {
      // 关闭标签页事件
      this.$store.commit("removePane", index);
    },
    handleOpen(key, keyPath) {
      console.log('key',key,'path', keyPath);
      this.initialization();
      for (let i = 0; i < this.navmenuArr.length; i++) {
        if (key == this.navmenuArr[i].id) {
          this.navmenuArr[i].open_active = true;
        }
      }
      if (key == 1) {
        this.flower("首页", '/world/world');
        return;
      }
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      this.initialization();
    },
    initialization() {
      for (let i = 0; i < this.navmenuArr.length; i++) {
        this.navmenuArr[i].open_active = false;
      }
    },
    summer(index, indexPath) {
      //左边导航事件
      console.log("sasa", index, indexPath);
      if (indexPath.length >= 1){
        this.$store.commit("menuIndex", index);
      }
      for (let i = 0; i < this.navmenuArr.length; i++) {
        let title1 = this.navmenuArr[i].title;
        let path1 = this.navmenuArr[i].path;
        for (let j = 0; j < this.navmenuArr[i].children.length; j++) {
          if (index == this.navmenuArr[i].children[j].id) {
            let title2 = this.navmenuArr[i].children[j].title;
            let path2 = this.navmenuArr[i].children[j].path;
            let id2 = this.navmenuArr[i].children[j].id;
            this.flower(title1, path1, title2, path2,id2);
          }
        }
      }
    },
    flower(title1, path1, title2, path2,id2) {
      // console.log('catch===', path2)
      if (path2) {
        this.$router.push({ path: path2 });
      } else {
        this.$router.push({ path: path1 });
        title2 = title1;
        path2 = path1;
      }

      let hy = [
        { path: "no_path", name: title1 },
        { path: path2, name: title2 },
      ];
      // this.$store.commit("addWater", hy);
      // console.log('vuex--', this.bread)
      this.$store.commit("addPane", {
        title: title2,
        path: path2,
        id: id2,
        save_bread: JSON.parse(sessionStorage.getItem("bread")),
        tab_active: false,
      });

      for (let k = 0; k < this.tabList.length; k++) {
        if (this.tabList[k].path == path2) {
          // 锁定点击对应tabList数组下标
          this.$store.commit("chaActive", k);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
#home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    .heart-left {
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
              color: #435EBE;
              font-weight: 600;
              font-size: 24px;
          }
      }
      /deep/.el-menu {
         flex: 1;
      }
        /*由于 element-ui 的<el-menu>标签本身希望里面嵌套的是<el-menu-item>,<el-submenu>,<el-menu-item-group>之一，但是却嵌套了<div>,而导致收折就隐藏不了文字*/
        /*隐藏文字*/
        /deep/.el-menu--collapse  .el-submenu__title span{
            display: none;
        }
        /*隐藏 > */
        /deep/.el-menu--collapse  .el-submenu__title .el-submenu__icon-arrow{
            display: none;
        }
    }
    .heart-right {
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
            box-sizing: border-box;
            overflow: hidden;
            box-shadow: 0 1px 2px #999999;
            .show-menu {
                font-size: 24px;
            }
        }
      .cha-tibs {
        width: 100%;
        height: 40px;
        line-height: 35px;
        padding: 2.5px 0 2.5px 10px;
        box-sizing: border-box;
        ul {
          .pen-nice {
            background: #c0c4cc;
            color: white;
          }
          li {
            min-width: 65px;
            height: 35px;
            float: left;
            font-size: 13px;
            font-weight: bold;
            border-top: 1px solid #e4e7ed;
            border-bottom: 1px solid #e4e7ed;
            border-right: 1px solid #e4e7ed;
            padding: 0 0 0 10px;
            cursor: pointer;
            i {
              float: right;
              margin: 10px 10px 0 8px;
            }
          }
          li:nth-of-type(1) {
            border-left: 1px solid #e4e7ed;
          }
          li:hover {
            color: red;
          }
        }
      }
      .pen-router-view {
          width: 100%;
          flex: 1;
      }
    }
}
</style>