/*
 * @Author: xujian
 * @Date: 2021-12-07 10:57:32
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-09 10:43:29
 * @Description:项目入口文件
 * @FilePath: \imooc-admin\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 导入全局样式
import './styles/index.scss'
const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')
