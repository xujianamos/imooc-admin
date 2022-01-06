/*
 * @Author: xujian
 * @Date: 2021-12-07 10:57:32
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-06 09:51:51
 * @Description:store 入口文件
 * @FilePath: \imooc-admin\src\store\index.js
 */
import { createStore } from 'vuex'
import getters from './getters'
import user from './modules/user.js'
import app from './modules/app'
import theme from './modules/theme'
import permission from './modules/permission'
export default createStore({
  getters,
  modules: {
    user,
    app,
    theme,
    permission
  }
})
