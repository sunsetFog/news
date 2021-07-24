<template>
    <section id="price-baidumap" :style="{height: set_height}">
        <div class="container">
            <div class="container-right">
                <price-map @mapEmit="mapEmit" ref="map" :take_list="take_list"></price-map>
                <el-input placeholder="请输入全国任意项目名称" v-model="search_value" maxlength="20" class="input-with-select" @input="inputEvent">
                    <div class="city-value" slot="prepend"><i class="el-icon-location"></i>{{city_name}}
                        <el-cascader
                            :show-all-levels="false"
                            v-model="city_value"
                            placeholder="请选择城市"
                            :options="areaList"
                            @change="handleChange">
                        </el-cascader>
                    </div>
                    <div class="search-btn" slot="append" @click="vagueQuery()">搜索</div>
                </el-input>
                <div class="fold-box" @click="foldBox">
                    {{list_word}}<span style="fontSize: 14px;fontWeight: 700;margin: 0 5px;">{{prompt_data.length}}</span>个
                    <i class="el-icon-arrow-down" v-if="!prompt_active"></i>
                    <i class="el-icon-arrow-up" v-else></i>
                </div>
                <div class="exhibition" v-show="prompt_active" :style="{height: (prompt_data.length+1)*30<375?(prompt_data.length+1)*30+'px':375+'px'}">
                    <el-scrollbar style="height:100%">
                        <ul>
                            <li v-for="(item,index) in prompt_data" :key="index" :class="{'tip-active': item.active}" @click="tipChoice(item, index)"><i class="el-icon-location-information"></i>{{item.project_name}}</li>
                        </ul>
                    </el-scrollbar>
                </div>
                <div class="details-page" ref="box"  v-show="details">
                    <price-details @elaborateEmit="elaborateEmit" ref="explain"></price-details>
                </div>
            </div>
        </div>
        <caliber ref="caliber"></caliber>
    </section>
</template>

<script>
import PriceMap from '@/explore/components/baidumap/priceMap'
import priceDetails from './priceDetails'
import caliber from '@/explore/components/baidumap/caliber'
export default {
    name: 'PriceManage',
    data () {
        return {
            set_height: document.documentElement.clientHeight + 'px',
            title: '价格地图',
            substance: '',
            details: false,
            search_value: '',
            city_value: [],
            city_name: '',
            city_id: '',
            prompt_active: true,
            prompt_data: [],
            list_word: '',
            areaList: [],
            timer: null,
            take_list: {}
        }
    },
    created () {
        this.jurisdiction()
        this.getCity()
    },
    mounted () {
        this.dragBox()
    },
    methods: {
        jurisdiction () {
            let self = this;
            let json = {}
            self.$apihttp({
                url: '/role/selectDefaultCity',
                method: 'post',
                data: json
            }).then((res) => {
                self.city_id = res.data[0].CODE
                self.city_name = res.data[0].NAME
                // self.take_list = { lng: res.data[0].longitude, lat: res.data[0].latitude }
                self.byCity()
            }).catch((err)=>{
                console.log('error', err)
            })
        },
        dragBox () {
            //获取元素
            var dv = this.$refs.box
            var x = 0;
            var y = 0;
            var l = 0;
            var t = 0;
            var isDown = false;
            //鼠标按下事件
            dv.onmousedown = function(e) {
                //获取x坐标和y坐标
                x = e.clientX;
                y = e.clientY;

                //获取左部和顶部的偏移量
                l = dv.offsetLeft;
                t = dv.offsetTop;
                //开关打开
                isDown = true;
                //设置样式  
                dv.style.cursor = 'move';
            }
            //鼠标移动
            window.onmousemove = function(e) {
                if (isDown == false) {
                    return;
                }
                //获取x和y
                var nx = e.clientX;
                var ny = e.clientY;
                //计算移动后的左偏移量和顶部的偏移量
                var nl = nx - (x - l);
                var nt = ny - (y - t);

                dv.style.left = nl + 'px';
                dv.style.top = nt + 'px';
            }
            //鼠标抬起事件
            dv.onmouseup = function() {
                //开关关闭
                isDown = false;
                dv.style.cursor = 'default';
            }
        },
        getCity () {
            let self = this;
            let json = {}
            self.$apihttp({
                url: '/mktinformationoperativemenu/orgCityListFull',
                method: 'post',
                data: json
            }).then((res) => {
                let list = res.data[0].org
                self.areaList = []
                for (let i = 0; i < list.length; i++) {
                    self.areaList.push({
                        value: list[i].BUID + i,
                        label: list[i].ORG_NAME,
                        children: []
                    })
                    for (let k = 0; k < list[i].org_city.length; k++) {
                        self.areaList[i].children.push({
                            value: list[i].org_city[k].BUID + i + k,
                            label: list[i].org_city[k].CITY_NAME,
                            project_long: list[i].org_city[k].project_long,
                            project_lat: list[i].org_city[k].project_lat,
                            city_id: list[i].org_city[k].CITY_ID
                        })
                    }
                }
                console.log('城市数据：', self.areaList)
            }).catch((err)=>{
                console.log('error', err)
            })
        },
        vagueQuery () {
            let self = this;
            let json = {
                projectName: self.search_value
            }
            self.$apihttp({
                url: '/priceAnalysis/selectProjectByProjectName',
                method: 'post',
                data: json
            }).then((res) => {
                self.prompt_data = []
                self.prompt_active = true
                self.list_word = '共搜索出项目'
                for (let i = 0; i < res.data.length; i++) {
                    self.prompt_data.push({
                        project_id: res.data[i].project_id,
                        project_name: res.data[i].project_name,
                        CITY_NAME: res.data[i].CITY_NAME,
                        project_long: res.data[i].project_long,
                        project_lat: res.data[i].project_lat,
                        active: false
                    })
                }
                console.log('搜索数据：', self.prompt_data)
            }).catch((err)=>{
                console.log('error', err)
            })
        },
        byCity () {
            let self = this;
            let json = {
                cityId: self.city_id
            }
            self.$apihttp({
                url: '/priceAnalysis/selectProjectByCity',
                method: 'post',
                data: json
            }).then((res) => {
                self.prompt_data = []
                self.prompt_active = true
                self.list_word = '该城市共有项目'
                for (let i = 0; i < res.data.length; i++) {
                    self.prompt_data.push({
                        project_id: res.data[i].project_id,
                        project_name: res.data[i].project_SALEname,
                        CITY_NAME: res.data[i].CITY_NAME,
                        project_long: res.data[i].project_long,
                        project_lat: res.data[i].project_lat,
                        active: false
                    })
                }
                console.log('城市项目：', self.prompt_data)
            }).catch((err)=>{
                console.log('error', err)
            })
        },
        foldBox () {
            this.prompt_active = !this.prompt_active
        },
        inputEvent (res) {
            let self = this
            if (self.timer) {
                clearTimeout(self.timer)
            }
            self.timer = setTimeout(function () {
                self.vagueQuery()
            }, 1500)
        },
        mapEmit (value) {
            if (value.sign === '详情页') {
                this.details = true;
                this.$refs.explain.getJson(value.id)
            } else if (value.sign === '定位城市') {
                this.city_name = value.id
            }
        },
        elaborateEmit (value) {
            if (value === '关闭') {
                this.details = false
            } else if (value === '口径') {
                this.$refs.caliber.open()
            }
        },
        tipChoice (item, index) {
            for (let i = 0; i < this.prompt_data.length; i++) {
                this.prompt_data[i].active = false
            }
            this.prompt_data[index].active = true
            this.city_name = this.prompt_data[index].CITY_NAME
            this.$refs.map.contrastId(item.project_id)
            this.take_list = { lng: item.project_long, lat: item.project_lat }
            this.details = true
            this.$refs.explain.getJson(item.project_id)
        },
        handleChange(value) {
            for (let i = 0; i < this.areaList.length; i++) {
                if (this.areaList[i].value === value[0]) {
                    for (let k = 0; k < this.areaList[i].children.length; k++) {
                        if (this.areaList[i].children[k].value === value[1]) {
                            this.city_name = this.areaList[i].children[k].label
                            this.take_list = { lng: this.areaList[i].children[k].project_long, lat: this.areaList[i].children[k].project_lat }
                            this.city_id = this.areaList[i].children[k].city_id
                            this.byCity()
                            break
                        }
                    }
                }
            }
            console.log('change===', value, this.city_name)
        }
    },
    destroyed () {
    },
    components: {
        PriceMap,
        priceDetails,
        caliber
    }
}
</script>

<style lang="less" scoped>
.price-baidumap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .container {
        width: 100%;
        height: 100%;
        .container-right {
            width: 100%;
            height: 100%;
            float: right;
            position: relative;
            /deep/ .input-with-select {
                width: 350px;
                padding: 5px 5px 5px 5px;
                box-sizing: border-box;
                border-radius: 8px;
                background-color: #3385FF;
                position: absolute;
                top: 10px;
                left: 15px;
                z-index: 2;
                .el-input-group__prepend {
                    padding: 0 10px;
                    height: 30px;
                    border: none;
                    background-color: #3385FF;
                    .city-value {
                        min-width: 60px;
                        height: 30px;
                        text-align: center;
                        line-height: 30px;
                        position: relative;
                        color: #fff;
                        cursor: pointer;
                        i {
                            margin-right: 3px;
                            color: #fff;
                        }
                        .el-cascader {
                            width: 100%;
                            height: 30px;
                            line-height: 30px;
                            position: absolute;
                            left: 0px;
                            top: 0px;
                            .el-input {
                                width: 100%;
                                display: none;
                                .el-input__icon {
                                    line-height: 30px;
                                }
                            }
                        }
                    }
                }
                .el-input__inner {
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                }
                .el-input-group__append {
                    width: 50px;
                    border: none;
                    height: 30px;
                    padding: 0;
                    background-color: #3385FF;
                    color: #fff;
                    .search-btn {
                        width: 100%;
                        height: 30px;
                        text-align: center;
                        line-height: 30px;
                        cursor: pointer;
                    }
                }
            }
            .fold-box {
                width: 350px;
                height: 30px;
                line-height: 30px;
                text-align: left;
                text-indent: 10px;
                background-color: #3385FF;
                border-radius: 8px;
                color: #fff;
                font-size: 13px;
                cursor: pointer;
                overflow: hidden;
                position: absolute;
                left: 15px;
                top: 60px;
                i {
                    position: absolute;
                    right: 10px;
                    top: 8px;
                    z-index: 10;
                }
            }
            .exhibition {
                width: 350px;
                -height: 375px;
                border: solid 1px #ccc;
                box-shadow: 1px 1px 5px 0 #ccc;
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.6);
                position: absolute;
                left: 15px;
                top: 90px;
                ul {
                    width: 100%;
                    text-align: left;
                    color: black;
                    li {
                        width: 100%;
                        height: 30px;
                        line-height: 30px;
                        background: rgba(255, 255, 255, 0.8);
                        font-size: 12px;
                        cursor: pointer;
                        i {
                            margin: 0 5px 0 5px;
                        }
                    }
                    li:hover {
                        background: #3385FF;
                        color: #fff;
                    }
                    .tip-active {
                        background: #3385FF;
                        color: #fff;
                        font-weight: 700;
                    }
                }
            }
            .details-page {
                width: 378px;
                height: 557px;
                background-color: #fff;
                border: 1px solid #ccc;
                color: #fff;
                position: absolute;
                right: 10px;
                bottom: 10px;
                z-index: 10;
            }
        }
    }
}
</style>
