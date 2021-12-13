/*
 * @Author: xujian
 * @Date: 2021-12-13 17:53:54
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-13 17:53:55
 * @Description:封装的网络请求
 * @FilePath: \imooc-admin\src\utils\request.js
 */
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

export default service
