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
          <template #default="scope">
          <!-- scope.row相当于一条数据 -->
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
  import {
    ArrowRight
  } from '@element-plus/icons-vue'
  import {
    reactive
  } from 'vue'
  //引入自定义的Api
  import {
    userListApi
  } from '@/util/request'

  const data = reactive({
    keyWord: '',
    // userListApi的数据对象
    searchParams: {
      query: '',
      pagenum: 1,
      pagesize: 5
    },
    userList: []
  })

  const searchList = () => {
    userListApi(data.searchParams).then(res => {
      if (res.data) {
        console.log('用户数据', res)
        data.userList = res.data.users
      }
    })
  }

  const addUser = () => {

  }

  //初始化执行的方法，相当于生命周期create里
  searchList()
</script>

<style scoped lang="less">
  .input_box {
    margin-right: 15px;
    width: 200px;
  }
</style>