<template>
  <div class="loading-box">
    <div class="loading">
      <div class="circle">
      </div>
      <div class="text">加载中...</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'loading',
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

<style lang="less" scoped>
@keyframes circle{
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
 }
 .loading-box {
   position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding-top: 100px;
 }
.loading {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #001018;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  .circle {
    width: 90px;
    height: 90px;
    border: 8px solid rgba(255,255,255,0.8);
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    border-radius: 50%;
    -webkit-animation:circle 1s infinite linear;
    animation:circle 1s infinite linear;
  }
  .text {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
}
</style>
