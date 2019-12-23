<template>
<section id="children">
	<el-button @click='secret()'>child:{{article}}</el-button>
</section>
</template>

<script>
	export default{
		props:['article'],//父传子
		data(){
			return{
				son:'$emit子组件数据'
			}
		},
		mounted(){
			this.$parent.initial('参数');
		},
		methods:{
			secret(){
				//子传父
				this.$emit('purple',this.son);
				console.log('secret_9939',this.son);
			},
			praise(value){
				console.log('调用父组件方法---',value);
			}
		}
	}
</script>

<style lang="less" scoped>
#children{
	
}
</style>
