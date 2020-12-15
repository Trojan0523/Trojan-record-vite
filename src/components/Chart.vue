<template>
  <div class="wrapper" ref="wrapper"></div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, watch,} from 'vue';
export default defineComponent({
  props: {
    chart : {
      type: echarts | undefined,
    },
    options: {
      type: echarts.EChartOption,
    }
  },
  setup(props) {
    const wrapper = ref(null);
    const chart = ref(props.chart);
    const options = ref(props.options)
    onMounted(() => {
      if(options.value === undefined) {
        return console.error('options为空');
      }
      chart.value = echarts.init(wrapper.value as HTMLDivElement);
      chart.value.setOption(options.value);
    })
    // 对echarts传入options进行监听变化
    watch(() => props.options, (newValue: echarts.EChartOption)=> {
      chart.value!.setOption(newValue);
    })
    return {wrapper}
  }
})
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 400px;
  }
</style>