<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id" @click="toggle(tag)"
          :class="{selected: selectedTags.indexOf(tag)>=0}">{{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, PropType,ref} from 'vue';
import useTagHelper from "../../hooks/useTagHelper";
import {useStore} from "vuex";

export default defineComponent({
  name: 'Tags',
  props: {
    selectedTags: {
      type: Array as PropType<string[]>,
      default: [],
    }
  },
  setup(props, context) {
    const store = useStore();
    const {createTag} = useTagHelper();
    const selectedTags = ref(props.selectedTags)
    // 点击触发标签样式变化，选中标签加一
    const toggle = (tag: string) => {
      const index = selectedTags.value.indexOf(tag);
      if (index >= 0) {
        selectedTags.value.splice(index, 1);
      } else {
        selectedTags.value.push(tag);
      }
      context.emit('update:value', selectedTags.value);
    }
    const tagList = computed(() => {
      return store.state.tagList;
    })
    store.commit('fetchTags');
    return {toggle, createTag, tagList, selectedTags}
  }
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