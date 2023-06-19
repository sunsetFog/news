<template>
    <section>

    </section>
</template>

<script>
export default {
    name: 'jsDemo',
    data(){
        return{
            newArr: [1,1],
            count: 0
        }
    },
    created() {
        this.bean(100);
        console.log("递归---数组长度---", this.newArr.length)
        console.log("递归---数组---", this.newArr)
        console.log("递归---第100个---", this.newArr[99])

        // console.log("---画好后---", this.fibonacci(100))
    },
    mounted(){
        this.demo1();
    },
    methods: {
        demo1(){
            let str = 'apple';
            let turn = str.split("").reverse().join("");
            console.log('字符串反转',turn);

            let frequency = (str.split("p")).length-1; // 括号连续拼写
            console.log('p字母次数',frequency);

            let num = 7590584;
            console.log('数字位数',String(num).length);
            if(num%2==0){
                console.log('偶数');
            }else if(num%2==1){
                console.log('奇数');
            }

            let str2="border-left-style";
            let arr=str2.split("-");
            for(let i=0;i<arr.length;i++){
                arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
            }
            console.log('驼峰式命名',arr.join(''));

            let sum=0;
            let arr2=[1,15,3,5];
            for(let i=0;i<arr2.length;i++){
				sum=sum+arr2[i];
            }
            console.log('运算和值',sum);
        },
        demo2(){
            //数组去重
            let arr = [2,5,1,5,2,8,8,5];

            let container = [];
            for(let i=0;i<arr.length;i++){
                if(container.indexOf(arr[i]) == -1){
                    container.push(arr[i]);
                }
            }
            console.log('1数组去重',container);

            let obj = {};
            let tmp = [];
            for(let i=0;i<arr.length;i++){
                if(!obj[arr[i]]){
                    obj[arr[i]] = 1;
                    tmp.push(arr[i]);
                }else{
                    obj[arr[i]]+=1;
                }
            }
            console.log('2数组去重',tmp,obj);
            // let num = 0;
            // let name = '';
            // for(let item in obj){
            //     if(num<obj[item]){
            //         num = obj[item];
            //         name = item;
            //     }
            // }
            // console.log('字母次数最多是',name,num);


            let bottle = arr.filter(function(item,index,self){//参数1: 数组项   参数2: 下标    参数3: 数组本身
                return self.indexOf(item) === index;//indexOf有就返回下标，否返回-1
            })
            console.log('3数组去重',bottle);
        },
        demo3(){
            /*
                好方法：两两比较
                当同一个数组，用两个for循环时，就必须选两两比较

                冒泡排序：前后两两比较，每次将剩下最大值放在后面
                优点：效率高，执行次数少
            */
			var arr=[32, 3, 4, 45, 6, 16, 27];
			var temp = 0;
			for(let i = 0; i < arr.length-1; i++){// arr.length-1是最后一次不用移动   当i=6 arr.length-i 就是 7-6=1
                console.log("--i--", i);
				for(let j = 0; j < arr.length-1-i; j++){// arr.length-1-i为了不再改后面的最大值
					if(arr[j] > arr[j+1]){
						temp = arr[j];
						arr[j] = arr[j+1];
						arr[j+1] = temp;
					}
				}
                console.log("--arr变化--把最大移到最后--", JSON.parse(JSON.stringify(arr)));
            }
            console.log('冒泡排序1', arr);

        },
        // 方法一：遍历
        demo5() {
            /*
                第一个值 + 第二个值 = 第三个值
                1,1,2,3,5,8,*,*,*
                求第100个？
            */

            let arr = [1,1]
            for(let i = 0; i < (100 - 2); i++) {
                arr.push(arr[i] + arr[i+1])
                /*
                    i = 0
                    arr[2] = arr[0] + arr[1]
                    arr[2] = 1 + 1 = 2
                    arr = [1,1,2]

                    i = 1
                    arr[3] = arr[1] + arr[2]
                    arr[3] = 1 + 2 = 3
                    arr = [1,1,2,3]

                    i = 2
                    arr[4] = arr[2] + arr[3]
                    arr[4] = 2 + 3 = 5
                    arr = [1,1,2,3,5]
                */
            }
            console.log("---数组长度---", arr.length)
            console.log("---数组---", arr)
            console.log("---第100个---", arr[99])
        },
        // 方法一：递归
        bean(num) {
            if(this.newArr.length >= num) {
                return
            }
            this.newArr.push(this.newArr[this.count] + this.newArr[this.count+1]);
            this.count++;

            return this.bean(num);
        },
        demo6() {
            /*
                要求id相同的拼接name + id去重?

                数组对象去重的四种方式
                https://blog.csdn.net/weixin_55992854/article/details/120386515
            */
            let nameList = [
                { name: "小红", id: 1 },
                { name: "小橙", id: 1 },
                { name: "小黄", id: 4 },
                { name: "小绿", id: 3 },
                { name: "小青", id: 1 },
                { name: "小蓝", id: 4 }
            ]
            let saveList = JSON.parse(JSON.stringify(nameList));
            // 方式1：先去重并分类
            let idArr = []
            let ortherArr = []
            for (let i = 0; i < nameList.length; i++) {
                let item = nameList[i];
                if (idArr.indexOf(item.id) == -1) {
                    idArr.push(item.id);
                } else {
                    ortherArr.push(item);
                    nameList.splice(i, 1);// for用splice,要i--
                    i--;
                }
            }
            console.log("-ortherArr-", JSON.parse(JSON.stringify(ortherArr)));
            for (let i = 0; i < nameList.length; i++) {
                let item = nameList[i];
                for (let j = 0; j < ortherArr.length; j++) {
                    let row = ortherArr[j];
                    if(item.id == row.id) {
                        item.name += ' + ' + row.name;
                    }
                }
            }
            console.log("-nameList-", JSON.parse(JSON.stringify(nameList)));
            // 方式2：遇到后面重复项，就删除
            for (let i = 0; i < saveList.length; i++) {
                    let item = saveList[i];
                for (let j = i + 1; j < saveList.length; j++) {
                    let row = saveList[j];
                    if(item.id == row.id) {
                        item.name += ' + ' + row.name;
                        saveList.splice(j, 1);
                        j--;
                    }
                }
            }
            console.log("-saveList-", JSON.parse(JSON.stringify(saveList)));


        }
    }
}
</script>

<style lang="less" scoped>

</style>
