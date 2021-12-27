<!--
 * @Author: xujian
 * @Date: 2021-12-16 14:55:57
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-27 19:56:57
 * @Description: 导入
 * @FilePath: /imooc-admin/src/views/import/index.vue
-->
<template>
  <upload-excel :onSuccess="onSuccess"></upload-excel>
</template>

<script setup>
import {} from 'vue'
import UploadExcel from '@/components/UploadExcel'
import { generateData } from './utils'
import { ElMessage } from 'element-plus'
import { userBatchImport } from '@/api/user-manage.js'
import { useRouter } from 'vue-router'
const router = useRouter()
/**
 * 数据解析成功之后的回调
 */
const onSuccess = async ({ header, results }) => {
  if (!results.length) {
    return ElMessage.warning('请填写数据')
  }
  const updateData = generateData(results)
  await userBatchImport(updateData)
  ElMessage.success({
    message: results.length + i18n.t('msg.excel.importSuccess'),
    type: 'success'
  })
  router.push('/user/manage')
}
</script>
<style lang="scss" scoped></style>
