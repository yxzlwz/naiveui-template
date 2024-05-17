<script setup lang="ts">
import { Axios, errorHandler } from '../../plugins/axios';
import naiveui from '../../plugins/naiveui';
import { ref } from 'vue';
import { useStore } from '../../stores';
import router from '../../router';
import { _ } from '../../i18n';

const store = useStore();

const username = ref(''),
  password = ref(''),
  email = ref(''),
  loading = ref(false);

const login = async () => {
    if (!username.value || !password.value) {
      naiveui.message.error('用户名或密码不能为空');
      return;
    }
    loading.value = true;
  },
  register = async () => {
    if (!username.value || !password.value || !email.value) {
      naiveui.message.error('注册信息不能为空');
      return;
    }
    loading.value = true;
  };
</script>

<template>
  <div style="display: flex; justify-content: center">
    <n-card style="max-width: 35rem; margin: 10vh 0">
      <n-tabs
        animated
        default-value="login"
        size="large"
        justify-content="space-evenly"
      >
        <n-tab-pane name="login" tab="登录">
          <n-form style="padding: 1rem; margin-top: 0.5rem">
            <n-form-item-row label="用户名">
              <n-input v-model:value="username" />
            </n-form-item-row>
            <n-form-item-row label="密码">
              <n-input
                type="password"
                show-password-on="mousedown"
                v-model:value="password"
                @keydown.enter="login"
              />
            </n-form-item-row>
            <n-form-item-row>
              <n-button type="primary" block secondary strong @click="login">
                登录
              </n-button>
            </n-form-item-row>
          </n-form>
        </n-tab-pane>

        <n-tab-pane name="signup" tab="注册">
          <n-form style="padding: 1rem; margin-top: 0.5rem">
            <n-form-item-row label="用户名">
              <n-input v-model:value="username" />
            </n-form-item-row>
            <n-form-item-row label="密码">
              <n-input
                type="password"
                show-password-on="mousedown"
                v-model:value="password"
              />
            </n-form-item-row>
            <n-form-item-row label="邮箱">
              <n-input v-model:value="email" />
            </n-form-item-row>
            <n-form-item-row>
              <n-button type="primary" block secondary strong @click="register">
                注册
              </n-button>
            </n-form-item-row>
          </n-form>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>
