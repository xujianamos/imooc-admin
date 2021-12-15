/*
 * @Author: xujian
 * @Date: 2021-12-07 10:57:32
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-15 23:00:03
 * @Description:项目入口文件
 * @FilePath: /imooc-admin/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 导入全局样式
import './styles/index.scss'

import './permission'

// 导入 svgIcon
import installIcons from '@/icons'
const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).mount('#app')
