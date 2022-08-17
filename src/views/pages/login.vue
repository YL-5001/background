<template>
  <div class="login_wrap">
    <div class="form_wrap">
      <el-form ref="ruleFormRef" :model="data.loginData" label-width="120px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username" :rules="[
            {
                required:'ture',
                message:'此处为必填项',
                trigger:'blur'
            }
        ]">
          <el-input v-model="data.loginData.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[
            {
                required:'ture',
                message:'此处为必填项',
                trigger:'blur'
            }
        ]">
          <el-input type="password" v-model="data.loginData.password" />
        </el-form-item>

        <el-form-item>
          <!-- <el-button type="primary" @click="handleLogin()">登录</el-button> -->
          <i class="iconfont icon-error" @click="cancelLogin()"></i>
          <i class="iconfont icon-arrow-right-circle" @click="handleLogin()"></i>
          <!-- <el-button @click="cancelLogin()">取消</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script setup>
  import {
    useStore
  } from 'vuex'
  import {
    useRouter
  } from 'vue-router'
  import {
    loginApi
  } from '@/util/request'
  import {
    reactive
  } from 'vue';
  const store = useStore()
  const router = useRouter()

  const data = reactive({
    loginData: {
      username: '',
      password: ''
    }
  })
  // console.log('修改前', store.getters["number/countStatus"]) //中括号+字符串，为了符合变量语法

  //登录
  const handleLogin = () => {
    // 请求后台接口
    //默认用户名/密码：admin/123456
    loginApi(data.loginData).then(res => {
      if (res.data) {
        store.commit('setUserInfo', res.data)
        //把登录信息传到浏览器缓存
        localStorage.setItem('loginData', JSON.stringify(res.data))
        //登录后跳转/user页面
        router.push({
          path: '/'
        })
      }
    })

  }
  //取消输入信息
  const cancelLogin = () => {
    data.loginData.username = '',
      data.loginData.password = ''
  }
</script>

<style scoped lang='less'>
  .login_wrap {
    background: url('~@/assets/iTab-k762j7.png') no-repeat 100%;
    width: 100%;
    height: 100vh;
    position: relative;

    .form_wrap {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 30px 50px;
      border-radius: 5px;
      /* 毛玻璃效果 */
      background: rgba(213, 213, 233, 0.72);
      backdrop-filter: saturate(180%) blur(5px);

      .el-form-item {
        i {
          padding-right: 30px;
          cursor: pointer;
          font-size: 30px;
        }

        .icon-error {
          color: #d54b00f1;
        }

        .icon-arrow-right-circle {
          color: #0075d5;
        }
      }
    }
  }
</style>