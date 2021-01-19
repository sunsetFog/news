import router from '../../router';
import { Message } from 'element-ui';
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
    // 只能是6位数字
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
    }
}

export default comic;