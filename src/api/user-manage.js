/*
 * @Author: xujian
 * @Date: 2021-12-27 14:04:33
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-05 15:28:39
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
