<!--
 * @Author: xujian
 * @Date: 2021-12-15 20:12:06
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-18 18:20:32
 * @Description: 内容区
 * @FilePath: /imooc-admin/src/layout/components/AppMain.vue
-->
<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
.app-main {
  /* 浏览器可视区域的高度 100vh */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
