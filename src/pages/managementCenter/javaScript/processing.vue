<template>
    <section>

    </section>
</template>

<script>
export default {
    name: 'processing',
    data(){
        return{

        }
    },
    mounted(){
        this.demo7();
    },
    methods: {
        demo1(){
            //数组概念：用来存储一系列数据的集合,下标从0开始，下标最大值为length-1
            // 定义数组   一维数组
            var arr1 = new Array(5);//构造方法
            var arr2 = new Array(1,'哈哈',3);
            var arr3 = [1,2,3];
            console.log('数组的长度',arr3.length);
            // 二维数组
            var arr4 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
        },
        demo2(){
            // 数组中的常用方法
            // 1  数组.join("")      将数组中的值拼接为字符串显示,括号中填写拼接内容
            // 2  数组.pop()       删除并返回数组的最后一个元素
            // 3  数组.shift()      删除并返回数组的第一个元素
            // 4  数组.push(可以是对象)     在数组末尾添加一个或多个元素,并且返回数组长度
            // 5  数组.unshift(可以是对象)     在数组的前面添加一个或多个元素，并且返回数组长度
            // 6  数组.splice(下标)     删除或者添加指定的元素、、、删除并返回
            //     如果只有一个参数，表示从当前下标一直删到最后
            //     三个参数，第三个可选
            //     第一个参数代表需要删除的起始下标
            //     第二个参数代表需要删除的个数，0代表不删，1代表删除一个....
            //     第三个参数代表要添加的内容
            //     如果第一个值是负数，从数组末尾开始算起
            // 7  数组.indexof("值")     获取数组中指定值的下标，如果未找到该值，下标弹出-1
            // 8  数组.reverse()     将数组中的内容倒序排列
            // 9  数组.concat(数组,数组)     拼接多个数组的内容为一个数组,arr1.concat(arr2,arr3,....);
            // 10  数组.sort(函数)     数组排序，默认从小到大排而且是按照字符编码排列

            var arr=[10,6,-2,1];
            console.log('数组拼接',arr.join(""));
            console.log('数组后添加',arr.push(9));
			arr.sort(function(a,b){
//				return a-b;//从小到大排
				return b-a//从大到小排
            })
            console.log('数组排序',arr);
        },
        demo3(){
            // 对象概念：一个对象可包含多个属性
            // 定义对象
            var person = {
				    name : "娜娜",
					age : 18,
					sex : "女",
                    hobby : "唱歌",
                    drink: function(){
                        console.log("今晚的酒真好喝");
                    }
                }
            console.log('调用对象属性',person.hobby);
            person.drink();//调用对象方法
            person['character'] = "温柔贤淑";//添加新属性
            console.log('添加新属性',person);
            //遍历对象
            for(let key in person){
                if(key=="age"){
                    console.log('遍历对象',person[key]);
                }
            }
        },
        demo4(){
            // 字符串常见方法：
			// 1  字符串.charAt(下标)    获取字符串中指定下标的字符
			// 2  字符串.charCodeAt(下标)    获取字符串中指定下标的字符编码
			// 3  字符串.concat(字符串,字符串)    拼接一个或多个字符串
			// 4  字符串.search("字符")    用来检索字符串中指定的字符串，返回该子串第一次出现的下标，如果未找到，返回-1
			// 5  字符串.replace(字符串,字符串)    用新的子串替换指定的旧子串
			// 6  字符串.indexOf("字符")    返回该子串第一次出现的下标，如果找不到，返回-1
			// 7  字符串.lastIndexOf("字符")     返回指定子串最后一次出现的下标，找不到返回-1
			// 8  字符串.slice(开始下标,结束下标)     返回开始下标和结束下标间的字符,留头不留尾   如果只有一个参数，默认取到最后
			// 9  字符串.substring(开始下标,结束下标)     返回开始下标和结束下标之间的字符，同样留头不留尾
			//   substring()和slice()的区别：substring会将两个参数按照小的在前，大的再后排列
			// 10  字符串.substr(开始下标,获取个数)      参数1:获取子串的开始下标，参数2:获取的个数，如果参数2是0,或者负数，获取的为空
			// 11  字符串.toLowerCase()    将大写转小写
			// 12  字符串.toUpperCase()    将小写转大写
			// 13  字符串.split("字符")      将字符串分割为数组，参数个数为1个或者2个    参数2:获取个数
			var str0 = "HELLO WORLD";
			var str = "今天好是好个好日子";
			var str1 = "hello world"
            console.log('字符串长度',str.length);//获取字符串长度
            
			console.log('charAt',str.charAt(4));//好
			console.log('charCodeAt',str.charCodeAt(4));//22909
			console.log('concat',str0.concat("=字符串=",str));//HELLO WORLD=字符串=今天好是好个好日子
			console.log('search',str.search("好"));//2
			console.log('search',str.search("翔"));//-1
			console.log('replace',str.replace("好",str0));//今天HELLO WORLD是好个好日子
			console.log('indexOf',str.indexOf("是个好"));//-1
			console.log('indexOf',str.indexOf("是好"));//3
			console.log('lastIndexOf',str.lastIndexOf("好"));//6
			console.log('slice',str.slice(2,6));//好是好个
			console.log('slice',str.slice(2));//好是好个好日子
			console.log('slice',str.slice(-2));//日子
			console.log('slice',str.slice(-2,-1));//日
			console.log('slice',str.slice(2,-1));//好是好个好日
			console.log('slice',str.slice(-6,6));//是好个
			console.log('substring',str.substring(1,6));//天好是好个
			console.log('substring',str.substring(6,1));//天好是好个
			console.log('substr',str.substr(6,1));//好
			console.log('substr',str.substr(1,6));//天好是好个好
			console.log('toLowerCase',str0.toLowerCase());//hello world
			console.log('toUpperCase',str1.toUpperCase());//HELLO WORLD
			console.log('split',str.split(""));//["今", "天", "好", "是", "好", "个", "好", "日", "子"]
			console.log('split',str.split("好"));//["今天", "是", "个", "日子"]
			console.log('split',str.split("好",2));//["今天", "是"]
        },
        demo5(){
            //正则表达式: 验证指定字符串合法与否
            // 定义正则表达变量
            var reg1 = new RegExp("a");
            var reg2 = /[0-9]/;
            console.log('RegExp',reg1);
			//     /字符/g   匹配全局
			//     /字符/i   不区分大小写
			//     /字符/ig   匹配全局且不区分大小写
            //    /[0-9]/   匹配0-9之间的数字
			//    /[a-z]/   匹配26个小写字母
            //    /[A-Z]/   匹配26个大写字母

            //    正则表达式.test(字符);      如果有返回true,否则返回false

			var str = "0";
			console.log('test',reg2.test(str));//true
        },
        demo6(){
            //Math对象: 数学任务      Math.方法名(运算值)
			var a=-4.5;
			console.log('绝对值',Math.abs(a));//
			var b=4.2;
			console.log('上取整',Math.ceil(b));
			console.log('下取整',Math.floor(b));
			var c=4.7
            console.log('四舍五入',Math.round(c));

            console.log('0 ~ 1 之间的一个随机数',Math.random());
            let max = 55;
            let min = 10;
			console.log('两数之间的随机数',Math.random()*(max-min)+min);
            console.log('两数之间的随机整数',Math.floor(Math.random()*(max-min)+min));
            
			var arr=[1,2,3,4,5];
			console.log('最高值',Math.max(3,1,8,66,9));
			console.log('最低值',Math.min(3,1,2,0,-8,97));
			console.log('幂',Math.pow(3,2));
			console.log('平方根',Math.sqrt(9));
            var deg60=60;
            console.log('正弦',Math.sin(deg60));
            console.log('余弦',Math.cos(deg60));
            console.log('正切',Math.tan(deg60));
        },
        demo7(){
            //Dtae对象
            var nowTime = new Date();//Date构造函数
            console.log('当前时间',nowTime);
            var futureTime = new Date(2050,0,1);
            console.log('目标时间',futureTime);

            console.log('时间戳',Date.parse(nowTime));// Date.parse() 1970 年 1 月 1 日至今的毫秒数
            console.log('当月几号(1 ~ 31)',nowTime.getDate());
            console.log('星期几(0 ~ 6)',nowTime.getDay()+1);
            console.log('月份 (0 ~ 11)',nowTime.getMonth()+1);
            console.log('年份',nowTime.getFullYear());
            console.log('小时 (0 ~ 23)',nowTime.getHours()+1);
            console.log('分钟 (0 ~ 59)',nowTime.getMinutes()+1);
            console.log('秒数 (0 ~ 59)',nowTime.getSeconds()+1);

            console.log('2020/7/26===',nowTime.toLocaleDateString());
            console.log('2020/7/26 下午11:54:30===',nowTime.toLocaleString());
            console.log('下午11:54:30===',nowTime.toLocaleTimeString());
            


            var millisecond= futureTime.getTime() - nowTime.getTime();// getTime() 1970 年 1 月 1 日至今的毫秒数       
            console.log('剩余所有毫秒数',millisecond);

            var surplusSecond = parseInt(millisecond/1000);
            console.log('剩余所有秒数',surplusSecond);

            var days = Math.floor(surplusSecond/(24*60*60));
            console.log('剩余天数',days);

            var hours = Math.floor((surplusSecond-days*24*60*60)/3600);
            console.log('剩余小时',hours);

            var minutes = Math.floor((surplusSecond-days*24*60*60-hours*60*60)/60);
            console.log('剩余分钟',minutes);

            var seconds = Math.floor((surplusSecond-days*24*60*60-hours*60*60-minutes*60));
            console.log('剩余秒数',seconds);

            console.log("距离2050年元旦还有："+days+"天"+hours+"时"+minutes+"分"+seconds+"秒");
            // setInterval(this.demo7,1000);//倒计时
        },
        demo8(){
            
        }
    }
}
</script>

<style lang="less" scoped>

</style>