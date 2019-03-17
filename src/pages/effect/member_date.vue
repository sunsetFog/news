<template>
  <div id="date">
		<div style="width:100%;height:8rem;position:relative;background:#f15353;">
				<div @click="signEvent" style="width:6rem;height:6rem;background:#fff;text-align:center;line-height:5rem;border-radius:50%;border: solid 0.5rem #f9baba;position:absolute;top:50%;left:50%;margin: -3rem 0 0 -3rem;">
					{{signName}}
					</div>
		</div>
			<h1>
				<i @click='put' class="el-icon-arrow-left"></i>
				{{year}}年{{month}}月
				<i @click='add' class="el-icon-arrow-right"></i>
			</h1>
			<ol>
				<li>日</li>
				<li>一</li>
				<li>二</li>
				<li>三</li>
				<li>四</li>
				<li>五</li>
				<li>六</li>
			</ol>
			<div style='height:30.4rem;background:#fff'>
			<ul>
				<div  v-bind:style="{'width':w+'%'}"></div>
					<li v-for='val,key in m'>
						<span>{{val}}</span>
						<i v-if='test(key)' size="17" style='color:#f15353;width:17px;height:17px;' class="el-icon-circle-check"></i>
					</li>
			</ul>
			</div>
  </div>
</template>
<script>

export default {
//   props:['signlog'],
  data() {
    return {
        year:'',
        month:'',
        m:'',
				w:'',
				signlog: [13,14],
				signName: '签到'
    }; 
  },
  methods:{
    test(key){  
     return this.signlog.indexOf(key)+1
   },
   getnewDate(){
		let d = new Date(this.year,this.month,0);
		let  m=d.getDate();
    this.m=m
    let wx=new Date(this.year,this.month-1,1);
    let w1=wx.getDay()
    this.w=w1*14.27 
		let data={'month':this.month}
		//获取后台签到日期
    // $http.post('plugin.sign.Frontend.Modules.Sign.Controllers.sign-log.index',data).then((res)=>{
    //   this.signlog=res.data.sign_log
    // })
   },
   put(){
     if(this.month<=1){
      this.year--
      this.month=12
     }else{
      this.month--
     }
    this.getnewDate()
   },
   add(){
    if(this.month>=12){
      this.year++
      this.month=1
     }else{
      this.month++
     }
     this.getnewDate()
   },
   getData(num){
    let date=new Date()
    let year=date.getFullYear()
    this.year=year
    let month=date.getMonth()+num
    this.month=month
    let d = new Date(year,month,0);
    let  m=d.getDate();
     this.m=m//获取一个月多少天
     let wx=new Date(year,month-1,1);//获取当月第一天是星期几
     let w1=wx.getDay()
    this.w=w1*14.27 
	 },
	 signEvent(){
		 var myDate = new Date();//获取系统当前时间
		 myDate = myDate.getDate(); //获取当前日(1-31)
		 this.signlog = [myDate-1];
		 this.signName = '已签到';
	 }
  },
  created(){
	this.getData(1);
	var body_color = document.getElementsByTagName('body')[0];
      body_color.style.background = "#f2f2f2";
  },

}
</script>
<style lang="less" rel="stylesheet/less" scoped>
#date{
	h1{
		background:#fff;
		font-size:1.6rem;
		color:#f15353;
		font-weight:normal;
		line-height:4rem;
		text-align:center;
	}
	ol{
		display:flex;
		background:#fff;
		box-sizing:border-box;
		padding:0 0.48rem;
		text-align: center;
		&>li{
			display:inline-block;
			width: 14.27%;
			float:left;
			line-height:3.2rem;
			border-bottom:solid 0.1rem #e5e5e5;
				}
		}
	ul{
		display: flex;
		flex-wrap: wrap;
		position:relative;
		box-sizing:border-box;
		padding:0 0.48rem;
		div{
			border-bottom:solid 0.1rem #e5e5e5;	
		}
		&>li{
			list-style: none;
			width: 14.27%;	
			height:4.8rem;
			text-align: center;
			border-bottom:solid 0.1rem #e5e5e5;
			span{
				display:block;
				margin:0.88rem 0 0rem 0;
			}
		}

	}

}


</style>