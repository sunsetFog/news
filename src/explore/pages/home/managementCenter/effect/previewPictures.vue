<template>
    <section id="previewPictures">
        <viewer :images="photo">
            <img
                v-for="(src,index) in photo"
                :src="src"
                :key="index"
            />
        </viewer>
    </section>
</template>

<script>
/*
vue-photo-preview
https://www.jianshu.com/p/775fb3784692
*/
export default {
    name: "previewPictures",
    data () {
        return {
            photo: [
                require('@static/reportForms/image/AheadVenus.png'),
                require('@static/reportForms/image/sale.png'),
                require('@static/reportForms/image/invoice.png')
            ]
        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>

</style>


