<template>
<section style="color: #243851;padding: 50px 0px 0px 0px;text-align: center;">
    <el-button @click="activity()">活动</el-button>
</section>
</template>

<script>
export default{
    name: 'videoGame',
    data(){
        return{

        }
    },
    methods: {
        activity(){
            console.log('number-4388');
            this.$means.amateur_unBindBank(2,130,function(res){
                console.log('recharge',res);
            });
        }
    }
}
</script>

<style lang="less" scoped>
</style>