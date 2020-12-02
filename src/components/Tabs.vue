<template>
  <ul class="tabs" :class="{[classPrefix+'-tabs']: classPrefix}">
    <li class="tabs-item"
        :key="item.value"
        :class="liClass(item)"
        v-for="item in dataSource"
        @click="select(item)">
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

type dataSourceItem = {
  text: string;
  value: string;
}

export default defineComponent({
  name: 'Tabs',
  props: {
    dataSource: {
      type: Array,
      required: true,
    } as dataSourceItem,
    value: {
      type: String || undefined,
      readonly: true
    },
    classPrefix: String,
  },
  setup(props, context) {
    const liClass = (item: dataSourceItem) => {
      return{
        [props.classPrefix + '-tabs-item']: props.classPrefix,
        selected: item.value === props.value
      }
    }
    const select = (item: dataSourceItem) => {
      context.emit('update:value', item.value)
    }
    return {liClass, select}
  }
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