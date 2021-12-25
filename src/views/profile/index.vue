<!--
 * @Author: xujian
 * @Date: 2021-12-16 14:56:37
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-25 22:21:45
 * @Description: 个人中心
 * @FilePath: /imooc-admin/src/views/profile/index.vue
-->
<template>
  <div class="my-container">
    <el-row>
      <!-- 左侧模块 -->
      <el-col :span="6">
        <!-- 项目介绍组件 -->
        <project-card class="user-card" :features="featureData"></project-card>
      </el-col>
      <!-- 右侧模块 -->
      <el-col :span="18">
        <el-card>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
              <!-- 功能组件 -->
              <feature :features="featureData" />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.chapter')" name="chapter">
              <!-- 章节组件 -->
              <chapter />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.author')" name="author">
              <!-- 作者组件 -->
              <author />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import ProjectCard from './components/ProjectCard.vue'
import Chapter from './components/Chapter.vue'
import Feature from './components/Feature.vue'
import Author from './components/Author.vue'
import { ref } from 'vue'
import { getFeature } from '@/api/user'
import { watchSwitchLang } from '@/utils/i18n'

const activeName = ref('feature')

const featureData = ref([])
const getFeatureData = async () => {
  featureData.value = await getFeature()
}
getFeatureData()

// 监听语言切换
watchSwitchLang(getFeatureData)
</script>

<style lang="scss" scoped>
.my-container {
  .user-card {
    margin-right: 20px;
  }
}
</style>
