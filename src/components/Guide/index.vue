<!--
 * @Author: xujian
 * @Date: 2021-12-23 22:35:09
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-25 15:59:40
 * @Description: 引导页
 * @FilePath: /imooc-admin/src/components/Guide/index.vue
-->
<template>
  <div>
    <el-tooltip :content="$t('msg.navBar.guide')">
      <span @click="onClick" id="guide-start">
        <svg-icon icon="guide" />
      </span>
    </el-tooltip>
  </div>
</template>

<script setup>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import steps from './steps'

const i18n = useI18n()

let driver = null
onMounted(() => {
  driver = new Driver({
    // 禁止点击蒙版关闭
    allowClose: false,
    // 关闭文本
    closeBtnText: i18n.t('msg.guide.close'),
    // 下一步文本
    nextBtnText: i18n.t('msg.guide.next'),
    // 上一步文本
    prevBtnText: i18n.t('msg.guide.prev')
  })
})
const onClick = () => {
  driver.defineSteps(steps(i18n))
  driver.start()
}
</script>

<style scoped></style>
