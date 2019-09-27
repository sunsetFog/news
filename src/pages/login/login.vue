
<template>
    <section id="login">
        <div class="entertainment">
            <img class="login_logo" src="../../../static/dream/login/logo2.png"/>
            <img class="big_fish" src="../../../static/dream/login/fish.png"/>
                <div class="sign_frame">
                    <div class="code_and_service">
                        <div class="customer_service" @click="customerService()"></div>
                    </div>
                    <div class="form_information">
                        <div class="account">
                            <span>账号:</span>
                            <input v-model.trim="account_number" maxlength="20" placeholder="请输入账号"></input>
                        </div>
                        <div class="password_enter">
                            <span>密码:</span>
                            <input :type="eyeType" maxlength="12" v-model.trim="password_number" placeholder="请输入登陆密码"></input>
                            <div class="eye_contain" @click="eyeMeans">
                                <img v-if="eyeType=='text'" class="zhengyan" src="../../../static/dream/login/zhengyan.png"/>
                                <img v-else class="biyan" src="../../../static/dream/login/biyan.png"/>
                            </div>
                        </div>
                        <div class="remember_and_forget">
                            <div class="rectangle" @click="rememberMeans()"><img v-show="remember_checked" src="../../../static/dream/login/jizhu.png"/></div>
                            <span>记住密码</span>
                            <!-- <div class="rapid_registration" @click="rapidRegistration('register')">快速注册</div> -->
                            <!-- <span @click="forgetPassword">忘记密码</span> -->
                        </div>
                        <div class="login_register">
                            <div class="sign_in" @click="signIn"></div>
                            <div class="is_register" @click="rapidRegistration('register')"></div>
                        </div>
                        <div class="recommend"><span></span><span>推荐最优路线</span><span></span></div>
                        <div class="optimal" @click="rapidRegistration('line')"></div>
                    </div>
                </div>
                
        </div>

        <footers :vip_foot="false"></footers>
    </section>
</template>

<script>
import footers from '../../components/footer.vue';
export default{
    name: 'login',
    components: {footers},
    data(){
        return{
            account_number: '',//登陆账号
            password_number: '',//登陆密码
            remember_checked: false,
            eyeType: 'password'
        }
    },
    mounted(){
        var that = this;
        that.$means.overallHeight('login');
        window.onresize = function temp1(){
            that.$means.overallHeight('login');
        }
    },
    created(){
        this.catchMice();
        if(refreshWeb.state==''){
            flashGameplayer();
        }else{
            that.$means.amateur_exit(function(){});
        }
        if(localStorage.getItem('account')){
            this.account_number = localStorage.getItem('account');
            this.password_number = localStorage.getItem('password');
            this.remember_checked = true;
        }else{
            this.account_number = '';
            this.password_number = '';
            this.remember_checked = false;
        }
        

        this.keyEnter();
    },
    watch: {
        password_number(cur,old){
            if(/[^A-z0-9]/.test(cur)){
                this.$message.error('不能输入特殊字符！');
                this.password_number = cur.replace(/[^A-z0-9]/, '');
            }
        }
    },
    methods: {
        eyeMeans(){
            if(this.eyeType == 'password'){
                this.eyeType = 'text';
            }else{
                this.eyeType = 'password';
            }
        },
        keyEnter(){
                let that = this;
                document.onkeypress = function(e) {
                    var keycode = document.all ? event.keyCode : e.which;
                    // console.log('keycode',keycode);
                    if (keycode == 13) {
                        let login = document.getElementById('login');
                        // console.log('#login',login);
                        if(login!=null){
                                that.signIn();// 登录方法名
                                return false;
                        }
                        
                    }
                };
        },
        customerService(){
            window.open("https://chat32.live800.com/live800/chatClient/chatbox.jsp?companyID=12698&enterurl=&codeType=custom&info=");
        },
        rapidRegistration(value){
            if(value=='register'){
                if(refreshWeb.state=='init'){
                    this.$router.push({path: '/register'});
                }else{
                    this.$message.error('加载游戏中,稍后为你进入快速注册！');
                    sessionStorage.setItem('register','up');
                }
            }else if(value=='line'){
                this.$router.push({path: '/line'});
            }
        },
        signIn(res){
                var that = this;
                if(that.account_number==''&&that.password_number==''){
                    that.$message.error('请输入账号和密码!');
                    return;
                }else if(that.account_number == ''){
                    that.$message.error('请输入账号!');
                    return;
                }else if(that.password_number == ''){
                    that.$message.error('请输入密码!');
                    return;
                }
                if(refreshWeb.state=='init'){
                    that.$means.amateur_login(that.account_number,that.password_number,window.location.host,function() { 
                        that.$store.dispatch('getPlayerInfo',that.$means.amateur_getPlayer());
                        if(that.remember_checked==true){
                            localStorage.setItem('account',that.account_number);
                            localStorage.setItem('password',that.password_number);
                        }else{
                            localStorage.removeItem('account');
                            localStorage.removeItem('password');
                        }
                        sessionStorage.setItem('account_number',that.account_number);
                        sessionStorage.setItem('password_number',that.password_number);
                        that.$router.push({path: '/home'});
                    });
                }else{
                    that.$message.error('加载游戏中,稍后为你登陆操作！');
                    sessionStorage.setItem('sign_in','up');
                }
        },
        rememberMeans(){
            if(this.remember_checked==false){
                    this.remember_checked = true;
            }else{
                    this.remember_checked = false;
            }
        },
        catchMice(){
            var that = this;
            Object.defineProperties(catchGame,{
                mice:{
                    configurable: true,
                    get:function(){
                        return '';
                    },
                    set:function(value){
                        if(value == 'ok'){
                            refreshWeb.state = 'init';
                            that.signIn();
                        }
                    }
                },
                register:{
                    configurable: true,
                    get:function(){
                        return '';
                    },
                    set:function(value){
                        if(value == 'ok'){
                            refreshWeb.state = 'init';
                            that.rapidRegistration('register');
                        }
                    }
                }
            });
        }
    }
}
</script>

<style lang="less" scoped>
#login{
    width: 100%;
    padding-bottom: 115px;
    box-sizing: border-box;
    overflow: hidden;
    .mixin_image(url('../../../static/dream/login/bg_denglu.jpg'));
    @color_violet: #3d1351;//字体
    @color_label: #dbcbb7;//字体
    @color_green: #0f991a;//按钮背景
    @color_hover: #f85e0b;//hover
    @color_stroke: #143597;
    .entertainment{
        width: 100%;
        height: 100%;
        position: relative;
        .login_logo{
            .mixin_img(790px;170px);
            position: absolute;
            top: 70px;
            left: 50%;
            margin-left: -395px;
        }
        .big_fish{
            .mixin_img(426px;487px);
            position: absolute;
            left: 0px;
            bottom: 0px;
        }
        .sign_frame{
            width: 480px;
            height: 430px;
            .mixin_image(url('../../../static/dream/login/kuankuan.png'));
            position: absolute;
            top: 290px;
            left: 50%;
            margin-left: -240px;
            .code_and_service{
                width: 100%;
                height: 40px;
                position: relative;
                .customer_service{
                    width: 105px;
                    height: 34px;
                    .mixin_image(url('../../../static/dream/login/kefu.png'));
                    cursor: pointer;
                    position: absolute;
                    top: 3px;
                    right: 3px;
                }
                .customer_service:hover{
                    .mixin_image(url('../../../static/dream/login/kefu_hover.png'));
                }
            }
            .form_information{
                width: 100%;
                height: 390px;
                padding: 20px 30px 0px 30px;
                box-sizing: border-box;
                .account,.password_enter{
                    width: 100%;
                    height: 50px;
                    .mixin_image(url('../../../static/dream/login/juxingkuang.png'));
                    color: @color_white;
                    border-radius: 4px;
                    border: 1px solid #b1923f;
                    span{
                        .mixin_span(85px,50px,none,@color_label,left);
                        font-size: 24px;
                        float: left;
                        font-weight: 600;
                        padding: 0px 0px 0px 13px;
                        box-sizing: border-box;
                    }
                    input{
                        .mixin_input(250px,48px);
                        background: none;
                        float: left;
                        color: @color_label;
                        font-size: @font_size20;
                    }
                    .eye_contain{
                        .mixin_float(70px,50px,right);
                        cursor: pointer;
                        .zhengyan{
                            width: 29px;
                            height: 16px;
                            font-size: 20px;
                            float: right;
                            margin: 17px 20px 0px 0px;
                        }
                        .biyan{
                            width: 34px;
                            height: 9px;
                            font-size: 20px;
                            float: right;
                            margin: 20.5px 20px 0px 0px;
                        }
                    }
                }
                .account{
                    input{
                        width: 330px;
                    }
                }
                .password_enter{
                    margin-top: 15px;
                }
                .remember_and_forget{
                    width: 100%;
                    height: 35px;
                    position: relative;
                    font-size: @font_size16;
                    .rectangle{
                        width: 18px;
                        height: 18px;
                        .mixin_image(url('../../../static/dream/login/fuxuankuang.png'));
                        position: absolute;
                        top: 50%;
                        left: 5px;
                        margin-top: -9px;
                        padding: 2px 0px 0px 2px;
                        box-sizing: border-box;
                        cursor: pointer;
                        img{
                            .mixin_img(13px,13px);
                            float: left;
                        }
                    }
                    span:nth-of-type(1){
                        .mixin_span(auto,35px,none,@color_violet,center);
                        position: absolute;
                        top: 0px;
                        left: 30px;
                    }
                    span:nth-of-type(2){
                        .mixin_span(auto,25px,none,@color_violet,center);
                        position: absolute;
                        top: 50%;
                        right: 0px;
                        margin-top: -12.5px;
                        cursor: pointer;
                    }
                    span:nth-of-type(2):hover{
                        color: @color_hover;
                    }
                    .rapid_registration{
                        height: 25px;
                        line-height: 25px;
                        position: absolute;
                        top: 50%;
                        left: 280px;
                        margin-top: -12.5px;
                        cursor: pointer;
                        color: @color_violet;
                    }
                }
                .login_register{
                    width: 100%;
                    height: 50px;
                    .sign_in{
                        .mixin_button(48%,50px,none,auto);
                        float: left;
                        border-radius: 4px;
                        font-size: 16px;
                        font-weight: 600;
                        .mixin_image(url('../../../static/dream/login/denglu.jpg'));
                    }
                    .sign_in:hover{
                        .mixin_image(url('../../../static/dream/login/denglu_hover.jpg'));
                    }
                    .is_register{
                        .mixin_button(48%,50px,none,auto);
                        float: right;
                        border-radius: 4px;
                        font-size: 16px;
                        font-weight: 600;
                        .mixin_image(url('../../../static/dream/login/kuaisuzhuce.jpg'));
                    }
                    .is_register:hover{
                        .mixin_image(url('../../../static/dream/login/kuaisuzhuce_hover.jpg'));
                    }
                }
                .recommend{
                    .mixin_div(100%,50px,none,@color_violet,center);
                    margin: 6px 0px 6px 0px;
                    position: relative;
                    span:nth-of-type(1){
                        .mixin_span(75px,10px,none,@color_violet,left);
                        position: absolute;
                        left: 62px;
                        top: 15px;
                        border-bottom: 1px solid @color_violet;
                    }
                    span:nth-of-type(2){
                        .mixin_span(125px,50px,none,@color_violet,center);
                        position: absolute;
                        left: 137px;
                        top: 0px;
                        font-size: @font_size17;
                        overflow: hidden;
                    }
                    span:nth-of-type(3){
                        .mixin_span(75px,10px,none,@color_violet,left);
                        position: absolute;
                        left: 262px;
                        top: 15px;
                        border-bottom: 1px solid @color_violet;
                    }
                }
                .optimal{
                    width: 100%;
                    height: 50px;
                    .mixin_image(url('../../../static/dream/login/xuanxian.png'));
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: 600; 
                }
                .optimal:hover{
                    .mixin_image(url('../../../static/dream/login/xuanxian_hover.png'));
                }
            }
        }


    }


}
</style>
