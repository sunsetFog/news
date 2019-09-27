<template>
	<div id="computed">
		<div class="rainbow">倒序：{{reverse}}</div>
		<input type="text" v-model.number='fuck'/>
		<div class="rainbow">setter与getter:{{fuck}}</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				flame: 'fancy',
				count: 600
			}
		},
		computed:{//1.有缓存作用  2.监听改变才触发  3.创建在data里,不是方法调用
			reverse:function(){
				return this.flame.split('').reverse().join('');
			},
//			对象格式
			fuck:{
				get:function(){
					return Number(this.count)*10
				},
				set:function(val){
						this.count=val/2;
						console.log('set变化',val,this.count);
				},
			}
		}
	}
</script>

<style lang="less" scoped>
#computed{
	.rainbow{
		.mixin_div(100%,50px,none,@color_blueviolet,center);
	}
}
</style>
