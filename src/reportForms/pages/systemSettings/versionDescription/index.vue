<template>
    <section id="versionDescription">
        <headDesign title="版本说明"></headDesign>
        <div class="atmosphere">
            <div class="cartoon-apt">
                <img src="@static/mall/systemSettings/u2823.png"/>
            </div>
            <p>版本不息 优化不止</p>
        </div>
        <div class="rainbow" v-for="(item,index) in comic_list">
            <div class="summer">
                <span>{{item.title}}</span>
                <span>{{item.date}}</span>
            </div>
            <ul>
                <li v-for="(row,key) in item.content">{{row}}</li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "versionDescription",
    data() {
        return {
            comic_list: [
                {
                    title: 'V2.0.0',
                    date: '2017-05-01',
                    content: [
                        '1.购物满88包邮，48小时退款，30天无忧退货',
                        '2.邀请好友，领走300元',
                        '3.商品标签，一眼Get商品制造商',
                        '4.支持更多优惠券，买买买更优惠',
                        '5.评论显示优化，商品口碑一目了然'
                    ]
                },
                {
                    title: 'V1.5.0',
                    date: '2017-05-01',
                    content: [
                        '1.购物满88包邮，48小时退款，30天无忧退货',
                        '2.邀请好友，领走300元',
                        '3.商品标签，一眼Get商品制造商',
                        '4.支持更多优惠券，买买买更优惠',
                        '5.评论显示优化，商品口碑一目了然'
                    ]
                },
                {
                    title: 'V1.4.0',
                    date: '2017-05-01',
                    content: [
                        '1.购物满88包邮，48小时退款，30天无忧退货',
                        '2.邀请好友，领走300元',
                        '3.商品标签，一眼Get商品制造商',
                        '4.支持更多优惠券，买买买更优惠',
                        '5.评论显示优化，商品口碑一目了然'
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
#versionDescription {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .atmosphere {
        width: 100%;
        height: 172px;
        background: #fff;
        border-bottom: 1px solid @color_edge;
        padding: 24px 0 0 0;
        box-sizing: border-box;
        .cartoon-apt {
            width: 100%;
            height: 88px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                height: 100%;
            }
        }
        p {
            width: 100%;
            font-size: 13px;
            padding: 12px 0 0 0;
            box-sizing: border-box;
        }
    }
    .rainbow {
        width: 100%;
        background: #fff;
        margin-top: 20px;
        border-top: 1px solid @color_edge;
        border-bottom: 1px solid @color_edge;
        .summer {
            width: 100%;
            height: 42px;
            border-bottom: 1px solid @color_edge;
            line-height: 41px;
            padding: 0 30px 0 20px;
            box-sizing: border-box;
            font-size: 13px;
            span:nth-of-type(1) {
                float: left;
            }
            span:nth-of-type(2) {
                float: right;
                color: @color_huise;
            }
        }
        ul {
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
            li {
                width: 100%;
                padding: 5px 0;
                box-sizing: border-box;
                color: @color_huise;
                font-size: 13px;
                text-align: left;
            }
        }
    }
}
</style>


