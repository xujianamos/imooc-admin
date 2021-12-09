/*
 * @Author: xujian
 * @Date: 2021-12-09 17:57:01
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-09 17:57:01
 * @Description:验证规则
 * @FilePath: \imooc-admin\src\views\login\rules.js
 */
export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
}
