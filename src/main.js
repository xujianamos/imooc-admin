/*
 * @Author: xujian
 * @Date: 2021-12-07 10:57:32
 * @LastEditors: xujian
 * @LastEditTime: 2022-04-12 09:50:10
 * @Description:项目入口文件
 * @FilePath: \imooc-admin\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// i18n （PS：导入放到 APP.vue 导入之前，因为后面我们会在 app.vue 中使用国际化内容）
import i18n from '@/i18n'
// 导入全局样式
import './styles/index.scss'

// 导入路由鉴权
import './permission'

// 导入 svgIcon
import installIcons from '@/icons'
// filter
import installFilter from '@/filter'
// 指令
import installDirective from '@/directives'
const app = createApp(App)
installElementPlus(app)
installIcons(app)
installFilter(app)
installDirective(app)
app.use(store).use(router).use(i18n).mount('#app')
app.config.errorHandler = err => {
  /* 处理错误 */
  console.log(err)
}
