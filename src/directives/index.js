/*
 * @Author: xujian
 * @Date: 2022-01-05 15:33:26
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-06 10:00:46
 * @Description:
 * @FilePath: \imooc-admin\src\directives\index.js
 */
import print from 'vue3-print-nb'
// ๆ้ๆไปค
import permission from './permission'

export default app => {
  app.use(print)
  app.directive('permission', permission)
}
