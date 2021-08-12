<template>
<section id="class">
	<!-- v-bind等于: -->
	<!-- 属性绑定class -->
	<div :class="{ 'class-name-01': isActive, 'class-name-02': true }">vue class</div>
	<div v-bind:class="[ arrClass1, arrClass2 ]">vue arrClass</div>
	<!--数组与对象写法-->
	<div v-bind:class="[{ 'class-name-01': isActive }, arrClass1]">lljj</div>
	
	<!--属性绑定style-->
	<div v-bind:style="{ color: styleColor01, fontSize: styleSize01}">vue style</div>
	<div v-bind:style="[ styleColor02, styleSize02 ]">vue arrStyle</div>
	<!-- a链接 -->
	<a :href="link">百度链接</a>

	<!-- 根据状态，返回不同的类名 -->
	<div>
		<ul v-for="item in payData">
			<li :class="[ btnClass(item.value) ]">{{item.name}}</li>
		</ul>
	</div>
	<!-- 三目运算 -->
	<div :style="{ color: (styleNum == 20) ? 'blue' : 'red' }">Success</div>
</section>
</template>

<script>
	export default{
		data(){
			return{
				isActive: true,
				arrClass1: 'class-name-03',
				arrClass2: 'class-name-04',

				styleColor01: 'red',
				styleSize01: '20px',
				styleColor02: { color: 'orange' },
				styleSize02: { fontSize: '26px' },

				link: 'http://www.baidu.com',
				payData: [{id: 1,name: '类一按钮',value: 10},{id: 2,name: '类二按钮',value: 20},{id: 3,name: '类三按钮',value: 30}],
				styleNum: 20,

				
			}
		},
		methods: {
			btnClass(value){
				if(value == 10 || value == 30){
					return 'returnClassA';// 返回类名
				}else if(value == 20){
					return 'returnClassB';
				}

			},
		}
		
		
	}
</script>

<style lang="less" scoped>
#class{
	.class-name-01{
		color: white;
	}
	.class-name-02{
		font-size: 20px;
	}
	.returnClassA{
		width: 100px;
		height: 40px;
		background: rgb(206, 102, 120);
	}
	.returnClassB{
		width: 120px;
		height: 40px;
		background: blueviolet;
	}
}
</style>