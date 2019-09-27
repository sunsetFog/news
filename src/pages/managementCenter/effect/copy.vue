<template>
    <section id="copy">
        <el-button type="success" class="tag-read" :data-clipboard-text="copyContent" @click="copy">点击复制</el-button>
    </section>
</template>

<script>
//先安装  npm install clipboard --save
import Clipboard from 'clipboard';
    export default{
        data(){
            return{
                copyContent: 'HY-99067'
            }
        },
        methods:{
            copy(){
                var clipboard = new Clipboard('.tag-read')  
                clipboard.on('success', e => {  
                    this.$message.success('复制成功');
                    // 释放内存  
                    clipboard.destroy()  
                })  
                clipboard.on('error', e => {  
                    this.$message.error('该浏览器不支持自动复制');
                    // 释放内存  
                    clipboard.destroy()  
                })    
            }
        }
    }
</script>

<style lang="less" scoped>
#copy{
    
}
</style>