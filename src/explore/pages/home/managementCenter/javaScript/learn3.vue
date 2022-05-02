<template>
    <section style="color: #fff;">
        <div>嘿嘿<br>99</div>
        <div>{{scenery}}</div>
        <div v-html="scenery"></div>
    </section>
</template>

<script>
export default {
    name: 'learn3',
    data(){
        return{
            num: 106,
            scenery: '嘿嘿<br>66'
        }
    },
    mounted(){
        this.demo1();
    },
    methods: {
        demo1(){
            /*
                讲解json文件     key必须是字符串
                json:是一种服务器与客户端进行数据交互的格式
                json的数据结构：{键(key):值(value)}   在数组中下标就是key
                json的常见类型：对象、数组、对象数组嵌套、字符串Json
             */
            var jsonObj = {
					"name":"Jhon",
					"age":18
                }
            var jsonArr = [
					{"name":"Deo","age":18},
					{"name":"Jhon","age":20} 
				]
            var jsonStr = '{"name": "Jhon","age":18}';//字符串Json   后台有时给这种，注意打印看清类型
            console.log('字符串解析为json对象',JSON.parse(jsonStr));// JSON.parse(必须是字符串)
            console.log('将json对象转为json字符串',JSON.stringify(jsonObj,null,4));// JSON.stringify(必须是对象)
            console.log('字符串解析为json对象',eval('('+jsonStr+')'));//不推荐，存在安全隐患
            let slogan = '标语'
            console.log('把字符串当变量使用', eval('slogan'))

            let dhhd = {}
            // json出现转义符，是正常的json格式，不用改
            dhhd.sky = JSON.stringify(jsonObj);
            dhhd.water = jsonObj;
            let kdkdk = JSON.parse(dhhd.sky);
            console.log("---dss----", dhhd);
            console.log("---转化回对象----", kdkdk);
        },
        demo7(){
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
            //    字符串.replace(正则表达式,'');  参数2:替换的字符串

			var str = "0";
            console.log('test',reg2.test(str));//true

            let name = " xiao ming ";
            console.log('去除所有空格',name.replace(/\s*/g,''));
            // 正则表达式-元字符    可用于标签内容  <span>小&nbsp;白</span>
            console.log('匹配换行符', 'A\nB'); // \n
            console.log('空格', 'A&nbsp;B'); // &nbsp;
            /*
                比较元字符
                &bt; 之间
                &cn; 包含
                &eq; 等于
                &ne; 不等
                &me; 多选
                &bw; 开始于
                &ew; 结束于
                &gt; 大于
                &ge; 大于等于
                &lt; 小于
                &le; 小于等于
            */
        },
        demo8(){
            //Math对象: 数学任务      Math.方法名(运算值)
			var a=-4.5;
			console.log('绝对值',Math.abs(a));
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
        demo10 (params = []) {
            console.log('方法默认值', params);
            let key = null;
            let sky = key || [];
            console.log('定义默认值', sky);
            let purpose = '?id=128';
            console.log('括号连续拼写', (purpose.split('id='))[1]);

            let flag = true, bean = '土豆';// 定义多个变量
            flag && (bean = '香蕉');
            /*
            记得加括号
            等价于  if(flag) {
                bean = '香蕉';
            }
            */
            console.log('--bean--', bean)

            if(true) console.log('--bean-2-', bean),bean = '苹果';
            /*
            等价于  if(true) {
                console.log('--bean-2-', bean);
                bean = '苹果';
            }
            */
            console.log('--bean-3-', bean)
            
        },
        demo11 () {
            let ly = 867;
            try{
                ly = ly.split('');// ly不是字符串
                console.log('在此运行代码');
            }catch(err){
                console.log('在此处理错误',err);
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>