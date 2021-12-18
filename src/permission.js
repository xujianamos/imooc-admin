/*
 * @Author: xujian
 * @Date: 2021-12-15 10:53:05
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-18 17:50:52
 * @Description:鉴权操作
 * @FilePath: /imooc-admin/src/permission.js
 */
import router from '@/router'
import store from '@/store'

// 白名单
const whiteList = ['/login']
/**
 * @description: 路由前置守卫
 * @param {*} to 要到哪里去
 * @param {*} from 从哪里来
 * @param {*} next  是否要去
 * @return {*}
 */
router.beforeEach(async (to, from, next) => {
  // 存在 token ，进入主页
  // if (store.state.user.token) {
  // 快捷访问
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户资料是否获取
      // 若不存在用户信息，则需要获取用户信息
      if (!store.getters.hasUserInfo) {
        // 触发获取用户信息的 action
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    // 没有token的情况下，可以进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
