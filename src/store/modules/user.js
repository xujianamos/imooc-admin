/*
 * @Author: xujian
 * @Date: 2021-12-13 17:55:39
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-06 09:58:13
 * @Description:用于处理所有和 用户相关 的内容
 * @FilePath: \imooc-admin\src\store\modules\user.js
 */
import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router, { resetRouter } from '@/router'
import { setTimeStamp } from '@/utils/auth'
export default {
  namespaced: true,
  state: () => ({
    // token：初次获取本地token实现自动登录效果，获取不到才赋值为空字符串
    token: getItem(TOKEN) || '',
    // 用户信息
    userInfo: {}
  }),
  mutations: {
    // 保存token：保存在vuex和本地localStorage
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    // 保存用户信息
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    // 登录逻辑
    login(context, userInfo) {
      const { commit } = context
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then(data => {
            // this.commit('user/setToken', data.token)
            commit('setToken', data.token)
            // 保存登录时间
            setTimeStamp()
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    // 获取用户信息逻辑
    async getUserInfo({ commit }) {
      const res = await getUserInfo()
      // this.commit('user/setUserInfo', res)
      commit('setUserInfo', res)
      return res
    },
    // 退出登录逻辑
    logout({ commit }) {
      // 可以使用this进行调用其他模块的action
      // this.commit('user/setToken', '')
      // this.commit('user/setUserInfo', {})
      // 清除token
      commit('setToken', '')
      // 清除用户信息
      commit('setUserInfo', {})
      // 清楚本地所有缓存数据
      removeAllItem()
      // 删除动态添加的路由表
      resetRouter()
      // 退回到登录页面
      router.push('/login')
    }
  }
}
