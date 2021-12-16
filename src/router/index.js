/*
 * @Author: xujian
 * @Date: 2021-12-07 10:57:32
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-16 21:45:33
 * @Description:路由配置
 * @FilePath: /imooc-admin/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import publicRoutes from './publicRoutes'
import privateRoutes from './privateRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
