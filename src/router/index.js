/*
 * @Author: xujian
 * @Date: 2021-12-07 10:57:32
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-06 10:04:45
 * @Description:路由配置
 * @FilePath: \imooc-admin\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import publicRoutes from './publicRoutes'
import store from '@/store'
// 根据权限动态加入私有路由表
// import privateRoutes from './privateRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  // routes: [...publicRoutes, ...privateRoutes],
  routes: publicRoutes
})

export default router
/**
 * 初始化路由表
 */
export function resetRouter() {
  if (store.getters.userInfo && store.getters.userInfo.permission && store.getters.userInfo.permission.menus) {
    const menus = store.getters.userInfo.permission.menus
    menus.forEach(menu => {
      router.removeRoute(menu)
    })
  }
}
