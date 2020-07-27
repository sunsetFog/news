<template>
    <section>

    </section>
</template>

<script>
export default {
    name: 'practice',
    data(){
        return{

        }
    },
    mounted(){
        this.demo1();
    },
    methods: {
        demo1(){
            let str = 'apple';
            let turn = str.split("").reverse().join("");
            console.log('字符串反转',turn);

            let frequency = (str.split("p")).length-1;
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
            // 冒泡排序：前后两两比较，每次将剩下最大值放在后面
		    // 优点：效率高，执行次数少
			var arr=[32,3,4,45,6,66,77]
			var temp=0;
			for(var i=0;i<arr.length-1;i++){
				for(var j=0;j<arr.length-1-i;j++){
					if(arr[j]>arr[j+1]){
						temp=arr[j];
						arr[j]=arr[j+1];
						arr[j+1]=temp;
					}
				}
            }
            console.log('冒泡排序',arr);
        },
        demo4(){

        }
    }
}
</script>

<style lang="less" scoped>

</style>