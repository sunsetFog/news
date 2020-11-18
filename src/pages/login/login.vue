
<template>
    <section id="login">
        <div class="entertainment">
            <img class="login-logo" src="../../../static/dream/login/logo2.png"/>
            <img class="big-fish" src="../../../static/dream/login/fish.png"/>
                <div class="sign-frame">
                    <div class="code-and-service">
                        <span @click="customerService()"></span>
                    </div>
                    <div class="form-information">
                        <form>
                        <div class="account">
                            <span>账号:</span>
                            <input v-model.trim="account_number" maxlength="20" placeholder="请输入账号"></input>
                        </div>
                        <div class="password-enter">
                            <span>密码:</span>
                            <!-- autocomplete="new-password"禁止浏览器自动填充到表单 
                            在登录页的时候浏览器记住了密码，如果去到新建用户页则 username 和 password 会被自动填充上去
                            -->
                            <input :type="eyeType" maxlength="12" v-model.trim="password_number" placeholder="请输入登陆密码" autocomplete="new-password"></input>
                            <div @click="eyeMeans">
                                <img v-if="eyeType=='text'" class="zhengyan" src="../../../static/dream/login/zhengyan.png"/>
                                <img v-else class="biyan" src="../../../static/dream/login/biyan.png"/>
                            </div>
                        </div>
                        </form>
                        <div class="remember-and-forget">
                            <div class="rectangle" @click="rememberMeans()"><img v-show="remember_checked" src="../../../static/dream/login/jizhu.png"/></div>
                            <span>记住密码</span>
                            <!-- <span @click="forgetPassword">忘记密码</span> -->
                        </div>
                        <div class="login-register">
                            <span @click="signIn"></span>
                            <span @click="rapidRegistration('register')"></span>
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
            this.$means.amateur_exit(function(){});
        }
        if(this.$cookies.get("account")){
            this.account_number = this.$cookies.get("account");
            this.password_number = this.$cookies.get("password");
            this.remember_checked = true;
        }else{
            this.account_number = 'admin';
            this.password_number = 'admin';
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
            // window.open("https://chat32.live800.com/live800/chatClient/chatbox.jsp?companyID=12698&enterurl=&codeType=custom&info=");
            window.open("https://nine.mdihi.com/chat/chatClient/chatbox.jsp?companyID=365033539&configID=2306&jid=4095904748&s=1");
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
                this.$message.success("敬请期待！");
                // this.$router.push({path: '/line'});
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
                            that.$cookies.set("account",that.account_number,"1m");
                            that.$cookies.set("password",that.password_number,"1m");
                        }else{
                            that.$cookies.remove("account");
                            that.$cookies.remove("password");
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
        .login-logo{
            .mixin_img(790px;170px);
            position: absolute;
            top: 70px;
            left: 50%;
            margin-left: -395px;
        }
        .big-fish{
            .mixin_img(426px;487px);
            position: absolute;
            left: 0px;
            bottom: 0px;
        }
        .sign-frame{
            width: 480px;
            height: 430px;
            .mixin_image(url('../../../static/dream/login/kuankuan.png'));
            position: absolute;
            top: 290px;
            left: 50%;
            margin-left: -240px;
            .code-and-service{
                width: 100%;
                height: 40px;
                span:nth-of-type(1){
                    width: 105px;
                    height: 34px;
                    float: right;
                    .mixin_image(url('../../../static/dream/login/kefu.png'));
                    cursor: pointer;
                    margin: 3px 3px 0px 0px;
                }
                span:nth-of-type(1):hover{
                    .mixin_image(url('../../../static/dream/login/kefu_hover.png'));
                }
            }
            .form-information{
                width: 100%;
                height: 390px;
                padding: 20px 30px 0px 30px;
                box-sizing: border-box;
                .account,.password-enter{
                    width: 100%;
                    height: 50px;
                    .mixin_image(url('../../../static/dream/login/juxingkuang.png'));
                    color: @color_white;
                    border-radius: 4px;
                    border: 1px solid #b1923f;
                    span{
                        .mixin_span(20%,50px,none,@color_label,left);
                        font-size: 24px;
                        float: left;
                        font-weight: 600;
                        padding: 0px 0px 0px 13px;
                        box-sizing: border-box;
                    }
                    input{
                        .mixin_input(260px,48px);
                        background: none;
                        float: left;
                        color: @color_label;
                        font-size: @font_size20;
                    }
                    div{
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
                        width: 80%;
                    }
                }
                .password-enter{
                    margin-top: 15px;
                }
                .remember-and-forget{
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
                }
                .login-register{
                    width: 100%;
                    height: 50px;
                    span:nth-of-type(1){
                        .mixin_span(48%,50px,none,white,center);
                        float: left;
                        border-radius: 4px;
                        font-size: 16px;
                        font-weight: 600;
                        .mixin_image(url('../../../static/dream/login/denglu.jpg'));
                    }
                    span:nth-of-type(1):hover{
                        .mixin_image(url('../../../static/dream/login/denglu_hover.jpg'));
                    }
                    span:nth-of-type(2){
                        .mixin_span(48%,50px,none,white,center);
                        float: right;
                        border-radius: 4px;
                        font-size: 16px;
                        font-weight: 600;
                        .mixin_image(url('../../../static/dream/login/kuaisuzhuce.jpg'));
                    }
                    span:nth-of-type(2):hover{
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
