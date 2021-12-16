/*
 * @Author: xujian
 * @Date: 2021-12-16 21:40:49
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-16 22:00:37
 * @Description:公有路由表
 * @FilePath: /imooc-admin/src/router/publicRoutes.js
 */
import layout from '@/layout'

const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    // 注意：带有路径“/”的记录中的组件“默认”是一个不返回 Promise 的函数
    component: layout,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/index'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401')
      }
    ]
  }
]
export default publicRoutes
