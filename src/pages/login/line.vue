
<template>
  <section id="line">
      <div class="entertainment">
          <img class="login-logo" src="../../../static/dream/login/logo2.png"/>
          <img class="big-fish" src="../../../static/dream/login/fish.png"/>

            <div class="circuit-detection">
                <div class="testing-header">
                    <label>线路检测</label>
                    <img @click="rapidRegistration('home')" src="../../../static/dream/login/kuaisudenglu.png"/>
                    <span>快速登陆</span>
                </div>
                <div class="example-detection">
                    <div class="line-content" v-for="(item,index) in line_list">
                        <div class="line-data" v-if="item.state==1">
                            <img :src="item.circular1"/>
                            <span :style="{color: item.color}">{{item.title}}</span>
                            <div class="progress-bar" :style="{backgroundImage: item.signal1}">
                                <div :style="{width: item.width,backgroundImage: item.progress1}"></div>
                            </div>
                            <span :style="{color: item.color}">0.169秒</span>
                            <img :src="item.type1"/>
                            <img :src="item.enter1"/>
                        </div>
                        <div class="line-data" v-if="item.state==2">
                            <img :src="item.circular2"/>
                            <span :style="{color: item.color}">{{item.title}}</span>
                            <div class="progress-bar" :style="{backgroundImage: item.signal2}">
                                <div :style="{width: item.width,backgroundImage: item.progress2}"></div>
                            </div>
                            <span :style="{color: item.color}">0.169秒</span>
                            <img :src="item.type2"/>
                            <img :src="item.enter2"/>
                        </div>
                        <div class="line-data" v-if="item.state==3">
                            <img :src="item.circular3"/>
                            <span :style="{color: item.color}">{{item.title}}</span>
                            <div class="progress-bar" :style="{backgroundImage: item.signal3}">
                                <div :style="{width: item.width,backgroundImage: item.progress3}"></div>
                            </div>
                            <span :style="{color: item.color}">0.169秒</span>
                            <img :src="item.type3"/>
                            <img :src="item.enter3"/>
                        </div>
                    </div>
                </div>
            </div>
            
      </div>
    <footers :vip_foot="false"></footers>
  </section>
</template>

<script>
import footers from '../../components/footer.vue';
export default{
    name: 'line',
    components: {footers},
  data(){
    return{
        line_list: [
            {state: 1,title: '线路1',color: '#1dc570',time: '0.169秒',width: '70%'},
            {state: 1,title: '线路1',color: '#1dc570',time: '0.169秒',width: '40%'},
            {state: 1,title: '线路1',color: '#1dc570',time: '0.169秒',width: '50%'},
            {state: 2,title: '线路2',color: '#ff9f00',time: '0.169秒',width: '25%'},
            {state: 2,title: '线路2',color: '#ff9f00',time: '0.169秒',width: '90%'},
            {state: 3,title: '线路3',color: '#f71210',time: '0.169秒',width: '80%'},
            {state: 3,title: '线路3',color: '#f71210',time: '0.169秒',width: '30%'},
            {state: 3,title: '线路3',color: '#f71210',time: '0.169秒',width: '100%'}
        ]
    }
  },
  mounted(){
      var that = this;
      that.$means.overallHeight('line');
      window.onresize = function temp8(){
          that.$means.overallHeight('line');
      }
  },
  created(){
      
      for(let i=0;i<this.line_list.length;i++){
          this.line_list[i].circular1 = '../../../static/dream/login/luxian1.png';
          this.line_list[i].circular2 = '../../../static/dream/login/luxian2.png';
          this.line_list[i].circular3 = '../../../static/dream/login/luxian3.png';
          this.line_list[i].signal1 = 'url(../../../static/dream/login/luxian1jindu.png)';
          this.line_list[i].signal2 = 'url(../../../static/dream/login/luxian2jindu.png)';
          this.line_list[i].signal3 = 'url(../../../static/dream/login/luxian3jindu.png)';
          this.line_list[i].type1 = '../../../static/dream/login/luxian1shuoming.png';
          this.line_list[i].type2 = '../../../static/dream/login/luxian2shuoming.png';
          this.line_list[i].type3 = '../../../static/dream/login/luxian3shuoming.png';
          this.line_list[i].enter1 = '../../../static/dream/login/luxian1jinru.png';
          this.line_list[i].enter2 = '../../../static/dream/login/luxian2jinru.png';
          this.line_list[i].enter3 = '../../../static/dream/login/luxian3jinru.png';
          this.line_list[i].progress1 =  'url(../../../static/dream/login/luxian11jindu.png)';
          this.line_list[i].progress2 = 'url(../../../static/dream/login/luxian22jindu.png)';
          this.line_list[i].progress3 = 'url(../../../static/dream/login/luxian33jindu.png)';
      }
  },
  methods: {
      rapidRegistration(value){
          this.$router.push({path: '/home'});
      }
  }
}
</script>

<style lang="less" scoped>
#line{
    width: 100%;
    padding-bottom: 115px;
    box-sizing: border-box;
    overflow: hidden;
    .mixin_image(url('../../../static/dream/login/bg_denglu.jpg'));
    @color_violet: #3d1351;//字体
    @color_stroke: #143597;
    .entertainment{
        width: 100%;
        height: 100%;
        position: relative;
        .login-logo{
            .mixin_img(790px;170px);
            position: absolute;
            top: 70px;
            left: 50%;
            margin-left: -395px;
        }
        .big-fish{
            .mixin_img(426px;487px);
            position: absolute;
            left: 0px;
            bottom: 0px;
        }
        .circuit-detection{
            width: 660px;
            height: 450px;
            .mixin_image(url('../../../static/dream/login/luxiankuan.png'));
            position: absolute;
            top: 290px;
            left: 50%;
            margin-left: -330px;
            padding: 10px 30px 0px 30px;
            box-sizing: border-box;
            .testing-header{
                width: 100%;
                height: 60px;
                label{
                    .mixin_span(auto,60px,none,@color_violet,left);
                    float: left;
                    font-size: 24px;
                }
                span{
                    .mixin_span(auto,60px,none,#e8e7ed,left);
                    float: right;
                    margin-right: 5px;
                    font-size: @font_size16;
                    text-shadow: 1px 1px 2px @color_stroke;
                    cursor: pointer;
                }
                img{
                    .mixin_img(50px,50px);
                    float: right;
                    margin-top: 3px;
                    cursor: pointer;
                }
            }
            .example-detection{
                width: 580px;
                height: 350px;
                margin: 5px 0px 0px 10px;
                padding: 12px 0px 0px 22px;
                box-sizing: border-box;
                .line-content{
                    width: 100%;
                    height: 30px;
                    margin-bottom: 10px;
                    .line-data{
                        width: 100%;
                        height: 30px;
                        img:nth-of-type(1){
                            .mixin_img(10px,10px);
                            float: left;
                            margin-top: 10px;
                        }
                        span:nth-of-type(1){
                            .mixin_span(80px,30px,none,@color_white,left);
                            float: left;
                            margin-left: 10px;
                        }
                        .progress-bar{
                            .mixin_float(152px,20px,left);
                            margin-top: 5px;
                            background-size: 100% 100%;
                            background-repeat: no-repeat;
                            div{
                                height: 20px;
                                background: none;
                                background-size: 152px 20px;
                            }
                        }
                        span:nth-of-type(2){
                            .mixin_span(90px,30px,none,@color_white,center);
                            float: left;
                        }
                        img:nth-of-type(2){
                            .mixin_img(50px,25px);
                            float: left;
                            margin-top: 2px;
                        }
                        img:nth-of-type(3){
                            .mixin_img(70px,30px);
                            float: left;
                            margin-left: 70px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }


}
</style>
