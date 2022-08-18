<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 内容 -->
    <div class="page_content">
      <div class="flex">
        <div class="input_box">
          <el-input v-model="data.keyWord" placeholder="输入关键字" class="input-with-select">
            <template #append>
              <el-button @click="searchList()">
                <el-icon>
                  <Search />
                </el-icon>
              </el-button>
            </template>
          </el-input>
        </div>
        <el-button type="primary" @click="addUser()">添加用户</el-button>
      </div>
      <!-- 表格 -->
      <el-table :data="data.userList" style="width: 100%">
        <el-table-column prop="username" label="姓名" width="180" />
        <el-table-column prop="email" label="邮箱" width="180" />
        <el-table-column prop="mobile" label="电话" />
        <el-table-column prop="role_name" label="角色" />
        <!-- "mg_state": true, // 当前用户的状态 -->
        <el-table-column prop="mg_state" label="状态">
          <!-- 插槽 -->
          <template #default="scope">
            <!-- scope.row相当于一条数据 -->
            <el-switch v-model="scope.row.mg_state" />
          </template>
        </el-table-column>
        <el-table-column label="编辑">
          <!-- 插槽 -->
          <template #default="">
            <!-- scope.row相当于一条数据 -->
            <el-button type="primary">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 弹窗 -->
    <el-dialog v-model="data.dialogFormVisible" title="新建用户">
      <!-- 表单
    | 参数名   | 参数说明 | 备注     |
    | -------- | -------- | -------- |
    | username | 用户名称 | 不能为空 |
    | password | 用户密码 | 不能为空 |
    | email    | 邮箱     | 可以为空 |
    | mobile   | 手机号   | 可以为空 | -->
      <el-form ref="userForm" :model="data.formData" :rules="data.rules">
        <el-form-item label="用户名称" prop="username">
          <el-input v-model="data.formData.username" placeholder="请输入用户名称" />
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input type="password" v-model="data.formData.password" placeholder="请输入用户密码" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="data.formData.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="data.formData.mobile" placeholder="请输入手机号" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="felx">
          <el-button>取消</el-button>
          <el-button type="primary" @click="submitForm(userForm)">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
  import {
    ArrowRight
  } from '@element-plus/icons-vue'
  import {
    reactive,
    ref
  } from 'vue'
  //引入自定义的Api
  import {
    userListApi,
    userAddApi
  } from '@/util/request'

  const userForm = ref()
  const data = reactive({
    keyWord: '',
    // userListApi的数据对象
    searchParams: {
      query: '',
      pagenum: 1,
      pagesize: 10
    },
    userList: [],
    dialogFormVisible: false,
    formData: {
      username: '',
      password: '',
      email: '',
      mobile: ''
    },
    // 表单输入规则
    rules: {
      username: [{
        required: true,
        message: '此处为必填项',
        trigger: 'blur'
      }],
      password: [{
        required: true,
        message: '此处为必填项',
        trigger: 'blur'
      }],
      email: [{
        required: false,
        pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: '请输入正确邮箱',
        trigger: 'blur'
      }],
      mobile: [{
        required: false,
        pattern: /^((\+|00)86)?1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/,
        message: '请输入正确手机号',
        trigger: 'blur'
      }],
    }
  })

  // 查找/获取后台信息
  const searchList = () => {
    userListApi(data.searchParams).then(res => {
      if (res.data) {
        console.log('用户数据', res)
        data.userList = res.data.users
      }
    })
  }

  // 新建用户
  const addUser = () => {
    data.dialogFormVisible = true
  }

  //提交表单form
  const submitForm = (formEl) => {
    //validate是element-plus的form的自带验证方法
    formEl.validate(res => {
      if (!res) {
        //验证不通过
        return
      }
      //通过element验证
      userAddApi(data.formData).then(res => {
        if (res.data) {
          //关闭弹窗
          data.dialogFormVisible = false
          //清空form
          data.formData = {
            username: '',
            password: '',
            email: '',
            mobile: ''
          }
          //再次初始化用户列表
          searchList()
        }
      })
    })
  }

  //初始化执行的方法，相当于生命周期create里
  //初始化用户列表
  searchList()
</script>

<style scoped lang="less">
  .input_box {
    margin-right: 15px;
    width: 200px;
  }
</style>