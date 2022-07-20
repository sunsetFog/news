<template>
    <section id="problem">
        <headDesign :title="ofTitle"></headDesign>
        <div class="rainbow">
            <p>
                Q：你们的商品是正品么？
            </p>
            <p>
                A：优品汇所售的商品都是正品，和专卖店销售的一样的，请您放心～
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: "problem",
    data() {
        return {
            ofTitle: ""
        }
    },
    created() {
        this.ofTitle = this.$route.query.title
    }
}
</script>

<style lang="less" scoped>
#problem {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .rainbow {
        width: 100%;
        padding: 25px 20px;
        box-sizing: border-box;
        background: #fff;
        p {
            width: 100%;
            text-align: left;
            padding: 10px 0;
            box-sizing: border-box;
        }
    }
}
</style>

