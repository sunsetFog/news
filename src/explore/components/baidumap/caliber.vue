<template>
    <section>
        <el-dialog
            title="口径说明"
            :visible.sync="dialogVisible"
            width="320px">
            <div>
                <p>1、项目范围：全口径项目</p>
                <p>2、更新频率：每6小时</p>
                <p>3、业态分类:<br>①住宅：洋房、高层、小高层、超高层;<br>②别墅：叠拼别墅、独立别墅、双拼别墅、联排别墅；<br>③商办：商业、商办、酒店下所有二级业态；<br>④车位：普通车位（即只计产权车位）</p>
                <p>4、价格取值：<br>①本月均价：慧销售系统签约均价。<br>&nbsp;&nbsp;【如：住宅价格=当月住宅类业态总签约金额 / 签约面积，若当月该项目无签约则沿用上月销售均价）】<br>②经营方案版价格：经营计划书申报系统价格。<br>&nbsp;&nbsp;【如：住宅价格= （所有住宅类业态的价格 X 面积之和）/ 住宅类业态汇总面积】<br>③年度预算版价格：后台导入财务年度预算版审批数据<br>&nbsp;&nbsp;【如：住宅价格= 住宅类业态汇总签约金额 / 住宅类业态签约面积】</p>
            </div>
            <div slot="footer" class="dialog-footer">
                <img src="@static/picture/baidumap/tipfooter.png"/>
            </div>
        </el-dialog>
    </section>
</template>

<script>
export default {
    name: 'caliber',
    data() {
      return {
        dialogVisible: false
      }
    },
    methods: {
        open () {
            this.dialogVisible = true
        }
    }
}
</script>

<style lang="less" scoped>
    .dialog-footer {
        width: 100%;
        height: 70px;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
