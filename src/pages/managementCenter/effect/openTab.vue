<template>
    <section>
        <el-button @click="openCancel">取消</el-button>
        <el-button @click="openSure">确定</el-button>
    </section>
</template>

<script>
export default {
    name: 'openTab',
    data(){
        return {
            ocrParams: {}
        }
    },
    created(){
        this.ocrParams = window.opener?JSON.parse(window.opener.ocrParams): {}
        console.log('接收window.opener参数', this.ocrParams);
    },
    methods: {
        openSure(){
            console.log('openSure')
            let ecParams = {
                tabWinActive: 'sureFrom',
                data: {active: true}
            }
            window.ecParams = JSON.stringify(ecParams)
            window.open(this.ocrParams.url, window.opener.name);
        },
        openCancel(){
            console.log('openCancel')
            let ecParams = {
                tabWinActive: 'cancelFrom',
                data: {}
            }
            window.ecParams = JSON.stringify(ecParams)
            window.open(this.ocrParams.url, window.opener.name);
        }
    }
}
</script>
