<template>
    <section id="inputeCheck">

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
            <!-- 只能输入数字，不能负数       最大值999999999，限制输入9个长度
                加type="number" v-model的值还是字符串，右边出现加减
                v-model.number v-model的值是数字了
                两者都限制只输入数字
            -->
            <el-form-item label="充值金额:" prop="rechargeAmount">
                <el-input v-model.number="ruleForm.rechargeAmount" size="small" placeholder="请输入充值金额" class="purpose" type="number" :min="0" onkeypress="this.value = this.value.slice(0, 8)" onkeyup="this.value=this.value.replace(/e/,'');"></el-input>
            </el-form-item>
            <el-form-item label="彩金金额:" prop="lotteryAmount">
                <el-input-number v-model="ruleForm.lotteryAmount" size="small" :min="0" :max="999999999" label="请输入彩金金额" class="purpose" @input.native="inputChange" onKeypress="return (/[\d\.]/.test(String.fromCharCode(event.keyCode)))"></el-input-number>
            </el-form-item>
            <!-- 只能输入15位大小写字母和数字 -->
            <el-form-item label="平台账号:" prop="platformAccount">
                <el-input v-model="ruleForm.platformAccount" size="small" maxlength="15" placeholder="请输入平台账号" class="purpose" @input="plateEvent"></el-input>
            </el-form-item>
        </el-form>

    </section>
</template>

<script>
export default {
    name: 'inputeCheck',
    data() {
        let rechargeAmount = (rule, value, callback) => {
            if(!value || value == 0) {
                callback(new Error('请输入金额'));
            }  else {
                callback();
            }
        }
        let lotteryAmount = (rule, value, callback) => {
            if(!value || value == 0) {
                callback(new Error('请输入彩金金额'));
            }  else {
                callback();
            }
        }
        return {
            ruleForm: {
                variableValue: 0,
                lotteryAmount: 0,
                platformAccount: ''
            },
            rules: {
                rechargeAmount: [
                    { required: true, validator: rechargeAmount, trigger: 'blur' }
                ],
                lotteryAmount: [
                    { required: true, validator: lotteryAmount, trigger: 'blur' }
                ],
                platformAccount: [
                    { required: true, message: '请输入平台账号', trigger: 'blur' }
                ]
            },
            saveAccount: ''
        }
    },
    methods: {
        // 表单初始化
        initForm() {
            for(let key in this.ruleForm) {
                this.ruleForm[key] = ''
                if(key == 'balanceRMB' || key == 'balanceBo' || key == 'rechargeAmount' || key == 'variableValue' || key == 'lotteryAmount') {
                    this.ruleForm[key] = 0
                }
                if(key == 'images') {
                    this.ruleForm[key] = []
                }
            }
            // 清空校验
            this.$nextTick(function(){
                this.$refs.ruleForm.clearValidate()
            })
        },
        inputChange(e) {
            console.log('--e--', e, e.target.value)
            let dianIndex = e.target.value.indexOf('.');
            let frequency = (e.target.value.split(".")).length-1;
            console.log('-dianIndex-', dianIndex, e.target.value.length - 1, frequency)
            if(dianIndex != -1 && dianIndex != 0 && dianIndex == e.target.value.length - 1 && frequency == 1) {
                return
            }
            
            let flag = /^(\-|\+)?\d+(\.\d+)?$/.test(e.target.value);
            console.log('--flag#--', flag)
            if(!flag && e.target.value && e.target.value != '0' ) {
                this.$message.error("请输入正确的金额");
                e.target.value = 0;
                return
            }
            e.target.value = e.target.value.slice(0, 9)
        },
        plateEvent(value) {
            let flag = /^[A-Za-z0-9]+$/.test(this.ruleForm.platformAccount);
            console.log('---value---', value, flag, this.ruleForm.platformAccount);
            if(!flag){
                this.$message.error("请输入大小写字母和数字");
                this.ruleForm.platformAccount = this.saveAccount
                return
            }
            this.saveAccount = value
        },
    }
}
</script>

<style lang="less" scoped>
#inputeCheck {
    .purpose {
        width: 300px;
        float: left;
    }
}
</style>

