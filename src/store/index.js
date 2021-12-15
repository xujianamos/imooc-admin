/*
 * @Author: xujian
 * @Date: 2021-12-07 10:57:32
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-15 10:54:26
 * @Description:store 入口文件
 * @FilePath: \imooc-admin\src\store\index.js
 */
import { createStore } from 'vuex'
import getters from './getters'
import user from './modules/user.js'
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters,
  modules: {
    user
  }
})
