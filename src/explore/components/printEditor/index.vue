<template>
<section id="CodeEditor">
    <el-card>
        <div slot="header" class="clearfix">
            <span>{{ isTitle }}</span>
        </div>

        <div
            ref="monacoEditor"
            class="achievement"
            :style="{ width: isWidth, height: isHeight }"
        >
        </div>
    </el-card>
</section>
</template>

<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
export default {
    name: 'CodeEditor',
    data() {
        return {
            editor: null
        }
    },
    props: {
        lazy: {
            type: Boolean, // 是否在失焦点才同步数据
            default: false
        },
        isTitle: {
            type: String,
            default: 'FormData'
        },
        value: {
            type: String,
            default: '{}'
        },
        isWidth: {
            type: String,
            default: 'auto'
        },
        isHeight: {
            type: String,
            default: '620px'
        },
        language: {
            type: String,
            default: 'json'
        },
        theme: {
            type: String,
            default: 'vs-dark'
        },
        options: {
            type: Object,
            default: () => ({})
        }
    },
    watch: {
        value(value) {
            // 值改变了
            if (!this.editor) return;
            const model = this.editor.getModel();
            if (value != null && value !== model.getValue()) {
                this.editor.pushUndoStop();
                model.pushEditOperations(
                    [],
                    [
                        {
                            range: model.getFullModelRange(),
                            text: value,
                        },
                    ]
                );
                this.editor.pushUndoStop();
            }
        },
        language(language) {
            if (!this.editor) return;
            const model = this.editor.getModel();
            monaco.editor.setModelLanguage(model, language);
        },
        theme(theme) {
            if (!this.editor) return;
            monaco.editor.setTheme(theme);
        },
        isWidth() {
            if (!this.editor) return;
            this.editor.layout();
        },
        isHeight() {
            if (!this.editor) return;
            this.editor.layout();
        },
        options(options) {
            if (!this.editor) return;
            this.editor.updateOptions(options);
        }
    },
    mounted() {
        this.init();
    },
    beforeDestroy() {
        if (this.editor) {
            this.editor.dispose();
            const model = this.editor.getModel();
            if (model) {
                model.dispose();
            }
        }
    },
    methods: {
        editorDidChange(editor) {
            // onDidBlurEditorText
            // onDidBlurEditorWidget
            // onMouseLeave
            // onDidChangeModelContent
            const eventName = this.lazy ? 'onDidBlurEditorText' : 'onDidChangeModelContent';
            editor[eventName](() => {
                const newValue = editor.getValue();
                // 数据变化同步数据
                if (newValue !== this.value) {
                    this.$emit('input', newValue);
                    this.$emit('onChange', newValue);
                }
            });
        },
        init() {
                const {
                    value, language, theme, isHeight, options, isWidth
                } = this.$props;
                console.log('this.$props', this.$props);
                console.log('window.monaco', window.monaco);

                this.editor = monaco.editor.create(
                    this.$refs.monacoEditor,
                    {
                        lineNumbers: 'on',
                        readOnly: false,
                        automaticLayout: true,
                        minimap: {
                            enabled: false
                        },
                        ...options,
                        value,
                        language,
                        height: isHeight,
                        width: isWidth,
                        ...(theme ? { theme } : {}),
                    },
                );
                this.editorDidChange(this.editor);
        }
    }
};
</script>

<style lang="less" scoped>
#CodeEditor {
    width: 100%;
    height: 700px;
    padding: 10px 10px 10px 10px;
    /deep/.el-card {
        width: 90%;
        height: 100%;
        margin: 0 auto;
    }
    /deep/.el-card__header {
        padding: 10px 10px 10px 10px;
        font-size: 14px;
        font-weight: bold;
    }
    .achievement {
        text-align: left;
    }
}
</style>
