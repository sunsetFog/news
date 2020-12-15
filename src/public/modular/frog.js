import router from '../../router';
import { Message } from 'element-ui';
import cache from '../../vuex/index.js';
const comic = {
    //vue项目，输入框限制输入15个中文，或者30个英文
    validateTextLength (value) {
        // 中文、中文标点、全角字符按1长度，英文、英文符号、数字按0.5长度计算
        let cnReg = /([\u4e00-\u9fa5]|[\u3000-\u303F]|[\uFF00-\uFF60])/g
        let mat = value.match(cnReg)
        let length
        if (mat) {
            if(mat.length>=6){
                length = 6
                return {length: length,active: true,chinese: true}
            }else{
                length = (mat.length + (value.length - mat.length) * 0.5)
                return {length: length,active: true,chinese: false}
            }
        } else {
            length = value.length * 0.5;
            return {length: length,active: false,chinese: false}
        }
    },
    /* 大小写字母*/
    validatAlphabets(str) {
        const reg = /^[A-Za-z]+$/
        return reg.test(str)
    },
    // 只能是数字
    validatNumber(str) {
        const reg = /^\d{6}$/
        return reg.test(str)
    },
    //6-12位数字和字母的组合
    validatNumberLowerCase(str) {
        const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{0,12}$/
        return reg.test(str)
    },
    //判断是否为空
    isEmpty(str){
        if(str == ''||str == null||str == undefined){
            return true;
        }else{
            return false;
        }
    },
    //不能输入特殊字符
    validatSpecial(str){
        const reg = new RegExp("[\\+,\\/,\\\\,\\?,\\？,\\%,\\#,\\&,\\=,\\(,\\),\\（,\\）,\\{,\\},\\',\\\",\\<,\\>,\\@,\\!,\\！,\\$,\\.,\\，,\\、,\\:,\\：,\\;,\\；,\\￥,\\*,\\~,\\`,\\-,\\——,\\_,\\^,\\“,\\”,\\‘,\\’,\\……,\\【,\\】,\\[,\\],\\,]", "gm");
        if(reg.test(str)){
            Message.error('不能输入特殊字符！');
            return {state: true,value: str.replace(reg, "")};
        }else{
            return {state: false,value: ''};
        }
    },
    //判断是否微信浏览器
    is_weixn(){  
        var ua = navigator.userAgent.toLowerCase();  
        if(ua.match(/MicroMessenger/i)=="micromessenger") {  
            return true;  
        } else {  
            return false;  
        }  
    },
    isMoblie: function (value) {
		return !/^1\d{10}$/.test(value);
    },
    //vue中动态获取文本换行
    trim(str) {  //str表示要转换的字符串
        return str.replace(/\n|\r\n/g,"<br/>");
    },
    judgeToken(){
        if(!sessionStorage.getItem('token')){
            Message.error('请先登录');
            return false;
        }
    },
    //当前时间转时间戳（精确到毫秒）
    timeStamp(){
        return new Date().getTime();
    },
    //时间戳转时间  https://www.cnblogs.com/zhaojunhao/p/9630315.html
    getLocalTime(nS) { // ns是10位准确，13位不准确
        return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");     
    },
    overallHeight(value){
        let overallApp = document.getElementById(value);
        // //console.log('jianting###',overallApp);
        if(overallApp!=null){
            overallApp.style.height = document.body.clientHeight+'px';
        }
    },
    //函数有参数传入，且有匿名函数回调
    amateur_login(account,password,host,callback){//登陆
        callback();
    },
    amateur_getPlayer(value,callback){//玩家信息
        //console.log('param^^',value);
        if(value=='head'){
            return {setAvatar:function(head){
                cache.commit('playerInfo',{title: 'head',params: head});
            }}
        }else if(value=='frame'){
            return {setAvatarBox:function(frame){
                cache.commit('playerInfo',{title: 'frame',params: frame});
            }}
        }else if(value=='sex'){
            return {setSex:function(sex){
                cache.commit('playerInfo',{title: 'sex',params: sex});
            }}
        }else if(value=='money'){
            return {setMoney:function(money){
                cache.commit('playerInfo',{title: 'money',params: money});
            }}
        }else if(value=='safe_money'){
            return {setSafeMoney:function(safe_money){
                cache.commit('playerInfo',{title: 'safe_money',params: safe_money});
            }}
        }else{
            return cache.getters.player;
        }
    },
    amateur_startGame(gameName){//进入游戏

    },
    amateur_back2GameFromLobby(isBack){//重新登录到大厅，是否回到上局游戏

    },
    amateur_relogin(){//游戏重连

    },
    amateur_clear(){//掉线不重连

    },
    amateur_get_email(page,callback){//获取邮件
        let json = {
            list: cache.getters.email_list,
            nowpage: 1,
            totalpages: 1,
            totalrows: cache.getters.email_list.length
        }
        callback(json);
    },
    amateur_get_email_single(id,callback){//获取单条邮件信息
        cache.commit('emailReaded',id);
        callback(cache.getters.email_single);
    },
    amateur_get_email_add(obj,callback){//暂无-增加邮件
        cache.commit('emailAdd',obj);
        callback(cache.getters.email_list);
    },
    amateur_get_email_dele(id,callback){//删除邮件
        cache.commit('emailDelete',id);
        let json = {
            list: cache.getters.email_list,
            nowpage: 1,
            totalpages: 1,
            totalrows: cache.getters.email_list.length
        }
        callback(json);
    },
    amateur_get_email_modify(obj,callback){//暂无-修改邮件
        cache.commit('emailModify',obj);
        callback(cache.getters.email_list);
    },
    amateur_get_message(page,callback){//获取公告
        let json = {
            list: cache.getters.notice_list,
            nowpage: 1,
            totalpages: 1,
            totalrows: cache.getters.notice_list.length
        }
        callback(json);
    },
    amateur_get_message_single(id,callback){//获取单条公告信息
        cache.commit('noticeReaded',id);
        callback(cache.getters.notice_single);
    },
    amateur_get_message_dele(id,callback){//删除公告
        cache.commit('noticeDelete',id);
        let json = {
            list: cache.getters.notice_list,
            nowpage: 1,
            totalpages: 1,
            totalrows: cache.getters.notice_list.length
        }
        callback(json);
    },
    amateur_recharge_types(callback){//充值类型
        callback({pay_types: cache.getters.pay_types});
    },
    amateur_recharge_url(money,pay_channel,bank_code,pay_type,callback){//充值链接
        callback({payurl: cache.getters.payurl});
    },
    amateur_recharge_recods(type,callback){//充值记录
        if(type==3){
            callback({list: cache.getters.record_list});
        }else if(type==2){
            let container = [];
            for(let i=0;i<cache.getters.record_list.length;i++){
                if(cache.getters.record_list[i].status=='充值失败'){
                    container.push(cache.getters.record_list[i]);
                }
            }
            callback({list: container});
        }else if(type==1){
            let container = [];
            for(let i=0;i<cache.getters.record_list.length;i++){
                if(cache.getters.record_list[i].status=='充值成功'){
                    container.push(cache.getters.record_list[i]);
                }
            }
            callback({list: container});
        }
    },
    amateur_bank_lists(type,callback){//获取银行卡和支付宝
        if(type==1){
            callback({list: cache.getters.bank_card});
            return;
        }else if(type==2){
            callback({list: cache.getters.alipay_list});
            return;
        }
    },
    amateur_bindBank(type,cardholder,bankname,cardno,callback){//提款-添加银行和支付宝
        if(type==1){
            let json = {
                bank_id: Math.floor(Math.random()*1000000),
                bank_name: bankname,
                cardholder: cardholder,
                cardno: cardno
            }
            cache.commit('bankAdd',json);
            callback({list: cache.getters.bank_card});
        }else if(type==2){
            let json = {
                bank_id: Math.floor(Math.random()*1000000),
                bank_name: '支付宝',
                cardholder: cardholder,
                cardno: cardno
            }
            cache.commit('alipayAdd',json);
            callback({list: cache.getters.alipay_list});
        }
    },
    amateur_unBindBank(type,bankid,callback){//提款-解绑银行卡和支付宝
        if(type==1){
            cache.commit('bankDelete',bankid);
            callback({list: cache.getters.bank_card});
        }else if(type==2){
            cache.commit('alipayDelete',bankid);
            callback({list: cache.getters.alipay_list});
        }
    },
    amateur_drawout(money,bankid,callback){//提款
        callback();
    },
    amateur_safeMoney(money,password,callback){//保险箱-存入金额
        callback(cache.getters.safe_take);
    },
    amateur_takeMoney(money,password,callback){//保险箱-取出金额
        callback(cache.getters.safe_take);
    },
    amateur_resetLoginPass_tel(loginame,new_pwd,captcha,callback){//重置登录密码(手机号注册)
        callback();
    },
    amateur_resetLoginPass_noTel(loginame,new_pwd,old_pwd,callback){//重置登录密码(非手机号注册)
        callback();
    },
    amateur_initMoneyPass(new_pwd,callback){//初始化资金密码
        callback();
    },
    amateur_resetMoneyPass_tel(new_pwd,captcha,callback){//重置资金密码(手机号注册)
        callback();
    },
    amateur_resetMoneyPass_noTel(new_pwd,old_pwd,callback){//重置资金密码(非手机号注册)
        callback();
    },
    amateur_getCaptcha_bindTel(callback){//获取验证码(已绑定手机号)
        callback();
    },
    amateur_updateName(nickname,callback){//修改昵称
        cache.commit('playerInfo',{title: 'nickname',params: nickname});
        callback();
    },
    amateur_updateAvatar(avatar,callback){//修改头像
        callback();
    },
    amateur_updateFrame(avatar_frame,callback){//修改头像框
        callback();
    },
    amateur_updateSex(sex,callback){//修改性别
        callback();
    },
    amateur_agent_url(callback){//获取代理系统url
        callback({agent_url: cache.getters.agent_url});
    },
    amateur_register_enter(url,callback){//进入注册
        callback();
    },
    amateur_getCaptcha_noBindTel(phone,callback){//获取验证码(未绑定手机号)
        callback();
    },
    amateur_register(loginame,password,captcha,callback){//注册
        callback();
    },
    amateur_register_exit(){//退出注册

    },
    amateur_exit(callback){//安全退出
        callback();
    }
}

export default comic;