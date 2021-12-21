/*
 * @Author: xujian
 * @Date: 2021-12-21 17:45:36
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-21 17:45:36
 * @Description:将 路由中title 转化为国际化内容
 * @FilePath: \imooc-admin\src\utils\i18n.js
 */
import i18n from '@/i18n'
export function generateTitle(title) {
  return i18n.global.t('msg.route.' + title)
}
