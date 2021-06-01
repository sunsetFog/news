<template>
    <section id="mail">
        <el-dialog
        :visible.sync="rechargeActive"
        width="1215px"
        top="101px"
        center>
        <div slot="title">邮件</div>
        <div class="varieties-content">
            <div class="mail-content">
                <div class="mail-example" v-for="(item,index) in mail_list.slice((pagination.page-1)*pagination.pagesize,pagination.page*pagination.pagesize)" @click="consult(index,false)">
                    <div class="picture-example">
                        <img v-show="!item.is_readed" src="../../static/picture/recharge/weidu.png"/>
                        <img v-show="item.is_readed" src="../../static/picture/recharge/yidu.png"/>
                    </div>
                    <div class="information">
                        <span>{{item.title}}</span>
                        <span></span>
                        <span>{{item.created_at}}</span>
                        <button v-show="!item.is_readed" @click.stop="consult(index,true)">点击查阅</button>
                        <img v-show="item.is_readed" src="../../static/picture/recharge/read.png"/>
                    </div>
                </div>
                <div class="no-time" v-show="no_have">暂无邮件</div>
             </div>
             <div class="page-example">
                <pagination :pagination="pagination" @emitWay="getJson"></pagination>
             </div>
        </div>
        <div slot="footer" class="example-footer">

        </div>
        </el-dialog>
    </section>
</template>

<script>
export default {
    name: 'mail',
    data(){
        return{
            rechargeActive: false,
            mail_list: [],
            pagination: {page: 1,pagesize: 10,total: 0},
            no_have: false
        }
    },
    created(){
        this.getJson();
    },
    methods:{
        changeMeans(){
            this.getJson();
            this.rechargeActive = true;
        },
        getJson(){
            var that = this;
            //console.log('youjian***',that.pagination);
            that.$means.amateur_get_email(1,function(res){
                //console.log('邮件##',res);
                let count_readed = 0;
                for(let i=0;i<res.list.length;i++){
                    if(res.list[i].is_readed==false){
                        count_readed+=1;
                    }
                    res.list[i].created_at = that.$means.getLocalTime(res.list[i].created_at);
                    // let timestamp = res.list[i].created_at;
                    // let newDate = new Date();
                    // newDate.setTime(timestamp * 1000);
                    // let year = newDate.toLocaleDateString();
                    // let time = newDate.toLocaleTimeString();
                    // let yearArr = year.split('/');
                    // let yearData = yearArr[0]+'.'+yearArr[1]+'.'+yearArr[2]+' '+time.split(' ')[0];
                    // res.list[i].created_at = yearData;
                }
                that.$parent.hostMeans('mail','readed',count_readed);

                that.mail_list = res.list;

                that.pagination.total = res.totalrows;
                if(that.mail_list.length==0){
                    that.no_have = true;
                }else{
                    that.no_have = false;
                }
                
            })
        },
        consult(index,value){
            if(value==true){
                this.$parent.hostMeans('mail',this.mail_list[index].id);
            }else{
                if(this.mail_list[index].is_readed==true){
                    this.$parent.hostMeans('mail',this.mail_list[index].id);
                }
            }
        },
    }
}
</script>

<style lang="less" scoped>
#mail{
    .varieties-content{
        width: 100%;
        height: 710px;
        padding: 25px 35px 0px 35px;
        box-sizing: border-box;
        .mail-content{
            width: 100%;
            height: 600px;
            overflow-y: auto;
            .mail-example{
                width: 100%;
                height: 105px;
                margin-bottom: 25px;
                .picture-example{
                    .mixin_float(13%,100%,left);
                    background: #420f4a;
                    border-top-left-radius: 4px;
                    border-bottom-left-radius: 4px;
                    img{
                        .mixin_img(75px,60px);
                        float: left;
                        margin: 20px 0px 0px 40px;
                    }
                }
                .information{
                    .mixin_div(87%,105px,@color_indigo,@color_white,left);
                    float: left;
                    position: relative;
                    span:nth-of-type(1){
                        .mixin_span(auto,35px,none,@color_white,left);
                        font-size: @font_size24;
                        position: absolute;
                        left: 35px;
                        top: 15px;
                    }
                    span:nth-of-type(2){
                        .mixin_span(auto,35px,none,@color_white,left);
                        font-size: @font_size16;
                        position: absolute;
                        left: 35px;
                        top: 58px;
                    }
                    span:nth-of-type(3){
                        .mixin_span(auto,35px,none,@color_white,left);
                        font-size: @font_size16;
                        position: absolute;
                        left: 460px;
                        bottom: 15px;
                    }
                    button{
                        .mixin_button(125px,34px,@color_white2,@color_blueviolet);
                        border: 1px solid @color_blueviolet;
                        position: absolute;
                        right: 35px;
                        top: 35px;
                    }
                    button:hover{
                        background: @color_white2_hover;
                    }
                    img{
                        .mixin_img(80px,80px);
                        position: absolute;
                        right: 58px;
                        top: 12px;
                    }
                }
            }
            .no-time{
                .mixin_div(100%,80px,none,@color_dimgray,center);
                font-size: @font_size20;
            }

        }
        .page-example{
            width: 100%;
            height: 40px;
            margin-top: 25px;
        }
    }
    .example-footer{
        .mixin_div(100%,0px,none,auto,left);
    }
}
</style>