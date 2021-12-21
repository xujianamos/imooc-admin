/*
 * @Author: xujian
 * @Date: 2021-12-09 17:57:01
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-21 17:38:39
 * @Description:验证规则
 * @FilePath: \imooc-admin\src\views\login\rules.js
 */
// 不在组件中就不可以使用i18n实列来修改
import i18n from '@/i18n'

export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error(i18n.global.t('msg.login.passwordRule')))
    } else {
      callback()
    }
  }
}
