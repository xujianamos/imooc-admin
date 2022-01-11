/*
 * @Author: xujian
 * @Date: 2022-01-06 09:42:31
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-11 22:40:53
 * @Description:专门处理权限路由的模块
 * @FilePath: /imooc-admin/src/store/modules/permission.js
 */
import publicRoutes from '@/router/publicRoutes'
import { asyncRoutes as privateRoutes } from '@/router/privateRoutes'
export default {
  namespaced: true,
  state: () => ({
    // 路由表：初始拥有静态路由权限
    routes: publicRoutes
  }),
  mutations: {
    /**
     * 增加路由
     */
    setRoutes(state, newRoutes) {
      // 永远在静态路由的基础上增加新路由
      state.routes = [...publicRoutes, ...newRoutes]
    }
  },
  actions: {
    /**
     * @description: 根据权限筛选路由
     * @param {*} context
     * @param {*} menus 权限数据
     * @return {*}
     */
    filterRoutes(context, menus) {
      const routes = []
      // 路由权限匹配
      menus.forEach(key => {
        // 权限名 与 路由的 name 匹配
        routes.push(...privateRoutes.filter(item => item.name === key))
      })
      // 最后添加 不匹配路由进入 404，因为不匹配路由需要写在最后面
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      context.commit('setRoutes', routes)
      return routes
    }
  }
}
