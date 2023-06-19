<template>
    <section>
        数组
    </section>
</template>

<script>
export default {
    name: "isArray",
    data() {
        return {

        }
    },
    created() {
        this.demo2();
    },
    methods: {
        demo1(){
            //数组概念：用来存储一系列数据的集合,下标从0开始，下标最大值为length-1
            // 定义数组   一维数组
            var arr1 = new Array(5);//构造方法
            var arr2 = new Array(1,'哈哈',3);
            var arr3 = [1,2,3];
            console.log('数组的长度', arr3.length);
            // 二维数组
            var arr4 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

            // arguments伪数组   调用this.demo2(8,9);   记得调用带参数，方法内不写参数
            console.log('arguments',arguments,Array.isArray(arguments));//arguments不是数组,是函数里的内置对象,方法里没有写参数却传入了参数,用arguments可以取
            console.log('arguments特性',arguments[0],arguments.length);//可以用下标，可以用长度，也能for循环，但不能用数组中的常用方法，比如push()...
            console.log('把arguments转换成真正的数组',Array.prototype.slice.call(arguments));
        },
        demo2(){
            /*
                数组中的常用方法 (注意返回内容，不能赋值)
                1  数组.join("")      将数组中的值拼接为字符串显示  参数1:拼接内容
                2  数组.pop()       删除并返回数组的最后一个元素
                3  数组.shift()      删除并返回数组的第一个元素
                4  数组.push(可以是对象)     在数组末尾添加元素,返回数组长度
                5  数组.unshift(可以是对象)     在数组的前面添加元素，返回数组长度
                6  数组.splice(下标,1)     删除或者添加指定的元素、、、删除并返回删除元素
                    参数1: 删除下标，是负数，从数组末尾开始算起
                    参数2: 删除的个数，0代表不删，1代表删除一个....
                    参数3: 在参数1的下标后添加的内容，有替换作用  数组.splice(下标,1,{})


                7  数组.indexOf("数组项")     返回数组中指定值的下标，如果未找到，返回-1
                8  数组.reverse()     将数组中的内容倒序排列
                9  数组.concat(数组)     拼接数组  arr1.concat(arr2,arr3,....);
                10  数组.sort(函数)     数组排序，默认从小到大排而且是按照字符编码排列
                11  数组.slice(开始下标,结束下标) 留头不留尾

                12 数组.includes('数组项，对象数组项也行')   元素是否存在，返回true或false
                13 Array.isArray(数组)  是否为数组，返回true或false
            */

            var arr=[10,6,-2,1];

            console.log('判断数组是否有该值', arr.indexOf(-2));
            console.log('数组拼接',arr.join(",")); // 10,6,-2,1
            console.log('数组后添加',arr.push(9));
            console.log('元素是否存在',arr.includes(9));
			arr.sort(function(a,b){
//				return a-b;//从小到大排
				return b-a//从大到小排
            })
            console.log('数组排序',arr);


            arr = [];// 清空数组
            if(arr.length == 0) {
                console.log("判断是否空数组");
            }

            /*
                splice注意用法：
                        如果只有一个参数，表示从当前下标一直删到最后
                        bug: ***
                        for循环中，用arr.splice会造成循环异常
                        方案一：保存要删的id
                        方案二：用i--
            */
            let huaArr = [1, 2, 3, 4, 5, 6, 7];
            for (let i = 0; i < huaArr.length; i++) {
                console.log("i停留在2", i, JSON.parse(JSON.stringify(huaArr)), huaArr[i]);
                if(i == 2) {
                    huaArr.splice(i, 1);
                    i--;// 没这个huaArr[i]少了4
                }
                // console.log("--i--", i);
            }
        },
        demo3(){
            //遍历数组
            // for与forEach的区别:
            // forEach不能使用break,continue,不能用arr.splice(),索引index不会被重置,相反for可以
            let arr = [1,2,3];
            for(let i=0;i<arr.length;i++){
                let item = arr[i]
                if(arr[i] == 2){
                    break;//直接终止循环
                }
                if(arr[i] == 3){
                    continue;//终止本次循环，进行下一次
                }
            }

            let obj = {aaa: 102};
            let that = this;
            /*
                数组.forEach(
                    方法(数组项, 数组下标, 数组本身){
                        用return指的是此方法
                    },
                    this指向
                )
                err问题: forEach的this指向改变了
            */
            arr.forEach(function(item,index,arr){
                console.log('this',this.aaa, this.num);
                console.log('that',that);
            },this);// this指向obj

            /*
                返回新的数组: 必用return，返回新数组的每一项
                let newArr = 数组.map(
                    方法(数组项, 数组下标, 数组本身){
                        用return指的是此方法
                    }
                )
             */
            let lyArr = [{title: '嘿嘿'},{title: '阚凯力'}]
            let newArr = lyArr.map(function(item){
                item.title = 'hk-' + item.title;// 修改
                item.active = false;// 新增
                return item;
                // 或
                // return {
                //     name: item.title,
                //     active: false
                // }
            })
            console.log('新数组',newArr);

            /*
                返回每项符合条件的新数组
                let newArr = 数组.filter(
                    方法(数组项, 数组下标, 数组本身){
                        return 条件（return指的是此方法）
                    }
                )
             */
            let newArr2 = arr.filter(function(item){
                return item>1&&item<3;
            })
            console.log('filter=',newArr2);
            /*
                检测数组中的元素是否满足指定条件,返回true,false
                let isTrue = 数组.some(
                    方法(数组项, 数组下标, 数组本身){
                        return 条件（return指的是此方法）
                    }
                )
             */
            let active = arr.some(function(item,index,arr){
                return item == 1;
            })
            console.log('some=',active);
            /*
                查找符合条件的元素，则返回第一个元素
                let firstItem = 数组.find(
                    方法(数组项, 数组下标, 数组本身){
                        return 条件（return指的是此方法）
                    }
                )
             */
            let content = arr.find(function(item){
                return item>0;
            })
            console.log('find=',content);
            /*
                符合条件，返回下标
             */
            let is_index = arr.findIndex(function(item){
                return item == 2;
            });
            console.log('findIndex=', is_index);
        },
    }
}
</script>

<style lang="less" scoped>

</style>


