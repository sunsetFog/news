<template>
  <div id="watch">
    <input v-model="example0">
    <input v-model="example1">
    <!--　　当单观察数据examples2为对象时，如果键值发生变化，为了监听到数据变化，需要添加deep:true参数-->
    <input v-model="example2.inner0">
  </div>
</template>

<script>
export default {
  data() {
    return {
      example0: "",
      example1: "",
      example2: {
        inner0: 1,
        innner1: 99
      }
    };
  },
  watch: {
	$route(to, from) {//监听路由变化

	},
    example0(curVal, oldVal) {//watch监听数据，用于监听输入框或路由变化
      console.log(curVal, oldVal, typeof curVal);
    },
    example1: "revive", //值可以为methods的方法名
    example2: {
      //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
      handler(curVal, oldVal) {
        console.log(curVal, oldVal);
      },
      deep: true
    }
  },
  methods: {
    revive(curVal, oldVal) {
      console.log(curVal, oldVal);
    }
  }
};
</script>

<style lang="less" scoped>
#watch {

}
</style>