<template>
<section id="filters">
	<div class="rainbow">{{game|stars}}</div>
	<hr />
	<div class="rainbow">{{honey|add}}</div>
	<div class="rainbow">{{honey|add|concat}}</div>
	<hr />
	<div class="rainbow" v-for="item in message">{{item|pain}}</div>
	<hr />
	<el-button type="warning" @click="deleteFilters">删除与过滤</el-button>
	<el-button type="success" @click="replaceModify">替换与修改</el-button>
</section>
</template>

<script>
	export default{
		data(){
			return{
				message:[{id: 1,value: '棒棒糖'},{id: 2,value: '棉花糖'}],
				game: '游戏',
				honey: 12
			}
		},
		filters:{
			pain:function(val){
				return val.id!=2?val.value:'9棉花糖';
			},
			stars:function(val){
				return val+"使我快乐";
			},
			add:function(res){
				return res+'/add';
			},
			concat:function(res){
				return res+'/concat';
			}
		},
		methods: {
			deleteFilters(){
				let arr = [];
				arr = this.message.filter(function(res,index){
					return res.id != 2;
				})
				console.log('filter数组',arr);
			},
			replaceModify(){
				let obj = {id: 3,value: '汤圆娃娃'};
				let newArr = [];
				newArr = this.message.map((res,index)=>{
					return Number(res.id) === Number(2)?obj:res;
				});
				console.log('modify',newArr);
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
