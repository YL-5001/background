<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 内容 -->
    <div class="page_content">
      <el-button type="primary" @click="data.dialogFormVisible = true">新建角色</el-button>
      <el-table :data="data.rolesList" style="width:100%">
        <el-table-column prop="roleName" label="角色名" />
        <el-table-column prop="roleDesc" label="角色描述" />
        <el-table-column>
          <!-- 插槽 -->
          <template #default="scope">
            <!-- scope.row相当于一条数据 -->
            <el-button type="primary" @click="editRow(scope.row)">编辑</el-button>
            <el-button type="danger" @click="deleteRow(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 新建编辑弹窗 -->
    <el-dialog v-model="data.dialogFormVisible" title="编辑用户">
      <el-form ref="userForm" :model="data.formData" :rules="data.rules">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="data.formData.roleName" placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="data.formData.roleDesc" placeholder="请输入角色描述" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="felx">
          <el-button>取消</el-button>
          <el-button type="primary" @click="submitEForm(userForm)">确定</el-button>
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
    getRolesApi
  } from '@/util/request'
  import {
    reactive,
    ref
  } from 'vue'

  //变量
  const userForm = ref()
  const data = reactive({
    rolesList: [],
    dialogFormVisible: false,
    formData: {
      roleName: '',
      roleDesc: ''
    },
    rules: {
      roleName: [{
        required: true,
        message: '此处为必填项',
        trigger: 'blur'
      }]
    }
  })

  //方法
  //获取角色列表
  const getList = () => {
    getRolesApi().then(res => {
      if (res) {
        data.rolesList = res.data
      }
    })
  }

  //编辑
  const editRow = () => {

  }

  //删除
  const deleteRow = () => {

  }

  //初始化
  getList()
</script>

<style scoped lang='less'>

</style>