<template>
    <section id="know">
        <el-dialog
        :visible.sync="rechargeActive"
        width="535px"
        top="280px"
        center>
        <div slot="title"></div>
        <div class="varieties-content">
            <div class="already-submit">您的提款申请已提交</div>
            <div class="withdrawal-money">提款金额为<span>{{money}}</span>金币</div>
            <div class="attention">请留意游戏信息哈，看申请结果，谢谢~</div>
            <div class="sure-btn">
                <button @click="sureMeans()">知道了</button>
            </div>
        </div>
        <div slot="footer" class="example-footer">

        </div>
        </el-dialog>
    </section>
</template>

<script>
export default {
    name: 'know',
    data(){
        return{
            rechargeActive: false,
            money: ''
        }
    },
    methods:{
        changeMeans(value){
            this.rechargeActive = true;
            this.money = value;
        },
        sureMeans(){
            this.rechargeActive = false;
        }
    }
}
</script>

<style lang="less" scoped>
#know{
    .varieties-content{
        width: 100%;
        height: 295px;
        padding: 35px 35px 0px 35px;
        box-sizing: border-box;
        .already-submit{
            .mixin_div(100%,45px,none,@color_white,center);
            font-size: @font_size24;
        }
        .withdrawal-money{
            .mixin_div(100%,45px,none,@color_white,center);
            font-size: @font_size22;
            margin-top: 10px;
            span{
                color: @color_blueviolet;
            }
        }
        .attention{
            .mixin_div(100%,45px,none,@color_blueviolet,center);
            margin-top: 10px;
        }
        .sure-btn{
            .mixin_div(100%,45px,none,@color_white,left);
            padding-left: 180px;
            box-sizing: border-box;
            margin-top: 25px;
            button{
                .mixin_button(112px,34px,@color_white2,@color_blueviolet);
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