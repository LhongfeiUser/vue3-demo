<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeList></HomeList>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HomeHeader from "./home-header";
import HomeList from "./home-list";

export default defineComponent({
  components: { HomeHeader, HomeList },
  setup(props, context) {
    console.log(props, "props");
    console.log(context, "context");
  }
});
</script>

<style></style>
