<template>
  <div>
    <label class="formItem">
      <span class="name">备注</span>
      <input placeholder="在这里输入备注">
      <!--      <template v-if="type === 'date'">-->

<!--      </template>-->
<!--      <template v-else>-->
<!--          -->
<!--      </template>-->
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormItem',
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .formItem {
    font-size: 14px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    .name {
      padding-right: 16px;
    }
    input {
      line-height: 40px;
      flex-grow: 1;
      background: transparent;
      border: none;
      border-bottom: 1px solid #eeeeee;
      padding-right: 16px;
    }
  }
</style>