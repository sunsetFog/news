<template>
    <section id="editorUnit">
        <div :class="'editorBox'+countIndex"></div>
    </section>
</template>

<script>
/*

https://github.com/wangeditor-team/wangEditor
官网：www.wangEditor.com
文档：www.wangeditor.com/doc


对话框有v-if，所以销毁要在关闭方法里才能找到DOM

 */
import wangEditor from 'wangeditor'
export default {
    name: "wangEditor",
    props: {
        countIndex: {
            type: String,
            default: '0'
        }
    },
    data() {
        return {
            isEditor: null,
            config: {
                menus: ['undo', 'redo', 'list', 'table']
            }
        }
    },
    mounted () {
        this.createEditor();
    },
    methods: {
        createEditor() {
            console.log('--editor--className--', '.editorBox'+this.countIndex)
            this.isEditor = new wangEditor('.editorBox'+this.countIndex);
            // this.isEditor.config.menus = this.config.menus;
            this.isEditor.create();
        },
        setContent(value) {
            this.isEditor.txt.html(value);
        },
        getContent() {
            console.log('---this.isEditor---', this.isEditor.txt.html());
            return this.isEditor.txt.html();
        },
        destroyWay() {
            if (this.isEditor) {
                this.isEditor.destroy();
                this.isEditor = null;
            }
        }
    },
    beforeDestroy() {
        this.destroyWay();
    }
}
</script>

<style lang="less" scoped>
#editorUnit{
    width: 100%;
    height: 400px;
    text-align: left;
    margin-top: 50px;
}
</style>

