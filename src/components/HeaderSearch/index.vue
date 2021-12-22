<!--
 * @Author: xujian
 * @Date: 2021-12-22 16:51:06
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-22 17:04:45
 * @Description: 页面搜索组件
 * @FilePath: \imooc-admin\src\components\headerSearch\index.vue
-->
<template>
  <div :class="{ show: isShow }" class="header-search">
    <svg-icon class-name="search-icon" icon="search" @click.stop="onShowClick" />
    <el-select
      ref="headerSearchSelectRef"
      class="header-search-select"
      v-model="search"
      filterable
      default-first-option
      remote
      placeholder="Search"
      :remote-method="querySearch"
      @change="onSelectChange"
    >
      <el-option v-for="option in 5" :key="option" :label="option" :value="option"></el-option>
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { filterRouters } from '@/utils/route'
import { useRouter } from 'vue-router'
import { generateRoutes } from './FuseData'
import Fuse from 'fuse.js'

// 控制 search 显示
const isShow = ref(false)
// el-select 实例
const headerSearchSelectRef = ref(null)
const onShowClick = () => {
  isShow.value = !isShow.value
  headerSearchSelectRef.value.focus()
}

// search 相关
const search = ref('')
// 搜索方法
const querySearch = query => {
  console.log('querySearch')
  console.log(fuse.search(query))
}
// 选中回调
const onSelectChange = () => {
  console.log('onSelectChange')
}
// 检索数据源
const router = useRouter()
const searchPool = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  // console.log(generateMenus(filterRoutes))
  return generateRoutes(filterRoutes)
})
console.log(searchPool)
/**
 * 搜索库相关
 */
const fuse = new Fuse(searchPool.value, {})
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;
  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
