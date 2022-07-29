<template>
    <section>
        <el-input type="text" v-model="openAge"></el-input>
        <el-button @click="openTab">开新窗口</el-button>
    </section>
</template>

<script>
export default {
    name: 'windowTab',
    data(){
        return {
            openAge: '',
            ecParams: {}
        }
    },
    mounted(){
        // 这监听提到全局，若添加和编辑页面都用本vue作子组件，操作同时打开，那that指向出问题
        // 解决: 把这监听提到父组件里，然后that.$refs.***.updateOcr(that.ecParams.data)
        let that = this;
        document.addEventListener('visibilitychange', function() { 
            let isHidden = document.hidden;
            // console.log('document.hidden',document.hidden,window.opener)
            if (!isHidden&&window.opener) { // 显示
                that.ecParams = !window.opener?{}:window.opener.ecParams?JSON.parse(window.opener.ecParams):{}
                console.log('显示---window.opener.ecParams',that.ecParams)
                if(that.ecParams.tabWinActive == 'sureFrom'){
                    that.updateOcr(that.ecParams.data)
                    let ecParams = {
                        tabWinActive: 'cancelFrom',
                        data: {}
                    }
                    window.opener.ecParams = JSON.stringify(ecParams)
                }
            }else if(isHidden){// 隐藏
                // console.log('隐藏')
            }
        });
        //当前窗口得到焦点 
        // window.onfocus = function() { 
        //   // 做数据更新操作，重新发起请求或者直接刷新当前页面 
        //   console.log('---onfocus')
        // };
    },
    methods: {
        openTab(){
            console.log('openTab')
            window.name = "tabWinEec"
            let ocrParams = {
                url: window.location.href,
                sunCurrency: 'E_EC',
                currencyArr: []
            }
            window.ocrParams = JSON.stringify(ocrParams)
            window.open(location.protocol + "//" +location.host + '/#/home/managementCenter/effect/openTab', "tabWinOcrEec");
        },
        updateOcr(data){
            console.log('updateOcr',data)
        }
    }
}
</script>
