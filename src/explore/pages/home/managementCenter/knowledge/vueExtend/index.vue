<template>
    <section>
        designDialog
    </section>
</template>

<script>
import designDialog from './renderDialog';
import pagination from '@/explore/components/pagination.vue';
export default {
    name: 'vueExtend',
    components:  { pagination },
    data() {
        return {

        }
    },
    created() {
        this.openDialog();
    },
    methods: {
        openDialog() {
            console.log('--openDialog--');
            const props = {
                formFooter: {okBtn: "发布"},
                formProps: {
                    labelSuffix: ": ",
                    labelWidth: "100px"
                },
                schema: {},
                uiSchema: {}
            };
            const instance = designDialog({
                VueComponent: pagination,// 组件名
                dialogProps: {// 对话框Props
                    title: '亲自尝试以下再发布哦~',
                    width: '1000px'
                },
                componentProps: {// 组件Props值
                    pagination: {}
                },
                componentListeners: {// 组件事件
                    // toDemo: () => {
                    //     // this.handleToDemo();
                    // },
                    // 'on-cancel': () => {
                    //     instance.close();
                    // },
                    // 'on-submit': (data) => {
                    //     window.close();
                    // }
                }
            });
        }
    }
}
</script>

<style lang="less" scoped>

</style>


