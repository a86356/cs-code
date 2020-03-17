import Vue from 'vue'
import Router from 'vue-router'
import config from "@/config/config";

import Login from '@/views/login/login'
import HomeIndex from '@/views/home/index'
import StudentIndex from '@/views/student/index'
import TeacherIndex from '@/views/teacher/index'

import {getCacheData,clearCacheData} from '@/utils/cache'

let menu=[
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: HomeIndex,
    title:"首页",
    icon:"ios-paper",
    menu:true,
    children:[
      { path: 'student', component: StudentIndex,title:"学生管理",icon:"",menu:true,name:'student'},
      { path: 'teacher', component: TeacherIndex,title:"老师管理",icon:"",menu:true,name:'teacher'},
    ]
  }
];

Vue.use(Router)
 let router = new Router({
  routes:menu
})

// router.beforeEach((to, from, next) => {
//   let token_key =config.TOKEN_KEY; // token
//
//   if (to.path === '/login') {
//     clearCacheData([token_key])
//   }
//   const LOGIN = getCacheData(token_key);
//
//   //没有登录的话，就不能访问home页面了
//   if (!LOGIN && to.path !== '/login') {
//
//     next({ path: '/login' })
//   } else {
//     next()
//   }
//   //next()
// })

export { router,menu};
