/*
 * @Author: xujian
 * @Date: 2022-01-06 10:43:11
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-13 16:30:36
 * @Description:用来指定初始的列数据
 * @FilePath: \imooc-admin\src\views\article-ranking\dynamic\DynamicData.js
 */
import i18n from '@/i18n'

const t = i18n.global.t

/**
 * @description: 导出函数用来实现国际化
 * @param {*}
 * @return {*}
 */
export default () => [
  {
    label: t('msg.article.ranking'),
    prop: 'ranking'
  },
  {
    label: t('msg.article.title'),
    prop: 'title'
  },
  {
    label: t('msg.article.author'),
    prop: 'author'
  },
  {
    label: t('msg.article.publicDate'),
    prop: 'publicDate'
  },
  {
    label: t('msg.article.desc'),
    prop: 'desc'
  },
  {
    label: t('msg.article.action'),
    prop: 'action'
  }
]
