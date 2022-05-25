<template>
  <section id="tabsDesign">
    <el-tabs v-model="tabs_value" type="card" closable @tab-click="penTab" @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in tabList"
        :key="item.key"
        :label="item.title"
        :name="item.key"
      ></el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
    name: 'tabsDesign',
    data() {
        return {
            tabs_value: '',
        };
    },
    computed: {
        ...mapGetters(['tabList', 'tabsValue'])
    },
    watch: {
        // 报错：Computed property "XXX" was assigned to but it has no setter
        // computed没有set函数，因为vuex中，computed和v-model冲突
        tabsValue(cur, old) {
            this.tabs_value = cur;
        },
    },
    methods: {
        // 标签页事情
        penTab(item) {
            let index = Number(item.index);
            console.log('penTab====', item);
            this.$store.commit('menuOfValue', this.tabList[index].key);
            this.$store.commit('tabsOfValue', this.tabList[index].key);
            this.$router.push({ path: this.tabList[index].path });
        },
        // 关闭标签页事件
        removeTab(item) {
            let index = Number(item.index);
            console.log('removeTab====', index);
            this.$store.commit('removeTabs', index);
        },
    },
};
</script>

<style lang="less" scoped>
#tabsDesign {
    /deep/.el-tabs__header {
                border-bottom: 0px solid #e4e7ed;
                margin: 0;
            }
            /deep/ .el-tabs__nav {
                border-bottom: 1px solid #e4e7ed;
            }
}
</style>

