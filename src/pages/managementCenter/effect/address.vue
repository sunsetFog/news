<template>
    <!-- 在main.js导入
    import YDUI from 'vue-ydui';
    import 'vue-ydui/dist/ydui.rem.css';
    import 'vue-ydui/dist/ydui.px.css';
    import 'vue-ydui/dist/ydui.base.css';
    Vue.use(YDUI); -->
    <!-- 请在全局样式加入
    #address{
        .yd-cityselect-title{
            font-size: 1.5rem;
        }    
    } -->
    <div id="address">
        <yd-cell-group>
                <yd-cell-item arrow>
                    <span slot="left">所在地区：</span>
                    <input slot="right" type="text" @click.stop="showAddress = true" v-model="addressName" readonly placeholder="请选择收货地址">
                </yd-cell-item>
                <yd-cell-item arrow v-if="isShowStreet">
                     <span slot="left">街道：</span>
					 <input slot="right" type="text" @click.stop="streetTip" v-model="streetName" readonly placeholder="请选择街道">
                </yd-cell-item>
        </yd-cell-group>
        <yd-cityselect v-model="showAddress" :callback="result1" :items="district"></yd-cityselect>



        <yd-popup v-model="streetShow" position="right" width="100%">
			<yd-navbar title="选择街道" height="2.5rem" fontsize="14px" fixed>
				<span slot="left">
					<yd-navbar-back-icon @click.native="streetShow = false"></yd-navbar-back-icon>
				</span>
			</yd-navbar>
			<div style="clear:both;margin-top:2.5rem;"></div>
			<div v-for="item in districtVal">
			<yd-cell-item arrow @click.native="streetConfirm(item.areaname)">
				<span slot="left">{{item.areaname}}</span>
			</yd-cell-item>
			</div>
        </yd-popup>

    </div> 
</template>

<script>
    /* 前提是已经安装了 ydui-district */
    // npm install ydui-district --save
    //npm install vue-ydui --save
    import District from 'ydui-district/dist/jd_province_city_area_id';

    export default {
        data() {
            return {
                showAddress: true,
                addressName: '',
                district: District,
                streetName: '',
                isShowStreet: true,
                streetShow: false,
                districtVal: [{"id":440983001,
                                "areaname":"东镇街道",
                                "parentid":440983,
                                "level":4}]
            }
        },
        methods: {
            result1(ret) {
                this.addressName = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
            },
            //街道提示
            streetTip() {
                if (this.addressName == '') {
                    this.$message.error('请先选择所在地区');
                    return;
                }
                this.streetShow = true;
            },
            //街道选择
            streetConfirm(name) {
                this.streetName = name;
                this.streetShow = false;
            }
        }
    }
</script>

<style lang="less" scoped>
#address{
    
}
</style>

