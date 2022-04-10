<!--
 * @Author: xujian
 * @Date: 2021-12-09 09:20:21
 * @LastEditors: xujian
 * @LastEditTime: 2022-04-09 21:38:01
 * @Description: 登录页面
 * @FilePath: /imooc-admin/src/views/login/index.vue
-->
<template>
  <div class="login-container">
    <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginFromRef">
      <!-- 标题区域 -->
      <div class="title-container">
        <h3 class="title">{{ $t('msg.login.title') }}</h3>
        <lang-select class="lang-select" />
      </div>
      <!-- 用户名 -->
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user"></svg-icon>
        </span>
        <el-input placeholder="username" name="username" type="text" v-model="loginForm.username"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password"></svg-icon>
        </span>
        <el-input placeholder="password" name="password" v-model="loginForm.password" :type="passwordType"></el-input>
        <span class="show-pwd">
          <svg-icon :icon="passwordType === 'password' ? 'eye' : 'eye-open'" @click="onChangePwdType"></svg-icon>
        </span>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button type="primary" style="width: 100%; margin-bottom: 30px" :loading="loading" @click="handleLogin">{{
        $t('msg.login.loginBtn')
      }}</el-button>
      <div class="tips" v-html="$t('msg.login.desc')"></div>
    </el-form>
  </div>
</template>

<script setup>
// 导入的组件可以直接使用
// import SvgIcon from '@/components/SvgIcon'
import LangSelect from '@/components/LangSelect'
import { validatePassword } from './rules'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const router = useRouter()
// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})
// 验证规则
// 只有在组件中才可以使用i18n实例来修改
const i18n = useI18n()
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: i18n.t('msg.login.usernameRule')
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})
// 处理密码框文本显示状态
const passwordType = ref('password')
// template 中绑定的方法，直接声明即可
const onChangePwdType = () => {
  // 当passwordType 的值为password的时候，改为text
  // 使用 ref 声明的数据，在script中使用时，需要加value来获取具体的值，但是在template中使用时，不需要加value
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
// 登录动作处理
const loading = ref(false)
// 创建表单的ref，会自动的到template中去找loginFromRef
const loginFromRef = ref(null)
const store = useStore()
const handleLogin = () => {
  // 1.进行表单验证
  loginFromRef.value.validate(valid => {
    if (!valid) return

    // 2.触发登陆操作
    loading.value = true
    store
      .dispatch('user/login', loginForm.value)
      .then(() => {
        loading.value = false
        // TODO: 3.登录后操作
        router.push('/')
      })
      .catch(err => {
        console.log(err)
        loading.value = false
      })
  })
}
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: none;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
    .tips {
      font-size: 16px;
      color: white;
      line-height: 24px;
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  ::v-deep .lang-select {
    position: absolute;
    top: 4px;
    right: 0;
    background-color: #fff;
    font-size: 22px;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
