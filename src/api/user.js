/*
 * @Author: xujian
 * @Date: 2021-12-25 21:37:57
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-25 22:25:49
 * @Description:user接口
 * @FilePath: /imooc-admin/src/api/user.js
 */
import request from '@/utils/request'

/**
 * @description: 获取功能列表
 * @param {*}
 * @return {*}
 */
export const getFeature = () => {
  return request({
    url: '/user/feature'
  })
}
/**
 * @description: 获取项目章节
 * @param {*}
 * @return {*}
 */
export const chapter = () => {
  return request({
    url: '/user/chapter'
  })
}
