/*
 * @Author: xujian
 * @Date: 2022-01-05 15:50:28
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-05 15:50:29
 * @Description:权限列表
 * @FilePath: \imooc-admin\src\api\permission.js
 */
import request from '@/utils/request'

/**
 * @description: 获取所有权限
 * @param {*}
 * @return {*}
 */
export const permissionList = () => {
  return request({
    url: '/permission/list'
  })
}
