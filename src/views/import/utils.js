/*
 * @Author: xujian
 * @Date: 2021-12-27 19:38:46
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-10 10:08:45
 * @Description:
 * @FilePath: \imooc-admin\src\views\import\utils.js
 */

/**
 * @description: 导入数据对应表
 * @param {*}
 * @return {*}
 */
export const USER_RELATIONS = {
  姓名: 'username',
  联系方式: 'mobile',
  角色: 'role',
  开通时间: 'openTime'
}

/**
 * @description: 筛选数据：将导入解析后的中文key转换为接口需要的英文key
 * @param {*}
 * @return {*}
 */
export const generateData = results => {
  const arr = []
  results.forEach(item => {
    const userInfo = {}
    Object.keys(item).forEach(key => {
      // 时间的特殊处理
      if (USER_RELATIONS[key] === 'openTime') {
        userInfo[USER_RELATIONS[key]] = formatDate(item[key])
        return
      }
      userInfo[USER_RELATIONS[key]] = item[key]
    })
    arr.push(userInfo)
  })
  return arr
}

/**
 * @description: 解析 excel 导入的时间格式
 * @param {*}
 * @return {*}
 */
export const formatDate = numb => {
  const time = new Date((numb - 1) * 24 * 3600000 + 1)
  time.setYear(time.getFullYear() - 70)
  const year = time.getFullYear() + ''
  const month = time.getMonth() + 1 + ''
  const date = time.getDate() - 1 + ''
  return year + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date)
}
