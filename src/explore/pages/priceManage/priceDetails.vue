<template>
    <section id="priceDetails">
        <div class="header">
            <i class="el-icon-close" @click="closeMeans"></i>
            <p>{{project_name}}</p>
            <div><i class="el-icon-coin"></i>{{org_name}}<span class="is-question" @click="explain">口径说明</span></div>
        </div>
        <div class="main-content">
        <el-scrollbar style="height:100%;width:100%">
            <div class="price-dynamic">
                <div class="grid">
                <div class="grid-cell month-bidding">本月住宅均价</div>
                <div class="grid-cell col02" style="color: #898C8E">比上月</div>
                <div class="grid-cell col02" style="color: #898C8E">比去年</div>
                </div>
                <div class="grid">
                <div class="grid-cell" style="color: #0066CC;fontWeight:700">
                    <span v-if="material_list.deal_PRICE">{{material_list.deal_PRICE|quantile}}元/㎡</span>
                    <span v-else>暂无</span>
                </div>
                <div class="grid-cell" style="fontWeight:700">
                    <i class="el-icon-caret-top" style="color: #D0021B;" v-if="material_list.mom_rate>=0"></i>
                    <i class="el-icon-caret-bottom" style="color: #6BCB04;" v-else></i>
                    {{material_list.mom_rate}}%
                </div>
                <div class="grid-cell" style="fontWeight:700">
                    <i class="el-icon-caret-top" style="color: #D0021B;" v-if="material_list.yoy_RATE>=0"></i>
                    <i class="el-icon-caret-bottom" style="color: #6BCB04;" v-else></i>
                    {{material_list.yoy_RATE}}%
                </div>
                </div>
                <div class="footprint" style="marginTop: 5px;"></div>
                <div class="decontamination">
                    <ul>
                        <li>全周期累计去化率</li>
                        <li>{{material_list.REMOVAL_RATE_ALL}}%</li>
                        <li>{{material_list.REMOVAL_RATE_YTD}}%</li>
                        <li>本年累计去化率</li>
                    </ul>
                </div>
                <div class="footprint"></div>
            </div>
            <div class="house">
                <div :class="{'house-cell': true,'house-active': item.active}" v-for="(item,index) in house_list" :key="index" @click="houseEvent(index)">
                <span v-if="index === 0">{{item.name}}<i class="el-icon-arrow-down" v-if="!card_active"></i><i class="el-icon-arrow-up" v-else></i></span>
                <span v-else>{{item.name}}</span>
                </div>
            </div>
            <div class="card-box" v-show="card_active">
                <i class="el-icon-caret-top"></i>
                <button v-for="(item, index) in card_list" :key="index" @click="cardEvent(index)" :class="{'card-active': item.active}">{{item.name}}</button>
            </div>
            <div class="line-chart">
                <cloud-echart dynamic_width="375px" dynamic_height="380px" :option_list="option_01"></cloud-echart>
            </div>

        </el-scrollbar>
        </div>
    </section>
</template>

<script>
import drawing from './echart.js'
export default {
    name: 'priceDetails',
    data () {
        return {
            project_name: '',
            org_name: '',
            where_dynamic: '',
            material_list: {},
            house_list: [{ name: '住宅', active: true }, { name: '别墅', active: false }, { name: '商办', active: false }, { name: '车位', active: false }],
            xJson: [],
            monthSort: [],
            card_active: false,
            card_list: [{ name: '住宅均价', active: true }, { name: '洋房', active: false }, { name: '小高层', active: false }, { name: '高层', active: false }, { name: '超高层', active: false }],
            card_index: 0,
            option_01: {}
        }
    },
    created () {
        this.dateSort()
    },
    filters: {
    quantile (num) {
        let dian = num.toFixed(0)
        return Number(dian).toLocaleString()
        }
    },
    methods: {
        dateSort () {
            let nowTime = new Date()
            let current = nowTime.getMonth() + 1
            let saveArr = []
            this.monthSort = []
            for (let i = current; i < 12; i++) {
                saveArr.push(i + 1)
            }
            for (let i = 0; i < current; i++) {
                saveArr.push(i + 1)
            }
            for (let i = 0; i < 12; i++) {
                let item = i + 1
                if (item.toString().length === 1) {
                this.monthSort.push('0' + item)
                } else {
                this.monthSort.push(item.toString())
                }
                this.xJson.push(saveArr[i] + '月')
            }
            this.monthSort = this.monthSort.reverse()
        },
        explain () {
            this.$emit('elaborateEmit', '口径')
        },
        closeMeans () {
            this.$emit('elaborateEmit', '关闭')
        },
        houseEvent (index) {
            for (let i = 0; i < this.house_list.length; i++) {
                this.house_list[i].active = false
            }
            this.house_list[index].active = true
            if (index === 0) {
                if (this.card_active === false) {
                    this.house_list[0].name = '住宅'
                    this.cardEvent(this.card_index)
                } else {
                    if (this.card_index !== 0) {
                        this.house_list[0].name = this.card_list[this.card_index].name
                    }
                }
                this.card_active = !this.card_active
                return
            } else {
                if (this.card_index !== 0) {
                    this.house_list[0].name = this.card_list[this.card_index].name
                }
            }
            this.card_active = false
            let format = ''
            if (index === 3) {
                format = 'car'
            }
            this.option_01 = drawing.demo01(this, this.house_list[index].MANAGER_AVG, this.house_list[index].PLAN_AVG, this.house_list[index].ACT_AVG, this.house_list[index].AREA, this.xJson, format)
        },
        cardEvent (index) {
            this.card_index = index
            for (let i = 0; i < this.card_list.length; i++) {
                this.card_list[i].active = false
            }
            this.card_list[index].active = true
            this.option_01 = drawing.demo01(this, this.card_list[index].MANAGER_AVG, this.card_list[index].PLAN_AVG, this.card_list[index].ACT_AVG, this.card_list[index].AREA, this.xJson)
        },
        getJson (projectId) {
            const self = this
            let params = {
                'projectId': projectId,
                'priceType': 'ACT_AVG'
            }
            self.$apihttp({
                url: '/priceAnalysis/priceAnalysisList',
                method: 'post',
                data: params
            }).then((res) => {
                self.project_name = res.data[0].project_SALEname
                self.org_name = res.data[0].ORG_NAME
                self.material_list = res.data[0]
                self.where_dynamic = res.data[0].project_SALEname
                self.getEcharts(projectId)
            }).catch((err)=>{
                console.log('error', err)
            })
        },
        getEcharts (projectId) {
            const self = this
            let params = {
                'projectId': projectId
            }
            self.$apihttp({
                url: '/priceAnalysis/priceAnalysisTrendData',
                method: 'post',
                data: params
            }).then((res) => {
                self.emptyLine()
                let container = res.data
                for (let i = 0; i < container.length; i++) {
                self.loadList(container, i, 'MANAGER_AVG')
                self.loadList(container, i, 'PLAN_AVG')
                self.loadList(container, i, 'ACT_AVG')
                self.loadList(container, i, 'AREA')
                }
                self.option_01 = drawing.demo01(self, self.house_list[0].MANAGER_AVG, self.house_list[0].PLAN_AVG, self.house_list[0].ACT_AVG, self.house_list[0].AREA, self.xJson)
                // console.log('shuzu', self.house_list)
            }).catch((err)=>{
                console.log('error', err)
            })
        },
        emptyLine () {
            let arr = ['MANAGER_AVG', 'PLAN_AVG', 'ACT_AVG', 'AREA']
            for (let i = 0; i < arr.length; i++) {
                for (let k = 0; k < this.house_list.length; k++) {
                    this.house_list[k][arr[i]] = []
                }
                for (let j = 0; j < this.card_list.length; j++) {
                    this.card_list[j][arr[i]] = []
                }
            }
        },
        loadList (container, i, sign) {
            let self = this
            if (container[i].price_type === sign && container[i].sale_product_name === '住宅') {
                self.house_list[0][sign] = self.combination(container, i)
                self.card_list[0][sign] = self.combination(container, i)
            }
            if (container[i].price_type === sign && container[i].sale_product_name === '别墅') {
                self.house_list[1][sign] = self.combination(container, i)
            }
            if (container[i].price_type === sign && container[i].sale_product_name === '商办') {
                self.house_list[2][sign] = self.combination(container, i)
            }
            if (container[i].price_type === sign && container[i].sale_product_name === '车位') {
                self.house_list[3][sign] = self.combination(container, i)
            }
            if (container[i].price_type === sign && container[i].sale_product_name === '洋房') {
                self.card_list[1][sign] = self.combination(container, i)
            }
            if (container[i].price_type === sign && container[i].sale_product_name === '小高层') {
                self.card_list[2][sign] = self.combination(container, i)
            }
            if (container[i].price_type === sign && container[i].sale_product_name === '高层') {
                self.card_list[3][sign] = self.combination(container, i)
            }
            if (container[i].price_type === sign && container[i].sale_product_name === '超高层') {
                self.card_list[4][sign] = self.combination(container, i)
            }
        },
        combination (container, i) {
            let emptyArr = []
            emptyArr.push(
                container[i]['deal_price_' + this.monthSort[0]],
                container[i]['deal_price_' + this.monthSort[1]],
                container[i]['deal_price_' + this.monthSort[2]],
                container[i]['deal_price_' + this.monthSort[3]],
                container[i]['deal_price_' + this.monthSort[4]],
                container[i]['deal_price_' + this.monthSort[5]],
                container[i]['deal_price_' + this.monthSort[6]],
                container[i]['deal_price_' + this.monthSort[7]],
                container[i]['deal_price_' + this.monthSort[8]],
                container[i]['deal_price_' + this.monthSort[9]],
                container[i]['deal_price_' + this.monthSort[10]],
                container[i]['deal_price_' + this.monthSort[11]]
            )
            return emptyArr
        }
    }
}
</script>

<style lang="less" scoped>
#priceDetails {
    width: 100%;
    background: rgba(255, 255, 255, 1);
    .header {
        width: 100%;
        height: 55px;
        background-color: #3385FF;
        position: relative;
        text-align: left;
        .el-icon-close {
            width: 16px;
            height: 16px;
            cursor: pointer;
            position: absolute;
            right: 10px;
            top: 10px;
        }
        p {
            width: 70%;
            height: 24px;
            line-height: 24px;
            font-size: 13px;
            font-weight: 700;
            position: absolute;
            left: 10px;
            top: 5px; 
        }
        div {
            width: 70%;
            height: 24px;
            line-height: 24px;
            font-size: 13px;
            position: absolute;
            left: 10px;
            top: 28px;
            .el-icon-coin {
                font-size: 13px;
                margin-right: 5px;
            }
            .is-question {
                font-size: 10px;
                margin-left: 25px;
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
    .main-content {
        width: 100%;
        height: 500px;
        .price-dynamic {
            width: 100%;
            padding: 8px 30px 5px 30px;
            box-sizing: border-box;
            .month-bidding {
                text-align: left !important;
                font-size: 14px !important;
            }
            .col02 {
                text-align: left !important;
                text-indent: 40px;
            }
            .grid {
                display: flex;
                .grid-cell {
                    flex: 1;
                    height: 25px;
                    line-height: 25px;
                    text-align: center;
                    font-size: 13px;
                    color: black;
                    i {
                        margin-right: 4px;
                    }
                }
            }
            .footprint {
                width: 100%;
                height: 1px;
                border-bottom: 1px solid #ebebeb;
            }
            .decontamination {
                width: 100%;
                height: 40px;
                line-height: 40px;
                color: black;
                font-size: 13px;
                ul {
                    width: 100%;
                    height: 100%;
                    li {
                        float: left;
                    }
                    li:nth-of-type(1) {
                        margin-right: 10px;
                    }
                    li:nth-of-type(2) {
                        color: #0066CC;
                        font-weight: 700;
                    }
                    li:nth-of-type(3) {
                        float: right;
                        color: #0066CC;
                        font-weight: 700;
                    }
                    li:nth-of-type(4) {
                        float: right;
                        margin-right: 10px;
                    }
                }
            }
        }
        .house {
            display: flex;
            padding: 0 20px;
            box-sizing: border-box;
            justify-content: space-between;
            margin: 5px 0 5px 0;
            position: relative;
            .house-cell {
                flex: 0 0 20%;
                height: 32px;
                text-align: center;
                line-height: 28px;
                cursor: pointer;
                background: rgba(242, 245, 247, 1);
                color: #849AB5;
                border-radius: 4px;
                font-size: 13px;
                position: relative;
                i {
                font-size: 13px;
                position: absolute;
                left: 24px;
                bottom: -1px;
                }
            }
            .house-cell:nth-of-type(1) {
                -line-height: 24px;
            }
            .house-active{
                background: #3399cc;
                color: #fff;
            }
        }
        .card-box {
            width: 100%;
            height: 62px;
            background-color: rgba(250, 250, 250, 1);
            box-shadow: 0px 0px 1px 0 #ccc;
            position: relative;
            .card-active {
                background: #3399cc;
                color: #fff;
            }
            i {
                font-size: 20px;
                color: #ccc;
                position: absolute;
                left: 40.5px;
                top: -14px;
            }
            button {
                border: none;
                outline: none;
                width: 55px;
                height: 32px;
                font-size: 13px;
                cursor: pointer;
                background: rgba(242, 245, 247, 1);
                color: #849AB5;
                border-radius: 4px;
            }
            button:nth-of-type(1) {
                width: 75px;
                position: absolute;
                left: 13px;
                top: 15px;
            }
            button:nth-of-type(2) {
                position: absolute;
                left: 101px;
                top: 15px;
            }
            button:nth-of-type(3) {
                position: absolute;
                left: 169px;
                top: 15px;
            }
            button:nth-of-type(4) {
                position: absolute;
                left: 237px;
                top: 15px;
            }
            button:nth-of-type(5) {
                position: absolute;
                left: 305px;
                top: 15px;
            }
        }
        .line-chart {
            width: 100%;
            min-height: 385px;
            padding: 5px 0 0 0;
            box-sizing: border-box;
        }
    }
}
</style>
