<!--
 * @Author: xujian
 * @Date: 2021-12-15 20:11:38
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-22 20:14:02
 * @Description: 侧边栏
 * @FilePath: \imooc-admin\src\layout\components\Sidebar\index.vue
-->
<template>
  <div class="">
    <div class="logo-container">
      <el-avatar
        :size="logoHeight"
        shape="square"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
      />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">{{ $t('msg.test') }}</h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
import {} from 'vue'
const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  /* height: 44px; */
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
  /* 修改头像背景色 */
  .el-avatar {
    --el-avatar-background-color: none;
  }
}
</style>
