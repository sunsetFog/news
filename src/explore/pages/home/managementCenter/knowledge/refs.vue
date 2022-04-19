<template>
<section id="refs">
			<div class='rainbow' id="880" ref="stars">ref减少dom操作</div>
			<el-button type="primary" @click="light">Primary</el-button>
			<!-- 
				子组件refs
				能调用子组件data和方法
			 -->
			<el-button type="warning" @click="gift">ref调用子组件数据和方法</el-button>
			<moon ref="play"></moon>
</section>
</template>

<script>
import moon from './parent/children';
	export default{
		components: {moon},
		data(){
			return{

			}
		},
		methods:{
			light(){
				alert(this.$refs.stars.id);//获取属性值,标志位置
				//方法一:
				// var frames = document.getElementsByClassName('rainbow')[0];
				//相当于方法二:
				var frames = this.$refs.stars;
				console.log(frames);
				this.$refs.stars.innerHTML = 'hello';
			},
			gift(){
				let that = this;
				that.$refs.play.son = "ref改变子组件数据";
				//触动子组件方法
				that.$refs.play.secret();//常用
				console.log('$nextTick是DOM的异步更新');
			},
			initial(value){
				
			}
		},
	}
</script>

<style lang="less" scoped>
#refs{
	.rainbow{
		.mixin_div(100%,50px,none,@color_blueviolet,center);
	}
}
</style>
