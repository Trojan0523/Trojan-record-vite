<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'NumberPad',
  props: {
    output: {
      type: String,
      default: '0',
    }
  },
  setup(props, context) {
    const output = ref(props.output);
    // props 是响应式的，不能用ES6进行解构，否则会消除prop的响应性
    // 写法1 ： 引入toRefs,使用{prop} = toRefs(props);
    // 写法2 ： 传入的props直接点props后面的变量 props.prop
    // const {output} = toRefs(props);
    const inputContent = (event: MouseEvent) => {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent as string;
      if (output.value.length === 16) return;
      if (output.value === '0') {
        if ('0123456789'.indexOf(input) >= 0) {
          output.value = input;
        } else {
          output.value += input;
        }
        return;
      }
      if (output.value.indexOf('.') >= 0 && input === '.') return;
      output.value += input;
    }
    const remove = () => {
      const removeNumberLastIndex = output.value.substring(0, output.value.length - 1);
      if (output.value.length === 1) {
        output.value = '0'
      } else {
        output.value = removeNumberLastIndex;
      }
    }
    const clear = () => {
      output.value = '0'
    }
    const ok  = () => {
      const number = parseFloat(output.value);
      context.emit('update:value', number);
      context.emit('submit', number);
      output.value = '0'
    }
    return {inputContent, remove, clear, ok, output}
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/style/helper";
$bg: #94bbe9;

.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    height: 72px;
  }

  .buttons {
    @extend %clearFix;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      border-radius: 24px;

      &.ok {
        height: 64*2px;
        float: right;
      }

      &.zero {
        width: 25*2%;
      }

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 4*2%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 4*3%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 4*4%);
      }

      &:nth-child(14) {
        background: darken($bg, 4*5%);
      }

      &:nth-child(12) {
        background: darken($bg, 4*6%);
      }
    }
  }
}
</style>