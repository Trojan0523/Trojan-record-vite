<template>
  <div>
    <label class="formItem">
      <span class="name">{{ fieldName }}</span>
      <template v-if="type === 'date'">
        <input :placeholder="placeholder"
               :type="type || 'date'"
               @input="onValueChanged($event.target.value)"
               :value="formatTime(value)">
      </template>
      <template v-else>
        <input :placeholder="placeholder"
               :type="type || 'text'"
               @input="onValueChanged($event.target.value)"
               :value="value"/>
      </template>
    </label>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'FormItem',
  props: {
    fieldName: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
    },
    value: {
      type: String,
      default: '',
      readOnly: true,
    },
    type: {
      type: String,
    }
  },
  setup(props, context) {
    const onValueChanged = (value: string) => {
      context.emit('update:value', value);
    }
    const formatTime = (isoString: string) => {
      return dayjs(isoString).format('YYYY-MM-DD');
    }
    return {onValueChanged, formatTime}
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