<template>
    <section id="notLoggedInUnit">
        <LineTextLine>未登录也能看，就是有些按钮事件会弹请登录窗口</LineTextLine>

        <button @click="playWay(0)">是否登录</button>
        &nbsp;&nbsp;&nbsp;
        <button @click="playWay(1)">是否绑定手机号</button>
        <NotLoggedIn ref="NotLoggedIn"></NotLoggedIn>
    </section>
</template>

<script>
import NotLoggedIn from "@/explore/components/promptWindow/notLoggedIn"
export default {
    name: "notLoggedInUnit",
    components: { NotLoggedIn },
    data() {
        return {
            showActive: false
        }
    },
    methods: {
        playWay(type = 0) {
            this.$refs.NotLoggedIn.determineWay(type)
        }
    }
}
</script>

<style lang="less">
</style>
