/*
 * @Author: xujian
 * @Date: 2021-12-08 20:30:46
 * @LastEditors: xujian
 * @LastEditTime: 2021-12-17 23:41:41
 * @Description:eslint规则
 * @FilePath: /imooc-admin/.eslintrc.js
 */
// ESLINT配置文件遵循commonjs的导出规则，所导出的对象就是eslint的配置对象
module.exports = {
  // 表示当前目录即为根目录，eslint规则将被限制到该目录下
  root: true,
  // env 表示启用eslint检测的环境
  env: {
    // 在node环境下启动eslint检测
    node: true
  },
  // eslint 中基础配置需要继承的配置
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  // 解析器
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 需要修改的启用规则及其各自的错误级别
  /**
  *错误级别分为三种：
  * "off" 或 0 - 关闭规则
  * "warn" 或 1 - 开启规则，使用警告级别的错误：warn（不会导致程序退出）
  * "error" 或 2 - 开启规则，使用错误级别的错误：error（当被触发的时候，程序会退出）

   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-before-function-paren': 0
  }
}
