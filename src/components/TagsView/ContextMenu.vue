<!--
 * @Author: xujian
 * @Date: 2021-12-23 21:59:51
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-23 22:18:30
 * @Description: tags右键展示组件
 * @FilePath: /imooc-admin/src/components/TagsView/ContextMenu.vue
-->
<template>
  <ul class="context-menu-container">
    <li @click="onRefreshClick">
      {{ $t('msg.tagsView.refresh') }}
    </li>
    <li @click="onCloseRightClick">
      {{ $t('msg.tagsView.closeRight') }}
    </li>
    <li @click="onCloseOtherClick">
      {{ $t('msg.tagsView.closeOther') }}
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const props = defineProps({
  index: {
    type: Number,
    required: true
  }
})
const router = useRouter()
const store = useStore()
/**
 * 刷新事件
 */
const onRefreshClick = () => {
  router.go(0)
}
/**
 * 关闭右侧
 */
const onCloseRightClick = () => {
  store.commit('app/removeTagsView', {
    type: 'right',
    index: props.index
  })
}
/**
 * 关闭其他
 */
const onCloseOtherClick = () => {
  store.commit('app/removeTagsView', {
    type: 'other',
    index: props.index
  })
}
</script>

<style lang="scss" scoped>
.context-menu-container {
  position: fixed;
  background: #fff;
  z-index: 3000;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
