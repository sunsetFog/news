<template>
    <section id="consult">
        <el-dialog
        :visible.sync="rechargeActive"
        width="781px"
        top="190px"
        center>
        <div slot="title">{{consult_data.title}}</div>
        <div class="varieties-content">
            <div class="look-content" v-html="consult_data.content"></div>
            <div class="delete-info">
                <button @click="deleteMeans">删除</button>
            </div>
        </div>
        <div slot="footer" class="example-footer">

        </div>
        </el-dialog>
    </section>
</template>

<script>
export default {
    name: 'consult',
    data(){
        return{
            rechargeActive: false,
            consult_data: {title: '请刷新',content: ''},
            goods_id: '',
            interface: {name: '',single: '',delete: ''}
        }
    },
    methods:{
        changeMeans(response,value){
            var that = this;
            if(response=='mail'){
                that.interface.name = response;
                that.interface.single = 'amateur_get_email_single';
                that.interface.delete = 'amateur_get_email_dele';
            }else if(response=='notice'){
                that.interface.name = response;
                that.interface.single = 'amateur_get_message_single';
                that.interface.delete = 'amateur_get_message_dele';
            }
            that.goods_id = value;
            //console.log('id@@',value);
            that.$means[that.interface.single](value,function(res){
                that.consult_data.content = '';
                that.rechargeActive = true;
                //console.log('success',res);
                if(res.content.indexOf('span')!=-1){
                    let money = res.content.split(':');
                    let content = money[0]+":<span style='color: #b00cb3'>"+money[1].split(',')[0]+'</span>,'+money[1].split(',')[1];
                    res.content = content;
                }else if(res.content.indexOf('<')!=-1){
                    let money = res.content.split('<');
                    let content = money[0]+":<span style='color: #b00cb3'>"+money[1].split('>')[0]+'</span>'+money[1].split('>')[1];
                    res.content = content;
                }else{
                    res.content = that.$means.trim(res.content);
                }
                that.consult_data = res;
                that.$parent.hostMeans(that.interface.name,'get');
            })
        },
        deleteMeans(){
            var that = this;
            //console.log('delete_success');
            that.$means[that.interface.delete](that.goods_id,function(res){
                //console.log('delete$$',res);
                that.$parent.hostMeans(that.interface.name,'get');
                that.rechargeActive = false;
                that.$message.success('删除成功');
            })
        }
    }
}
</script>

<style lang="less" scoped>
#consult{
    .varieties-content{
        width: 100%;
        height: 470px;
        padding: 50px;
        .look-content{
            width: 100%;
            height: 320px;
            font-size: @font_size18;
            color: @color_white;
            overflow-y: auto;
        }
        .delete-info{
            width: 100%;
            height: 35px;
            margin-top: 15px;
            padding-left: 270px;
            button{
                .mixin_button(155px,34px,@color_white2,@color_blueviolet);
                border: 1px solid @color_blueviolet;
            }
            button:hover{
                background: @color_white2_hover;
            }
        }
    }
    .example-footer{
        .mixin_div(100%,0px,none,auto,left);
    }
}
</style>