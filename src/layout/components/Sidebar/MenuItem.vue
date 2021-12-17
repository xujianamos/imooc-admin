<!--
 * @Author: xujian
 * @Date: 2021-12-17 10:32:40
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-17 10:34:46
 * @Description: 处理 `el-menu-item` 样式
 * @FilePath: \imooc-admin\src\layout\components\Sidebar\MenuItem.vue
-->
<template>
  <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
  <svg-icon v-else :icon="icon"></svg-icon>
  <span>{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
