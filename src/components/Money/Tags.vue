<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Tags',

})
</script>

<style lang="scss" scoped>
$bg: #d9d9d9;
$h: 24px;

.tags {
  background: whitesmoke;
  display: flex;
  flex-direction: column-reverse;
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  overflow: scroll;
  overflow-x: hidden;


  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: $bg;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      line-height: $h;
      margin-top: 4px;

      &.selected {
        background: darken($bg, 50%);
        color: white;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>