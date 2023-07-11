<template>
	<section id="class">
		<LineTextLine>class绑定字符串</LineTextLine>
		<div :class="'tg1, tg2'">哈喽</div>

		<LineTextLine>类名是否显示</LineTextLine>
		<div :class="{ 'class-name-01': showClass, 'class-name-02': true }">哈喽</div>

		<LineTextLine>class绑定数组与对象</LineTextLine>
		<div v-bind:class="[ classArrName01, classArrName02 ]">哈喽</div>
		<div v-bind:class="[{ 'class-name-01': showClass }, classArrName01]">哈喽</div>

		<LineTextLine>style绑定字符串，注意有单位才生效</LineTextLine>
		<div :style="'color: red;font-size: 14px;'">哈喽</div>

		<LineTextLine>style绑定数组与对象</LineTextLine>
		<div v-bind:style="{ color: styleObjColor, fontSize: styleObjSize}">哈喽</div>
		<div v-bind:style="[ styleArrObj01, styleArrObj02 ]">哈喽</div>

		<LineTextLine>根据状态，返回不同的类名</LineTextLine>
		<div>
			<ul v-for="item in payData">
				<li :class="[ btnClass(item.value) ]">{{item.name}}</li>
			</ul>
		</div>

		<LineTextLine>三目运算</LineTextLine>
		<div :style="{ color: (styleNum == 20) ? 'blue' : 'red' }">Success</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				showClass: true,
				classArrName01: 'class-name-03',
				classArrName02: 'class-name-04',

				styleObjColor: 'red',
				styleObjSize: '20px',
				styleArrObj01: { color: 'orange' },
				styleArrObj02: { fontSize: '26px' },

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

<!--
向this添加$style计算属性
使用   :class="$style.returnClassA"
<style module>

向this添加命名cssModuleA计算属性
使用   :class="cssModuleA.returnClassA"
<style module="cssModuleA">
-->
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
