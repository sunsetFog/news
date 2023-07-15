<template>
    
</template>

<script>
export default {
    name: "defaultPath",
    data() {
        return {

        }
    },
    // 默认路由就是中转站
    beforeCreate() {
        if (this.$cookies.get("tokenPcClient")) {
            this.$router.push({ path: "/home/homeIndex/index"});
        } else {
            this.$router.push({ path: "/login"});
        }
    }
}
</script>

