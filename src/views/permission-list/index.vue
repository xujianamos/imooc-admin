<!--
 * @Author: xujian
 * @Date: 2021-12-16 14:56:17
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-05 15:51:09
 * @Description: 权限列表
 * @FilePath: \imooc-admin\src\views\permission-list\index.vue
-->
<template>
  <div class="">
    <el-card>
      <el-table
        :data="allPermission"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="permissionName" :label="$t('msg.permission.name')" width="180"> </el-table-column>
        <el-table-column prop="permissionMark" :label="$t('msg.permission.mark')" width="180"> </el-table-column>
        <el-table-column prop="permissionDesc" :label="$t('msg.permission.desc')"> </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { permissionList } from '@/api/permission'
import { watchSwitchLang } from '@/utils/i18n'
import { ref } from 'vue'
/**
 * 权限分级：
 * 1. 一级权限为页面权限
 *  permissionMark 对应 路由名称
 * 2. 二级权限为功能权限
 *  permissionMark 对应 功能权限表
 */
// 所有权限
const allPermission = ref([])
const getPermissionList = async () => {
  allPermission.value = await permissionList()
}
getPermissionList()
watchSwitchLang(getPermissionList)
</script>
<style lang="scss" scoped></style>
