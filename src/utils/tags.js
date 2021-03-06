/*
 * @Author: xujian
 * @Date: 2021-12-23 21:46:09
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-23 23:42:37
 * @Description:tags的处理
 * @FilePath: /imooc-admin/src/utils/tags.js
 */
// 不需要被保存为tag的路由
const whiteList = ['/login', '/404', '/401']

/**
 * path 是否需要被缓存
 * @param {*} path
 * @returns
 */
export function isTags(path) {
  return !whiteList.includes(path)
}
