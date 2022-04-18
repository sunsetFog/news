<template>
    <section id="printEditor">
        <CodeEditor v-model="JSON.stringify(routerList, null, 4)"></CodeEditor>
        <!-- <CodeEditor :jsonString="routerList"></CodeEditor> -->
    </section>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
import CodeEditor from '@/explore/components/printEditor/index.vue';
// import CodeEditor from '@/explore/components/printEditor/jsonPrint2.vue';
export default {
    name: "printEditor",
    components: { CodeEditor },
    data() {
        return {

        }
    },
    computed:{ // 使用vuex
        ...mapGetters(['routerList'])
    },
}
</script>

<style lang="less" scoped>
#printEditor {
    
}
</style>

