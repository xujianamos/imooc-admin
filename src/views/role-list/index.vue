<!--
 * @Author: xujian
 * @Date: 2021-12-16 14:57:00
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-05 17:38:10
 * @Description: 角色列表
 * @FilePath: \imooc-admin\src\views\role-list\index.vue
-->
<template>
  <div class="">
    <el-card>
      <el-table :data="allRoles" border style="width: 100%">
        <el-table-column :label="$t('msg.role.index')" type="index" width="120"> </el-table-column>
        <el-table-column :label="$t('msg.role.name')" prop="title"> </el-table-column>
        <el-table-column :label="$t('msg.role.desc')" prop="describe"> </el-table-column>
        <el-table-column :label="$t('msg.role.action')" prop="action" width="260" #default="{ row }">
          <el-button type="primary" size="mini" @click="onDistributePermissionClick(row)">
            {{ $t('msg.role.assignPermissions') }}
          </el-button>
        </el-table-column>
      </el-table>
    </el-card>
    <distribute-permission v-model="distributePermissionVisible" :roleId="selectRoleId"></distribute-permission>
  </div>
</template>

<script setup>
import { roleList } from '@/api/role'
import { watchSwitchLang } from '@/utils/i18n'
import { ref } from 'vue'
import DistributePermission from './components/DistributePermission.vue'

const allRoles = ref([])
const getRoleList = async () => {
  allRoles.value = await roleList()
}
getRoleList()
watchSwitchLang(getRoleList)

/**
 * 分配权限
 */
const distributePermissionVisible = ref(false)
const selectRoleId = ref('')
const onDistributePermissionClick = row => {
  distributePermissionVisible.value = true
  selectRoleId.value = row.id
}
</script>
<style lang="scss" scoped></style>
