<!--
 * @Author: xujian
 * @Date: 2021-12-23 22:35:09
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-23 23:40:48
 * @Description: 引导页
 * @FilePath: /imooc-admin/src/components/Guide/index.vue
-->
<template>
  <div>
    <el-tooltip :content="$t('msg.navBar.guide')">
      <span @click="onClick">
        <svg-icon id="guide-start" icon="guide" />
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
    closeBtnText: i18n.t('msg.guide.close'),
    nextBtnText: i18n.t('msg.guide.next'),
    prevBtnText: i18n.t('msg.guide.prev')
  })
})
const onClick = () => {
  driver.defineSteps(steps(i18n))
  driver.start()
}
</script>

<style scoped></style>
