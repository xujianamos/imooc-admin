<!--
 * @Author: xujian
 * @Date: 2022-01-05 15:51:31
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-10 17:48:19
 * @Description: 为用户分配角色弹出层
 * @FilePath: \imooc-admin\src\views\user-manage\components\roles.vue
-->
<template>
  <el-dialog :title="$t('msg.excel.roleDialogTitle')" :model-value="modelValue" @close="closed">
    <!-- 渲染角色 -->
    <el-checkbox-group v-model="userRoleTitleList">
      <el-checkbox v-for="item in allRoleList" :key="item.id" :label="item.title"></el-checkbox>
    </el-checkbox-group>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="onConfirm">{{ $t('msg.universal.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
import { roleList } from '@/api/role'
import { watchSwitchLang } from '@/utils/i18n'
import { useI18n } from 'vue-i18n'
import { updateRole, userRoles } from '@/api/user-manage.js'
import { ElMessage } from 'element-plus'
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['update:modelValue', 'updateRole'])

/**
  确定按钮点击事件
 */
const i18n = useI18n()
const onConfirm = async () => {
  // 处理数据结构
  const roles = userRoleTitleList.value.map(title => {
    return allRoleList.value.find(role => role.title === title)
  })

  await updateRole(props.userId, roles)

  ElMessage.success(i18n.t('msg.role.updateRoleSuccess'))
  closed()
  // 角色更新成功
  emits('updateRole')
}

/**
 * 关闭
 */
const closed = () => {
  emits('update:modelValue', false)
}

// 所有角色
const allRoleList = ref([])
// 获取所有角色数据的方法
const getListData = async () => {
  allRoleList.value = await roleList()
}
getListData()
watchSwitchLang(getListData)

// 当前用户角色
const userRoleTitleList = ref([])
// 获取当前用户角色
const getUserRoles = async () => {
  const res = await userRoles(props.userId)
  userRoleTitleList.value = res.role.map(item => item.title)
}
// 监听userId是否有值
watch(
  () => props.userId,
  val => {
    if (val) getUserRoles()
  }
)
</script>

<style lang="scss" scoped></style>
