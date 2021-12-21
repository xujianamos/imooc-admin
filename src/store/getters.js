/*
 * @Author: xujian
 * @Date: 2021-12-15 10:53:42
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-21 16:11:31
 * @Description:全局getter
 * @FilePath: \imooc-admin\src\store\getters.js
 */
import variables from '@/styles/variables.scss'

const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: state => variables,
  sidebarOpened: state => state.app.sidebarOpened,
  language: state => state.app.language
}
export default getters
