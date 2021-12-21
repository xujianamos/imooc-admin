/*
 * @Author: xujian
 * @Date: 2021-12-17 15:04:46
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-21 15:07:41
 * @Description:app
 * @FilePath: \imooc-admin\src\store\modules\app.js
 */
import { LANG } from '@/constant'
import { getItem, setItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    // 左侧是否折叠
    sidebarOpened: true,
    // 设置国际化语言
    language: getItem(LANG) || 'zh'
  }),
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    /**
     * 设置国际化
     */
    setLanguage(state, lang) {
      setItem(LANG, lang)
      state.language = lang
    }
  },
  actions: {}
}
