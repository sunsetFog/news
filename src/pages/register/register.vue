
<template>
  <section id="register">
      <div class="entertainment">
          <img class="register_logo" src="../../../static/dream/register/logo.png"/>
          <div class="containter">
              <div class="heart_content">
                    <div class="back_login">
                        <div @click="toBack()" @mouseover="fixedOver()" @mouseout="fixedOut()">
                            <img :src="to_back.point"/>
                            <span :style="{color: to_back.color}">返回登陆界面</span>
                        </div>
                    </div>
                  <label>账号</label>
                  <div class="grows">
                      <input type="text" placeholder="请输入正确的手机号" v-model.trim="account_number" maxlength="12"/>
                  </div>
                  <label>手机验证码</label>
                  <div class="grows">
                      <input type="text" placeholder="请填写验证码" v-model.trim="verify_code" maxlength="10"/>
                  </div>
                  <div class="verify">
                      <button v-if="verify_active">{{verify_time}}s</button>
                      <button v-else @click="verificationCode">发送验证码</button>
                  </div>
                  <label>密码</label>
                  <div class="grows">
                      <input type="password" placeholder="请输入6-12位的密码" v-model.trim="old_password" maxlength="12"/>
                  </div>
                  <div class="grows">
                      <input type="password" placeholder="请再次输入6-12位的密码" v-model.trim="new_password" maxlength="12"/>
                  </div>
                  <div class="submit" @click="nowRegister">立即注册</div>
              </div>
          </div>
      </div>
    <footers :vip_foot="false"></footers>
  </section>
</template>

<script>
import footers from '../../components/footer.vue';
export default{
    name: 'register',
    components: {footers},
    data(){
        return{
            account_number: '',
            verify_code: '',
            old_password: '',
            new_password: '',
            verify_time: 60,
            verify_active: false,
            to_back: {point: '../../../static/dream/register/jiantou.png',color: '#c53fe1'}
        }
    },
    created(){
        this.registerEnter();
    },
    mounted(){
        var that = this;
        that.$means.overallHeight('register');
        window.onresize = function temp7(){
            that.$means.overallHeight('register');
        }
    },
    watch: {
        account_number(cur,old){
            if(/[^\d]/g.test(cur)){
                if(this.account_number.match(/[^\d]/g)!=null){
                   this.$message.error('请输入纯数字！');
                }
                this.account_number = cur.replace(/[^\d]/g, '');
            }
        },
        old_password(cur,old){
            if(/[^A-z0-9]/.test(cur)){
                this.$message.error('不能输入特殊字符！');
                this.old_password = cur.replace(/[^A-z0-9]/, '');
            }
        },
        new_password(cur,old){
            if(/[^A-z0-9]/.test(cur)){
                this.$message.error('不能输入特殊字符！');
                this.new_password = cur.replace(/[^A-z0-9]/, '');
            }
        }
    },
    methods: {
        registerEnter(){
            let that = this;
            that.$means.amateur_register_enter(window.location.host,function(res){
                //console.log('come_on',res);
            })
        },
        nowRegister(){
            let that = this;
            if(that.$means.isMoblie(that.account_number)){
                that.$message.error('请输入正确的手机号！');
                return;
            }else if(that.verify_code==''){
                that.$message.error('请输入手机验证码！');
                return;
            }else if(that.old_password==''||that.new_password==''){
                that.$message.error('请输入密码或确认密码！');
                return;
            }else if(that.old_password!=that.new_password){
                that.$message.error('请输入两个密码一致的密码！');
                return;
            }else if(that.new_password.length<6){
                that.$message.error('请输入6~12个字符的密码！');
                return;
            }
            that.$means.amateur_register(that.account_number,that.new_password,that.verify_code,function(res){
                that.$router.push({path: '/login'});
                that.$message.success('注册成功');
            })
        },
        verificationCode(){
            let that = this;
            if(that.$means.isMoblie(that.account_number)){
                that.$message.error('请输入正确的手机号！');
                return;
            }
            that.$means.amateur_getCaptcha_noBindTel(that.account_number,function(res){
                that.verify_time = 60;
                that.verify_active = true;
                that.timer();
                that.$message.success('短信发送成功！');
            })
        },
        nowRegister2(){
            let that = this;
            if(that.$means.isMoblie(that.account_number)){
                that.$message.error('请输入正确的手机号！');
                return;
            }else if(that.verify_code==''){
                that.$message.error('请输入手机验证码！');
                return;
            }else if(that.old_password==''||that.new_password==''){
                that.$message.error('请输入密码或确认密码！');
                return;
            }else if(that.old_password!=that.new_password){
                that.$message.error('请输入两个密码一致的密码！');
                return;
            }else if(that.new_password.length<6){
                that.$message.error('请输入6~16个字符的密码！');
                return;
            }
            let json = {
					cellphone: that.account_number,
					loginpwd: that.old_password,
					confirmpwd: that.new_password,
					promocode: '',
					deviceid: that.account_number+Date.now(),
					smscode: that.verify_code,
                    agentorg: window.location.host
			}
			that.$axios.post(that.$domain + '/web/player/safetyreg',json).then(res=>{
                //console.log('success_register',res);
                if(res.data.code==0){
                    that.$router.push({path: '/login'});
                    that.$message.success('注册成功');
                }else{
                    that.$message.error(res.data.message);
                }
			}).catch((err)=>{
                //console.log('error',err);
            })
        },
        verificationCode2(){
            let that = this;
            if(that.$means.isMoblie(that.account_number)){
                that.$message.error('请输入正确的手机号！');
                return;
            }
            let json = {
				cellphone: that.account_number
			}
			that.$axios.post(that.$domain + '/web/player/getmobilecode',json).then(res=>{
                //console.log('success_code',res,typeof res.data);
                if(typeof res.data=='string'){
                    that.verify_time = 60;
                    that.verify_active = true;
                    that.timer();
                    return;
                }
                if(res.data.code==0){
                    that.verify_time = 60;
                    that.verify_active = true;
                    that.timer();
                    that.$message.success(res.data.message);
                }else{
                    that.$message.error(res.data.message);
                }
			}).catch((err)=>{
                //console.log('error',err);
            })    
        },
        timer(){
            if(this.verify_time>0){
                this.verify_time--;
                setTimeout(this.timer,1000);
            }else{
                this.verify_time = 0;
                this.verify_active = false;
            }
        },
        fixedOver(){
            this.to_back.point = '../../../static/dream/register/jiantou_hover.png';
            this.to_back.color = '#eb87ff';
        },
        fixedOut(){
            this.to_back.point = '../../../static/dream/register/jiantou.png';
            this.to_back.color = '#c53fe1';
        },
        toBack(){
            this.$router.push({path: '/login'});
        }
    }
}
</script>

<style lang="less" scoped>
#register{
    width: 100%;
    padding-bottom: 115px;
    box-sizing: border-box;
    overflow: hidden;
    .mixin_image(url('../../../static/dream/register/bg01.jpg'));
    .entertainment{
        width: 100%;
        height: 100%;
        position: relative;
        .register_logo{
            .mixin_img(474px;410px);
            position: absolute;
            left: 0px;
            bottom: 0px;
        }
        .containter{
            .mixin_center(800px,720px);
            .mixin_image(url('../../../static/dream/register/frame01.png'));
            padding: 90px 140px 70px 140px;
            box-sizing: border-box;
            .heart_content{
                .mixin_float(100%,100%,left);
                .back_login{
                    width: 100%;
                    height: 30px;
                    position: relative;
                    div{
                        width: 160px;
                        height: 30px;
                        cursor: pointer;
                        overflow: hidden;
                        position: absolute;
                        left: -110px;
                        top: -60px;
                        img{
                            .mixin_img(18px,18px);
                            float: left;
                            margin: 5px 10px 5px 0px;
                        }
                        span{
                            .mixin_span(auto,30px,none,#c53fe1,left);
                            float: left;
                            font-size: @font_size18;
                        }
                    }
                }
                label{
                    .mixin_div(100%,35px,none,@color_white,left);
                    display: block;
                    font-size: @font_size18;
                    margin-top: 5px;
                }
                .grows{
                    width: 100%;
                    height: 50px;
                    margin-bottom: 11px;
                    .mixin_image(url('../../../static/dream/register/frame02.png'));
                    input{
                        .mixin_input(100%,100%);
                        background: none;
                        color: #b699dd;
                        font-size: @font_size18;
                    }
                }
                .verify{
                    width: 100%;
                    height: 50px;
                    margin: 9px 0px 12px 0px;
                    button{
                        .mixin_button(100px,50px,none,#7d500f);
                        float: right;
                        .mixin_image(url('../../../static/dream/register/button03.png'));
                    }
                    button:hover{
                        .mixin_image(url('../../../static/dream/register/button04.png'));
                    }
                }
                .submit{
                    .mixin_div(100%,50px,none,#174308,center);
                    .mixin_image(url('../../../static/dream/register/button01.png'));
                    font-size: @font_size18;
                    margin-top: 55px;
                    cursor: pointer;
                }
                .submit:hover{
                    .mixin_image(url('../../../static/dream/register/button02.png'));
                }
            }
        }
    }


}
</style>
