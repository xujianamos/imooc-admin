<!--
 * @Author: xujian
 * @Date: 2021-12-17 10:32:33
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-17 10:41:04
 * @Description:用来根据数据处理当前项为el-submenu||el-menu-item
 * @FilePath: \imooc-admin\src\layout\components\Sidebar\SidebarItem.vue
-->
<template>
  <!-- 支持渲染多级 menu 菜单 -->
  <el-submenu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
    </template>
    <!-- 循环渲染 -->
    <sidebar-item v-for="item in route.children" :key="item.path" :route="item"></sidebar-item>
  </el-submenu>
  <!-- 渲染 item 项 -->
  <el-menu-item v-else :index="route.path">
    <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
  </el-menu-item>
</template>

<script setup>
import MenuItem from './MenuItem'
import { defineProps } from 'vue'
// 定义 props
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>
