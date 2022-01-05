/*
 * @Author: xujian
 * @Date: 2021-12-27 19:38:46
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-05 14:34:12
 * @Description:
 * @FilePath: \imooc-admin\src\views\import\utils.js
 */
/**
 * 导入数据对应表
 */
export const USER_RELATIONS = {
  姓名: 'username',
  联系方式: 'mobile',
  角色: 'role',
  开通时间: 'openTime'
}
/**
 * 筛选数据
 */
export const generateData = results => {
  const arr = []
  results.forEach(item => {
    const userInfo = {}
    Object.keys(item).forEach(key => {
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
 * 解析 excel 导入的时间格式
 */
export const formatDate = numb => {
  const time = new Date((numb - 1) * 24 * 3600000 + 1)
  time.setYear(time.getFullYear() - 70)
  const year = time.getFullYear() + ''
  const month = time.getMonth() + 1 + ''
  const date = time.getDate() - 1 + ''
  return year + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date)
}
