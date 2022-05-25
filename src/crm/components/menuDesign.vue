<template>
  <section id="menuDesign">
      --{{menuValue}}--
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
        <!-- index绑定的字符串是@open事件的参数 -->
        <el-submenu :index="'sign'+index">
          <template slot="title">
            <i class="el-icon-arrow-right" v-if="!item.open_active&&item.children.length!=0"></i>
            <i class="el-icon-arrow-down" v-if="item.open_active&&item.children.length!=0"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item-group v-if="item.children.length!=0">
            <div v-for="(val,ind) in item.children" :key="index+ind+'v'">
                <!-- index绑定的对象是@select事件的参数,也是:default-active的参数 -->
              <el-menu-item :index="val.key">
                <div style="width: 100%;height: 100%;text-indent: 25px;">{{val.title}}</div>
              </el-menu-item>
            </div>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </section>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
    name: 'menuDesign',
    data() {
        return {

        };
    },
    props: {
        isCollapse: {
            type: Boolean,
            default: function() {
                return false;
            },
        },
    },
    computed: {
        ...mapGetters(['menuList', 'menuValue'])
    },
    methods: {
        // 选中菜单
        selectMenu(key) {
            this.recursion(this.menuList, key);
            console.log('selectMenu', key);
        },
        recursion(arr, key) {
            arr = arr || [];//退出遍历1. 空数组不会遍历，就不会调用自己了
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];

                if(item.key == key) {
                    // 修改tabs数组或选中值
                    this.$store.commit('tabsOfValue', item.key);
                    // 菜单选中值
                    this.$store.commit('menuOfValue', item.key);
                    // 跳转
                    this.$router.push({ path: item.path });
                    // 修改tabs数组
                    this.$store.commit('addTabs', {
                        title: item.title,
                        path: item.path,
                        key: item.key
                    });
                }

                if (!item.children) {//退出遍历2. 结束一次循环，就不会调用自己了
                    continue;
                }
                this.recursion(item.children, key); // 传children数组
            }
        },
        // 展开菜单
        openMenu(path) {
            let index = Number(path.split('sign')[1]);
            console.log('openMenu', path);
            this.initMenu();
            this.menuList[index].open_active = true;
        },
        // 关闭菜单
        closeMenu(path) {
            console.log('closeMenu', path);
            this.initMenu();
        },
        // 初始化菜单
        initMenu() {
            for (let i = 0; i < this.menuList.length; i++) {
                this.menuList[i].open_active = false;
            }
        },
    },
};
</script>

<style lang="less" scoped>
#menuDesign {
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
        /deep/.el-submenu > .el-submenu__title .el-submenu__icon-arrow {
            -webkit-transform: rotateZ(-90deg);
            -ms-transform: rotate(-90deg);
            transform: rotateZ(-90deg);
        }
        /*菜单展开*/
        /deep/.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
            -webkit-transform: rotateZ(0deg);
            -ms-transform: rotate(0deg);
            transform: rotateZ(0deg);
        }
}
</style>

