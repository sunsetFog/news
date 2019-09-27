<template>
    <section id="footer_index">
       <div class="footer_contain">
           <div class="contain_center">
               <!-- <div class="function_example" v-if="vip_foot">
                   <ul>
                       <li v-for="(item,index) in function_list" :style="{backgroundImage: item.url}" :class="{'function_margin': index!=4}"></li>
                    </ul>
               </div>
               <div class="logo_example">
                   <ul>
                       <li v-for="(item,index) in logo_list" :style="{backgroundImage: item.url,width: item.width}" :class="{'logo_margin': index!=9}"></li>
                    </ul>
               </div>
               <div class="relevant_example">
                   <ul>
                       <li v-for="(item,index) in relevant_list" :class="{'relevant_border':index!=5&&index!=6}">{{item.title}}</li>
                       <li>官方邮箱&nbsp;:&nbsp;cs@bifa.bet</li>
                    </ul>
               </div> -->
               <div class="copyright_example">
                   <span>@2010-2020&nbsp;钻石娱乐&nbsp;版权所有</span>
                   <span>钻石娱乐&nbsp;邀你共创未来</span>
               </div>
           </div>
       </div>

    </section>
</template>

<script>
export default{
    name: 'footer_index',
    props: ['vip_foot'],
    data(){
        return{
            function_list: [
                {url: "url('../../static/dream/home/VIP-hover.png')"},
                {url: "url('../../static/dream/home/chongzhi.png')"},
                {url: "url('../../static/dream/home/daili.png')"},
                {url: "url('../../static/dream/home/jifen.png')"},
                {url: "url('../../static/dream/home/zaixiankefu.png')"}
            ],
            logo_list: [
                {url: "url('../../static/dream/home/AG.png')",width: '7%'},
                {url: "url('../../static/dream/home/BBIN_logo.png')",width: '5.8%'},
                {url: "url('../../static/dream/home/saba_logo_en.png')",width: '9%'},
                {url: "url('../../static/dream/home/lg.png')",width: '7%'},
                {url: "url('../../static/dream/home/MG_logo.png')",width: '9.16%'},
                {url: "url('../../static/dream/home/playtech-logo.png')",width: '8.75%'},
                {url: "url('../../static/dream/home/playgo_logo.png')",width: '7.9%'},
                {url: "url('../../static/dream/home/PS_logo.png')",width: '8.3%'},
                {url: "url('../../static/dream/home/SW.png')",width: '9.58%'},
                {url: "url('../../static/dream/home/TTG.png')",width: '8.75%'}
            ],
            relevant_list: [
                {title: '关于我们'},
                {title: '存款提款'},
                {title: '常见问题'},
                {title: '联系我们'},
                {title: '理性博彩'},
                {title: '负责声明'},
                {title: '欢迎详细加盟资讯'}
            ],
        }
    },
    created(){

    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
#footer_index{
    width: 100%;
    .footer_contain{
        width: 100%;
        height: 100%;
        .mixin_image(url('../../static/dream/home/diceng.png'));
        .contain_center{
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            padding: 35px 0px 35px 0px;
            box-sizing: border-box;
            overflow: hidden;
            .function_example{
                width: 100%;
                height: 90px;
                padding: 10px 0px 20px 55px;
                box-sizing: border-box;
                .function_margin{
                    margin-right: 64px;
                }
                ul{
                    height: 100%;
                    li{
                        .mixin_li(170px,60px);
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        cursor: pointer;
                    }
                }
            }
            .logo_example{
                width: 100%;
                height: 30px;
                margin-top: 10px;
                .logo_margin{
                    margin-right: 24.2px;
                }
                ul{
                    li{
                        .mixin_li(auto,30px);
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                    }
                }
            }
            .relevant_example{
                width: 100%;
                height: 35px;
                margin-top: 10px;
                padding: 15px 0px 0px 180px;
                box-sizing: border-box;
                overflow: hidden;
                .relevant_border{
                    border-right: 1px solid @color_white;
                }
                ul{
                    li{
                        .mixin_li(auto,20px);
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        padding: 0px 16px;
                        box-sizing: border-box;
                        color: @color_white;
                        cursor: pointer;
                    }
                    li:nth-of-type(7){
                        margin-left: 45px;
                        padding: 0px;
                        cursor: auto;
                    }
                    li:nth-of-type(8){
                        margin-left: 11px;
                        padding: 0px;
                        color: @color_tone1;
                        cursor: auto;
                    }
                }
            }
            .copyright_example{
                width: 100%;
                height: 45px;
                line-height: 45px;
                padding: 0px 0px 0px 420px;
                box-sizing: border-box;
                font-size: @font_size12;
                overflow: hidden;
                span:nth-of-type(1){
                    .mixin_span(auto,45px,none,@color_white,left);
                    float: left;
                }
                span:nth-of-type(2){
                    .mixin_span(auto,45px,none,@color_white,left);
                    float: left;
                    margin-left: 55px;
                }
            }
        }
    }
 
}
</style>