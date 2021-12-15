/*
 * @Author: xujian
 * @Date: 2021-12-13 17:55:39
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-15 22:49:35
 * @Description:用于处理所有和 用户相关 的内容
 * @FilePath: /imooc-admin/src/store/modules/user.js
 */
import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
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
            this.commit('user/setToken', data.token)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    async getUserInfo(context) {
      const res = await getUserInfo()

      this.commit('user/setUserInfo', res)
      return res
    }
  }
}
