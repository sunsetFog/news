<template>
    <section id="searchUnit">
        <div class="search-box">
            <div class="magic">
                <img @click="backWay" class="u333" src="@static/mall/register/u333.png"/>
            </div>
            <van-search class="comic" v-model="search_value" show-action placeholder="输入商品关键词" @search="onSearch" @cancel="onCancel"/>
        </div>
        <div class="cartoon" style="background: #fff;">
            热门搜索
        </div>
        <div class="jupiter">
            <ul>
                <li v-for="(item,index) in hot_list" @click="hotWay(item)">{{item.label}}</li>
            </ul>
        </div>
        <div class="cartoon">
            搜索历史
        </div>
        <div class="mercury">
            <ul>
                <li v-for="(item,index) in record_list" @click="hotWay(item)">
                    <img class="u1460" src="@static/mall/search/u1460.png"/>
                    <span>{{item.label}}</span>
                    <img class="u1447" @click.stop="removeRecord(index)" src="@static/mall/search/u1447.png"/>
                </li>
            </ul>
        </div>
        <div class="fabulous" @click="removeRecord('all')">
            <div>
                <van-icon class="mars" name="delete-o" />
                <span>清楚搜索历史</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "searchUnit",
    data() {
        return {
            search_value: '',
            hot_list: [
                { label: '家居服' },
                { label: '零食' },
                { label: '水果' }
            ],
            record_list: []
        }
    },
    created() {
        let arr = [
                { label: '衣服' },
                { label: '玩具' },
                { label: '水果' }
            ]
        this.setRecord(arr);
        this.getRecord();
    },
    methods: {
        onSearch() {
            console.log("onSearch", this.search_value)
            this.setRecord(this.search_value);
        },
        onCancel() {

        },
        backWay() {
            this.$router.go(-1);
        },
        hotWay(item) {
            this.$router.push({
                path: '/searchUnit/searchProducts/index'
            })
        },
        setRecord(value) {
            let recordList = []
            if(Array.isArray(value)) {
                console.log(1111111)
                recordList = value;
            } else {
                console.log(22222)
                recordList = JSON.parse(localStorage.getItem('recordList')) || [];
                // 去重
                for (let index = 0; index < this.record_list.length; index++) {
                    let item = this.record_list[index];
                    if(item.label == value) {
                        return;
                    }
                }
                recordList.unshift({
                    label: value
                });
            }
            localStorage.setItem('recordList', JSON.stringify(recordList));
            this.getRecord();
        },
        getRecord() {
            this.record_list = JSON.parse(localStorage.getItem('recordList')) || []
        },
        removeRecord(value) {
            if(value == 'all') {
                localStorage.removeItem('recordList');
            } else {
                this.record_list = this.record_list.filter(function(item, index){
                    return index != value;
                });
                this.setRecord(this.record_list);
            }
            
            this.getRecord();
        }
    }
}
</script>

<style lang="less" scoped>
#searchUnit {
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
    .cartoon {
        width: 100%;
        height: 50px;
        padding-left: 20px;
        box-sizing: border-box;
        text-align: left;
        line-height: 50px;
        color: @color_huise;
        font-size: 14px;
    }
    .jupiter {
        width: 100%;
        background: #fff;
        padding: 0 0 10px 0;
        box-sizing: border-box;
        border-bottom: 1px solid @color_edge;
        ul {
            width: 100%;
            text-align: left;
            li {
                width: 75px;
                height: 32px;
                text-align: center;
                line-height: 31px;
                margin: 0 8px;
                display: inline-block;
                border-radius: 20px;
                border: 1px solid @color_edge;
                font-size: 13px;
            }
        }
    }
    .mercury {
        width: 100%;
        background: #fff;
        ul {
            width: 100%;
            text-align: left;
            li {
                width: 100%;
                height: 42px;
                border-bottom: 1px solid @color_edge;
                position: relative;
                .u1460 {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    left: 20px;
                    top: 8px;
                }
                span {
                    font-size: 13px;
                    position: absolute;
                    left: 55px;
                    top: 12px;
                }
                .u1447 {
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    right: 20px;
                    top: 10px;
                }
            }
            li:first-child {
                border-top: 1px solid @color_edge;
            }
        }
    }
    .fabulous {
        width: 100%;
        height: 45px;
        background: #fff;
        border-top: 1px solid @color_edge;
        position: fixed;
        left: 0px;
        bottom: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        div {
            width: 105px;
            height: 100%;
            position: relative;
            .mars {
                font-size: 20px;
                position: absolute;
                left: 0px;
                top: 12px;
            }
            span {
                font-size: 13px;
                position: absolute;
                right: 0px;
                top: 13px;
            }
        }
    }
}
</style>


