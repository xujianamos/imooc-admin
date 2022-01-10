/*
 * @Author: xujian
 * @Date: 2021-12-27 14:27:40
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-10 15:38:17
 * @Description:全局属性
 * @FilePath: \imooc-admin\src\filter\index.js
 */
import dayjs from 'dayjs'
import rt from 'dayjs/plugin/relativeTime'
// 语言包
import 'dayjs/locale/zh-cn'
import store from '@/store'
/**
 * @description: 时间过滤
 * @param {*}
 * @return {*}
 */
export const dateFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }

  return dayjs(val).format(format)
}
/**
 * @description: 加载相对时间插件
 * @param {*}
 * @return {*}
 */
dayjs.extend(rt)
function relativeTime(val) {
  if (!isNaN(val)) {
    val = parseInt(val)
  }
  // return dayjs().to(dayjs(val))
  return dayjs()
    .locale(store.getters.language === 'zh' ? 'zh-cn' : 'en')
    .to(dayjs(val))
}

export default app => {
  app.config.globalProperties.$filters = {
    dateFilter,
    relativeTime
  }
}
