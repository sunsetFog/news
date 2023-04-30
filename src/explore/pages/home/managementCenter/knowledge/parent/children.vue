<template>
<section id="children">
	<el-button @click='secret()'>child:{{article}}</el-button>
	<el-button @click='bean()'>--eventBus--</el-button>
	<!-- study: slot插槽 -->
        <slot></slot>
	<slot name="er"></slot>
	<slot  name="yaa" data="带数据的插槽"></slot>
</section>
</template>

<script>
	export default{
		// props:['article'],//父传子
		props: {
			article: {
				type: String, // 类型：Array，Object
				default: function () { // 没有值，默认为空字符串
					return ''
				}
			},
			value: {
				type: String,
				default: ''
			}
		},
		data(){
			return{
				son:'$emit子组件数据'
			}
		},
		watch: {
			value(cur, old) {
				console.log('value', cur)
			}
		},
		mounted(){
			console.log('this.$props----', this.$props);
			const { article, value } = this.$props;
			console.log('this.$props++++', article, value);
			this.$parent.initial('参数');
		},
		methods:{
			secret(){
				//子传父
				this.$emit('purple',this.son);
				this.$emit('update:syncValue', "sync值");
				console.log('secret_9939',this.son);
			},
			praise(value){
				console.log('调用父组件方法---',value);
			},
			bean() {
				this.$eventBus.$emit('airWater',  666);
			}
		}
	}
</script>

<style lang="less" scoped>
#children{
	width: 100%;
	height: 400px;
	background: blue;
}
</style>
