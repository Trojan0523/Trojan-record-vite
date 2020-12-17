<template>
  <svg class="icon" aria-hidden="true" @click="$emit('click', $event)">
    <use :xlink:href="'#icon-' + name"/>
  </svg>
</template>

<script lang="ts">
import '../assets/icons/iconfont.js';
import '../assets/icons/iconfont.css';
export default {
  name: 'Icon',
  props: ['name'],
  emits: ['click'],
}
</script>

<style lang="scss">
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>