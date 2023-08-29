<template>
    <!--
        css3动画
        npm install animate.css --save-dev
        Animate中文网: http://www.animate.net.cn/

        加载方式1：
            在main.js里，全局加载--推荐
            import animate from 'animate.css'
            Vue.use(animate)
        加载方式2：
            局部加载--推荐
            <style>
                @import 'animate.css';
            </style>
        加载方式3：
            <script>
                import 'animate.css';
            </script>
        react使用方式： class="animated pulse"
     -->
    <section>
        <el-button @click="paly = !paly">开始动画{{ paly }}</el-button>
        <LineTextLine>fadeIn</LineTextLine>
        <transition
            enter-active-class="animate__animated animate__fadeInLeft"
            leave-active-class="animate__animated animate__fadeIn"
            >
            <button v-if="paly">fadeIn</button>
        </transition>
    </section>
</template>

<script>

export default {
    data() {
        return {
            paly: false
        }
    }
}
</script>

<style>
@import 'animate.css';
</style>
