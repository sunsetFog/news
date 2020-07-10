<template>
    <section id="rechargeRecord">
        <el-dialog
        :visible.sync="rechargeActive"
        width="5.73rem"
        top="0.8rem"
        center>
        <div slot="title">充值记录</div>
        <div class="varieties_content">
            <div class="record_left">
                <ul>
                    <li v-for="(item,index) in record_type" :class="{'type_active':item.active}" @click="recordState(index)">
                        <span>{{item.name}}</span>
                        <span v-if="item.active"></span>
                    </li>
                </ul>
            </div>
            <div class="record_right">
                <div class="record_example">
                    <div class="record_content" v-for="(item,index) in record_list">
                        <ul>
                            <li>
                                <label>支付宝类型:</label>
                                <span>{{item.pay_type}}</span>
                                <span>{{item.money/10000}}</span>
                            </li>
                            <li>
                                <label>订单号:</label>
                                <span>{{item.order_no}}</span>
                                <button class="copy_dom" :data-clipboard-text="item.order_no" @click="copyText()">复制</button>
                            </li>
                            <li>
                                <label>提交时间:</label>
                                <span>{{item.created_at}}</span>
                            </li>
                            <li>
                                <label>状态:</label>
                                <span>{{item.status}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="no_time" v-show="no_have">暂无充值记录</div>
                </div>
            </div>
        </div>
        <div slot="footer" class="example_footer">

        </div>
        </el-dialog>
    </section>
</template>

<script>
import Clipboard from 'clipboard';
export default {
    name: 'rechargeRecord',
    data(){
        return{
            rechargeActive: false,
            record_type: [
                {name: '全部',active: true},
                {name: '已完成',active: false},
                {name: '未成功',active: false}
            ],
            record_list: [],
            no_have: false
        }
    },
    methods:{
        changeMeans(){
            this.rechargeActive = true;
            this.recordState(0);
        },
        getJson(type){
            var that = this;
            that.$means.amateur_recharge_recods(type,function(res){
                that.record_list = res.list;
                for(let i=0;i<that.record_list.length;i++){
                    that.record_list[i].created_at = that.$means.getLocalTime(that.record_list[i].created_at);
                }
                if(that.record_list.length==0){
                    that.no_have = true;
                }else{
                    that.no_have = false;
                }
            })
        },
        recordState(index){
            for(let i=0;i<this.record_type.length;i++){
                this.record_type[i].active = false;
            }
            this.record_type[index].active = true;
            this.record_list = [];
            if(index==0){
                this.getJson(3);
            }else if(index==1){
                this.getJson(1);
            }else if(index==2){
                this.getJson(2);
            }
        },
        copyText(){
            var clipboard = new Clipboard('.copy_dom')  
            clipboard.on('success', e => {  
                this.$message.success('复制成功');
                // 释放内存  
                clipboard.destroy()  
            })  
            clipboard.on('error', e => {  
                this.$message.error('该浏览器不支持自动复制');
                // 释放内存  
                clipboard.destroy()  
            })    
        }
    }
}
</script>

<style lang="less" scoped>
#rechargeRecord{
    .varieties_content{
        width: 100%;
        height: 620px;
        .record_left{
            .mixin_float(155px,620px,left);
            background: @color_tone20;
            font-size: @font_size20;
            .type_active{
                .mixin_image(url('../../static/dream/recharge/beijingkuang.png'));
            }
            ul{
                li{
                    .mixin_li(155px,65px);
                    margin-top: 50px;
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
                        .mixin_image(url('../../static/dream/recharge/zhizhen.png'));
                    }
                }
            }
        }
        .record_right{
            .mixin_float(84%,620px,right);
            padding: 30px 75px 0px 85px;
            box-sizing: border-box;
            .record_example{
                width: 100%;
                height: 560px;
                overflow-y: auto;
                padding-right: 10px;
                box-sizing: border-box;
                .record_content{
                    .mixin_div(100%,120px,@color_white,@color_blueviolet,left);
                    margin-bottom: 15px;
                    ul{
                        li{
                            .mixin_li(100%,30px);
                            label{
                                .mixin_span(250px,30px,none,@color_blueviolet,right);
                                float: left;
                                font-size: @font_size16;
                            }
                            span:nth-of-type(1){
                                .mixin_span(auto,30px,none,black,right);
                                float: left;
                                margin-left: 30px;
                                font-size: @font_size16;
                            }
                            span:nth-of-type(2){
                                .mixin_span(auto,30px,none,orange,right);
                                float: left;
                                margin-left: 30px;
                                font-size: @font_size16;
                            }
                            button{
                                .mixin_button(50px,28px,@color_white2,@color_blueviolet);
                                float: left;
                                border: 1px solid @color_blueviolet;
                                margin: 1px 0px 0px 30px;
                            }
                            button:hover{
                                background: @color_white2_hover;
                            }
                        }
                    }
                }
                .no_time{
                    .mixin_div(100%,80px,none,@color_dimgray,center);
                    font-size: @font_size20;
                }
            }
        }
    }
    .example_footer{
        .mixin_div(100%,0px,none,auto,left);
    }
}
</style>