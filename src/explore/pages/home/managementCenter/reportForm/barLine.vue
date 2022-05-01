<template>
    <section id="barLine">
        <cloud-echart
            dynamic_width="375px"
            dynamic_height="380px"
            :option_list="option_01"
        ></cloud-echart>
    </section>
</template>

<script>
import drawing from "./echart.js";
export default {
    name: "barLine",
    mixins: [ drawing ],
    data() {
        return {
        xJson: [],
        monthSort: [],
        house_list: [
            {
            name: "住宅",
            active: true,
            ACT_AVG: [
                23854.5,
                24896.03,
                24442.38,
                23659,
                24213.6,
                24491.81,
                25154.85,
                24748.07,
                25350.34,
                25763.52,
                25344.79,
                25093.68,
            ],
            AREA: [
                9025.5,
                966.81,
                1488.42,
                2984.22,
                5364.77,
                5200.86,
                5450.5,
                4798.81,
                5528.81,
                5431.1,
                5459.62,
                1160.9,
            ],
            MANAGER_AVG: [
                25452,
                25452,
                25452,
                25452,
                25452,
                25452,
                25452,
                25452,
                25452,
                25452,
                25452,
                25452,
            ],
            PLAN_AVG: [
                23804.86,
                23804.86,
                23804.86,
                23804.86,
                23804.86,
                23804.86,
                23804.86,
                23804.86,
                23804.86,
                23804.86,
                23804.86,
                23804.86,
            ],
            },
        ],
        option_01: {},
        };
    },
    created () {
        this.dateSort();
    },
    mounted () {
        this.option_01 = this.demo01(
            this.house_list[0].MANAGER_AVG,
            this.house_list[0].PLAN_AVG,
            this.house_list[0].ACT_AVG,
            this.house_list[0].AREA,
            this.xJson
        );
    },
    methods: {
        dateSort() {
            let nowTime = new Date();
            let current = nowTime.getMonth() + 1;
            let saveArr = [];
            this.monthSort = [];
            for (let i = current; i < 12; i++) {
                saveArr.push(i + 1);
            }
            for (let i = 0; i < current; i++) {
                saveArr.push(i + 1);
            }
            for (let i = 0; i < 12; i++) {
                let item = i + 1;
                if (item.toString().length === 1) {
                    this.monthSort.push("0" + item);
                } else {
                    this.monthSort.push(item.toString());
                }
                this.xJson.push(saveArr[i] + "月");
            }
            this.monthSort = this.monthSort.reverse();
        }
    }
};
</script>

<style lang="less" scoped>
#barLine {
  width: 378px;
  height: 400px;
  background: rgba(255, 255, 255, 1);
}
</style>
