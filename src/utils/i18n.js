/*
 * @Author: xujian
 * @Date: 2021-12-21 17:45:36
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-22 23:12:23
 * @Description:将 路由中title 转化为国际化内容
 * @FilePath: /imooc-admin/src/utils/i18n.js
 */
import i18n from '@/i18n'
import { watch } from 'vue'
import store from '@/store'

export function generateTitle(title) {
  return i18n.global.t('msg.route.' + title)
}

/**
 * 监听语言变化，同时执行cds
 * @param  {...any} cbs 所有的回调
 */
export function watchSwitchLang(...cbs) {
  watch(
    () => store.getters.language,
    () => {
      cbs.forEach(cb => cb(store.getters.language))
    }
  )
}
