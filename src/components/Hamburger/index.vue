<!--
 * @Author: xujian
 * @Date: 2021-12-17 15:06:33
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-19 23:46:19
 * @Description: 导航栏左侧的折叠按钮组件
 * @FilePath: /imooc-admin/src/components/Hamburger/index.vue
-->
<template>
  <div class="hamburger-container" @click="toggleClick">
    <svg-icon class="hamburger" :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const toggleClick = () => {
  store.commit('app/triggerSidebarOpened')
}

const icon = computed(() => (store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed'))
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
