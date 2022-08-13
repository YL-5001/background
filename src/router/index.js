import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  //登录页面
  {
    path:'/login',
    name:'login',
    component:() => import("@/views/pages/login.vue")
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
    // 子路由
    children:[
      {
        path: '/user',
        name: 'userList',
        component: () => import("@/views/pages/UserList.vue")
      },
      {
        path: '/goods',
        name: 'goodsList',
        component: () => import("@/views/pages/GoodsList.vue")
      },
      {
        path: '/roles',
        name: 'rolesList',
        component: () => import("@/views/pages/RolesList.vue")
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
