/*
 * @Author: xujian
 * @Date: 2022-01-06 15:49:40
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-06 15:56:53
 * @Description:处理文章提交
 * @FilePath: \imooc-admin\src\views\article-create\components\commit.js
 */
import { createArticle, articleEdit } from '@/api/article'
import { ElMessage } from 'element-plus'
import i18n from '@/i18n'
const t = i18n.global.t

/**
 * @description: 创建文章
 * @param {*} data
 * @return {*}
 */
export const commitArticle = async data => {
  const res = await createArticle(data)
  ElMessage.success(t('msg.article.createSuccess'))
  return res
}
/**
 * @description: 编辑文章
 * @param {*} data
 * @return {*}
 */
export const editArticle = async data => {
  const res = await articleEdit(data)
  ElMessage.success(t('msg.article.editorSuccess'))
  return res
}
