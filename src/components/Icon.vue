<template>
  <svg class="icon" aria-hidden="true" @click="$emit('click', $event)">
    <use xlink:href="'#icon-' + name"></use>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'Icon',
  props: ['name'],
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