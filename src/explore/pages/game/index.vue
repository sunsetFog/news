<template>
        <section id="home-game">
            <div class="game-example">
                <el-button :disabled="enlarge_disable" style="position:absolute;left:100px;top:20px;" @click="zoomMeans(1)">放大</el-button>
                <el-button :disabled="count_height==550" style="position:absolute;left:190px;top:20px;" @click="zoomMeans(2)">缩小</el-button>
                <div class="game-origin" :style="{width: game_frame.width+'px',height: game_frame.height+'px',marginLeft: game_frame.margin_left+'px',top: game_frame.top+'px'}">
                    <div :style="{width: purple_define.main_width+'px',left: purple_define.left_y+'px',top: purple_define.top_y+'px',height: purple_define.height+'px'}"></div>
                    <div :style="{width: purple_define.main_width+'px',right: purple_define.right_e+'px',top: purple_define.top_e+'px',height: purple_define.height+'px'}"></div>
                    <div :style="{height: purple_define.main_height+'px',left: purple_define.left_s+'px',top: purple_define.top_s+'px',width: purple_define.width+'px'}"></div>
                    <div :style="{height: purple_define.main_height+'px',left: purple_define.left_f+'px',bottom: purple_define.bottom_f+'px',width: purple_define.width+'px'}"></div>
                </div>
            </div>
        </section>
</template>

<script>
    export default{
        name: 'home-game',
        data(){
            return{
                count_height: 630,
                game_frame: {width: 1120,height: 630,margin_left: -560,top: 120},
                purple_define: {
                    main_width: 40,
                    main_height: 40,
                    left_y: -40,
                    top_y: -40,
                    right_e: -40,
                    top_e: -40,
                    left_s: 0,
                    top_s: -40,
                    left_f: 0,
                    bottom_f: -40,
                    width: 1120,
                    height: 710
                },
                enlarge_disable: false
            }
        },
        created(){
            this.enlargeDisable();
            if(document.body.clientWidth<1200){
                this.zoomMeans(2);
            }
        },
        mounted(){
            var that = this;
            that.$means.overallHeight('home-game');
            window.onresize = function temp3(){
                let overallApp = document.getElementById('home-game');
                if(overallApp!=null){
                    that.$means.overallHeight('home-game');
                    that.enlargeDisable();
                }
            }
            that.overflowBody(true);
        },
        beforeDestroy(){
            this.overflowBody(false);
        },
        methods:{
            zoomMeans(value){
                if(value==1){
                    if(this.count_height+240<document.body.clientHeight&&this.game_frame.width+230<document.body.clientWidth){
                        this.count_height = this.count_height+80;
                        this.calculation(this.count_height);
                        zoomGame(this.count_height);
                        window.dispatchEvent(new Event('resize'));//触发窗口调整大小事件
                        this.enlargeDisable();
                    }
                }else if(value==2){
                    if(this.count_height>530){
                        this.enlarge_disable = false;
                        this.count_height = this.count_height-80;
                        this.calculation(this.count_height);
                        zoomGame(this.count_height);
                        window.dispatchEvent(new Event('resize'));
                        this.enlargeDisable();
                    }
                }
            },
            enlargeDisable(){
                if(this.count_height+240>=document.body.clientHeight||this.game_frame.width+230>document.body.clientWidth){
                    this.enlarge_disable = true;
                }else{
                    this.enlarge_disable = false;
                }
            },
            calculation(value){
                this.game_frame.width = value/0.5625;
                this.game_frame.height = value;
                this.game_frame.margin_left = -value/0.5625/2;
                let purple_height = value + 80;
                this.purple_define.height = purple_height;
                this.purple_define.width = value/0.5625;
            },
            overflowBody(value){
                let body_set = document.getElementsByTagName('body')[0];
                if(value){
                    body_set.style.overflow = 'hidden';
                }else{
                    body_set.style.overflow = 'auto';
                }
            }
        }
    }

</script>

<style lang="less" scoped>
#home-game{
    width: 100%;
    overflow: hidden;
    min-height: 800px;
    .mixin_image(url('~@static/picture/center/bj-youxi.jpg'));
    .game-example{
        width: 100%;
        height: 80px;
        position: relative;
        .game-origin{
            position: absolute;
            -top: 120px;
            left: 50%;
            div:nth-of-type(1){
                -width: 40px;
                position: absolute;
                -left: -40px;
                -top: -40px;
                background: rgba(172, 36, 223, 0.2);
                border-top-left-radius: 6px;
                border-bottom-left-radius: 6px;
                border-left: 1px solid @color_blueviolet;
                border-top: 1px solid @color_blueviolet;
                border-bottom: 1px solid @color_blueviolet;
            }
            div:nth-of-type(2){
                -width: 40px;
                position: absolute;
                -right: -40px;
                -top: -40px;
                background: rgba(172, 36, 223, 0.2);
                border-top-right-radius: 6px;
                border-bottom-right-radius: 6px;
                border-right: 1px solid @color_blueviolet;
                border-top: 1px solid @color_blueviolet;
                border-bottom: 1px solid @color_blueviolet;
            }
            div:nth-of-type(3){
                -height: 40px;
                position: absolute;
                -left: 0px;
                -top: -40px;
                background: rgba(172, 36, 223, 0.2);
                border-top: 1px solid @color_blueviolet;
            }
            div:nth-of-type(4){
                -height: 40px;
                position: absolute;
                -left: 0px;
                -bottom: -40px;
                background: rgba(172, 36, 223, 0.2);
                border-bottom: 1px solid @color_blueviolet;
            }
        }
    }
}
</style>