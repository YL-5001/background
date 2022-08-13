<template>
  <div class="common-layout">
    <el-container>
      <el-header class="common-header flex-flaot">
        <div class="flex">
          <h1>后台</h1>
        </div>
        <el-button type="success">Success</el-button>
      </el-header>
      <el-container>
        <el-aside class="common-aside" width="200px">
          <el-menu
            background-color = 'none'
            text-color = '#fff'
            :router = true
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><User /></el-icon>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/user">用户列表</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><Open /></el-icon>
                <span>权限管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/roles">角色列表</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><Ship /></el-icon>
                <span>物品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/goods">物品列表</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
  name: 'HomePage'
</script>

<style scoped lang="less">
  .common-layout {
    .el-container {
      height: 100vh;
      overflow: hidden;
    }

    .common-header {
      background: #a7d500;
    }

    .common-aside {
      background: #666666;
    }
  }
</style>