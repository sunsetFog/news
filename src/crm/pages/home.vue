<template>
    <div id="home">
        <div class="header">
            管理系统----{{$t("common.title")}}-----{{$t("home.title")}}
            <button @click="translate('zh')">中文翻译</button>----<button@click="translate('en')">英文翻译</button>
        </div>
        <div class="cont">
          <div class="left">
              <el-menu
                @select="summer"
                @open="handleOpen"
                @close="handleClose"
                :default-active="menuIndex"
                background-color="#545c64"
                text-color="#fff"
                unique-opened
                active-text-color="#ffd04b">
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
          <div class="right">
              <div class="pen-eat">
                  <ul>
                  <li  v-for="(item,index) in bread" :key="index" @click="penWater(index)">{{item.name}}<i v-if="index!=bread.length-1" class="el-icon-arrow-right"></i></li>
                  </ul>
              </div>
              <div class="cha-tibs">
                  <ul>
                    <li  v-for="(item,index) in tabList" :key="index" :class="{'pen-nice': item.tab_active}" @click="penTab(index)">{{item.title}}<i class="el-icon-close" @click.stop="closeTab(index)"></i></li>
                  </ul>
              </div>
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
      navmenuArr: [
        {
          title: "首页",
          id: "1",
          open_active: false,
          path: "/world/world",
          children: []
        },
        {
          title: "管理员设置",
          id: "2",
          open_active: false,
          path: "/",
          children: [{ title: "管理员列表", id: "2-1", open_active: false, path: "/administrators/setton" }],
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
  beforeCreate() {
    const lang = this.$i18n.locale;
    console.log("lang==", lang);
    const locals = require(`./locals/${this.$options.name}_${lang}`).default;
    this.$i18n.mergeLocaleMessage(lang, locals);
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
    ...mapGetters(["bread", "tabList","addMenu","menuIndex"]),
  },
  mounted() {
    let elHeight = document.getElementsByClassName("el-menu")[0];
    elHeight.style.height = document.documentElement.clientHeight - 40 + "px";
    let rightHight = document.getElementsByClassName("right")[0];
    rightHight.style.height =
      document.documentElement.clientHeight - 110 + "px";
  },
  methods: {
    translate(value) {
      if (value == "zh") {
        // this.$i18n.locale = 'en'
        sessionStorage.setItem("language", "zh");
      } else if (value == "en") {
        // this.$i18n.locale = 'zh'
        sessionStorage.setItem("language", "en");
      }
      window.location.reload();
    },
    penWater(index) {
      //面包屑事件
      this.$store.commit("banana", index);
    },
    penTab(index) {
      // 标签页事件
      this.$store.commit("menuIndex", this.tabList[index].id);
      this.$store.commit("chaActive", index);
      this.$router.push({ path: this.tabList[index].path });
      this.$store.commit("modifyBread", this.tabList[index].save_bread);
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
      this.$store.commit("addWater", hy);
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
  .header {
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: white;
    padding: 0 20px;
    box-sizing: border-box;
    background: #409eff;
  }
  .cont {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0 0 0 216px;
    box-sizing: border-box;
    .left {
      width: 216px;
      position: absolute;
      left: 0;
      top: 0;
      .el-menu {
        width: 216px;
        border: none;
      }
    }
    .right {
      width: 100%;
      height: 100%;
      float: left;
      .pen-eat {
        width: 100%;
        height: 35px;
        color: gray;
        font-size: 14px;
        line-height: 35px;
        padding: 0 0 0 10px;
        box-sizing: border-box;
        ul {
          li {
            float: left;
          }
        }
      }
      .cha-tibs {
        width: 100%;
        height: 35px;
        line-height: 35px;
        padding: 0 0 0 10px;
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
    }
  }
}
</style>