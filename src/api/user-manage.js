/*
 * @Author: xujian
 * @Date: 2021-12-27 14:04:33
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-27 19:38:08
 * @Description:员工管理相关接口
 * @FilePath: /imooc-admin/src/api/user-manage.js
 */
import request from '@/utils/request'

/**
 * 获取用户列表数据
 */
export const getUserManageList = data => {
  return request({
    url: '/user-manage/list',
    params: data
  })
}

/**
 * 批量导入
 */
export const userBatchImport = data => {
  return request({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}
