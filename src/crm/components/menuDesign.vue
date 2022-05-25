<template>
  <section id="menuDesign">
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
    created() {
        // 刷新初始化赋值
        let that = this;
        let tabArr = JSON.parse(sessionStorage.getItem('tabList'));
        tabArr = tabArr.filter(function(item){
            return item.path == that.$route.path;
        })
        that.$store.commit('addTabs', tabArr);
        that.$store.commit("menuOfValue", sessionStorage.getItem('menu_value'));
        that.$store.commit("tabsOfValue", sessionStorage.getItem('tabs_value'));


        let index = sessionStorage.getItem("menu_index");
        that.menuList[index].open_active = true;
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
        openMenu(index) {
            index = Number(index.split('sign')[1]);
            sessionStorage.setItem("menu_index", index);
            console.log('openMenu', index);
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

}
</style>

