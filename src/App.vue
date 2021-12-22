<!--
 * @Author: xujian
 * @Date: 2021-12-07 10:57:32
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-22 11:01:09
 * @Description: app组件
 * @FilePath: \imooc-admin\src\App.vue
-->
<template>
  <router-view />
</template>
<script setup>
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'

const store = useStore()
generateNewStyle(store.getters.mainColor).then(newStyleText => {
  writeNewStyle(newStyleText)
})
</script>
<style lang="scss"></style>
