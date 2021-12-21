<!--
 * @Author: xujian
 * @Date: 2021-12-17 10:32:40
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-21 17:46:48
 * @Description: 处理 `el-menu-item` 样式
 * @FilePath: \imooc-admin\src\layout\components\Sidebar\MenuItem.vue
-->
<template>
  <!-- element icon -->
  <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
  <!-- 非element icon -->
  <svg-icon v-else :icon="icon"></svg-icon>
  <!-- 文本 -->
  <span>{{ generateTitle(title) }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
import { generateTitle } from '@/utils/i18n'
defineProps({
  // 标题
  title: {
    type: String,
    required: true
  },
  // 图标
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
