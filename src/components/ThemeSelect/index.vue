<!--
 * @Author: xujian
 * @Date: 2021-12-22 09:43:29
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-22 09:48:19
 * @Description: 动态换肤组件
 * @FilePath: \imooc-admin\src\components\ThemeSelect\index.vue
-->
<template>
  <!--主题图标v-bind：https://v3.cn.vuejs.org/api/instance-properties.html#attrs -->
  <el-dropdown v-bind="$attrs" trigger="click" class="theme" @command="handleSetTheme">
    <div>
      <el-tooltip :content="$t('msg.navBar.themeChange')">
        <svg-icon icon="change-theme" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('msg.theme.themeColorChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 展示弹出层 -->
  <div>
    <select-color v-model="selectColorVisible"></select-color>
  </div>
</template>

<script setup>
import SelectColor from './components/SelectColor.vue'
import { ref } from 'vue'

const selectColorVisible = ref(false)
const handleSetTheme = command => {
  selectColorVisible.value = true
}
</script>

<style lang="scss" scoped></style>
