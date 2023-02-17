<template>
<div>
	<!--
		study: vuex状态管理
		执行过程：通过dispatch调用action方法，再commit调用mutations方法，
		从而修改了state数据，getters监听到了state修改，最后computed也监听到state修改，
		dom渲染，完成
	-->
	<el-button type="info">mapGetters:{{money}}---{{seed}}</el-button>
	<el-button type="success" @click="playerInfo({title: 'money',params: 9966666888})">...mapMutations</el-button>
	<el-button type="error" @click="submit_mutation">调用_mutation</el-button>
	<el-button type="warning" @click="getPlayerInfo(player_info)">...mapActions</el-button>
	<el-button type="error" @click="submit_action">调用_action</el-button>
</div>
</template>

<script>
	// import store from '@/explore/vuex/vuex';//@代表'/src',看build/webpack.base.conf.js
	import { mapMutations, mapGetters, mapActions } from 'vuex';// 用了这三个变量，请引入
	export default{
		name: "ex-vuex",
		data(){
			return{
			}
		},
		methods:{
			...mapMutations(['playerInfo']),//引入mutation方法
			...mapActions(['getPlayerInfo']),//引入actions方法
			submit_mutation(){
				// 存vuex：commit调用mutation方法，并传递数据
				this.$store.commit('playerInfo',{title: 'money',params: 9966999222});
			},
			submit_action(){
				// 存vuex：dispatch调用actions异步方法，并传递数据
				this.$store.dispatch('fragrant',{ num: 662 }).then((result) => {
					console.log("promise.then是异步-微任务");
				}); 
			}
		},
		computed:{ // 使用vuex
			...mapGetters(['money','player_info','seed'])
		},
		created(){
			console.log('created-seed--',this.seed)
		}
	}
</script>

<style>
</style>