<template>
<section id="filters">
	<!-- 按需引入    多个过滤器{{item | A | B}}-->
	<div class="rainbow" v-for="item in message">{{item | pain}}</div>
	<hr />
	<!-- 全局引入 -->
	<div class="rainbow">{{profit | numPercent}}</div>
	<hr />
	<el-button type="warning" @click="deleteFilters">删除与过滤</el-button>
</section>
</template>

<script>
	export default{
		data(){
			return{
				message:[{ id: 1, flag: 'Y' },{ id: 2, flag: 'N' }],
				profit: 45
			}
		},
		filters:{
			pain:function(val){
				return val.flag == 'Y' ? '女' : '男';
			}
		},
		methods: {
			deleteFilters(){
				let arr = [];
				arr = this.message.filter(function(res,index){
					return res.id != 2;// 返回id不等于2项的新数组，既是数组删除id为2的项
				})
				console.log('filter数组',arr);
			}
		}

	}
</script>

<style lang="less" scoped>
#filters{
	.rainbow{
		.mixin_div(100%,50px,none,@color_blueviolet,center);
	}
}
</style>
