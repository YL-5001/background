<template>
  <!-- 面包屑 -->
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>商品列表</el-breadcrumb-item>
  </el-breadcrumb>
  <!-- 内容 -->
  <div class="page_content">
    <div class="flex">
      <div class="input_box">
        <el-input v-model="data.searchParams.query" placeholder="输入关键字" class="input-with-select">
          <template #append>
            <el-button @click="searchList()">
              <el-icon>
                <Search />
              </el-icon>
            </el-button>
          </template>
        </el-input>
      </div>
    </div>
    <!-- 表格 -->
    <el-table :data="data.goodsList" style="width: 100%">
      <el-table-column prop="goods_name" label="商品名称" width="180" />
      <el-table-column prop="goods_price" label="价格" width="180" />
      <el-table-column prop="goods_number" label="数量" />
      <el-table-column prop="goods_weight" label="重量" />
      <el-table-column prop="goods_state" label="商品状态">
        <!-- 插槽 -->
        <template #default="scope">
          <!-- scope.row相当于一条数据 -->
            <p>{{switchState(scope.row.goods_state)}}</p>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
        v-model:currentPage="data.searchParams.pagenum"
        v-model:page-size="data.searchParams.pagesize"
        :page-sizes="[2,5,10,20]"
        layout="total,sizes,prev,pager,next,jumper"
        :total="data.total"
        @size-change="searchList"
    ></el-pagination>
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
    goodsListApi,
  } from '@/util/request'

  const data = reactive({
    // goodsListApi的数据对象
    searchParams: {
      query: '',
      pagenum: 1,
      pagesize: 5
    },
    total:0,
    goodsList: []
  })

  // 查找/获取后台信息
  const searchList = () => {
    goodsListApi(data.searchParams).then(res => {
      if (res.data) {
        console.log('商品数据', res)
        data.goodsList = res.data.goods
      }
    })
  }

//   商品状态
const switchState = (state) => {
    switch (state) {
        case 0:
            return '未通过'
        case 1:
            return '审核中'
        case 2:
            return '已通过'
        default:
            break;
    }
}

  //初始化执行的方法，相当于生命周期create里
  //初始化用户列表
  searchList()
</script>
<style scoped lang='less'>

</style>