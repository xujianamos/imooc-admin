<!--
 * @Author: xujian
 * @Date: 2021-12-25 20:38:36
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-25 22:22:38
 * @Description: 功能组件
 * @FilePath: /imooc-admin/src/views/profile/components/feature.vue
-->
<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item v-for="item in features" :key="item.id" :title="item.title" :name="item.id">
      <div v-html="item.content"></div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const activeName = ref(0)
defineProps({
  features: {
    type: Array,
    required: true
  }
})
</script>
<style lang="scss" scoped>
::v-deep .el-collapse-item__header {
  font-weight: bold;
}

.el-collapse-item {
  ::v-deep a {
    color: #2d62f7;
    margin: 0 4px;
  }
}
</style>
