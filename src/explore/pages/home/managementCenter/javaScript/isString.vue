<template>
    <section>
        字符串
    </section>
</template>

<script>
export default {
    name: "isString",
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        demo6(){
            /*
                字符串常见方法：
                   字符串.charAt(下标)    返回指定下标的字符
                   字符串.charCodeAt(下标)    返回指定下标的字符编码
                   字符串.concat(字符串,字符串,字符串)    返回拼接一个或多个字符串

                   字符串.search("字符或正则表达式")    用来检索字符串中指定的字符串，返回该子串第一次出现的下标，找不到返回-1
                   字符串.indexOf("字符但不能正则表达式")    返回该子串第一次出现的下标，找不到返回-1
                   字符串.lastIndexOf("字符")     返回指定子串最后一次出现的下标，找不到，返回-1

                    只替换一个：
                        字符串.replace(旧字符串或正则表达式,新字符串)    新子串替换指定的旧子串，返回替换值
                        str.replace(/田/g,"天") 可以替换所有，但是替换标签报错 如：contentStr.replace(/'<p>'/g, '');
                    替换所有：
                        str.replaceAll("World","Bro");  相当于  contentStr.replace(new RegExp('<p>', 'gm'), '');

                    截取：区分这三个
                        字符串.slice(开始下标,结束下标)     返回开始下标和结束下标间的字符,留头不留尾   如果只有一个参数，截取到最后
                        slice(0 -2) 不要后面两个字符

                        字符串.substring(开始下标,结束下标)
                            substring()和slice()的区别：substring会将两个参数按照小在前，大在后排列,而slice()不会大小排列

                        字符串.substr(开始下标,获取个数)
                        substr(0, str.length - 2) 不要后面两个字符

                   字符串.toLowerCase()    大写转小写
                   字符串.toUpperCase()    小写转大写
                   字符串.split("字符")     返回字符串分割的数组，参数2:获取个数
             */

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

            let apple = 'water092'
            console.log('---后三位---', apple.substring(apple.length-3));
            console.log('---非后三位---', apple.substring(0, apple.length-3));

            let section = "2aaa888fff1";
            section = section.match(/aaa(\S*)fff/);// 有返回数组，没有返回null
            if (section) {
                section = section[1]
            }
            console.log('js截取两个字符串之间的内容', section);
            let insert = '776积极001'
            insert = insert.replace('积极', '积极响应');
            console.log('js在字符串中插入某个新符号', insert);
        },
    }
}
</script>

<style lang="less" scoped>

</style>

