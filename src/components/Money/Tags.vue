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
import {defineComponent} from 'vue';
import useTagHelper from "../../hooks/useTagHelper";
export default defineComponent({
  name: 'Tags',
  props: {
    selectedTags: {
      type: Array as PropType<string[]>,
    }
  },
  setup(props, context) {
    const toggle = (tag: string) => {
      const index = props.selectedTags.indexOf(tag);
      if (index >= 0) {
        props.selectedTags.splice(index, 1);
      } else {
        props.selectedTags.push(tag);
      }
      context.emit('update:value', props.selectedTags);
    }
    const tagList = () => {
      // return Reflect.get(this.$store.state.tagList);
    }
    const {createTag} = useTagHelper();
    // this.$store.commit('fetchTags');
    return {toggle, tagList, createTag}
  },

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