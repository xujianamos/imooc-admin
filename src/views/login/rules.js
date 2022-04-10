/*
 * @Author: xujian
 * @Date: 2021-12-09 17:57:01
 * @LastEditors: xujian
 * @LastEditTime: 2022-04-09 22:42:27
 * @Description:验证规则
 * @FilePath: /imooc-admin/src/views/login/rules.js
 */
// 不在vue组件中就不可以使用i18n实列来修改，需要导入创建好的实列
import i18n from '@/i18n'

/**
 * @description: 验证密码的方法
 * @param {*}
 * @return {*}
 */
export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error(i18n.global.t('msg.login.passwordRule')))
    } else {
      callback()
    }
  }
}
