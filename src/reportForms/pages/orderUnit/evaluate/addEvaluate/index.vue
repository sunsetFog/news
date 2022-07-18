<template>
    <section id="evaluate">
        <headDesign title="发布评价"></headDesign>
        <div class="atmosphere">
            <span class="mars">商品评分</span>
            <van-rate class="cartoon" v-model="like_value" icon="like" void-icon="like-o" :size="28" color="#FD994B" void-color="#eee" />
            <span class="jupiter" v-if="like_value == 0">请选择评分</span>
            <span class="jupiter" v-if="like_value == 1">非常差</span>
            <span class="jupiter" v-if="like_value == 2">差</span>
            <span class="jupiter" v-if="like_value == 3">一般</span>
            <span class="jupiter" v-if="like_value == 4">好</span>
            <span class="jupiter" v-if="like_value == 5">非常好</span>
        </div>
        <van-field
            class="saturn"
            v-model="message"
            rows="5"
            autosize
            type="textarea"
            maxlength="100"
            placeholder="宝贝是否满足了你的期待？说说你的使用心得，分享给其他想购买的朋友吧。"
            show-word-limit
        />
        <div class="venus">
            <span class="mars">匿名评价</span>
            <van-switch class="honey" size="20px" v-model="integral_active" active-color="#4CD964"/>
        </div>
        <div class="undercurrent">
            上传图片（最多9张）
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
    name: "evaluate",
    data() {
        return {
            like_value: 0,
            message: '',
            integral_active: false,
            fileList: []
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
#evaluate {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 55px 20px 0 20px;
    box-sizing: border-box;
    .atmosphere, .venus {
        width: 100%;
        height: 42px;
        background: #fff;
        border: 1px solid @color_edge;
        position: relative;
        .mars {
            font-size: 14px;
            position: absolute;
            left: 20px;
            top: 10px;
        }
        .cartoon {
            position: absolute;
            left: 95px;
            top: 5px;
        }
        .jupiter {
            font-size: 13px;
            position: absolute;
            left: 265px;
            top: 11px;
        }
    }
    .saturn {
        width: 100%;
        border: 1px solid @color_edge;
        margin-top: 15px;
    }
    .venus {
        margin-top: 15px;
        .honey {
            position: absolute;
            right: 15px;
            top: 8px;
        }
    }
    .undercurrent {
        width: 100%;
        height: 50px;
        text-align: left;
        line-height: 50px;
        font-size: 13px;
    }
    .cosplay {
        width: 100%;
        text-align: left;
    }
    .rainbow {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: @color_lv;
        color: #fff;
        border-radius: 5px;
        margin-top: 15px;
    }
}
</style>


