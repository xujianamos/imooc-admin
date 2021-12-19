<!--
 * @Author: xujian
 * @Date: 2021-12-16 14:39:26
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-19 15:19:01
 * @Description: 动态菜单组件
 * @FilePath: /imooc-admin/src/layout/components/Sidebar/SidebarMenu.vue
-->
<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :default-active="activeMenu"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    :unique-opened="true"
    router
    :collapse="!$store.getters.sidebarOpened"
  >
    <!-- 子集 menu 菜单 -->
    <sidebar-item v-for="item in routes" :key="item.path" :route="item"></sidebar-item>
  </el-menu>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
// console.log(JSON.stringify(routes.value))
// 计算高亮 menu 的方法
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>
