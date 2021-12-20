/*
 * @Author: xujian
 * @Date: 2021-12-17 23:13:56
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-20 11:20:42
 * @Description:国际化i18n配置
 * @FilePath: \imooc-admin\src\i18n\index.js
 */
import { createI18n } from 'vue-i18n'

// 1.创建 messages 数据源
const messages = {
  en: {
    msg: {
      test: 'hello world'
    }
  },
  zh: {
    msg: {
      test: '你好世界'
    }
  }
}

// 2.创建 locale语言变量
const locale = 'en'

// 3.初始化 i18n 实例

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale,
  messages
})

// 4.把 i18n 注册到 vue 实例
export default i18n
