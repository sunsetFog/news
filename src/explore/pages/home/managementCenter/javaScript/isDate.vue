<template>
    <section>
        <LineTextLine>日期时间</LineTextLine>
        <datePicker></datePicker>
        <LineTextLine>倒计时</LineTextLine>
        <div>
            <p v-for="(item, index) in arrList" :key="index">{{ item.timeTxt }}</p>
        </div>
    </section>
</template>

<script>
import datePicker from "./datePicker.vue";
import dayjs from 'dayjs';
export default {
    name: "isDate",
    components: { datePicker },
    data() {
        return {
            arrList: [
                {
                    countTime: 60
                },
                {
                    countTime: 18000
                }
            ],
            timeValue: null
        }
    },
    created() {
        this.dateFormat(null, '今天')
        this.dateFormat(1608003110000, '时间戳')
        let value = 'Thu Apr 01 2021 00:00:00 GMT+0800 (中国标准时间)'
        this.dateFormat(value, '中国标准时间')
        this.dateFormat(-7, '第几天')


        this.demo2()
        this.countDown()
    },
    mounted () {
        this.toTime(this.arrList);
    },
    destroyed () {
        this.stopTime();
    },
    methods: {
        demo1(){
            //Date对象
            var nowTime = new Date();//Date构造函数，时间从1970 年 1 月 1开始算
            console.log('当前时间',nowTime);
            var futureTime = new Date(2050,0,1);
            console.log('目标时间',futureTime);

            console.log('年份',nowTime.getFullYear());
            console.log('月份 (0 ~ 11)',nowTime.getMonth()+1);
            console.log('当月几号(1 ~ 31)',nowTime.getDate());

            console.log('小时 (0 ~ 23)',nowTime.getHours());
            console.log('分钟 (0 ~ 59)',nowTime.getMinutes());
            console.log('秒数 (0 ~ 59)',nowTime.getSeconds());

            console.log('星期几(0 ~ 6)',nowTime.getDay()+1); // 加一是因为从零开始
            console.log('2020/7/26===',nowTime.toLocaleDateString());
            console.log('2020/7/26 下午11:54:30===',nowTime.toLocaleString());
            console.log('下午11:54:30===',nowTime.toLocaleTimeString());

            let field = new Date().getTime();
            console.log('当前时间转时间戳', field);// 1646243956840
            console.log('时间戳转中国标准时间', new Date(field));// Thu Mar 03 2022 01:59:16 GMT+0800 (中国标准时间)

            let biaozhun = "2021-11-03T18:00:00.000Z";
            console.log('国际标准时间转中国标准时间', new Date(biaozhun));
        },
        // 倒计时
        countDown() {
            var nowTime = new Date();
            var futureTime = new Date(2023,0,1);
            var millisecond= futureTime.getTime() - nowTime.getTime();// getTime() 1970 年 1 月 1 日至今的毫秒数
            console.log('剩余所有毫秒数',millisecond);

            var surplusSecond = parseInt(millisecond/1000);
            console.log('剩余所有秒数',surplusSecond);

            var days = Math.floor(surplusSecond/(24*60*60));
            console.log('剩余天数',days);

            var hours = Math.floor((surplusSecond-days*24*60*60)/3600);
            console.log('剩余小时',hours);

            var minutes = Math.floor((surplusSecond-days*24*60*60-hours*60*60)/60);
            console.log('剩余分钟',minutes);

            var seconds = Math.floor((surplusSecond-days*24*60*60-hours*60*60-minutes*60));
            console.log('剩余秒数',seconds);

            console.log("距离2023年元旦还有："+days+"天"+hours+"时"+minutes+"分"+seconds+"秒");
            // setInterval(this.demo7,1000);//倒计时
        },
        // 日期格式转换
        dateFormat (value, type) {

            let nowTime;
            if(type == '今天') {
                nowTime = new Date()
            } else if (type == '时间戳') {
                let size = value.toString()
                if(size.length == 10) {
                    nowTime = new Date(value*1000);
                } else if(size.length == 13) {
                    nowTime = new Date(value);
                }
            } else if (type == '中国标准时间') {
                nowTime = new Date(value)
            } else if (type == '第几天') {
                nowTime = new Date()
                nowTime.setDate(nowTime.getDate() + value)
            }

            let isYear = nowTime.getFullYear()
            let isMonth = this.guolv(nowTime.getMonth() + 1)
            let isDate = this.guolv(nowTime.getDate())
            let isHours = this.guolv(nowTime.getHours())
            let isMinutes = this.guolv(nowTime.getMinutes())
            let isSeconds = this.guolv(nowTime.getSeconds())

            let ymdhms = isYear + '-' + isMonth + '-' + isDate + ' ' + isHours + ':' + isMinutes + ':' + isSeconds
            console.log(type + ' 转 yyyy-MM-dd HH:mm:ss', ymdhms)// 2021-12-22 18:45:08
            return ymdhms
        },
        guolv (value) {
            return value < 10 ? '0' + value : value
        },
        demo2() {
            /*
                dayjs官网：https://dayjs.fenxianglu.cn/
                JavaScript 实用工具库：日期和时间（解析、验证、操作、显示）
             */
            console.log('--获取今天日期时间--', dayjs().format());// 2022-04-09T13:29:37+08:00
            console.log('今天日期时间：显示--格式化--', dayjs().format('YYYY-MM-DD HH:mm:ss'));// 2022-04-09 13:41:41

            console.log('七天后：操作--加上--', dayjs().add(7, 'day').format('YYYY-MM-DD HH:mm:ss'));// 2022-04-16 13:57:22
            console.log('三天前：操作--减去--', dayjs().subtract(3, 'day').format('YYYY-MM-DD HH:mm:ss'));// 2022-04-06 14:02:06

        },
        stopTime () {
            if (this.timeValue) {
                clearInterval(this.timeValue);
            }
        },
        toTime (arrList) {
            let that = this;
            let arrBox = JSON.parse(JSON.stringify(arrList));
            this.stopTime();
            this.timeValue = setInterval(() => {
                for (let i = 0; i < arrBox.length; i++) {
                    let item = arrBox[i];
                    if (item.countTime != 0) {
                        item.countTime = item.countTime - 1;
                    }
                    item.timeTxt = this.secondsFormatTime(item.countTime);
                }
                that.arrList = JSON.parse(JSON.stringify(arrBox));
                console.log("----time---", arrBox);
            }, 1000);
        },
        // 秒转时间
        secondsFormatTime(mss) {
            let hour = Math.floor(mss / 3600);
            hour = `${hour <= 9 ? '0' : ''}${hour}`;
            let minutes = Math.floor(mss / 60 % 60);
            minutes = `${minutes <= 9 ? '0' : ''}${minutes}`;
            let seconds = Math.ceil(mss % 60);
            seconds = `${seconds <= 9 ? '0' : ''}${seconds}`
            return `${hour}:${minutes}:${seconds}`;
        }
    }
}
</script>

