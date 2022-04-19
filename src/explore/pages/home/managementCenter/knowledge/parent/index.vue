<template>
	<section id="parent">
		<!-- 引入子组件，以及数据的双向流动 -->
		<el-input v-model="cosplay"></el-input>
		<div class="rainbow">
			{{design}}
		</div>
		
		<!-- 
			myChildren大写转小写用 - 隔开
			其中article和purple是props传参
			v-model与props的value对应
		-->
		<my-children :article='design' @purple='get' ref="rainbow" v-model="cosplay">
			<!-- 插槽内容 -->
			<el-button slot="er">slot插槽</el-button>
			<el-button slot="yaa" slot-scope="scenery">{{scenery.data}}</el-button>
		</my-children>
		<!-- 遍历-动态组件    is是组件名   props传参 -->
		<template v-for="item in equipment">
			<component :is="item.reply" :vip_props="item.data"></component>
		</template>
	</section>
</template>

<script>
import myChildren from './children';
import cTitle from "@/explore/components/footer.vue";
import sMain from "@/explore/components/footer.vue";
export default{
	components:{myChildren,cTitle,sMain},
	data(){
		return{
			design:'父组件数据',
			equipment: [
				{reply: 'cTitle',data: [{id: 2,title: '芒果',thumb: '',price: 1200,stock: 1000,virtual_sales: 500}]},
				{reply: 'sMain',data: [{id: 1,title: '荔枝',thumb: '',price: 1100,stock: 1000,virtual_sales: 200}]}
			],
			cosplay: ''
		}
	},
	created() {
		/*
			$eventBus.$emit后，$on和$once才触发
			添加自定义事件监听器
			$eventBus作用：能直接子传爷爷，或爷爷传子。解决子传父，再父传爷爷的麻烦
		*/
		this.$eventBus.$on('airWater',  function(value){
			console.log('--$on--', value);
		});
		// 添加自定义事件监听器,只能触发一次，触发后随即被移除监听
		this.$eventBus.$once('airWater',  function(value){
			console.log('--$once--', value);
		});
	},
	mounted(){
		this.$refs.rainbow.praise('参数');//调用子组件方法
	},
	methods:{
		get(message){
			// message是子传的参数
			this.design=message;
		},
		initial(value){
			console.log('调用子组件方法---',value);
		}
	},
	beforeDestroy() {
		this.$eventBus.$off('airWater');// 移除$on自定义事件监听器
	}
	
}
</script>

<style lang="less" scoped>
#parent{
	width: 100%;
	background: #fff;
	padding: 15px;
	.rainbow{
		.mixin_div(100%,50px,none,@color_blueviolet,center);
	}
}
</style>
