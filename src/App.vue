<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  // 已启用类型推断
  name: 'App',
})
</script>

<style lang="scss">
@import "assets/style/reset.scss";
@import "assets/style/helper.scss";

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height: 1.5;
  font-size: 16px;
  font-family: $font-hei;
  background: #f5f5f5;
}
</style>