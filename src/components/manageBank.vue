<template>
    <section id="manageBank">
        <el-dialog
        :visible.sync="rechargeActive"
        width="4.07rem"
        top="1.25rem"
        center>
        <div slot="title">管理银行卡</div>
        <div class="varieties_content">
            <div class="account_example">
                <div class="account_list" v-for="(item,index) in bank_list">
                    <label>卡{{index+1}}:</label>
                    <div><span>{{item.bank_name}}</span><span>{{item.cardno}}</span></div>
                    <img src="../../static/dream/recharge/xiaochu.png" @click="deleteBank(index)"/>
                </div>
            </div>

            <div class="confirm_add">
                <button @click="sureAdd()">添加银行卡</button>
            </div>
        </div>
        <div slot="footer" class="example_footer">

        </div>
        </el-dialog>
    </section>
</template>

<script>
export default {
    name: 'manageBank',
    data(){
        return{
            rechargeActive: false,
            bank_list: []
        }
    },
    methods:{
        getBankJson(){
            var that = this;
            that.$means.amateur_bank_lists(1,function(res){
                //console.log('提款bank%%',res);
                that.bank_list = res.list;
            })
        },
        changeMeans(){
            this.rechargeActive = true;
            this.getBankJson();
        },
        sureAdd(){
            this.$parent.hostMeans('addbank');
        },
        deleteBank(index){
            var that = this;
            that.$confirm('你是否解除当前银行卡?', '温馨提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                that.$means.amateur_unBindBank(1,that.bank_list[index].bank_id,function(res){
                    that.getBankJson();
                    that.$message.success('解绑成功');
                    that.$parent.hostMeans('withdrawal','bank');
                })
            }).catch(() => {
                that.$message.info('已取消');       
            });
        }
    }
}
</script>

<style lang="less" scoped>
#manageBank{
    .varieties_content{
        width: 100%;
        height: 465px;
        padding: 10px 40px 0px 40px;
        box-sizing: border-box;
        .account_example{
            width: 100%;
            height: 330px;
            border-bottom: 1px solid @color_blueviolet;
            .account_list{
                width: 100%;
                height: 45px;
                margin-top: 20px;
                label{
                    .mixin_span(70px,45px,none,@color_white,right);
                    float: left;
                    margin-right: 15px;
                    font-size: @font_size18;
                }
                div{
                    .mixin_div(520px,43px,@color_indigo,@color_blueviolet,left);
                    float: left;
                    font-size: @font_size18;
                    padding-left: 10px;
                    box-sizing: border-box;
                    span:nth-of-type(1){
                        .mixin_span(auto,43px,none,@color_blueviolet,right);
                        float: left;
                        margin-right: 10px;
                        max-width: 200px;
                        overflow: hidden;
                    }
                    span:nth-of-type(2){
                        .mixin_span(auto,43px,none,@color_blueviolet,left);
                        float: left;
                    }
                }
                img{
                    .mixin_img(30px,28px);
                    float: left;
                    margin: 8px 0px 0px 20px;
                    cursor: pointer;
                }
            }
        }

        .confirm_add{
            width: 100%;
            height: 35px;
            margin-top: 40px;
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
    .example_footer{
        .mixin_div(100%,0px,none,auto,left);
    }
}
</style>