import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import store from '../store/index'

const routes = [
  //登录页面
  {
    path:'/login',
    name:'login',
    component:() => import("../views/pages/login.vue")
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
    // 重定向
    redirect:'/index',
    // 子路由
    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import("../views/pages/index.vue")
      },
      {
        path: '/user',
        name: 'user',
        component: () => import("../views/pages/UserList.vue")
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

//路由守卫
router.beforeEach((to,form,next) => {
  if (!store.state.uInfo.userInfo.username) {
    //未登录,跳转到logoin
    if (to.path === '/login') {
      next()
      return
    }
    next('/login')
  }else{
    next()
  }
})

export default router
