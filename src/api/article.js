/*
 * @Author: xujian
 * @Date: 2022-01-06 10:34:51
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-06 10:57:11
 * @Description:文章接口
 * @FilePath: \imooc-admin\src\api\article.js
 */
import request from '@/utils/request'

/**
 * @description:获取列表数据
 * @param {*}
 * @return {*}
 */
export const getArticleList = data => {
  return request({
    url: '/article/list',
    params: data
  })
}
/**
 * @description: 修改排序
 * @param {*}
 * @return {*}
 */
export const articleSort = data => {
  return request({
    url: '/article/sort',
    method: 'POST',
    data
  })
}
/**
 * @description: 删除文章
 * @param {*}
 * @return {*}
 */
export const deleteArticle = articleId => {
  return request({
    url: `/article/delete/${articleId}`
  })
}
/**
 * @description: 获取文章详情
 * @param {*}
 * @return {*}
 */
export const articleDetail = articleId => {
  return request({
    url: `/article/${articleId}`
  })
}
