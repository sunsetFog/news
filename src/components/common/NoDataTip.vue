<template>
  <div class="nodata">
    <div class="text">暂无数据</div>
  </div>
</template>

<script>

export default {
  name: 'nodata',
  data () {
    return {
    }
  },
  props: {
    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/rem.scss';
.nodata {
  width: 100%;
  background-color: #001018; // rgba(200,200,200, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  font-size: px2rem(16);
}
</style>
