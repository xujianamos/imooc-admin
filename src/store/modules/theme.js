/*
 * @Author: xujian
 * @Date: 2021-12-22 09:49:27
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-22 17:46:21
 * @Description:处理主题色相关
 * @FilePath: \imooc-admin\src\store\modules\theme.js
 */
import { getItem, setItem } from '@/utils/storage'
import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
import variables from '@/styles/variables.scss'
export default {
  namespaced: true,
  state: () => ({
    // 主题色
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR,
    variables
  }),
  mutations: {
    /**
     * 设置主题色
     */
    setMainColor(state, newColor) {
      state.mainColor = newColor
      state.variables.menuBg = newColor
      setItem(MAIN_COLOR, newColor)
    }
  }
}
