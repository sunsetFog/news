<template>
    <section id="anchorPoint">
        <a href="#sign1">去找喵星人</a>
        <a href="#sign2">去找汪星人</a>
        <div style="width: 100%;height: 800px;background: blue;"></div>
        <h3 id="sign1">喵星人</h3>
        <div style="width: 100%;height: 800px;background: red;"></div>
        <!-- <h3 id="sign2">汪星人</h3> -->
        <a name="sign2">汪星人</a>
    </section>
</template>

<script>
/*

锚点

*/
export default {
    name: "anchorPoint",
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
#anchorPoint {
    a {
        color: white;
        margin: 0 20px;
    }
    
}
</style>


