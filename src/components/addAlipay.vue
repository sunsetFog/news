<template>
    <section id="add-alipay">
        <el-dialog
        :visible.sync="rechargeActive"
        width="4.07rem"
        top="1.25rem"
        center>
        <div slot="title">绑定支付宝</div>
        <div class="varieties-content">
            <div class="account-name">
                <label>支付宝账号:</label>
                <input type="text" maxlength="25" v-model.trim="account" placeholder="请输入支付宝账号"/>
            </div>
            <div class="card-number">
                <label>实名制姓名:</label>
                <input type="text" maxlength="25" v-model.trim="real_name" placeholder="请输入实名制姓名"/>
            </div>
            <div class="line-example">支付宝绑定的注意事项说明</div>
            <div class="confirm-add">
                <button @click="sureAdd()">确认添加</button>
            </div>
        </div>
        <div slot="footer" class="example-footer">

        </div>
        </el-dialog>
    </section>
</template>

<script>
export default {
    name: 'add-alipay',
    data(){
        return{
            rechargeActive: false,
            account: '',
            real_name: ''
        }
    },
    methods:{
        changeMeans(){
            this.rechargeActive = true;
            this.account = '';
            this.real_name = '';
        },
        sureAdd(){
            var that = this;
            if(that.account==''){
                that.$message.error('请输入支付宝账号！');
                return;
            }else if(that.real_name==''){
                that.$message.error('请输入实名制姓名！');
                return;
            }
            that.$means.amateur_bindBank(2,that.real_name,'',that.account,function(res){
                //console.log('add_alipay',res);
                that.rechargeActive = false;
                that.$parent.hostMeans('withdrawal','alipay');
                that.$parent.hostMeans('managealipay');
                that.$message.success('添加支付宝成功');
            })
        }
    }
}
</script>

<style lang="less" scoped>
#add-alipay{
    .varieties-content{
        width: 100%;
        height: 465px;
        padding: 45px 40px 0px 40px;
        box-sizing: border-box;
        .account-name,.card-number{
            width: 100%;
            height: 45px;
            label{
                .mixin_span(220px,45px,none,@color_white,right);
                float: left;
                margin-right: 15px;
                font-size: @font_size18;
            }
        }
        .account-name,.card-number{
            input{
                .mixin_input(280px,43px);
                float: left;
                background: @color_indigo;
                color: @color_blueviolet;
                border: 1px solid @color_blueviolet;
                font-size: @font_size18;
            }
        }
        .card-number{
            margin-top: 40px;
        }
        .line-example{
            .mixin_div(100%,120px,none,@color_blueviolet,left);
            line-height: 90px;
            border-bottom: 1px solid @color_blueviolet;
            padding-left: 235px;
            box-sizing: border-box;
        }
        .confirm-add{
            width: 100%;
            height: 35px;
            margin-top: 50px;
            padding: 0px 0px 0px 275px;
            box-sizing: border-box;
            button{
                .mixin_button(155px,34px,@color_white2,@color_blueviolet);
                border: 1px solid @color_blueviolet;
            }
            button:hover{
                background: @color_white2_hover;
            }
        }
    }
    .example-footer{
        .mixin_div(100%,0px,none,auto,left);
    }
}
</style>