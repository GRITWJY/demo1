<template>
  <div class="login" id="main">
    <el-form
      :model="ruleForm2"
      :rules="rules2"
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-container">
      <div>
        <img class="logo" src="../assets/logo30.png" style="width: 330px;height: 200px"/>
      </div>
      <div class="selectId">
        <el-select v-model="value" placeholder="请选择您的身份" style="width: 100%;">
          <el-option  v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"></el-option>
        </el-select>
      </div>

      <el-form-item prop="account">
        <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="请输入账号"></el-input>
      </el-form-item>

      <el-form-item prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm2.checkPass"
          auto-complete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>


      <!--    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->


      <el-form-item style="width:100%;">
        <el-button
          type="primary"
          style="width:100%;"
          @click="handleSubmit2"
          :loading="logining"
        >登录</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      logining: false,
      options: [
        {
          value: "1",
          label: "管理员"
        },
        {
          value: "2",
          label: "环保局"
        },{
          value: "3",
          label: "企业"
        }
      ],
      value:'',

      ruleForm2: {
        account: "",
        checkPass: ""
      },
      rules2: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: true
    };
  },
  methods: {
    handleSubmit2(){
      this.$router.push({path:"/showpage"})
    }
  },
  created() {

  },
  mounted() {
  }
};
</script>

<style scoped>
.logo {
  margin: 0px auto 20px auto;
  display: block;
  width: 70%;
  height: 180px;
  background: #00000000;
}
.selectId {
  margin: 0px auto 20px auto;
  text-align: center;
  color: #505458;
}
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin:40px auto;
  width: 360px;
  padding: 10px 35px 20px 35px;
  background: #00000000;
  border: 1px solid #00000000;
  //box-shadow: 0 0 25px #cac6c6;
}
.remember {
  margin: 0px 0px 10px 0px;
}
.login{
  width: 100%;
  height: 100%;
  background-image: url("../assets/bk2.jpg");
  background-size: cover;
  background-position: center;
  position: fixed;
}
</style>
