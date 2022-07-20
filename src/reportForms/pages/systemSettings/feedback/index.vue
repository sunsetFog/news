<template>
    <section id="feedback">
        <headDesign title="意见反馈"></headDesign>
        <div class="atmosphere">
            请选择反馈类型
            <img src="@static/mall/afterSales/u2724.png"/>
        </div>
        <van-field
            class="saturn"
            v-model="message"
            rows="5"
            autosize
            type="textarea"
            maxlength="100"
            placeholder="请填写您的感受，我们将认真听取您的意见，努力提供优质服务"
            show-word-limit
        />
        <div class="jupiter">
            <input type="text" v-model="contacts" placeholder="手机/邮箱/QQ(选填)"/>
        </div>
        <div class="cartoon">
            上传凭证（最多9张）
        </div>
        <div class="cosplay">
            <van-uploader v-model="fileList" multiple :max-count="9" />
        </div>
        <button class="rainbow" @click="submitWay">提交</button>
    </section>
</template>

<script>
import { Toast } from 'vant';
export default {
    name: "feedback",
    data() {
        return {
            message: '',
            fileList: [],
            contacts: '',
            telephone: ''
        }
    },
    methods: {
        submitWay() {
            Toast.success('评价提交成功');
        }
    }
}
</script>

<style lang="less" scoped>
#feedback {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 65px 20px 0 20px;
    box-sizing: border-box;
    .atmosphere {
        width: 100%;
        height: 42px;
        border: 1px solid @color_edge;
        background: #fff;
        text-align: left;
        text-indent: 20px;
        line-height: 41px;
        font-size: 13px;
        color: @color_huise;
        position: relative;
        img {
            height: 21px;
            position: absolute;
            right: 20px;
            top: 9px;
        }
    }
    .cartoon {
        width: 100%;
        height: 42px;
        text-align: left;
        line-height: 42px;
        font-size: 13px;
    }
    .saturn {
        width: 100%;
        border: 1px solid @color_edge;
        margin-top: 15px;
    }
    .cosplay {
        width: 100%;
        text-align: left;
    }
    .jupiter {
        width: 100%;
        height: 42px;
        background: #fff;
        border: 1px solid @color_edge;
        margin-top: 15px;
        padding-left: 20px;
        box-sizing: border-box;
        input {
            width: 250px;
            height: 100%;
            float: left;
        }
    }
    .rainbow {
        width: 100%;
        height: 42px;
        text-align: center;
        line-height: 42px;
        margin-top: 20px;
        background: @color_lv;
        color: #fff;
        font-size: 13px;
        border-radius: 5px;
    }
}
</style>


