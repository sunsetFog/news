<template>
    <section id="neutralGear">
        <img src="@static/picture/portrait/logo2.png"/>
        <div class="progress-example">
            <span :style="{width: percentage+'%',borderTopRightRadius: radius.top_right,borderBottomRightRadius: radius.bottom_right}"></span>
            <!-- <el-progress :percentage="percentage" :color="customColor" :show-text="false" :width="155" :stroke-width="20"></el-progress> -->
        </div>
        <game-theme ref="subject" :subject="true" @await="variableGear"></game-theme>
    </section>
</template>

<script>
export default {
    name: 'neutralGear',
    data(){
        return{
            percentage: 0,
            timerKey: '',
            radius: {top_right: '0px',bottom_right: '0px'}
        }
    },
    mounted(){
        var that = this;
        that.$means.overallHeight('neutralGear');
        window.onresize = function temp2(){
            that.$means.overallHeight('neutralGear');
        }
    },
    created(){
        this.radius.top_right = '0px';
        this.radius.bottom_right = '0px';
        this.timerKey = setInterval(this.timerMeans,200);
        if(refreshWeb.state==''){
            // flashGameplayer();
        }
    },
    methods:{
        timerMeans(){
            if(this.percentage>=83.7){
                clearInterval(this.timerKey);
                this.variableGear();
            }else{
                this.percentage+=9.3;
            }
        },
        variableGear(value){
            var that = this;
            that.$means.amateur_login(sessionStorage.getItem('account_number'),sessionStorage.getItem('password_number'),window.location.host,function() { 
                that.$store.dispatch('getPlayerInfo',that.$means.amateur_getPlayer());
                that.percentage = 98.8;
                that.radius.top_right = '15px';
                that.radius.bottom_right = '15px';
                that.$router.push({path: sessionStorage.getItem('save_path')});
            });
        }
    }
}
</script>

<style lang="less" scoped>
#neutralGear{
    width: 100%;
    overflow: hidden;
    .mixin_image(url('~@static/picture/portrait/bg_loading.jpg'));
    position: relative;
    img{
        width: 550px;
        height: 480px;
        position: absolute;
        left: 50%;
        top: 150px;
        margin-left: -275px;
    }
    .progress-example{
        width: 860px;
        height: 46px;
        .mixin_image(url('~@static/picture/portrait/kuang.png'));
        overflow: hidden;
        border-radius: 20px;
        padding: 5px 0px 0px 6px;
        position: absolute;
        left: 50%;
        bottom: 50px;
        margin-left: -430px;
        span{
            height: 35px;
            display: inline-block;
            .mixin_image(url('~@static/picture/portrait/jindus.png'));
            float: left;
            overflow: hidden;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
        }
    }
}
</style>