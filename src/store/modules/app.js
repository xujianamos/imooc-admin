/*
 * @Author: xujian
 * @Date: 2021-12-17 15:04:46
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-17 15:04:46
 * @Description:app
 * @FilePath: \imooc-admin\src\store\modules\app.js
 */
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true
  }),
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    }
  },
  actions: {}
}
