/*
 * @Author: xujian
 * @Date: 2021-12-07 10:57:32
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-13 17:56:26
 * @Description:store 入口文件
 * @FilePath: \imooc-admin\src\store\index.js
 */
import { createStore } from 'vuex'
import user from './modules/user.js'
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user
  }
})
