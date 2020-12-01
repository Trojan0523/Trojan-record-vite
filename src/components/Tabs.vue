<template>
  <ul class="tabs">
    <li class="tabs-item" v-for="item in dataSource" :key="item.value" :class="liClass(item)" @click="select(item)">
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Tabs',
})
</script>

<style lang="scss" scoped>
  .tabs {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
    &-item {
      width: 50%;
      line-height: 64px;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333333;
      }
    }
  }
</style>