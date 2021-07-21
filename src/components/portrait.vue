<template>
    <section id="portrait">
        <el-dialog
        :visible.sync="rechargeActive"
        width="1100px"
        top="153px"
        center>
        <div slot="title">修改头像</div>
        <div class="varieties-content">
            <div class="service-type">
                <div class="user-info">
                    <img :src="head"/>
                    <img :src="frame"/>
                </div>
                <ul>
                    <li v-for="(item,index) in service_list" :class="{'type-active':item.active}" @click="serviceType(index)">
                        <span>{{item.name}}</span>
                        <span v-if="item.active"></span>
                    </li>
                </ul>
            </div>
            <div class="picture-content">
                <div class="head-example" v-if="portrait_index==0">
                    <ul>
                        <li v-for="(item,index) in portrait_head" @click="headMeans(index)">
                            <img :src="item.url"/>
                            <img v-show="item.active" src="@static/picture/portrait/gougou.png"/>
                        </li>
                    </ul>
                </div>
                <div class="box-example" v-if="portrait_index==1">
                    <ul>
                        <li v-for="(item,index) in portrait_box" @click="boxMeans(index)">
                            <img :src="item.url"/>
                            <img v-show="item.active" src="@static/picture/portrait/gougou.png"/>
                        </li>
                    </ul>
                </div>
                <div class="save-button">
                    <button @click="savePortrait()">保存</button>
                </div>
            </div>
        </div>
        <div slot="footer" class="example-footer">

        </div>
        </el-dialog>
    </section>
</template>

<script>
export default {
    name: 'portrait',
    data(){
        return{
            rechargeActive: false,
            service_list: [
                {name: '修改头像',active: true},
                {name: '修改头像框',active: false}
            ],
            head: require('@static/picture/portrait/ui_headImg_1.png'),
            frame: require('@static/picture/portrait/ui_headBox_1.png'),
            portrait_index: 0,
            head_index: 0,
            box_index: 0,
            save_head: 0,
            save_box: 0,
            portrait_head: [
                {url: require('@static/picture/portrait/ui_headImg_1.png'),active: false},
                {url: require('@static/picture/portrait/ui_headImg_2.png'),active: false},
                {url: require('@static/picture/portrait/ui_headImg_3.png'),active: false},
                {url: require('@static/picture/portrait/ui_headImg_4.png'),active: false},
                {url: require('@static/picture/portrait/ui_headImg_5.png'),active: false},
                {url: require('@static/picture/portrait/ui_headImg_6.png'),active: false},
                {url: require('@static/picture/portrait/ui_headImg_7.png'),active: false},
                {url: require('@static/picture/portrait/ui_headImg_8.png'),active: false},
                {url: require('@static/picture/portrait/ui_headImg_9.png'),active: false},
                {url: require('@static/picture/portrait/ui_headImg_10.png'),active: false},
                {url: require('@static/picture/portrait/ui_headImg_11.png'),active: false},
                {url: require('@static/picture/portrait/ui_headImg_12.png'),active: false}
            ],
            portrait_box: [
                {url: require('@static/picture/portrait/ui_headBox_1.png'),active: false},
                {url: require('@static/picture/portrait/ui_headBox_2.png'),active: false},
                {url: require('@static/picture/portrait/ui_headBox_3.png'),active: false},
                {url: require('@static/picture/portrait/ui_headBox_4.png'),active: false},
                {url: require('@static/picture/portrait/ui_headBox_5.png'),active: false},
                {url: require('@static/picture/portrait/ui_headBox_6.png'),active: false},
                {url: require('@static/picture/portrait/ui_headBox_7.png'),active: false},
                {url: require('@static/picture/portrait/ui_headBox_8.png'),active: false},
                {url: require('@static/picture/portrait/ui_headBox_9.png'),active: false},
                {url: require('@static/picture/portrait/ui_headBox_10.png'),active: false},
                {url: require('@static/picture/portrait/ui_headBox_11.png'),active: false},
                {url: require('@static/picture/portrait/ui_headBox_12.png'),active: false}
            ],
        }
    },
    methods:{
        changeMeans(value,res){
            this.rechargeActive = true;
            this.serviceType(0);
            this.headMeans(value-1);
            this.boxMeans(res-1);
            this.save_head = value-1;
            this.save_box = res-1;
        },
        serviceType(index){
            this.portrait_index = index;
            for(let i=0;i<this.service_list.length;i++){
                this.service_list[i].active = false;
            }
            this.service_list[index].active = true;
            if(index==0&&this.save_box!=this.box_index){
                this.boxMeans(this.save_box);
            }else if(index==1&&this.save_head!=this.head_index){
                this.headMeans(this.save_head);
            }
        },
        headMeans(index){
            this.emptyHead();
            this.head_index = index;
            this.head = this.portrait_head[index].url;
            this.portrait_head[index].active = true;
        },
        boxMeans(index){
            this.emptyBox();
            this.box_index = index;
            this.frame = this.portrait_box[index].url;
            this.portrait_box[index].active = true;
        },
        emptyHead(){
            for(let i=0;i<this.portrait_head.length;i++){
                this.portrait_head[i].active = false;
            }
        },
        emptyBox(){
            for(let k=0;k<this.portrait_box.length;k++){
                this.portrait_box[k].active = false;
            }
        },
        savePortrait(){
            var that = this;
            if(that.portrait_index==0){
                var head_info = that.head_index + 1;
                that.$means.amateur_updateAvatar(head_info,function(res){
                    that.$means.amateur_getPlayer('head').setAvatar(head_info);
                    that.$store.dispatch('getPlayerInfo',that.$means.amateur_getPlayer());
                    that.save_head = that.head_index;
                    that.$parent.hostMeans('portrait','head',that.portrait_head[that.head_index].url);
                    that.$message.success('头像修改成功!');
                })
            }else if(that.portrait_index==1){
                var box_info = that.box_index + 1;
                that.$means.amateur_updateFrame(box_info,function(res){
                    that.$means.amateur_getPlayer('frame').setAvatarBox(box_info);
                    that.$store.dispatch('getPlayerInfo',that.$means.amateur_getPlayer());
                    that.save_box = that.box_index;
                    that.$parent.hostMeans('portrait','frame',that.portrait_box[that.box_index].url);
                    that.$message.success('头像框修改成功！');
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
#portrait{
    .varieties-content{
        width: 100%;
        height: 620px;
        .service-type{
            .mixin_float(155px,620px,left);
            background: @color_tone20;
            font-size: @font_size20;
            padding: 40px 0px 0px 0px;
            box-sizing: border-box;
            .user-info{
                .mixin_div(100%,140px,none,@color_white,left);
                position: relative;
                cursor: pointer;
                img:nth-of-type(1){
                    .mixin_img(80px,80px);
                    position: absolute;
                    left: 50%;
                    top: 15px;
                    margin-left: -40px;
                    z-index: 3;
                }
                img:nth-of-type(2){
                    .mixin_img(138px,138px);
                    position: absolute;
                    left: 50%;
                    top: -15px;
                    margin-left: -69px;
                    z-index: 2;
                }
            }
            .type-active{
                .mixin_image(url('~@static/picture/recharge/beijingkuang.png'));
            }
            ul{
                li{
                    .mixin_li(155px,65px);
                    margin-bottom: 50px;
                    color: @color_white;
                    background: @color_darkgray;
                    cursor: pointer;
                    position: relative;
                    span:nth-of-type(1){
                        .mixin_span(100%,65px,none,@color_white,center);
                        position: absolute;
                        left: 0px;
                        top: 0px;
                    }
                    span:nth-of-type(2){
                        .mixin_span(10px,65px,none,@color_white,center);
                        position: absolute;
                        right: -10px;
                        top: 0px;
                        .mixin_image(url('~@static/picture/recharge/zhizhen.png'));
                    }
                }
            }
        }
        .picture-content{
            .mixin_float(84%,620px,right);
            padding: 30px 120px 0px 150px;
            box-sizing: border-box;
            .head-example{
                width: 100%;
                height: 420px;
                ul{
                    li{
                        .mixin_li(138px,138px);
                        margin: 0px 20px 0px 0px;
                        position: relative;
                        cursor: pointer;
                        img:nth-of-type(1){
                            .mixin_img(80px,80px);
                            position: absolute;
                            left: 29px;
                            top: 29px;
                        }
                        img:nth-of-type(2){
                            .mixin_img(20px,20px);
                            position: absolute;
                            right: 30px;
                            bottom: 30px;
                        }
                    }
                }
            }
            .box-example{
                width: 100%;
                height: 420px;
                ul{
                    li{
                        .mixin_li(138px,138px);
                        margin: 0px 20px 0px 0px;
                        position: relative;
                        cursor: pointer;
                        img:nth-of-type(1){
                            .mixin_img(100%,100%);
                            position: absolute;
                            left: 0px;
                            top: 0px;
                        }
                        img:nth-of-type(2){
                            .mixin_img(20px,20px);
                            position: absolute;
                            right: 30px;
                            bottom: 30px;
                        }
                    }
                }
            }
            .save-button{
                width: 100%;
                height: 36px;
                margin-top: 50px;
                button{
                    .mixin_button(155px,34px,@color_white2,@color_blueviolet);
                    margin-left: 240px;
                    border: 1px solid @color_blueviolet;
                }
                button:hover{
                    background: @color_white2_hover;
                }
            }
        }
    }
    .example-footer{
        .mixin_div(100%,0px,none,auto,left);
    }
}
</style>