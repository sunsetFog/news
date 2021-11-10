<template>
    <section style="color: #fff;">
        {{outside}}---{{idea}}
    </section>
</template>

<script>
import lyMixin from './quote/lyMixin'
export default {
    name: 'sunMixin',
    mixins: [ lyMixin ],// 混入，合并的意思
    data () {
        return {
            idea: 'idea'
        }
    },
    created () {
        console.log('vue-created');
    }
}
</script>

<style lang="less" scoped>

</style>
