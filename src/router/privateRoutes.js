/*
 * @Author: xujian
 * @Date: 2021-12-16 21:42:57
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-06 09:49:50
 * @Description:私有路由表
 * @FilePath: \imooc-admin\src\router\privateRoutes.js
 */
import ArticleCreaterRouter from './modules/ArticleCreate'
import ArticleRouter from './modules/Article'
import PermissionListRouter from './modules/PermissionList'
import RoleListRouter from './modules/RoleList'
import UserManageRouter from './modules/UserManage'

export const asyncRoutes = [RoleListRouter, UserManageRouter, PermissionListRouter, ArticleCreaterRouter, ArticleRouter]
