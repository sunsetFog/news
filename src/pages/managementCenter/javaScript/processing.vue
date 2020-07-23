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
        this.demo3();
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
			// 6  字符串.indexOf("字符")    获取指定子串的下标，返回该子串第一次出现的下标，如果找不到，返回-1
			// 7  字符串.lastIndexOf("字符")     返回指定子串最后一次出现的下标，找不到返回-1
			// 8  字符串.slice(start,end)     返回开始下标和结束下标间的字符,留头不留尾
			// 					如果只有一个参数，默认取到最后
			// 9  字符串.substring(start,end)     返回开始下标和结束下标之间的字符，同样留头不留尾
			//   substring()和slice()的区别：substring会将两个参数按照小的在前，大的再后排列
			// 10  字符串.substr(参数1,参数2)      参数1代表获取子串的开始下标，参数2代表获取的个数，如果参数2是0,或者负数，获取的为空
			// 11  字符串.toLowerCase()    将大写转小写
			// 12  字符串.toUpperCase()    将大写转小写
			// 13  字符串.split("字符")      将字符串分割为数组，参数个数为1个或者2个
			// 			参数2规定了切分后的数组的最大长度
        }
    }
}
</script>

<style lang="less" scoped>

</style>