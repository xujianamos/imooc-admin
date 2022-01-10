<!--
 * @Author: xujian
 * @Date: 2021-12-16 14:55:57
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-10 09:59:06
 * @Description: 导入
 * @FilePath: \imooc-admin\src\views\import\index.vue
-->
<template>
  <upload-excel :onSuccess="onSuccess"></upload-excel>
</template>

<script setup>
import {} from 'vue'
import { useI18n } from 'vue-i18n'
import UploadExcel from '@/components/UploadExcel'
import { generateData } from './utils'
import { ElMessage } from 'element-plus'
import { userBatchImport } from '@/api/user-manage.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const i18n = useI18n()
/**
 * 数据解析成功之后的回调
 */
const onSuccess = async ({ header, results }) => {
  if (!results.length) {
    return ElMessage.warning('请填写数据')
  }
  const updateData = generateData(results)
  await userBatchImport(updateData)
  ElMessage.success(results.length + i18n.t('msg.excel.importSuccess'))
  // 跳转回员工管理页面
  router.push('/user/manage')
}
</script>
<style lang="scss" scoped></style>
