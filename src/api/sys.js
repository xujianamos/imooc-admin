/*
 * @Author: xujian
 * @Date: 2021-12-13 17:54:51
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-13 17:54:52
 * @Description:封装接口请求模块
 * @FilePath: \imooc-admin\src\api\sys.js
 */
import request from '@/utils/request'

/**
 * 登录
 */
export const login = data => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
