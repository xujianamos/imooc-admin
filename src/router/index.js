/*
 * @Author: xujian
 * @Date: 2021-12-07 10:57:32
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-11 22:47:49
 * @Description:路由配置
 * @FilePath: /imooc-admin/src/router/index.js
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
 * 初始化路由表：退出登录时使用
 */
export function resetRouter() {
  if (store.getters.userInfo && store.getters.userInfo.permission && store.getters.userInfo.permission.menus) {
    const menus = store.getters.userInfo.permission.menus
    menus.forEach(menu => {
      // 循环删除路由
      router.removeRoute(menu)
    })
  }
}
