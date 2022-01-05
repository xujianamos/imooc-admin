/*
 * @Author: xujian
 * @Date: 2022-01-05 15:49:27
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-05 17:39:18
 * @Description:角色列表
 * @FilePath: \imooc-admin\src\api\role.js
 */
import request from '@/utils/request'

/**
 * @description: 获取所有角色
 * @param {*}
 * @return {*}
 */
export const roleList = () => {
  return request({
    url: '/role/list'
  })
}
/**
 * @description: 获取指定角色的权限
 * @param {*}
 * @return {*}
 */
export const rolePermission = roleId => {
  return request({
    url: `/role/permission/${roleId}`
  })
}
/**
 * @description: 为角色修改权限
 * @param {*}
 * @return {*}
 */
export const distributePermission = data => {
  return request({
    url: '/role/distribute-permission',
    method: 'POST',
    data
  })
}
