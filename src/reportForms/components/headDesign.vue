<template>
    <section id="headDesign">
        <img @click="backWay" class="u333" src="@static/mall/register/u333.png"/>
        <span>{{title}}</span>
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: "headDesign",
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {

        }
    },
    methods: {
        backWay() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less" scoped>
#headDesign {
    width: 100%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    background: @color_beijing;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 999;
    .u333 {
        height: 20px;
        position: absolute;
        left: 20px;
        top: 12px;
    }
    span {
        font-size: 15px;
    }
}
</style>

