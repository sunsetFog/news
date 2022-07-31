<template>
    <section id="searchProducts">
        <div class="search-box">
            <div class="magic">
                <img @click="backWay" class="u333" src="@static/mall/register/u333.png"/>
            </div>
            <van-search class="comic" v-model="search_value" show-action placeholder="输入商品关键词" @search="onSearch" @cancel="onCancel"/>
        </div>
        <div class="atmosphere">
            <div :class="{'zong-he': true, 'lucky': tab_active == 0}" @click="tabWay(0)">
                综合
            </div>
            <div :class="{'xiao-liang': true, 'lucky': tab_active == 1}" @click="tabWay(1)">
                销量
            </div>
            <div class="shai-xuan">
                <div>
                    <img v-if="layout_active == 'yi'" src="@static/mall/search/yi.png" @click="layoutWay('er')"/>
                    <img v-if="layout_active == 'er'" src="@static/mall/search/er.png" @click="layoutWay('yi')"/>
                </div>
                <div @click="screenWay">
                    <span>筛选</span>
                    <van-icon name="filter-o" />
                </div>
            </div>
        </div>

        <fresh v-if="layout_active == 'er'"></fresh>
        <popularityHot v-if="layout_active == 'yi'"></popularityHot>

        <van-action-sheet v-model:show="cartoon" title="全部筛选">
            <div class="content-box">
                <div class="cosplay">
                    <div class="jupiter" v-for="(item, index) in mercury">
                        <label>{{item.label}}</label>
                        <ul>
                            <li v-for="(row, key) in item.list">{{row}}</li>
                        </ul>
                    </div>
                </div>
                    
                <div class="undercurrent">
                    <button>重置</button>
                    <button @click="sureWay()">确定</button>
                </div>
            </div>
        </van-action-sheet>
    </section>
</template>

<script>
import fresh from './fresh'
import popularityHot from './popularityHot'
export default {
    name: "searchProducts",
    components: { fresh, popularityHot },
    data() {
        return {
            search_value: '',
            tab_active: 0,
            layout_active: 'er',
            cartoon: false,
            mercury: [
                {
                    label: '分类',
                    list: ['内裤', '内衣']
                },
                {
                    label: '品牌',
                    list: ['爱慕', '古今']
                },
                {
                    label: '材质',
                    list: ['天丝', '彩棉']
                },
                {
                    label: '风格',
                    list: ['可爱']
                }
            ]
        }
    },
    methods: {
        onSearch() {
            console.log("onSearch", this.search_value)
        },
        onCancel() {

        },
        backWay() {
            this.$router.go(-1);
        },
        layoutWay(value) {
            this.layout_active = value
        },
        tabWay(value) {
            this.tab_active = value
        },
        screenWay() {
            this.cartoon = true
        },
        sureWay() {
            this.cartoon = false
        }
    }
}
</script>

<style lang="less" scoped>
#searchProducts {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 50px 0 0 0;
    box-sizing: border-box;
    .search-box {
        width: 100%;
        height: 50px;
        background: #fff;
        overflow: hidden;
        border-bottom: 1px solid @color_edge;
        position: fixed;
        left: 0px;
        top: 0px;
        .magic {
            width: 35px;
            height: 50px;
            float: left;
            position: relative;
            .u333 {
                height: 20px;
                position: absolute;
                left: 15px;
                top: 14px;
            }
        }
        .comic {
            width: 340px;
            height: 50px;
            float: right;
        }
    }
    .atmosphere {
        width: 100%;
        height: 45px;
        border-bottom: 1px solid @color_edge;
        background: #fff;
        position: relative;
        .zong-he, .xiao-liang {
            padding: 4px 8px;
            box-sizing: border-box;
            font-size: 13px;
            position: absolute;
            left: 25px;
            top: 8px;
        }
        .xiao-liang {
            left: 155px;
        }
        .lucky {
            color: @color_hong;
        }
        .shai-xuan {
            width: 100px;
            height: 25px;
            -background: greenyellow;
            position: absolute;
            right: 15px;
            top: 8px;
            div:nth-of-type(1) {
                width: 40px;
                height: 100%;
                border-right: 1px solid @color_edge;
                float: left;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    height: 100%;
                }
            }
            div:nth-of-type(2) {
                width: 60px;
                height: 100%;
                float: right;
                position: relative;
                span {
                    font-size: 13px;
                    position: absolute;
                    right: 20px;
                    top: 4px;
                }
                i {
                    font-size: 20px;
                    position: absolute;
                    right: 0px;
                    top: 3px;
                }
            }
        }
    }
    .content-box {
        width: 100%;
        height: 480px;
        overflow: hidden;
        position: relative;
        .cosplay {
            width: 100%;
            height: 380px;
            .jupiter {
                width: 100%;
                label {
                    width: 100%;
                    height: 28px;
                    line-height: 28px;
                    text-align: left;
                    font-size: 13px;
                    color: @color_huise;
                    display: inline-block;
                    padding-left: 20px;
                    box-sizing: border-box;
                }
                ul {
                    width: 100%;
                    text-align: left;
                    padding: 10px 15px;
                    box-sizing: border-box;
                    li {
                        width: 75px;
                        height: 32px;
                        text-align: center;
                        line-height: 31px;
                        margin: 0 8px;
                        display: inline-block;
                        border-radius: 20px;
                        background: @color_huise;
                        font-size: 13px;
                        color: #fff;
                    }
                }
            }
        }
        .undercurrent {
            width: 100%;
            height: 45px;
            border-top: 1px solid @color_edge;
            position: absolute;
            bottom: 0px;
            left: 0px;
            button {
                width: 50%;
                height: 100%;
                line-height: 45px;
                float: left;
                font-size: 13px;
            }
            button:nth-of-type(1) {
                border-right: 1px solid @color_edge;
                color: @color_lv;
            }
            button:nth-of-type(2) {
                color: #fff;
                background: @color_lv;
            }
        }
    }
}
</style>


