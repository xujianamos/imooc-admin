<!--
 * @Author: xujian
 * @Date: 2021-12-16 14:57:24
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-10 15:55:44
 * @Description: 用户信息
 * @FilePath: \imooc-admin\src\views\user-info\index.vue
-->
<template>
  <div class="user-info-container">
    <!-- 打印按钮区域 -->
    <el-card class="print-box">
      <el-button type="primary" v-print="printObj" :loading="printLoading">{{ $t('msg.userInfo.print') }}</el-button>
    </el-card>
    <el-card>
      <div id="userInfoBox" class="user-info-box">
        <!-- 标题 -->
        <h2 class="title">{{ $t('msg.userInfo.title') }}</h2>
        <!-- 头部 -->
        <div class="header">
          <!-- 头部渲染表格 -->
          <el-descriptions :column="2" border>
            <!-- 姓名 -->
            <el-descriptions-item :label="$t('msg.userInfo.name')">{{ detailData.username }}</el-descriptions-item>
            <!-- 性别 -->
            <el-descriptions-item :label="$t('msg.userInfo.sex')">{{ detailData.gender }}</el-descriptions-item>
            <!-- 民族 -->
            <el-descriptions-item :label="$t('msg.userInfo.nation')">{{ detailData.nationality }}</el-descriptions-item>
            <!-- 手机号 -->
            <el-descriptions-item :label="$t('msg.userInfo.mobile')">{{ detailData.mobile }}</el-descriptions-item>
            <!-- 居住地 -->
            <el-descriptions-item :label="$t('msg.userInfo.province')">{{ detailData.province }}</el-descriptions-item>
            <!-- 入职时间 -->
            <el-descriptions-item :label="$t('msg.userInfo.date')">{{
              $filters.dateFilter(detailData.openTime)
            }}</el-descriptions-item>
            <!-- 备注 -->
            <el-descriptions-item :label="$t('msg.userInfo.remark')" :span="2">
              <el-tag class="remark" size="small" v-for="(item, index) in detailData.remark" :key="index">{{
                item
              }}</el-tag>
            </el-descriptions-item>
            <!-- 联系地址 -->
            <el-descriptions-item :label="$t('msg.userInfo.address')" :span="2">{{
              detailData.address
            }}</el-descriptions-item>
          </el-descriptions>
          <!-- 头像渲染 -->
          <el-image class="avatar" :src="detailData.avatar" :preview-src-list="[detailData.avatar]"></el-image>
        </div>
        <!-- 内容 -->
        <div class="body">
          <!-- 内容渲染表格 -->
          <el-descriptions direction="vertical" :column="1" border>
            <!-- 经历 -->
            <el-descriptions-item :label="$t('msg.userInfo.experience')">
              <ul>
                <li v-for="(item, index) in detailData.experience" :key="index">
                  <span>
                    {{ $filters.dateFilter(item.startTime, 'YYYY/MM') }}
                    ----
                    {{ $filters.dateFilter(item.endTime, 'YYYY/MM') }}</span
                  >
                  <span>{{ item.title }}</span>
                  <span>{{ item.desc }}</span>
                </li>
              </ul>
            </el-descriptions-item>
            <!-- 专业 -->
            <el-descriptions-item :label="$t('msg.userInfo.major')">
              {{ detailData.major }}
            </el-descriptions-item>
            <!-- 荣耀 -->
            <el-descriptions-item :label="$t('msg.userInfo.glory')">
              {{ detailData.glory }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
        <!-- 尾部签名 -->
        <div class="foot">{{ $t('msg.userInfo.foot') }}</div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { userDetail } from '@/api/user-manage'
import { watchSwitchLang } from '@/utils/i18n'
import { defineProps, ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

// 数据相关
const detailData = ref({})
const getUserDetail = async () => {
  detailData.value = await userDetail(props.id)
}
getUserDetail()
// 语言切换
watchSwitchLang(getUserDetail)

// 打印相关
const printLoading = ref(false)
const printObj = {
  // 打印区域
  id: 'userInfoBox',
  // 打印标题
  popTitle: 'imooc-vue-element-admin',
  // 打印前
  beforeOpenCallback(vue) {
    printLoading.value = true
  },
  // 执行打印
  openCallback(vue) {
    printLoading.value = false
  }
}
</script>
<style lang="scss" scoped>
.print-box {
  margin-bottom: 20px;
  text-align: right;
}
.user-info-box {
  width: 1024px;
  margin: 0 auto;
  .title {
    text-align: center;
    margin-bottom: 18px;
  }
  .header {
    display: flex;
    ::v-deep .el-descriptions {
      flex-grow: 1;
    }
    .avatar {
      width: 187px;
      box-sizing: border-box;
      padding: 30px 20px;
      border: 1px solid #ebeef5;
      border-left: none;
    }
    .remark {
      margin-right: 12px;
    }
  }
  .body {
    ul {
      list-style: none;
      li {
        span {
          margin-right: 62px;
        }
      }
    }
  }
  .foot {
    margin-top: 42px;
    text-align: right;
  }
}
</style>
