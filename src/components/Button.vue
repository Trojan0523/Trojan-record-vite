<template>
  <button class="button" @click="$emit('click', $event)">
    <slot/>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
})
</script>

<style lang="scss" scoped>
.button {
  background: #767676;
  color: whitesmoke;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>