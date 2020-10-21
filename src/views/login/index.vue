<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import router from "@/router";
import { defineComponent, reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const state = reactive({
      username: "",
      password: ""
    });
    const onSubmit = async values => {
      await store.dispatch("handleLogin", values);
      if (store.state.token) {
        router.push("/");
      }
    };
    return {
      ...toRefs(state),
      onSubmit
    };
  }
});
</script>
