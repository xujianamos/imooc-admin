/*
 * @Author: xujian
 * @Date: 2021-12-09 11:08:55
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-09 11:08:55
 * @Description:常用工具方法
 * @FilePath: \imooc-admin\src\utils\validate.js
 */

/**
 * 判断是否为外部资源
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
