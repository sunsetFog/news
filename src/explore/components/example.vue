<template>
    <section id="recharge">
        <el-dialog
        :visible.sync="rechargeActive"
        width="1100px"
        top="190px"
        center>
        <div slot="title">绑定银行卡</div>
        <div class="varieties-content">

        </div>
        <div slot="footer" class="example-footer">

        </div>
        </el-dialog>
    </section>
</template>

<script>
export default {
    name: 'children',
    data(){
        return{
            rechargeActive: false
        }
    },
    methods:{
        changeMeans(){
            this.rechargeActive = true;
        }
    }
}
</script>

<style lang="less" scoped>
#recharge{
    .varieties-content{
        width: 100%;
        height: 620px;
    }
    .example-footer{
        .mixin_div(100%,0px,none,auto,left);
    }
}
</style>