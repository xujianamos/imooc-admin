/*
 * @Author: xujian
 * @Date: 2022-01-06 09:48:53
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-06 09:48:53
 * @Description:
 * @FilePath: \imooc-admin\src\router\modules\ArticleCreate.js
 */
import layout from '@/layout'

export default {
  path: '/article',
  component: layout,
  redirect: '/article/ranking',
  name: 'articleCreate',
  meta: { title: 'article', icon: 'article' },
  children: [
    {
      path: '/article/create',
      component: () => import('@/views/article-create/index'),
      meta: {
        title: 'articleCreate',
        icon: 'article-create'
      }
    },
    {
      path: '/article/editor/:id',
      component: () => import('@/views/article-create/index'),
      meta: {
        title: 'articleEditor'
      }
    }
  ]
}
