<template>
    <section id="headerBar">
        <img src="@static/image/NavigationBar02@2x.png" @click="goBack()">
        <div class="guide">
            {{title}}
        </div>
        <img src="@static/image/refresh.png" @click="refreshPage">
        <img src="@static/image/tip.png" @click="explain()">
        <van-overlay :show="forum" @click.stop="forum = false">
            <div class="mechanism">
                <div class="pen-header">
                    口径说明
                </div>
                <div class="pen-container">
                    <p>1、项目范围：全口径项目</p>
                    <p>2、更新频率：每6小时</p>
                    <p>3、业态分类:<br>①住宅：洋房、高层、小高层、超高层;<br>②别墅：叠拼别墅、独立别墅、双拼别墅、联排别墅；<br>③商办：商业、商办、酒店下所有二级业态；<br>④车位：普通车位（即只计产权车位）</p>
                    <p>4、价格取值：<br>①本月均价：慧销售系统签约均价。<br>&nbsp;&nbsp;【如：住宅价格=当月住宅类业态总签约金额 / 签约面积，若当月该项目无签约则沿用上月销售均价）】<br>②经营方案版价格：经营计划书申报系统价格。<br>&nbsp;&nbsp;【如：住宅价格= （所有住宅类业态的价格 X 面积之和）/ 住宅类业态汇总面积】<br>③年度预算版价格：后台导入财务年度预算版审批数据<br>&nbsp;&nbsp;【如：住宅价格= 住宅类业态汇总签约金额 / 住宅类业态签约面积】</p>
                </div>
                <div class="pen-footer">
                </div>
            </div>
        </van-overlay>
    </section>
</template>

<script>
export default {
    name: 'headerBar',
    data () {
        return {
            forum: false
        }
    },
    props: {
        title: {
        type: String,
        default: () => ''
        }
    },
    methods: {
        goBack () {
            this.$router.go(-1);
        },
        refreshPage () {
            location.reload()
        },
        explain () {
            this.forum = true
        }
    }
}
</script>

<style lang="less" scoped>
#headerBar {
    width: 100%;
    height: 50px;
    position: fixed;
    z-index: 999;
    background: #001E2D;
    img:nth-of-type(1) {
        width: 25px;
        height: 25px;
        position: absolute;
        left: 15px;
        top: 12.5px;
    }
    img:nth-of-type(2) {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 55px;
        top: 12.5px;
    }
    img:nth-of-type(3) {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 15px;
        top: 12.5px;
    }
    .guide {
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: white;
        font-size: 18px;
        position: absolute;
        left: 87.5px;
        top: 0px;
    }
    /deep/ .van-overlay {
        top: 50%;
        left: 30px;
        margin-top: -270px;
    }
    .mechanism {
        width: 315px;
        background: #5BB7EB;
        .pen-header {
            width: 100%;
            height: 55px;
            line-height: 55px;
            font-size: 14px;
            font-weight: bold;
        }
        .pen-container {
            width: 100%;
            padding: 0px 15px 15px 15px;
            p {
                text-align: left;
                font-size: 13px;
                padding: 8px 0;
            }
        }
        .pen-footer {
            width: 100%;
            height: 70px;
            background: url('~@static/image/tipfooter.png') no-repeat;
            background-size: 100% 100%;
        }
    }
}
</style>
