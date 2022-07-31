<template>
    <section id="shoppingCart">
        <headDesign title="购物车">
            <button v-if="!edit_active" class="summer" @click="editWay(true)">编辑</button>
            <button v-else class="summer" @click="editWay(false)">完成</button>
        </headDesign>
        <div class="saturn">
            <ul>
                <li v-for="(item,index) in venus_list">
                    <van-checkbox v-model="item.active" class="mercury" @click="checkWay"></van-checkbox>
                    <div class="shang-pin">
                        <img class="u88" src="@static/mall/homePage/u88.png"/>
                    </div>
                    <span class="cartoon">银色星芒刺绣网纱底裤</span>
                    <span class="honey">肤色/M</span>
                    <span class="rainbow">￥99</span>
                    <van-field name="stepper" class="cosplay">
                        <template #input>
                            <van-stepper v-model="item.num" />
                        </template>
                    </van-field>
                </li>
            </ul>
        </div>

        <div class="fabulous">
            <van-checkbox v-model="all_active" class="comic" @click="allWay">全选</van-checkbox>
            <p v-if="!edit_active">商品总价&nbsp;&nbsp;&nbsp;<span>￥77</span></p>
            <button v-if="!edit_active" class="magic" @click="settlementWay">去结算</button>
            <button v-else class="bean" @click="deleteWay()">删除</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "shoppingCart",
    data() {
        return {
            edit_active: false,
            venus_list: [
                { title: 'WNF制造商', price: 9.9, icon: '', num: 1, active: false },
                { title: 'WNF制造商', price: 9.9, icon: '', num: 1, active: false }
            ],
            all_active: false
        }
    },
    methods: {
        editWay(value) {
            this.edit_active = value
        },
        allWay() {
            // console.log("--allWay-2-", this.all_active);
            if(this.all_active) {
                for(let i = 0; i < this.venus_list.length; i++) {
                    let item = this.venus_list[i];
                    item.active = true;
                }
            } else {
                for(let i = 0; i < this.venus_list.length; i++) {
                    let item = this.venus_list[i];
                    item.active = false;
                }
            }
        },
        checkWay() {
            // console.log("--venus_list--", this.venus_list);
            let count = 0
            for(let i = 0; i < this.venus_list.length; i++) {
                let item = this.venus_list[i];
                if(item.active) {
                    count++
                }
            }
            if(count == this.venus_list.length) {
                this.all_active = true;
            } else {
                this.all_active = false;
            }
        },
        deleteWay() {
            for(let i = 0; i < this.venus_list.length; i++) {
                let item = this.venus_list[i];
                if(item.active) {
                    this.venus_list.splice(i, 1);
                }
            }
        },
        settlementWay() {
            this.$router.push({
                path: "/orderUnit/fillOrder/index"
            });
        }
    }
}
</script>

<style lang="less" scoped>
#shoppingCart {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .summer {
        width: 30px;
        height: 25px;
        font-size: 13px;
        text-align: center;
        line-height: 25px;
        color: @color_lv;
        position: absolute;
        right: 15px;
        top: 10px;
    }
    .saturn {
        width: 100%;
        ul {
            width: 100%;
            li {
                width: 100%;
                height: 85px;
                margin: 12px 0;
                background: #fff;
                position: relative;
                border-top: 1px solid @color_edge;
                border-bottom: 1px solid @color_edge;
                .mercury {
                    position: absolute;
                    left: 9px;
                    top: 30px;
                }
                .shang-pin {
                    width: 80px;
                    height: 68px;
                    background: @color_qianqing;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    left: 40px;
                    top: 8px;
                    .u88 {
                        width: 52px;
                        height: 39px;
                    }
                }
                .cartoon {
                    font-size: 13px;
                    position: absolute;
                    left: 131px;
                    top: 10px;
                }
                .honey {
                    font-size: 12px;
                    color: @color_huise;
                    position: absolute;
                    left: 131px;
                    top: 35px;
                }
                .rainbow {
                    font-size: 13px;
                    color: #FB051B;
                    position: absolute;
                    left: 131px;
                    top: 59px;
                }
                .cosplay {
                    width: 128px;
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                }
            }
            li:last-child {
                border-bottom: none;
            }
        }
    }
    .fabulous {
        width: 100%;
        height: 55px;
        background: #fff;
        border-top: 1px solid @color_edge;
        font-size: 13px;
        position: fixed;
        left: 0px;
        bottom: 0px;
        .comic {
            position: absolute;
            left: 9px;
            top: 15px;
        }
        p {
            position: absolute;
            left: 125px;
            top: 18px;
            span {
                color: @color_hong;
            }
        }
        .magic {
            width: 95px;
            height: 100%;
            float: right;
            background: @color_lv;
            font-size: 14px;
            text-align: center;
            line-height: 55px;
            color: #fff;
        }
        .bean {
            width: 76px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            border: 1px solid @color_hong;
            color: @color_hong;
            border-radius: 5px;
            float: right;
            margin: 12px 10px 0 0;
        }
    }
}
</style>


