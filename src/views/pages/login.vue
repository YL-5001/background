<template>
  <div class="login_wrap">
    <div class="form_wrap">
      <el-form ref="ruleFormRef" :model="loginData" status-icon :rules="rules" label-width="120px"
        class="demo-ruleForm">
        <el-form-item label="用户名" prop="username" :rules="[
            {
                required:ture,
                message:'此处为必填项',
                trigger:'blur'
            }
        ]">
          <el-input v-model="data.loginData.userName" />
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[
            {
                required:ture,
                message:'此处为必填项',
                trigger:'blur'
            }
        ]">
          <el-input type="password" v-model="data.loginData.password" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script setup>
  import {
    useStore
  } from 'vuex'
  const {
    reactive
  } = require("vue")
  const store = useStore()
  const data = reactive({
    loginData: {
      userName: '',
      password: ''
    }
  })
</script>

<style scoped lang='less'>
  .login_wrap {
    width: 100%;
    height: 100vh;
    background: #666666;
    position: relative;

    .form_wrap {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #000;
      padding: 30px 50px;
      border-radius: 5px;
    }
  }
</style>