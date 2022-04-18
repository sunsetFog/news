<template>
<section id="VueForm">
    <el-card>
        <div slot="header" class="clearfix">
            <span>活动素材</span>
        </div>

        <VueForm
            v-model="formData"
            :ui-schema="uiSchema"
            :schema="schema"
        >
        </VueForm>
    </el-card>
    <div class="code-right">
        <CodeEditor v-model="curFormDataCode"></CodeEditor>
    </div>
</section>
</template>

<script>
/*
vue-json-schema-form
https://vue-json-schema-form.lljj.me/
自定义table
*/
import VueForm from '@lljj/vue-json-schema-form';
// import VueForm from "@goodgeek/vue-json-schema-form";
import CodeEditor from '@/explore/components/printEditor/index.vue';
import * as schemaTypes from './playground/schemaTypes';
export default {
    name: 'vueForm',
    components: { VueForm, CodeEditor },
    data() {
        return {
            formData: {},
            schema: {
                type: 'object',
                required: [
                    'userName',
                    'age',
                ],
                properties: {
                    userName: {
                        type: 'string',
                        title: '用户名',
                        default: 'Liu.Jun',
                    },
                    age: {
                        type: 'number',
                        title: '年龄'
                    },
                    bio: {
                        type: 'string',
                        title: '签名',
                        minLength: 10,
                        default: '知道的越多、就知道的越少',
                    }
                }
            },
            uiSchema: {
                bio: {
                    'ui:options': {
                        placeholder: '请输入你的签名',
                        type: 'textarea',
                        rows: 1
                    }
                }
            }
        }
    },
    created() {
        // const typeArr = Object.keys(schemaTypes.default);
        // console.log('--schemaTypes--', schemaTypes.default.Number.schema);
        // console.log('--typeArr--', typeArr);
        // this.schema = schemaTypes.default.Number.schema
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
    width: 1200px;
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
        width: 680px;
        height: 700px;
        float: right;
    }
}
</style>


