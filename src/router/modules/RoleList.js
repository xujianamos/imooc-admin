/*
 * @Author: xujian
 * @Date: 2022-01-06 09:48:10
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-06 09:48:10
 * @Description:
 * @FilePath: \imooc-admin\src\router\modules\RoleList.js
 */
import layout from '@/layout'

export default {
  path: '/user',
  component: layout,
  redirect: '/user/manage',
  name: 'roleList',
  meta: {
    title: 'user',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/role',
      component: () => import('@/views/role-list/index'),
      meta: {
        title: 'roleList',
        icon: 'role'
      }
    }
  ]
}
