<template>
    <section id="crux">
        <div class="personal-information">
            <div class="information-left">
                <div class="user-title">个人信息</div>
                <div class="user-contain">
                    <div class="user-info">
                        <img :src="portrait.head" @click="portraitMeans()"/>
                        <img :src="portrait.frame"/>
                        <span>{{player_info.nickname}}</span>
                    </div>
                    <div class="account-balance">
                        <label>账户余额:</label>
                        <span><img v-for="(item,index) in number_money" :src="number_count[item].url"/></span>
                        <span @click="payMeans(0)">充值</span>
                    </div>
                    <div class="user-id">
                        <label>我的ID:</label>
                        <span>{{player_info.mShowUid}}</span>
                        <button class="copy-dom" :data-clipboard-text="player_info.mShowUid" @click="copyText()">复制</button>
                    </div>
                    <div class="nickname">
                        <label>昵称:</label>
                        <div class="edit-name" v-if="!nickname_state">
                            <span>{{player_info.nickname}}</span>
                            <i class="el-icon-edit" @click="nicknameEdit()"></i>
                        </div>
                        <div class="nickname-select" v-else>
                            <input type="text" placeholder="请输入昵称" v-model.trim="pet_name" ref="pet_name" @input="changeValue"/>
                            <button @click="nicknameDetermine">确定</button>
                            <button @click="nickname_state = false">取消</button>
                        </div>
                    </div>
                    <div class="sex-example">
                        <label>性别:</label>
                        <div class="edit-sex" v-if="sex_state==false">
                            <span v-if="player_info.sex==1">男</span>
                            <span v-if="player_info.sex==2">女</span>
                            <i class="el-icon-edit" @click="sexEdit()"></i>
                        </div>
                        <div class="sex-select" v-else>
                            <el-select v-model="sex_value" placeholder="请选择" size="mini">
                                <el-option
                                v-for="item in sex_options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <button @click="sexDetermine()">确定</button>
                            <button @click="sex_state = false">取消</button>                           
                        </div>
                    </div>
                </div>
            </div>

            <div class="information-right">
                <div class="archives-list" v-for="(item,index) in archives_list">
                    <div class="archives-header"></div>
                    <div class="archives-contain">
                        <img :src="item.url"/>
                        <span>{{item.theme}}</span>
                        <span v-if="index!=2">{{item.explain}}</span>
                        <span v-else>{{count_readed}}{{item.explain}}</span>
                        <span @click="archivesMeans(index)">{{item.modify}}</span>
                    </div>
                </div>
            </div>
        </div>


        <recharge ref="recharge"></recharge>
        <withdrawal ref="withdrawal"></withdrawal>
        <manage-bank ref="manageBank"></manage-bank>
        <add-bank ref="addBank"></add-bank>
        <manage-alipay ref="manageAlipay"></manage-alipay>
        <add-alipay ref="addAlipay"></add-alipay>
        <withdrawal-password ref="withPassword"></withdrawal-password>
        <know ref="know"></know>
        <mail ref="mail"></mail>
        <notice ref="notice"></notice>
        <consult ref="consult"></consult>
        <login-password ref="loginPassword"></login-password>
        <safe-deposit ref="safeDeposit"></safe-deposit>
        <portrait ref="portrait"></portrait>
        <recharge-record ref="rechargeRecord"></recharge-record>
    </section>
</template>

<script>
import Clipboard from 'clipboard';
import { mapGetters } from 'vuex';
export default{
    name: 'crux',
    data(){
        return{
            nickname_state: false,
            archives_list: [
                {theme: '登陆密码',explain: '6-12个字符',modify: '修改登录密码',url: '../../../static/picture/center/denglu.png'},
                // {theme: '绑定银行卡',explain: '最多可绑定5张银行卡',modify: '绑定银行卡',url: '../../../static/picture/center/yinhangka.png'},
                {theme: '提款密码',explain: '6个数字密码',modify: '设置提款密码',url: '../../../static/picture/center/tikuanmima.png'},
                {theme: '邮件',explain: '条未读',modify: '查看邮件',url: '../../../static/picture/center/zhanneixin.png'},
                // {theme: '密保设定',explain: '用于找回密码',modify: '修改密保设定',url: '../../../static/picture/center/baomi.png'},
                {theme: '公告',explain: '请随时关注最新公告',modify: '查看公告',url: '../../../static/picture/center/xinxi.png'},
                {theme: '保险箱',explain: '用于存入和取出资金',modify: '查看保险箱',url: '../../../static/picture/center/baoxianxiang.png'}
            ],
            pet_name: '',
            number_count: [
                {url: '../../../static/picture/center/0.png'},
                {url: '../../../static/picture/center/1.png'},
                {url: '../../../static/picture/center/2.png'},
                {url: '../../../static/picture/center/3.png'},
                {url: '../../../static/picture/center/4.png'},
                {url: '../../../static/picture/center/5.png'},
                {url: '../../../static/picture/center/6.png'},
                {url: '../../../static/picture/center/7.png'},
                {url: '../../../static/picture/center/8.png'},
                {url: '../../../static/picture/center/9.png'},
                {url: '../../../static/picture/center/dian.png'},
                {url: '../../../static/picture/center/11.png'}
            ],
            number_money: [],
            portrait: {head: '',frame: ''},
            count_readed: 0,//邮件阅读
            sex_options: [
                {value: 1,label: '男'},
                {value: 2,label: '女'}
            ],
            sex_value: 1,
            sex_state: false
        }
    },
    created(){
        this.getJson();
    },
    computed: {
        ...mapGetters([
            'player_info',
            'money'
        ])
    },
    methods:{
        getJson(){
                this.portrait.head = '../../../static/picture/portrait/ui_headImg_'+this.player_info.avatar+'.png';
                this.portrait.frame = '../../../static/picture/portrait/ui_headBox_'+this.player_info.avatar_box+'.png';
                this.pet_name = this.player_info.nickname;
                this.sex_value = this.player_info.sex;
                
                this.number_money = this.money.toString().split('');
                for(let i=0;i<this.number_money.length;i++){
                    if(this.number_money[i]=='.'){
                    this.number_money[i] = 10; 
                    }else if(this.number_money[i]=='-'){
                        this.number_money[i] = 11;
                    }
                }
        },
        changeValue () {
            let leng = this.$means.validateTextLength(this.pet_name)
            if (leng.active) {
                if(leng.chinese){
                    this.pet_name = this.pet_name.substring(0,6);
                    this.$refs.pet_name.maxLength = 6
                }else{
                    this.pet_name = this.pet_name.substring(0,8);
                    this.$refs.pet_name.maxLength = 8
                }
            } else {
                this.pet_name = this.pet_name.substring(0,11);
                this.$refs.pet_name.maxLength = 11
            }
        },
        portraitMeans(){
            this.$refs.portrait.changeMeans(this.player_info.avatar,this.player_info.avatar_box);
        },
        copyText(){
            var clipboard = new Clipboard('.copy-dom')  
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
        },
        allEmpty(){
            this.nickname_state = false;
            this.sex_state = false;
        },
        nicknameEdit(){
            this.allEmpty();
            this.pet_name = this.player_info.nickname;
            this.nickname_state = true;
        },
        sexEdit(){
            this.allEmpty();
            this.sex_value = this.player_info.sex;
            this.sex_state = true;
        },
        nicknameDetermine(){
            var that = this;
            if(that.pet_name==''){
                that.$message.error('昵称不能为空！');
                return;
            }
            that.$means.amateur_updateName(that.pet_name,function(res){
                that.$message.success('修改昵称成功！');
                that.player_info.nickname = that.pet_name;
                that.nickname_state = false;
            })
        },
        sexDetermine(){
            var that = this;
            that.$means.amateur_updateSex(that.sex_value,function(res){
                that.$means.amateur_getPlayer('sex').setSex(that.sex_value);
                that.$store.dispatch('getPlayerInfo',that.$means.amateur_getPlayer());
                that.sex_state = false;
                that.$message.success('修改性别成功！');
            })
        },
        payMeans(index){
            this.allEmpty();
            this.$refs.recharge.changeMeans();
        },
        archivesMeans(index){
            this.allEmpty();
            if(index==0){
                this.$refs.loginPassword.changeMeans(this.player_info.isRegistBytel);//是否手机邮件注册-子用
            }else if(index==1){
                this.$refs.withPassword.changeMeans(this.player_info.isRegistBytel);
            }else if(index==2){
                this.$refs.mail.changeMeans();
            }else if(index==3){
                this.$refs.notice.changeMeans();
            }else if(index==4){
                this.$refs.safeDeposit.changeMeans(this.player_info.isPwdSeted,this.money,this.player_info.safe_money);
            }
        },
        hostMeans(value,response,count){
            if(value=='managebank'){
                this.$refs.manageBank.changeMeans();
            }else if(value=='addbank'){
                this.$refs.addBank.changeMeans();
            }else if(value=='managealipay'){
                this.$refs.manageAlipay.changeMeans();
            }else if(value=='addalipay'){
                this.$refs.addAlipay.changeMeans();
            }else if(value=='know'){
                this.$refs.know.changeMeans(response);
            }else if(value=='mail'){
                if(response=='get'){
                    this.$refs.mail.getJson();
                }else if(response=='readed'){
                    this.count_readed = count;
                }else{
                    this.$refs.consult.changeMeans('mail',response);
                }
            }else if(value=='notice'){
                if(response=='get'){
                    this.$refs.notice.getJson();
                }else{
                    this.$refs.consult.changeMeans('notice',response);
                }
            }else if(value=='withdrawal'){
                if(response=='bank'){
                    this.$refs.withdrawal.getBankJson();
                }else if(response=='alipay'){
                    this.$refs.withdrawal.getAlipayJson();
                }
            }else if(value=='portrait'){
                if(response=='head'){
                    this.portrait.head = count;
                }else if(response=='frame'){
                    this.portrait.frame = count;
                }
            }else if(value=='rechargerecord'){
                this.$refs.rechargeRecord.changeMeans();
            }
        }
    }
}
</script>

<style lang="less" scoped>
#crux{
    width: 100%;
    height: 100%;
    .personal-information{
        width: 100%;
        height: 100%;
        .information-left{
            .mixin_float(36.9%,100%,left);
            .user-title{
                border-top: 7px solid @color_blueviolet;
                .mixin_div(100%,70px,@color_darkgray,@color_gray,left);
                text-indent: 20px;
                font-size: @font_size20;
                line-height: 60px;
            }
            .user-contain{
                .mixin_div(100%,731px,@color_purple,@color_white,left);
                padding: 0px 20px;
                box-sizing: border-box;
                .user-info{
                    .mixin_div(100%,205px,none,@color_white,left);
                    position: relative;
                    img:nth-of-type(1){
                        .mixin_img(80px,80px);
                        position: absolute;
                        left: 50%;
                        top: 45px;
                        margin-left: -40px;
                        z-index: 3;
                        cursor: pointer;
                    }
                    img:nth-of-type(2){
                        .mixin_img(138px,138px);
                        position: absolute;
                        left: 50%;
                        top: 15px;
                        margin-left: -69px;
                        z-index: 2;
                    }
                    span{
                        .mixin_span(100%,30px,none,@color_white,center);
                        position: absolute;
                        top: 150px;
                        font-weight: 600;
                        font-size: @font_size18;
                    }
                }
                .account-balance,.nickname,.sex-example,.user-id{
                    .mixin_div(100%,30px,none,@color_white,left);
                    margin-bottom: 10px;
                    font-size: @font_size16;
                    label{
                        .mixin_span(auto,30px,none,@color_gray,center);
                        margin-right: 10px;
                        float: left;
                    }
                }
                .account-balance{
                    span:nth-of-type(1){
                        .mixin_span(auto,30px,none,@color_white,center);
                        padding-top: 5px;
                        box-sizing: border-box;
                        float: left;
                        img{
                            .mixin_img(15px,20px);
                            float: left;
                        }
                    }
                    span:nth-of-type(2){
                        .mixin_span(auto,30px,none,@color_gray,center);
                        float: right;
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
                .user-id{
                    span{
                        .mixin_span(150px,30px,none,@color_white,left);
                        float: left;
                    }
                    button{
                        .mixin_button(auto,28px,@color_white2,@color_blueviolet);
                        float: right;
                        font-size: @font_size12;
                        border: 1px solid @color_blueviolet;
                        padding: 0px 5px 0px 5px;
                        box-sizing: border-box;
                    }
                    button:hover{
                        background: @color_white2_hover;
                    }
                }
                .nickname,.sex-example{
                    .edit-sex,.edit-name{
                        span:nth-of-type(1){
                            .mixin_span(auto,30px,none,@color_gray,center);
                            float: left;
                        }
                        i{
                            color: @color_white;
                            margin: 7px 0px 0px 30px;
                            cursor: pointer;
                            float: left;
                        }
                    }
                    .nickname-select{
                        .mixin_float(80%,30px,right);
                        input{
                            .mixin_input(100px,28px);
                            border: 1px solid @color_blueviolet;
                            background: @color_indigo;
                            color: @color_blueviolet;
                            vertical-align: middle;
                            float: left;
                        }
                    }
                    .sex-select{
                        .mixin_float(80%,30px,right);
                    }
                    .nickname-select,.sex-select{
                        button:nth-of-type(1){
                            .mixin_button(auto,28px,@color_white2,@color_blueviolet);
                            border: 1px solid @color_blueviolet;
                            font-size: 12px;
                            float: right;
                            margin-left: 5px;
                            padding: 0px 5px 0px 5px;
                            box-sizing: border-box;
                        }
                        button:nth-of-type(1):hover{
                            background: @color_white2_hover;
                        } 
                        button:nth-of-type(2){
                            .mixin_button(auto,28px,@color_indigo,@color_blueviolet);
                            border: 1px solid @color_blueviolet;
                            font-size: 12px;
                            float: right;
                            padding: 0px 5px 0px 5px;
                            box-sizing: border-box;
                        }
                        button:nth-of-type(2):hover{
                            background: @color_indigo_hover;
                        }    
                    }
                }
            }
            
        }
        .information-right{
            .mixin_float(63.1%,100%,right);
            padding: 0px 0px 0px 20px;
            box-sizing: border-box;
            .archives-list{
                .mixin_div(100%,145px,none,auto,left);
                float: left;
                margin-bottom: 20px;
                .archives-header{
                    .mixin_div(100%,45px,@color_darkgray,@color_white,left);
                    border-top: 7px solid @color_blueviolet;
                }
                .archives-contain{
                    .mixin_div(100%,95px,@color_purple,@color_white,left);
                    position: relative;
                    img{
                        .mixin_img(55px,55px);
                        position: absolute;
                        left: 20px;
                        top: 18px;
                    }
                    span:nth-of-type(1){
                        .mixin_span(auto,25px,none,@color_white,left);
                        font-size: @font_size20;
                        position: absolute;
                        left: 100px;
                        top: 20px;
                    }
                    span:nth-of-type(2){
                        .mixin_span(auto,25px,none,@color_dimgray,left);
                        font-size: @font_size16;
                        position: absolute;
                        left: 100px;
                        top: 50px;
                    }
                    span:nth-of-type(3){
                        .mixin_span(auto,25px,none,@color_blueviolet,right);
                        font-size: @font_size16;
                        position: absolute;
                        right: 20px;
                        top: 20px;
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
            }
        }
    }

}
</style>