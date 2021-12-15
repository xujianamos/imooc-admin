/*
 * @Author: xujian
 * @Date: 2021-12-13 17:55:39
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-15 09:11:21
 * @Description:用于处理所有和 用户相关 的内容
 * @FilePath: \imooc-admin\src\store\modules\user.js
 */
import { login } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then(data => {
            this.commit('user/setToken', data.data.data.token)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
