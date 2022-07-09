<template>
    <section id="footerDesign">
        <img @click="backWay" class="u333" src="@static/mall/register/u333.png"/>
        <span>{{title}}</span>
    </section>
</template>

<script>
export default {
    name: "footerDesign",
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
#footerDesign {
    width: 100%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    background: #F8F8F8;
    position: fixed;
    left: 0px;
    top: 0px;
    .u333 {
        height: 28px;
        position: absolute;
        left: 20px;
        top: 8px;
    }
    span {
        font-size: 15px;
    }
}
</style>

