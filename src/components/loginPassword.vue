<template>
    <section id="loginPassword">
        <el-dialog
        :visible.sync="rechargeActive"
        width="4.07rem"
        top="0.99rem"
        center>
        <div slot="title">重置登陆密码</div>
        <div class="varieties_content">
            <div class="account_name">
                <label>账号:</label>
                <input type="text" maxlength="20" v-model.trim="account" placeholder="请输入正确的会员账号"/>
            </div>
            <div class="write_old" v-if="!regist_tel">
                <label>旧密码:</label>
                <input type="password" maxlength="20" v-model.trim="old_password" placeholder="请填写旧密码"/>
            </div>
            <div class="write_new">
                <label>新密码:</label>
                <input type="password" maxlength="20" v-model.trim="new_password" placeholder="请输入新密码"/>
            </div>
            <div class="write_code" v-if="regist_tel">
                <label>验证码:</label>
                <input type="text" maxlength="10" v-model.trim="verify_code" placeholder="请填写验证码"/>
                <button @click="getAutoCode()" v-show="verify_active">获取验证码</button>
                <button v-show="!verify_active">{{verify_time}}s</button>
            </div>
            <div class="line_example"></div>
            <div class="confirm_add">
                <button @click="sureModify()">确认修改</button>
            </div>
        </div>
        <div slot="footer" class="example_footer">

        </div>
        </el-dialog>
    </section>
</template>

<script>
export default {
    name: 'loginPassword',
    data(){
        return{
            rechargeActive: false,
            regist_tel: true,
            account: '',
            old_password: '',
            new_password: '',
            verify_code: '',
            verify_time: 60,
            verify_active: true
        }
    },
    methods:{
        changeMeans(value){
            this.regist_tel = value;
            this.rechargeActive = true;
            this.account = '';
            this.old_password = '';
            this.new_password = '';
            this.verify_code = '';
        },
        getAutoCode(){
            var that = this;
            that.$means.amateur_getCaptcha_bindTel(function(res){});
            that.verify_time = 60;
            that.verify_active = false;
            that.timer();
        },
        timer(){
            if(this.verify_time>0){
                this.verify_time--;
                setTimeout(this.timer,1000);
            }else{
                this.verify_time = 0;
                this.verify_active = true;
            }
        },
        sureModify(){
            var that = this;
            if(that.regist_tel==true){
                if(that.account==''){
                    this.$message.error('请输入会员账号！');
                    return;
                }else if(that.new_password==''){
                    that.$message.error('请输入新密码！');
                    return;
                }else if(that.verify_code ==''){
                    that.$message.error('请输入验证码！');
                    return;
                }
                that.$means.amateur_resetLoginPass_tel(that.account,that.new_password,that.verify_code,function(res){
                    that.rechargeActive = false;
                    if (localStorage.getItem("account")) {
                        localStorage.setItem("password",that.new_password);
                    }
                    sessionStorage.setItem('password_number',that.new_password);
                    that.$message.success('登陆密码修改成功！');
                })
            }else{
                if(that.account==''){
                    this.$message.error('请输入会员账号！');
                    return;
                }else if(that.old_password==''){
                    that.$message.error('请输入旧密码！');
                    return;
                }else if(that.new_password==''){
                    that.$message.error('请输入新密码！');
                    return;
                }
                that.$means.amateur_resetLoginPass_noTel(that.account,that.new_password,that.old_password,function(res){
                    that.rechargeActive = false;
                    if (localStorage.getItem("account")) {
                        localStorage.setItem("password",that.new_password);
                    }
                    sessionStorage.setItem('password_number',that.new_password);
                    that.$message.success('登陆密码修改成功！');
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
#loginPassword{
    .varieties_content{
        width: 100%;
        height: 465px;
        padding: 45px 40px 0px 40px;
        box-sizing: border-box;
        .account_name,.write_old,.write_new,.write_code{
            width: 100%;
            height: 45px;
            label{
                .mixin_span(220px,45px,none,@color_white,right);
                float: left;
                margin-right: 15px;
                font-size: @font_size18;
            }
        }
        .account_name,.write_old,.write_new,.write_code{
            input{
                .mixin_input(280px,43px);
                float: left;
                background: @color_indigo;
                color: @color_blueviolet;
                border: 1px solid @color_blueviolet;
                font-size: @font_size18;
            }
        }
        .write_code{
            input{
                width: 155px;
            }
            button{
                .mixin_button(120px,43px,@color_white2,@color_blueviolet);
                float: left;
                margin-left: 10px;
                border: 1px solid @color_blueviolet;
            }
            button:hover{
                background: @color_white2_hover;
            }
        }
        .write_old,.write_new,.write_code{
            margin-top: 40px;
        }
        .line_example{
            width: 100%;
            height: 60px;
            border-bottom: 1px solid @color_blueviolet;
        }
        .confirm_add{
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
    .example_footer{
        .mixin_div(100%,0px,none,auto,left);
    }
}
</style>