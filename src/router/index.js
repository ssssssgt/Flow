import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)//Vue实例中使用Vue Router插件

//定义一个数组routes，其中包含了每个路由的规则，path：路由路径，name：路由名称，compone：路由对应的组件
const routes = [
  {
    path: '/',
    redirect: {name: 'userInfo'},//重定向
    component: () => import('@/Layout/MyMain.vue'),
    children: [
      {
        path: '/user',
        name: 'userInfo',
        component: () => import('@/pages/select-type.vue'),
        //路由对应的组件，使用动态导入的方式加载'@/pages/select-type.vue'组件
      },      
    ]
  },
  {
    path: '/exportWord2',
    name: 'exportWord2',
    component: () => import('@/components/export-word2.vue'),  
  },
  {
    path: '/seuif97',
    name: 'seuif97',
    component: () => import('@/components/seuif97.vue'),  
  },

  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

//创建一个Router实例，并传入路由规则
const router = new Router({
  routes
})

//导出router以供其他组件使用
export default router