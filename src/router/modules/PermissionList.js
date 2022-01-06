/*
 * @Author: xujian
 * @Date: 2022-01-06 09:48:27
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-06 09:48:28
 * @Description:
 * @FilePath: \imooc-admin\src\router\modules\PermissionList.js
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
      path: '/user/permission',
      component: () => import('@/views/permission-list/index'),
      meta: {
        title: 'permissionList',
        icon: 'permission'
      }
    }
  ]
}
