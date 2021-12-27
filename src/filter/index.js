/*
 * @Author: xujian
 * @Date: 2021-12-27 14:27:40
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-27 15:09:17
 * @Description:全局属性
 * @FilePath: /imooc-admin/src/filter/index.js
 */
import dayjs from 'dayjs'
/**
 * @description: 时间过滤
 * @param {*}
 * @return {*}
 */
const dateFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }

  return dayjs(val).format(format)
}

export default app => {
  app.config.globalProperties.$filters = {
    dateFilter
  }
}
