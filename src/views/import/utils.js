/*
 * @Author: xujian
 * @Date: 2021-12-27 19:38:46
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-27 19:57:07
 * @Description:
 * @FilePath: /imooc-admin/src/views/import/utils.js
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
const generateData = results => {
  const arr = []
  results.forEach(item => {
    const userInfo = {}
    Object.keys(item).forEach(key => {
      userInfo[USER_RELATIONS[key]] = item[key]
    })
    arr.push(userInfo)
  })
  return arr
}
