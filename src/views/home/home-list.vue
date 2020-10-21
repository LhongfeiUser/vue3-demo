<template>
  <div class="list">
    list
    <van-button
      v-for="i in list"
      :key="i"
      type="primary"
      @click="handleAdd(i)"
      size="mini"
    >
      +{{ i }}
    </van-button>
    <van-button
      v-for="i in list"
      :key="i"
      type="primary"
      @click="handleSubtrab(i)"
      size="mini"
    >
      -{{ i }}
    </van-button>
    <p>{{ count }}</p>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const state = reactive({
      // 定义响应式数据对象
      list: [1, 2, 3, 4],
      count: computed(() => {
        return store.state.count;
      })
    });
    const handleAdd = (num: number) => {
      store.dispatch("handleAdd", num);
    };
    const handleSubtrab = (num: number) => {
      store.dispatch("handleSubtrab", num);
    };
    return {
      ...toRefs(state),
      //   count,
      handleAdd,
      handleSubtrab
    };
  }
});
</script>
<style lang="scss" scoped>
.list {
  margin-top: 56px;
}
</style>
