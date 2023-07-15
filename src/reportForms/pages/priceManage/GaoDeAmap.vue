<template>
  <div class="amap-page-container" :style="{height: amap_height}">
    <div class="navigation-bar">
      <div class="search-box">
        <van-search v-model="search_value" placeholder="请输入项目名称" maxlength="25" @search="vagueQuery" @input="inputEvent" @focus="focusEvent" @blur="blurEvent" @clear="clearEvent" left-icon="van-icon van-icon-search" show-action background="#062E41">
            <div slot="action" @click="vagueQuery" class="right-action">搜索</div>
            <div slot="left" @click="wherePlace"  class="where-place">
              <i class="el-icon-location"></i>{{where_place}}
            </div>
        </van-search>
      </div>
      <div class="search-tips" v-show="tip_active">
        <ul>
          <li v-for="(item,index) in tip_list" :key="index" @click="tipEvent(item)">{{item.project_name}}</li>
        </ul>
      </div>
      <van-area v-show="area_active" :value="city_value" title="请选择城市" :area-list="areaList" :columns-num="2" item-height="2.5rem" @cancel="cancelEvent" @confirm="confirmEvent" />
    </div>
    <div class="custom-geo" @click="geoCity()"></div>
    <el-amap vid="amapDemo3" :center="center" :zoom="zoom" class="amap-demo" :plugin="plugin" :events="mapEvents" :amap-manager="amapManager" ref="map">
      <el-amap-marker v-for="(item, index) in markers" :position="item.position" :vid="index" :key="index" :zIndex="item.z_index">
        <div :class="{'add-container': true,'headquarters': item.active}" @click="handler(item)">
          <div class="project-name">{{item.name}}</div>
          <button class="this-month">本月均价<span v-if="item.month_price">{{item.month_price|quantile}}万/㎡</span><span v-else>-</span></button>
          <span class="compare-month">比上月</span>
          <div class="percentage-i">
            <span>{{item.mom_rate}}%</span>
            <i class="el-icon-caret-top" style="color: #D0021B;" v-if="item.mom_rate>=0"></i>
            <i class="el-icon-caret-bottom" style="color: #6BCB04;" v-else></i>
          </div>
        </div>
      </el-amap-marker>
      <el-amap-circle-marker v-for="(marker,index) in round_dot" :key="index+999" :center="marker.center" :radius="marker.radius" :fill-color="marker.fillColor" :fill-opacity="marker.fillOpacity" :stroke-color="marker.strokeColor" :stroke-weight="marker.strokeWeight" :stroke-opacity="marker.strokeOpacity" :z-index="marker.zIndex" :events="marker.events"></el-amap-circle-marker>
    </el-amap>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
export default {
  data: function () {
    let self = this
    return {
      amap_height: '',
      zoom: 14.8, // [3,19]
      center: [113.21576, 22.93076],
      markers: [],
      where_place: '佛山市',
      areaList: {},
      area_active: false,
      area_save: [],
      search_value: '',
      city_value: '110100',
      round_dot: [
        {
          center: [0, 0],
          radius: 10,
          fillOpacity: 0.9,
          fillColor: 'rgba(208,2,27,0.9)',
          strokeColor: '#DC143C',
          strokeWeight: 75,
          strokeOpacity: 0.5,
          zIndex: 800,
          events: {
            click: () => {
              // alert('click')
            }
          }
        }
      ],
      plugin: [
        {
          pName: 'MapType',
          defaultType: 0,
          showTraffic: true, // 实时交通图层
          events: {
            init (o) {

            }
          }
        },
        {
          pName: 'ToolBar',
          events: {
            init (instance) {
              // console.log(instance)
            }
          }
        },
        {
          pName: 'Geolocation',
          events: {
            init (o) {
              // o 是高德地图定位插件实例
              if (self.$route.query.location) {
                // return
              }
              // o.getCurrentPosition((status, result) => {
              //   // console.log('zhuangtai==', status, result)
              //   if (result && result.position) {
              //     self.center = [result.position.lng, result.position.lat]
              //     self.zoom = 14.8
              //     self.$nextTick()
              //     alert('定位成功' + result.position.lng)
              //   } else {
              //     alert('定位失败，status=' + status + '错误信息=' + result.message)
              //   }
              // })

              // o.getCityInfo((status, result) => {
              //   // console.log('zhuangtai==', status, result)
              //   if (result && result.center) {
              //     self.center = result.center
              //     self.where_place = result.city
              //     self.zoom = 14.8
              //     sessionStorage.setItem('geoInfo', JSON.stringify(result))
              //     // self.$nextTick()
              //   } else {
              //     alert('定位失败，请开启应用定位权限！status=' + status + '，提示信息:' + result.message)
              //   }
              // })
            }
          }
        }
      ],
      mapEvents: {
        init (o) {
          o.setMapStyle('amap://styles/macaron') // 自定义样式:马卡龙
          if (!self.$route.query.location) {
            self.geoCity()
          }
        },
        zoomchange: (e) => {
          self.intermediary()
          // console.log(e)
        },
        zoomend: (e) => {
          // 获取当前缩放zoom值
          // console.log(e)
        },
        click: e => {
          self.intermediary()
          // alert('map clicked')
        },
        complete: e => {
          // console.log('fate', fate)
        }
      },
      amapManager: null,
      tip_active: false,
      tip_list: [],
      timer: null
    }
  },
  created () {
    this.initMap()
    this.getCity()
    this.getProject()
  },
  mounted () {
    this.design()
  },
  computed: {
    token () {
      return this.$store.state.token
    }
  },
  filters: {
    quantile (num) {
      if (num === '') {
        return ''
      }
      let chu = Number(num) / 10000
      let dian = chu.toFixed(2)
      return Number(dian).toLocaleString()
    }
  },
  methods: {
    interfaceError (value = '获取信息列表失败,请检查网络！') {
      this.$dialog.alert({
        title: '提醒',
        message: value
      })
    },
    initMap () {
      VueAMap.initAMapApiLoader({
        key: '',
        plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
        // 默认高德 sdk 版本为 1.4.4
        v: '1.4.4'
      })
      this.amapManager = new VueAMap.AMapManager()
    },
    geoCity () {
      let self = this
      self.intermediary()
      if (typeof cordova === 'undefined') {
        return
      }
      cordova.exec(function (success) {
        self.center = [success.longitude, success.latitude]
        self.round_dot[0].center = [success.longitude, success.latitude]
        self.where_place = success.city
        self.zoom = 14.8
        // alert(success.latitude + ',' + success.longitude + '\n' + success.address)
      }, function (error) {
        console.log('Error:' + error)
        self.defaultCity()
        self.$dialog.alert({
          title: '提醒',
          message: '定位失败，请确认手机定位是否开启！'
        })
      }, 'MideaMap', 'location', [])
      // let result = JSON.parse(sessionStorage.getItem('geoInfo'))
      // if (result && result.center) {
      //   this.center = result.center
      //   this.where_place = result.city
      //   this.zoom = 14.8
      // }
      // console.log('geo=', result)
    },
    defaultCity () {
      const self = this
      let param = {}
      this.$apihttp({
        url: '/role/selectDefaultCity',
        method: 'post',
        data: param
      }).then((res) => {
        self.center = [res.data[0].longitude, res.data[0].latitude]
        self.where_place = res.data[0].NAME
      }).catch(error => {
        console.log(error)
        self.interfaceError()
      })
    },
    handler (value) {
      this.$emit('receive', value.project_id)
    },
    design () {
      this.amap_height = this.$means.pxToRem(document.body.clientHeight) + 'rem'
      if (this.$route.query.place) {
        this.where_place = this.$route.query.place
        // this.center = [this.$route.query.project_long, this.$route.query.project_lat]
        this.center = this.decrypt(this.$route.query.project_long, this.$route.query.project_lat)
        this.contrastId(this.$route.query.project_id)
      }
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
        this.markers[i].active = false
        this.markers[i].z_index = 10
      }
      this.markers[index].z_index = 12
      this.markers[index].active = true
    },
    // 获取城市
    getCity () {
      const self = this
      let param = {

      }
      this.$apihttp({
        url: '/mktinformationoperativemenu/orgCityListFull',
        method: 'post',
        data: param
      }).then((res) => {
        if (res.data.length === 0) {
          return
        }
        let countFirst = '10'
        let countSecond = '00'
        let countThird = '00'
        let area = {
          province_list: {},
          city_list: {},
          county_list: {}
        }
        let list = res.data[0].org
        for (let i = 0; i < list.length; i++) {
          countFirst = parseInt(countFirst) + 1
          countSecond = '00'
          if (parseInt(countFirst) < 10) {
            countFirst = '0' + countFirst
          }
          let key1 = String(countFirst) + '0000'
          area.province_list[key1] = list[i].ORG_NAME
          for (let k = 0; k < list[i].org_city.length; k++) {
            countSecond = parseInt(countSecond) + 1
            if (parseInt(countSecond) < 10) {
              countSecond = '0' + countSecond
            }
            let key2 = String(countFirst) + String(countSecond) + String(countThird)
            area.city_list[key2] = list[i].org_city[k].CITY_NAME
            self.area_save.push({
              code: key2,
              project_long: list[i].org_city[k].project_long,
              project_lat: list[i].org_city[k].project_lat

            })
          }
        }
        self.areaList = area
      }).catch(error => {
        console.log(error)
        self.interfaceError()
      })
    },
    getProject () {
      const self = this
      let param = {

      }
      this.$apihttp({
        url: '/priceAnalysis/allCityPriceAnalysis',
        method: 'post',
        data: param
      }).then((res) => {
        if (!Array.isArray(res.data)) {
          self.interfaceError(JSON.stringify('token=' + self.$means.sessionToken()) + '------' + JSON.stringify(res.data))
          return
        } else if (res.data.length === 0) {
          return
        }
        self.markers = res.data.map(function (item) {
          let lv
          if (item.mom_rate) {
            lv = Number(Number(item.mom_rate).toFixed(1))
          } else {
            lv = ''
          }
          return {
            // position: [item.project_long, item.project_lat],
            position: self.decrypt(item.project_long, item.project_lat),
            name: item.project_SALEname,
            month_price: item.deal_PRICE,
            project_id: item.project_id,
            mom_rate: lv,
            z_index: 10,
            active: false
          }
        })
      }).catch(error => {
        console.log(error)
        self.interfaceError()
      })
    },
    // 百度坐标转高德(传入经度、纬度)
    decrypt (bdLng, bdLat) {
      // console.log('百度坐标', bdLng, bdLat)
      var xpi = Math.PI * 3000.0 / 180.0
      var x = bdLng - 0.0065
      var y = bdLat - 0.006
      var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * xpi)
      var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * xpi)
      var ggLng = z * Math.cos(theta)
      var ggLat = z * Math.sin(theta)
      // console.log('高德坐标', ggLng, ggLat)
      return [ggLng, ggLat]
    },
    vagueQuery () {
      const self = this
      self.area_active = false
      if (self.search_value === '') {
        return
      } else if (self.tip_active === true) {
        return
      }
      let param = {
        'projectName': self.search_value
        // 'projectName': '成都'
      }
      this.$apihttp({
        url: '/priceAnalysis/selectProjectByProjectName',
        method: 'post',
        data: param
      }).then((res) => {
        if (!Array.isArray(res.data)) {
          return
        } else if (Number(res.data.length) === 0) {
          self.tip_active = false
          self.interfaceError('查询无结果!')
          return
        } else {
          self.tip_active = true
        }
        // console.log('query+++===', res.data)
        self.tip_list = res.data
      }).catch(error => {
        console.log(error)
        // self.$toast.fail('查询无结果!')
      })
    },
    inputEvent (res) {
      // console.log('监听=', res)
      let self = this
      if (self.timer) {
        clearTimeout(self.timer)
      }
      self.timer = setTimeout(function () {
        // console.log('success==')
        self.vagueQuery()
      }, 1500)
    },
    focusEvent () {
      this.area_active = false
    },
    blurEvent (res) {
      // console.log('失去焦点=', res)
      this.tip_active = false
    },
    clearEvent () {
      this.tip_active = false
    },
    intermediary () {
      this.area_active = false
      this.tip_active = false
    },
    tipEvent (value) {
      this.tip_active = false
      // this.center = [value.project_long, value.project_lat]
      this.center = this.decrypt(value.project_long, value.project_lat)
      this.zoom = 11.2
      this.where_place = value.CITY_NAME
      this.contrastId(value.project_id)
    },
    wherePlace () {
      this.tip_active = false
      this.area_active = !this.area_active
    },
    cancelEvent () {
      this.area_active = false
    },
    confirmEvent (arr) {
      this.area_active = false
      this.where_place = arr[1].name
      this.zoom = 11.2
      for (let i = 0; i < this.area_save.length; i++) {
        if (this.area_save[i].code === arr[1].code) {
          // this.center = [this.area_save[i].project_long, this.area_save[i].project_lat]
          this.center = this.decrypt(this.area_save[i].project_long, this.area_save[i].project_lat)
          break
        }
      }
    }
  },
  destroyed () {
    this.amapManager._map.destroy()
  }
}
</script>

<style lang="less" scoped>
@import "./gaodeMap.less";
.amap-page-container {
  width: 100%;
  height: 750px;
  padding: 50px 0 0 0;
  color: black;
  -webkit-overflow-scrolling: touch;
  .navigation-bar {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 50px;
    left: 0px;
    z-index: 99;

    /deep/ .van-picker {
      width: 345px;
      position: absolute;
      top: 55px;
      left: 15px;
      touch-action: none;
      border-radius: 8px;
      overflow: hidden;
      .van-picker__toolbar {
        background-color: #062E41;
        height: 55px;
        .van-picker__cancel, .van-picker__confirm, .van-picker__title {
          font-size: 18px;
          color: #24E6F6;
        }
      }
      .van-picker__columns {
        .van-picker-column {
          background-color: #000000;
          .van-picker-column__item {
            font-size: 18px;
            color: #24E6F6;
          }
        }
        .van-picker__mask {
          background-image: linear-gradient(180deg,hsla(0,0%,0%,.9),hsla(0,0%,0%,.4)),linear-gradient(0deg,hsla(0,0%,0%,.9),hsla(0,0%,0%,.4));
        }
      }
    }
    .search-tips {
      width: 345px;
      height: 300px;
      border-radius: 8px;
      position: absolute;
      top: 55px;
      left: 15px;
      z-index: 99;
      background-color: #000000;
      border: 1px solid #24E6F6;
      overflow: scroll;
      ul {
        li {
          width: 100%;
          height: 20px;
          text-align: center;
          line-height: 20px;
          background: #062E41;
          margin-bottom: 1px;
          color: #24E6F6;
          font-size: 12px;
        }
      }
    }
    .search-box {
      width: 100%;
      height: 50px;
      background: none;
      padding: 9px 5px 0 15px;
      position: absolute;
      top: 0px;
      left: 0;
      .where-place {
        padding: 0 8px 0 8px;
        height: 35px;
        background-color: #062E41;
        text-align: center;
        line-height: 35px;
        color: #24E6F6;
        border-radius: 8px;
        font-size: 12px;
        i {
          margin-right: 3px;
          color: white;
        }
      }
      /deep/ .van-search {
        width: 345px;
        padding: 3px;
        float: left;
        border-radius: 8px;
        overflow: hidden;
        touch-action: none;
        .van-field__control {
          color: #323233;
        }
        .van-search__action {
          background-color: #062E41;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
      }
      .right-action {
        height: 35px;
        text-align: center;
        line-height: 35px;
        color: #24E6F6;
        font-size: 12px;
      }
    }

  }
  .add-container {
    width: 155px;
    height: 55px;
    background: rgba(42,130,228,0.8);
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
      top: 25px;
      right: 5px;
    }
    .percentage-i {
      position: absolute;
      top: 37px;
      right: 5px;
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
  }
  .headquarters {
    background: rgba(255,87,51,0.8);
  }
  .cengji {
    z-index: 90 !important;
  }
}
</style>
