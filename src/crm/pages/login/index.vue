<template>
  <section id="login">
    <div class="pen-container">
      <el-form :model="form_data" :rules="form_rules" ref="refForm">
        <el-form-item label="手 机 号" prop="phone">
          <el-input
            v-model.trim="form_data.phone"
            placeholder="请输入手机号"
            maxlength="12"
          ></el-input>
        </el-form-item>
        <el-form-item label="密 码" prop="pwd">
          <el-input
            v-model.trim="form_data.pwd"
            placeholder="请输入账号密码"
            type="password"
            maxlength="12"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="formSubmit">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    var phonetest = /^1(3|4|5|7|8)\d{9}$/;
    var phonerules = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入手机号"));
      } else if (!phonetest.test(value)) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };

    var specialReg = /[^A-z0-9]/;
    var validateSpecial = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else if (specialReg.test(value)) {
        callback(new Error("不能输入特殊字符！"));
      } else {
        callback();
      }
    };

    return {
      form_data: {
        phone: "17817836856",
        pwd: "4165456421",
      },
      form_rules: {
        phone: [{ required: true, validator: phonerules, trigger: "blur" }],
        pwd: [
          { required: true, validator: validateSpecial, trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "密码在6到12个字符之间",
            trigger: "blur",
          },
        ],
      }
    };
  },
  methods: {
    formSubmit: function () {
      var that = this;
      that.$refs.refForm.validate(function (valid) {
        if (valid) {

            let json = {
                username: "admin",
                password: "123456"
            }
            that.$apihttp({
                url: 'http://mock-api-success.com/crm/login',
                method: 'post',
                data: json
            }).then((res) => {
                console.log('H-token',res);
                sessionStorage.setItem('buttonPermissions',JSON.stringify(res.buttonPermissions));
                that.$store.commit("addPane", {
                  title: '首页',
                  path: '/home/world/world',
                  menu_active: '/home/world/world'
                });
                that.$store.dispatch('routerApple', res.menu_list).then(function(result){
                  console.log('result===', result);
                  sessionStorage.setItem('token', 'txvb-8325487189');
                  that.$router.addRoutes(result);//参数得是数组
                  that.$router.push({path: '/home/world/world'});
                })
            }).catch((err)=>{
                console.log('error',err);
            })

        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
#login {
  width: 100%;
  height: 1000px;
  position: relative;
  .pen-container {
    width: 500px;
    height: 600px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -300px 0 0px -250px;
  }
}
</style>
