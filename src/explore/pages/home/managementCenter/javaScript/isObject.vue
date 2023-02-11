<template>
    <section>
        对象
    </section>
</template>

<script>
export default {
    name: "isObject",
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        demo5(){
            /*
                对象概念：一个对象可包含多个属性    键值对 {key(键): 'value值'}
                获取或添加新属性语法：obj.key或者obj["key"],因为key是字符串
                删除对象中的某个属性: delete obj["key"];
             */
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
            console.log('判断对象是否有该属性', person.hasOwnProperty('name')); // true有，false没有
            console.log('调用对象属性',person.hobby);
            person.drink();//调用对象成员方法
            person['character'] = "温柔贤淑";//对象添加新属性
            console.log('添加新属性',person);
            //枚举法:遍历对象      注意：枚举法中，只能使用obj["key"]的形式
            for(let key in person){
                if(key=="age"){
                    console.log('遍历对象',person[key]);
                }
            }
        },
    }
}
</script>

<style lang="less" scoped>

</style>

