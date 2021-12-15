/*
 * @Author: xujian
 * @Date: 2021-12-15 10:53:42
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-15 22:13:32
 * @Description:全局getter
 * @FilePath: /imooc-admin/src/store/getters.js
 */
const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}
export default getters
