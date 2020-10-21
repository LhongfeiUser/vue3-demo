<template>
  <div>
    <van-nav-bar
      title="首页"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #right>
        <van-dropdown-menu>
          <van-dropdown-item
            v-model="value2"
            active-color="#ee0a24"
            :options="option2"
            @change="handleChange"
          />
        </van-dropdown-menu>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { Toast } from "vant";
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const state = reactive({
      value2: 0,
      option2: [
        { text: "模块一", value: 0 },
        { text: "模块二", value: 1 },
        { text: "模块三", value: 2 },
        { text: "模块四", value: 3 },
        { text: "模块五", value: 4 }
      ]
    });
    const handleChange = modulState => {
      store.dispatch("handleChangeModulState", modulState);
    };
    const onClickLeft = () => {
      Toast("返回");
    };

    return {
      ...toRefs(state),
      onClickLeft,
      handleChange
    };
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #001529;
  ::v-deep .van-nav-bar__text,
  ::v-deep .van-nav-bar__title,
  ::v-deep .van-icon-arrow-left,
  ::v-deep .van-dropdown-menu__title {
    color: #fff;
  }

  .van-dropdown-menu__item,
  ::v-deep .van-dropdown-menu__bar {
    background-color: #001529;
  }
  ::v-deep .van-dropdown-menu__bar {
    height: 46px;
  }
}
</style>
