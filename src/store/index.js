/*
 * @Author: xujian
 * @Date: 2021-12-07 10:57:32
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-18 16:13:36
 * @Description:store 入口文件
 * @FilePath: /imooc-admin/src/store/index.js
 */
import { createStore } from 'vuex'
import getters from './getters'
import user from './modules/user.js'
import app from './modules/app'
export default createStore({
  getters,
  modules: {
    user,
    app
  }
})
