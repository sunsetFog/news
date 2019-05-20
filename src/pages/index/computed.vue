<template>
	<div>
		<div>data数据：{{datas}}</div>
		<div>倒序：{{reverse}}</div>
		<input type="text" v-model.number='count'/>
		<div>setter与getter:{{fuck}}</div>
		<div>工资的结算:{{holy}}</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				datas: 'fancy',
				count: 600
			}
		},
		created(){
			console.log('computed方法创建在data里',this.holy);
		},
		computed:{//1.有缓存作用  2.监听改变才触发  3.创建在data里,不是方法调用
			reverse:function(){
				return this.datas.split('').reverse().join('')
			},
//			对象格式
			fuck:{
				get:function(){
					return Number(this.count)+400
				},
				set:function(val){
						this.count=val/2
				},
			},
			holy:function(){
				if(this.count>300){
					return this.count*20
				}else if(300<this.count<1000){
					return this.count - 80
				}
			}
		}
	}
</script>

<style>
</style>