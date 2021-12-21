/*
 * @Author: xujian
 * @Date: 2021-12-17 23:13:56
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-21 17:52:47
 * @Description:国际化i18n配置
 * @FilePath: \imooc-admin\src\i18n\index.js
 */
import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'
import store from '@/store'

// 1.创建 messages 数据源
const messages = {
  en: {
    msg: {
      ...enLocale
    }
  },
  zh: {
    msg: {
      ...zhLocale
    }
  }
}

/**
 * 返回当前 lang
 */
function getLanguage() {
  return store && store.getters && store.getters.language
}

// 2.初始化 i18n 实例

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

// 3.把 i18n 注册到 vue 实例
export default i18n
