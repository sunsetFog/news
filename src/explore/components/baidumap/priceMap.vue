<template>
    <section class="component-baidu-map" ref="wheel">
        <div class="satellite-map" @click="mapType">{{map_type}}</div>
        <div class="custom-plus" @click="customPlus">+</div>
        <div class="custom-reduce" @click="customReduce">-</div>
        <baidu-map class="map" :center="center" :zoom="zoom" @ready="readyMap" @click="triggerMap" @movestart="triggerMap" :scroll-wheel-zoom="false">
            <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT" :offset="{width:20,height:10}"></bm-city-list> -->
            <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT" :offset="{width:80,height:15}"></bm-scale>
            <!-- <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_LEFT" :offset="{width:20,height:50}"></bm-navigation> -->
            <!-- <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_BOTTOM_LEFT" :offset="{width:20,height:285}"></bm-map-type> -->
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_LEFT" :showAddressBar="false" :autoLocation="false" :offset="{width:20,height:114}" @locationSuccess="locationSuccess" @locationError="locationError"></bm-geolocation>
            <bm-label v-for="(item, index) in markers" :key="index" :content="item.content" :position="{ lng: item.lng, lat: item.lat }" :labelStyle="{border: 'none',backgroundColor: 'none',borderRadius: '8px',background: item.active,zIndex: item.z_index}" :zIndex="item.z_index" title="点击查看项目详情" @click="spriteEvent(item)"/>
        </baidu-map>
    </section>
</template>

<script>
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'CFFiHT5dejkMz0DEVwGZCac1heaxOwUV'
})
export default {
    name: 'priceMap', // baiduMap
    data () {
        return {
            center: {lng: 113.21576, lat: 22.93076},
            zoom: 11.2,
            map_type: '卫星',
            markers: [],
            mapExample: null,
            newMap: null,
            // locationIcon: {
            //     url: require('@static/picture/baidumap/geo.png'),
            //     size: {width: 40, height: 40},
            //     opts: {anchor: {width: 40, height: 40}}
            // },
            // mapStyle: { // 个性化
            //     styleJson:[{
            //         "featureType": "all",
            //         "elementType": "geometry",
            //         "stylers": {
            //             "hue": "#007fff",
            //             "saturation": 89
            //         }
            //     }, {
            //         "featureType": "water",
            //         "elementType": "all",
            //         "stylers": {
            //             "color": "#ffffff"
            //         }
            //     }]
            // },
            mapStyle: {
                features: ["road","building","water","land"],//隐藏地图上的"poi",
                style : 'grayscale',
            }
        }
    },
    created () {
        this.getJson()
    },
    mounted () {
        this.mouseWheel()
    },
    props: {
        take_list: {
            type: Object,
            default: () => {}
        }
    },
    watch: {
        take_list: {
            handler: function (cur) {
                this.cityCenter(cur.lng, cur.lat)
            },
            deep: true
        }
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
                self.center = { lng: res.data[0].longitude, lat: res.data[0].latitude }
            }).catch((err)=>{
                console.log('error', err)
            })
        },
        locationSuccess ({point, AddressComponent, marker}) {
            let self = this
            console.log('daidu==', point)
            self.newMap.getLocation(point, function (rs) {
                let addComp = rs.addressComponents;
                let province = addComp.province;
                let city = addComp.city;
                let area = addComp.district;
                self.$emit('mapEmit', { sign: '定位城市', id: city });
                self.$message.success('定位成功！')
                console.log('省:' + province + "---市:" + city + "---区:" + area);
            });
        },
        locationError ({StatusCode}) {
            this.$message.error('定位失败！')
        },
        mapType () {
            if (this.map_type === '卫星') {
                this.map_type = '地图'
                this.mapExample.setMapType(BMAP_HYBRID_MAP)
            } else {
                this.map_type = '卫星'
                this.mapExample.setMapType(BMAP_NORMAL_MAP)
            }
        },
        customPlus () {
            if (this.zoom < 18.2) {
                this.zoom = this.zoom + 1
            }
            // console.log('self.zoom+=', this.zoom)
        },
        customReduce () {
            if (this.zoom > 3.2) {
                this.zoom = this.zoom - 1
            }
            // console.log('self.zoom-=', this.zoom)
        },
        mouseWheel () {
            let self = this
            self.$refs.wheel.onmousewheel =  function(event){
                let ev = event || window.event;//兼容性处理
                ev.preventDefault();//阻止浏览器默认动作,滚动条就不会下滑了
                // console.log('wheel数值=', ev.wheelDelta)
                if(ev.wheelDelta > 0) {//滚轮向上滚动
                    self.customPlus()
                }else if(ev.wheelDelta < 0) {//滚轮向下滚轮
                    self.customReduce()
                }
            }
        },
        quantile (num) {
            if (num === '') {
                return ''
            }
            let chu = Number(num) / 10000
            let dian = chu.toFixed(2)
            return Number(dian).toLocaleString()
        },
        getJson () {
            let self = this;
            let json = {}
            self.$apihttp({
                url: '/priceAnalysis/allCityPriceAnalysis',
                method: 'post',
                data: json
            }).then((res) => {
                console.log('success==', res)
                self.markers = res.data.map(function (item) {
                return {
                    position: { lng: item.project_long, lat: item.project_lat },
                    lng: item.project_long,
                    lat: item.project_lat,
                    name: item.project_SALEname,
                    month_price: item.deal_PRICE,
                    increase: item.mom_rate,
                    project_id: item.project_id,
                    mom_rate: Number(Number(item.mom_rate).toFixed(1)),
                    active: 'rgba(42,130,228,0.8)',
                    z_index: -10,
                    text: `<div>喀喀喀<span>6666${item.project_SALEname}</span></div>`,
                    content: ''
                }
                })
                for (let i = 0; i < self.markers.length; i++) {
                    let line
                    if (self.markers[i].month_price) {
                        line = '<span>' + self.quantile(self.markers[i].month_price) + '万/㎡</span>'
                    } else {
                        line = '<span>-</span>'
                    }
                    if (self.markers[i].mom_rate >= 0) {
                        self.markers[i].content = `
                        <div class="add-container">
                            <div class="project-name">${self.markers[i].name}</div>
                            <button class="this-month">本月均价${line}</button>
                            <span class="compare-month">比上月</span>
                            <div class="percentage-i">
                            <span>${self.markers[i].mom_rate}%</span>
                            <i class="el-icon-caret-top" style="color: #D0021B;"></i>
                            </div>
                        </div>
                        `
                    } else {
                        self.markers[i].content = `
                        <div class="add-container">
                            <div class="project-name">${self.markers[i].name}</div>
                            <button class="this-month">本月均价${line}</button>
                            <span class="compare-month">比上月</span>
                            <div class="percentage-i">
                            <span>${self.markers[i].mom_rate}%</span>
                            <i class="el-icon-caret-bottom" style="color: #6BCB04;"></i>
                            </div>
                        </div>
                        `
                    }
                }
                console.log('项目数据：', self.markers)
            }).catch((err)=>{
                console.log('error', err)
            })
        },
        contrastId (projectId) {
            for (let i = 0; i < this.markers.length; i++) {
                if (this.markers[i].project_id === projectId) {
                this.emptyActive(i)
                }
            }
        },
        emptyActive (index) {
            for (let i = 0; i < this.markers.length; i++) {
                this.markers[i].active = 'rgba(42,130,228,0.8)'
                this.markers[i].z_index = -10
            }
            this.markers[index].z_index = 10
            this.markers[index].active = 'rgba(255,87,51,0.8)'
        },
        spriteEvent (item) {
            this.center = { lng: item.lng, lat: item.lat };
            this.$emit('mapEmit', { sign: '详情页', id: item.project_id });
            this.contrastId(item.project_id);
        },
        triggerMap () {

        },
        cityCenter (lng, lat) {
            this.center = { lng: lng, lat: lat }
            this.zoom = 11.2
        },
        readyMap ({BMap, map}) {
            let self = this
            self.mapExample = map
            self.newMap = new BMap.Geocoder();
            self.jurisdiction()
            // var geolocation = new BMap.Geolocation()
            // geolocation.getCurrentPosition(function (r) {
            //     console.log('city===8', r.point, this)
            //     if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            //         self.newMap.getLocation(r.point, function (rs) {
            //             var addComp = rs.addressComponents;
            //             var province = addComp.province;
            //             var city = addComp.city;
            //             var area = addComp.district;
            //             console.log('省:' + province + "---市:" + city + "---区:" + area);
    
            //         });
            //     }
            //     else {
            //         alert("定位失败");
            //     }
            // }, { enableHighAccuracy: true });
            
        }
    },
    destroyed () {
        // this.mapExample.unload()
    }
}
</script>

<style lang="less" scoped>
.component-baidu-map {
    width: 100%;
    height: 100%;
    .custom-plus, .custom-reduce, .satellite-map{
        width: 32px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        font-size: 22px;
        color: #5383E9;
        background: rgba(255, 255, 255, 1);
        cursor: pointer;
        border-radius: 4px;
        border: solid 1px #ccc;
        box-shadow: 1px 1px 10px 0 #ccc;
        position: absolute;
        left: 20px;
        z-index: 10;
    }
    .satellite-map {
        font-size: 12px;
        bottom: 156px;
        font-weight: 700;
    }
    .custom-plus {
        bottom: 72px;
    }
    .custom-reduce {
        bottom: 30px;
        font-weight: 600;
    }
    .map {
        width: 100%;
        height: 100%;
    }
    /deep/ .add-container {
        width: 155px;
        height: 55px;
        -background: rgba(42,130,228,0.8);
        border-radius: 8px;
        position: relative;
        overflow: hidden;
        .project-name {
            width: 100%;
            height: 25px;
            text-align: center;
            line-height: 25px;
            color: white;
            font-size: 12px;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
        }
        .this-month {
            width: 100px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            color: #5E92C5;
            background: white;
            border-radius: 8px;
            font-size: 10px;
            border: none;
            outline: none;
            overflow: hidden;
            position: absolute;
            top: 28px;
            left: 5px;
        }
        .compare-month {
            color: white;
            font-size: 10px;
            position: absolute;
            top: 24px;
            right: 5px;
        }
        .percentage-i {
            position: absolute;
            top: 38px;
            right: 2px;
            i {
                font-size: 18px;
                float: right;
            }
            span {
                color: white;
                font-size: 10px;
                float: right;
                padding: 3px 0 0 0;
            }
        }
        .percentage-span {
            color: white;
            font-size: 10px;
            position: absolute;
            top: 40px;
            right: 5px;
        }
    }
}
</style>
