/*
 * @Author: xujian
 * @Date: 2021-12-09 14:41:29
 * @LastEditors: xujian
 * @LastEditTime: 2022-04-09 22:27:19
 * @Description:处理svg图标资源
 * @FilePath: /imooc-admin/src/icons/index.js
 */
import SvgIcon from '@/components/SvgIcon'

// https://webpack.docschina.org/guides/dependency-management/#requirecontext
// 通过 require.context() 函数来创建自己的 context
const svgRequire = require.context('./svg', false, /\.svg$/)
// 此时返回一个 require 的函数，可以接受一个 request 的参数，用于 require 的导入。
// 该函数提供了三个属性，可以通过 require.keys() 获取到所有的 svg 图标
// 遍历图标，把图标作为 request 传入到 require 导入函数中，完成本地 svg 图标的导入
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))

// 全局注册
export default app => {
  app.component('svg-icon', SvgIcon)
}
