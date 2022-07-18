<template>
    <section id="applyReturn">
        <headDesign title="申请退货"></headDesign>
        <div class="atmosphere">
            请选择退货原因
            <img src="@static/mall/afterSales/u2724.png"/>
        </div>
        <div class="cartoon">
            问题描述
        </div>
        <van-field
            class="saturn"
            v-model="message"
            rows="5"
            autosize
            type="textarea"
            maxlength="100"
            placeholder="请输入退货原因描述"
            show-word-limit
        />
        <div class="cartoon">
            上传凭证（最多5张）
        </div>
        <div class="cosplay">
            <van-uploader v-model="fileList" multiple :max-count="5" />
        </div>
        <div class="cartoon">
            联系方式
        </div>
        <div class="jupiter">
            <label>联系人：</label>
            <input type="text" v-model="contacts" placeholder="填写联系人"/>
        </div>
        <div class="jupiter" style="border-top: none;">
            <label>联系电话：</label>
            <input type="text" v-model="telephone" placeholder="填写联系电话"/>
        </div>
        <button class="rainbow" @click="submitWay">提交</button>
        <div class="summer">
            <img src="@static/mall/afterSales/u3350.png"/>
            <span>温馨提示</span>
            <ul>
                <li>• 商品寄回地址将在审核通过后以短信形式告知，或在申请记录中查询。</li>
                <li>• 提交服务单后，售后专员可能与您电话沟通，请保持手机畅通。</li>
                <li>• 退货处理成功后退款金额将原路返回到您的支持账户中；</li>
            </ul>
        </div>
    </section>
</template>

<script>
import { Toast } from 'vant';
export default {
    name: "applyReturn",
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
            Toast.success('申请提交成功');
            this.$router.push({
                path: "/afterSalesList"
            });
        }
    }
}
</script>

<style lang="less" scoped>
#applyReturn {
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
        label {
            width: 80px;
            height: 100%;
            float: left;
            text-align: right;
            line-height: 42px;
        }
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
    .summer {
        width: 100%;
        height: 200px;
        font-size: 12px;
        color: @color_huise;
        position: relative;
        img {
            height: 22px;
            position: absolute;
            left: 0px;
            top: 15px;
        }
        span {
            position: absolute;
            left: 35px;
            top: 18px;
        }
        ul {
            width: 100%;
            position: absolute;
            left: 0px;
            top: 50px;
            li {
                width: 100%;
                padding: 5px 0;
                box-sizing: border-box;
                text-align: left;
                line-height: 18px;
            }
        }
    }
}
</style>


