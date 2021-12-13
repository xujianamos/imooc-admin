/*
 * @Author: xujian
 * @Date: 2021-12-13 17:55:39
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-13 17:55:40
 * @Description:用于处理所有和 用户相关 的内容
 * @FilePath: \imooc-admin\src\store\modules\user.js
 */
import { login } from '@/api/sys'
import md5 from 'md5'
export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then(data => {
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
