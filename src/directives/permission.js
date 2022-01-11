/*
 * @Author: xujian
 * @Date: 2022-01-06 10:00:06
 * @LastEditors: xujian
 * @LastEditTime: 2022-01-11 22:52:59
 * @Description:权限指令
 * @FilePath: /imooc-admin/src/directives/permission.js
 */
import store from '@/store'

/**
 * @description: 按钮权限指令
 * @param {*} el dom元素
 * @param {object} binding 传递的值
 * @return {*}
 */
function checkPermission(el, binding) {
  // 获取绑定的值，此处为权限
  const { value } = binding
  // 获取当前用户的所有功能指令
  const points = store.getters.userInfo.permission.points
  // 当传入的指令集为数组时
  if (value && value instanceof Array) {
    // 匹配对应的指令
    const hasPermission = points.some(point => {
      return value.includes(point)
    })
    // 如果无法匹配，则表示当前用户无该指令，那么删除对应的功能按钮
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  } else {
    // eslint-disabled-next-line
    // 抛出错误提示必须是一个数组
    throw new Error('v-permission value is ["admin","editor"]')
  }
}

export default {
  // 在绑定元素的父组件被挂载后调用
  mounted(el, binding) {
    checkPermission(el, binding)
  },
  // 在包含组件的 VNode 及其子组件的 VNode 更新后调用
  update(el, binding) {
    checkPermission(el, binding)
  }
}
