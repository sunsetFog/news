<template>
    <section id="editor">
        <div class="editorContainer"></div>
    </section>
</template>

<script>
// npm install vueditor --save
import { createEditor } from 'vueditor'
import 'vueditor/dist/style/vueditor.min.css'
import lang from "vueditor/dist/language/lang.cn.js"
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.editor();
    },
    methods:{
		//文本编辑器
		editor() {
			this.inst = createEditor('.editorContainer', {
				toolbar: [
					'removeFormat', 'undo', 'redo', '|', 'element', 'fontName', 'fontSize', 'foreColor', 'backColor', 'divider', 'bold', 'italic', 'underline', 'strikeThrough',
					'link', 'unLink', 'divider', 'subscript', 'superscript', 'divider', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
					'|', 'indent', 'outdent', 'insertOrderedList', 'insertUnorderedList', '|', 'emoji', 'picture', 'table', '|', 'fullscreen', 'sourceCode', 'markdown'
				],
				fontName: [
                    {val: 'arial black'},
					{val: 'times new roman'},
					{val: 'Courier New'},
                    {val: '微软雅黑'}
                    ],
				fontSize: ['12px', '14px', '16px', '18px', '0.8rem', '1.0rem', '1.2rem', '1.5rem', '2.0rem'],
				uploadUrl: '',
				id: '',
				classList: ["editor-eara"],
			});
		},
    }
}
</script>

<style lang="less" scoped>
#editor{
    width: 100%;
    height: 600px;
}
</style>
