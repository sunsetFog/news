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
        this.isEditor = new wangEditor('.editorBox'+this.countIndex);
        // this.isEditor.config.menus = this.config.menus;
        this.isEditor.create();
    },
    methods: {
        setContent(value) {
            this.isEditor.txt.html(value);
        },
        getContent() {
            console.log('---this.isEditor---', this.isEditor.txt.html());
            return this.isEditor.txt.html();
        }
    },
    beforeDestroy() {
        this.isEditor.destroy();
        this.isEditor = null;
    }
}
</script>

<style lang="less" scoped>
#editorUnit{
    width: 100%;
    height: 400px;
    text-align: left;
}
</style>

