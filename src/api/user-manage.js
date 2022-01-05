/*
 * @Author: xujian
 * @Date: 2021-12-27 14:04:33
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-05 17:23:36
 * @Description:员工管理相关接口
 * @FilePath: \imooc-admin\src\api\user-manage.js
 */
import request from '@/utils/request'

/**
 * @description: 获取用户列表数据
 * @param {*}
 * @return {*}
 */
export const getUserManageList = data => {
  return request({
    url: '/user-manage/list',
    params: data
  })
}

/**
 * @description: 批量导入
 * @param {*}
 * @return {*}
 */
export const userBatchImport = data => {
  return request({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}

/**
 * @description: 删除指定数据
 * @param {*}
 * @return {*}
 */
export const deleteUser = id => {
  return request({
    url: `/user-manage/detele/${id}`
  })
}
/**
 * @description: 获取所有用户列表数据
 * @param {*}
 * @return {*}
 */
export const getUserManageAllList = () => {
  return request({
    url: '/user-manage/all-list'
  })
}
/**
 * @description: 获取用户详情
 * @param {*}
 * @return {*}
 */
export const userDetail = id => {
  return request({
    url: `/user-manage/detail/${id}`
  })
}
/**
 * @description: 获取指定用户角色
 * @param {*}
 * @return {*}
 */
export const userRoles = id => {
  return request({
    url: `/user-manage/role/${id}`
  })
}
/**
 * @description: 分用户分配角色
 * @param {*}
 * @return {*}
 */
export const updateRole = (id, roles) => {
  return request({
    url: `/user-manage/update-role/${id}`,
    method: 'POST',
    data: {
      roles
    }
  })
}
