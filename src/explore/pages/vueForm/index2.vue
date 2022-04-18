<template>
<section id="VueForm">
    <el-card>
        <div slot="header" class="clearfix">
            <span>活动素材</span>
        </div>

        <VueForm
            v-model="value"
            :ui-schema="uiSchema"
            :schema="schema"
            :formFooter="formFooter"
            :formProps="formProps"
            @toDemo="aaa"
            @on-cancel="aaa"
            @on-submit="aaa"
        >
        </VueForm>
    </el-card>

    <div class="code-right">
        <CodeEditor v-model="curFormDataCode"></CodeEditor>
    </div>
</section>
</template>

<script>

import VueForm from "./@goodgeek/vue-json-schema-form";
import CodeEditor from '@/explore/components/printEditor/index.vue';
export default {
    name: 'vueForm',
    components: { VueForm, CodeEditor },
    data() {
        return {
            formData: {},
            value: {
                // is_table: [
                    // ['111','222','333'],
                    // ['aaa','bbb','ccc']
                // ]
            },
            is_table: [
                ['111','222','333'],
                ['aaa','bbb','ccc']
            ],
            schema: {
                type: "object",
                required:[],
                properties: { 
                    is_table: {
                        title: "表名",
                        type: "table",
                        "ui:widget": "TableWidget"
                    }
                },
                "ui:order": ["is_table"]
            },
            formFooter: {
                okBtn: "确定"
            },
            formProps: {
                labelSuffix: ": ",
                labelWidth: "100px"
            },
            uiSchema: {}
        }
    },
    created() {

    },
    methods: {
        aaa() {

        }
    },
    computed: {
        curFormDataCode: {
            get() {
                return this.formData ? JSON.stringify(this.formData, null, 4) : '{}';
            },
            set(val) {
                this.formData = val ? JSON.parse(val) : {};
            }
        }
    }
}
</script>

<style lang="less" scoped>
#VueForm {
    width: 1100px;
    height: 700px;
    padding: 10px 10px;
    margin: 0 auto;
    /deep/.el-card {
        width: 500px;
        margin-top: 10px;
        float: left;
    }
    /deep/.el-card__header {
        padding: 10px 10px 10px 10px;
        font-size: 14px;
        font-weight: bold;
    }
    .code-right {
        width: 500px;
        height: 700px;
        float: right;
    }
}
</style>


