/*
 * @Author: xujian
 * @Date: 2022-01-06 09:48:40
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-11 22:30:30
 * @Description:文章相关路由
 * @FilePath: /imooc-admin/src/router/modules/Article.js
 */
import layout from '@/layout'

export default {
  path: '/article',
  component: layout,
  redirect: '/article/ranking',
  name: 'articleRanking',
  meta: { title: 'article', icon: 'article' },
  children: [
    {
      path: '/article/ranking',
      component: () => import('@/views/article-ranking/index'),
      meta: {
        title: 'articleRanking',
        icon: 'article-ranking'
      }
    },
    {
      path: '/article/:id',
      component: () => import('@/views/article-detail/index'),
      meta: {
        title: 'articleDetail'
      }
    }
  ]
}
