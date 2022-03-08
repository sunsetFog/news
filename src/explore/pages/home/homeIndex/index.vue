<template>
    <section id="home-index">
       <div class="theme-picture">
                <el-carousel :interval="5000" arrow="always" :autoplay="true" trigger="click">
                    <el-carousel-item v-for="(item,index) in card_picture" :key="index">
                        <div class="example-picture">
                            <img :src="item.url"/>
                        </div>
                    </el-carousel-item>
                </el-carousel>
       </div>
       <div class="enter-game">
           <img class="big-fish" src="@static/picture/login/fish.png" @click="fishMeans()"/>
           <div class="advertisement">

           </div>
           <div class="game-contain">
                <el-carousel :interval="5000" arrow="always" indicator-position="outside" :autoplay="false" trigger="click">
                    <el-carousel-item v-for="(val,keys) in game_list" :key="keys">
                        <div class="game-frame">
                            <div class="carousel-header"></div>
                            <div class="carousel-contain">
                                <ul>
                                    <li v-for="(item,index) in val.pages">
                                        <img :src="item.url" :style="{height: item.height,top: item.top}" @click="enterTheGame(index,keys)"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
           </div>
       </div>
       <footers :vip_foot="false"></footers>
       <game-theme ref="subject" :subject="false"></game-theme>
    </section>
</template>

<script>
import footers from '@/explore/components/footer.vue';
export default{
    name: 'home-index',
    components: {footers},
    data(){
        return{
            card_picture: [
                {url: require('@static/picture/banner/1.jpg')},
                {url: require('@static/picture/banner/2.jpg')},
                {url: require('@static/picture/banner/4.jpg')},
                {url: require('@static/picture/banner/6.jpg')},
                {url: require('@static/picture/banner/7.jpg')},
                {url: require('@static/picture/banner/8.jpg')}
                // {url: require('@static/picture/banner/original/photo2.jpg')},
                // {url: require('@static/picture/banner/original/banner.jpg')}
            ],
            game_list: [
                {pages: [
                    {url: require('@static/picture/game/z1.png'),margin: '0px 0px 0px 0px',height: '100%',top: '0px'},
                    {url: require('@static/picture/game/z2.png'),margin: '0px 0px 0px 0px',height: '100%',top: '0px'},
                    {url: require('@static/picture/game/z3.png'),margin: '0px 0px 0px 0px',height: '100%',top: '0px'},
                    {url: require('@static/picture/game/z4.png'),margin: '0px 0px 0px 0px',height: '100%',top: '0px'},
                    {url: require('@static/picture/game/z5.png'),margin: '0px 0px 0px 0px',height: '100%',top: '0px'},
                    {url: require('@static/picture/game/z6.png'),margin: '0px 0px 0px 0px',height: '100%',top: '0px'},
                    {url: require('@static/picture/game/z7.png'),margin: '0px 0px 0px 0px',height: '100%',top: '0px'},
                    {url: require('@static/picture/game/z8.png'),margin: '0px 0px 0px 0px',height: '100%',top: '0px'},

                    // {url: require('@static/picture/game/original/longhudou.png'),margin: '0px 5px 60px 0px',height: '100%',top: '0px'},
                    // {url: require('@static/picture/game/original/baijiale.png'),margin: '0px 5px 60px 0px',height: '112.5%',top: '-12.5%'},
                    // {url: require('@static/picture/game/original/bairenniuniu.png'),margin: '0px 5px 60px 0px',height: '121.4%',top: '-21.4%'},
                    // {url: require('@static/picture/game/original/shuiguoji.png'),margin: '0px 0px 60px 0px',height: '100%',top: '0px'},
                    // {url: require('@static/picture/game/original/buyu.png'),margin: '0px 5px 0px 0px',height: '117.1%',top: '-17.1%'},
                    // {url: require('@static/picture/game/original/shuihu.png'),margin: '0px 5px 0px 0px',height: '100%',top: '0px'},
                    // {url: require('@static/picture/game/original/doudizhu.png'),margin: '0px 5px 0px 0px',height: '100%',top: '0px'},
                    // {url: require('@static/picture/game/original/honghei.png'),margin: '0px 0px 0px 0px',height: '110.7%',top: '-10.7%'}
                ]},
                {pages: [
                    {url: require('@static/picture/game/z9.png'),margin: '0px 0px 0px 0px',height: '100%',top: '0px'}
                    // {url: require('@static/picture/home/fengkuangniuniu.png'),margin: '0px 0px 0px 0px',height: '117.1%',top: '-17.1%'}
                ]}
            ]
        }
    },
    created(){
        
    },
    // beforeDestroy(){
    //     this.clearTimer();
    // },
    methods: {
        fishMeans(){
            // this.$router.push({path: '/home/managementCenter/crux'});
            // var value = "赌圣<font color='#23f0fd'> 机器人2828 </font>出手不凡，在<font color='#ffe400'> 百家乐福气场 </font>赢得<font color='#070707'> 11619 </font>奖金，大吉大利 今晚吃鸡!";
            // errorCodeGame.move = value;
        },
        enterTheGame(index,keys){
            if(keys==0){
                if(index==0){
                    this.encapsulation('lhd');
                }else if(index==1){
                    this.encapsulation('baiJiaLe');
                }else if(index==2){
                    this.encapsulation('brnn');
                }else if(index==3){
                    this.encapsulation('sgj');
                }else if(index==4){
                    this.encapsulation('fishjoy');
                }else if(index==5){
                    this.encapsulation('shz');
                }else if(index==6){
                    this.encapsulation('ddz');
                }else if(index==7){
                    this.encapsulation('hhdz');
                }
            }else if(keys==1){
                if(index==0){
                    this.encapsulation('fkdn');
                }
            }     
        },
        encapsulation(value){
            let that = this;
            that.$means.amateur_startGame(value);
            that.$means.amateur_back2GameFromLobby(false);
            that.$refs.subject.openFullScreen();
        }
    }
}
</script>

<style lang="less" scoped>
#home-index{
    .theme-picture{
        width: 100%;
        height: 500px;
        .el-carousel--horizontal{
            overflow: hidden;
        }
        .example-picture{
            width: 100%;
            height: 500px;
            img{
                .mixin_img(100%,500px);
            }
        }
    }
    .enter-game{
        width: 100%;
        height: 1010px;
         .mixin_image(url('~@static/picture/home/bj-index.jpg'));
         position: relative;
        .big-fish{
            .mixin_img(326px;387px);
            position: absolute;
            left: 0px;
            bottom: 0px;
        }
         .advertisement{
             width: 100%;
             height: 35px;
             .mixin_image(url('~@static/picture/home/gonggaotiao.png'));
             position: absolute;
             left: 0px;
             top: 8px;
         }
         .game-contain{
             .mixin_center(1350px,740px);
            .el-carousel__item:nth-child(2n) {
                -background-color: #99a9bf;
            }
            
            .el-carousel__item:nth-child(2n+1) {
                -background-color: #d3dce6;
            }
            .el-carousel--horizontal{
                overflow: hidden;
            }
            .game-frame{
                .mixin_div(100%,100%,none,auto,left);
                padding: 0px 80px;
                .carousel-header{
                    width: 100%;
                    height: 60px;
                }
                .carousel-contain{
                    width: 100%;
                    height: 620px;
                    ul{
                        li{
                            .mixin_li(293.7px,280px);
                            position: relative;
                            cursor: pointer;
                            img{
                                width: 293.7px;
                                background-size: 100% 100%;
                                background-repeat: no-repeat;
                                position: absolute;
                                left: 0px;
                                z-index: 3;
                            }
                            
                        }
                        li:nth-of-type(1){
                            margin: 0px 5px 60px 0px;
                        }
                        li:nth-of-type(2){
                            margin: 0px 5px 60px 0px;
                        }
                        li:nth-of-type(3){
                            margin: 0px 5px 60px 0px;
                        }
                        li:nth-of-type(4){
                            margin: 0px 0px 60px 0px;
                        }
                        li:nth-of-type(5){
                            margin: 0px 5px 0px 0px;
                        }
                        li:nth-of-type(6){
                            margin: 0px 5px 0px 0px;
                        }
                        li:nth-of-type(7){
                            margin: 0px 5px 0px 0px;
                        }
                        li:nth-of-type(8){
                            margin: 0px 0px 0px 0px;
                        }
                    }
                }
            }
         }
    }
 
}
</style>