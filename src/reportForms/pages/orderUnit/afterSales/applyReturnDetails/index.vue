<template>
    <section id="applyReturnDetails">
        <headDesign title="记录详情">
            <img class="summer" src="@static/mall/afterSales/u3306.png"/>
        </headDesign>
        <div class="atmosphere">
            <span>服务单号：198014266</span>
            <span>申请时间：2017-05-01 16:00</span>
        </div>
        <div class="cartoon">
            <span>审核进度：您的服务单财务已退款，请您注意查收</span>
            <img class="u2724" src="@static/mall/afterSales/u2724.png"/>
        </div>
        <van-steps direction="vertical" :active="step_status" class="mercury">
            <van-step>
                <p class="jupiter">提交申请</p>
                <p class="saturn">2016-07-12 12:40</p>
            </van-step>
            <van-step>
                <p class="jupiter">申请审核</p>
                <p class="saturn">2016-07-11 10:00</p>
            </van-step>
            <van-step>
                <p class="jupiter">售后收货</p>
                <p class="saturn">2016-07-10 09:30</p>
            </van-step>
            <van-step>
                <p class="jupiter">进行退款</p>
                <p class="saturn">2016-07-10 09:30</p>
            </van-step>
            <van-step>
                <p class="jupiter">处理完成</p>
                <p class="saturn">2016-07-10 09:30</p>
            </van-step>
        </van-steps>
        <div class="cartoon">
            <span>问题描述</span>
        </div>
        <div class="undercurrent">
            拿来看也没看就洗了，发现有些不对劲，吊牌都没有，洗的时候还有泡沫，细看领口有一处缝补的痕迹，虽然是特价买的但是还是感觉很不爽。
        </div>

        <div class="cartoon">
            <span>审核留言</span>
        </div>
        <div class="undercurrent">
            亲爱的客户，很抱歉您的商品出现这样的问题。请准备好商品全套（商品、附件、发票原件、包装）按以下地址寄往优品汇售后部，不支持到付及平邮。如收到商品后情况属实，我们会尽快为您办理。感谢您对的支持。（注：电子发票及换货发票无需退回）。提示：为避免数据遗失或泄露，请您提前做好数据备份，优品汇将不承担相应责任。
        </div>
        <div class="cosplay">
            <ul>
                <li>• 收货地址：广东省深圳市优品汇售后服务部</li>
                <li>• 联系姓名：优品汇</li>
                <li>• 邮政编码：518000</li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "applyReturnDetails",
    data() {
        return {
            step_status: 1
        }
    }
}
</script>

<style lang="less" scoped>
#applyReturnDetails {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .summer {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .venus() {
        font-size: 13px;
        color: @color_huise;
        position: absolute;
        left: 20px;
    }
    .atmosphere {
        width: 100%;
        height: 88px;
        background: #fff;
        border-top: 1px solid @color_edge;
        border-bottom: 1px solid @color_edge;
        position: relative;
        span {
            .venus();
        }
        span:nth-of-type(1) {
            top: 18px;
        }
        span:nth-of-type(2) {
            top: 50px;
        }
    }
    .cartoon {
        width: 100%;
        height: 42px;
        background: #fff;
        margin-top: 15px;
        border-top: 1px solid @color_edge;
        border-bottom: 1px solid @color_edge;
        position: relative;
        span {
            .venus();
            top: 10px;
        }
        .u2724 {
            height: 21px;
            position: absolute;
            right: 20px;
            top: 9px;
        }
    }
    .mercury {
        text-align: left;
        border-bottom: 1px solid @color_edge;
        .jupiter {
            font-size: 13px;
        }
        .saturn {
            font-size: 12px;
            color: @color_huise;
        }
    }
    .undercurrent {
        width: 100%;
        padding: 15px 20px;
        box-sizing: border-box;
        background: #fff;
        text-align: left;
        color: @color_huise;
        border-bottom: 1px solid @color_edge;
    }
    .cosplay {
        width: 100%;
        height: 100px;
        background: #fff;
        padding: 10px 20px;
        box-sizing: border-box;
        ul {
            width: 100%;
            li {
                width: 100%;
                float: left;
                padding: 5px 0;
                color: @color_huise;
                text-align: left;
            }
        }
    }
}
</style>

