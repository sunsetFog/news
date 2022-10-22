<template>
  <section>
    <el-date-picker
      v-model="formObj.planStartTime"
      size="small"
      type="datetime"
      style="width: 300px"
      :picker-options="startTimeOptions"
      value-format="yyyy-MM-dd HH:mm:ss"
      placeholder="请选择计划开工时间"
    ></el-date-picker>

    <br><br><br>

    <el-date-picker
      v-model="formObj.planEndTime"
      size="small"
      type="datetime"
      style="width: 300px"
      :picker-options="endTimeOptions"
      value-format="yyyy-MM-dd HH:mm:ss"
      placeholder="请选择计划完工时间"
    ></el-date-picker>
  </section>
</template>

<script>
import dayjs from 'dayjs';
export default {
    name: "datePicker",
    data() {
        return {
            formObj: {
                planStartTime: '2022-10-19 00:00:00',
                planEndTime: '2022-10-29 00:00:00'
            }
        }
    },
    computed: {
        startTimeOptions() {
            var that = this
            return {
                disabledDate(time) {
                    if(that.formObj.planEndTime) {
                        const cursx = dayjs(time).format('YYYY-MM-DD HH:mm:ss').valueOf();
                        console.log("开始时间=", cursx);
                        console.log("planEndTime=", that.formObj.planEndTime, "===", cursx > that.formObj.planEndTime);
                        return cursx >= that.formObj.planEndTime;
                    }
                    
                }
            }
        },
        endTimeOptions () {
            var that = this
            return {
                disabledDate(time) {
                    if(that.formObj.planStartTime) {
                        const cursx = dayjs(time).format('YYYY-MM-DD HH:mm:ss').valueOf();
                        console.log("结束时间=", cursx);
                        console.log("planStartTime=", that.formObj.planStartTime, "===", cursx < that.formObj.planStartTime);
                        return cursx <= that.formObj.planStartTime;
                    }   
                }
            }
        }
    }

}
</script>

<style lang="less" scoped>
</style>

