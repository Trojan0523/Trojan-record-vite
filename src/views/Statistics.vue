<template>
  <div>
    <Layout>
      <Tabs class-prefix="type" :data-source="RecordTypeList" v-model:value="type"/>
          <div class="chart-wrapper" ref="chartWrapper">
            <Chart class="chart" :options="chartOptions"/>
          </div>
      <ol v-if="groupList.length > 0">
        <li v-for="(group, index) in groupList" :key="index">
          <h3 class="title">
            {{ beautify(group.title) }}
            <span>￥{{ group.total }}</span>
          </h3>
          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              <span>{{ tagString(item.tags) }}</span>
              <span class="notes">{{ item.notes }}</span>
              <span>￥{{ item.amount }}</span>
            </li>
          </ol>
        </li>
      </ol>
      <div class="noResults" v-else>
        目前没有相关记录
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref} from 'vue';
import {useStore} from 'vuex'
import Tabs from "../components/Tabs.vue";
import RecordTypeList from '../constants/RecordTypeList';
import dayjs from "dayjs";
import clone from "../lib/clone";
import Chart from "../components/Chart.vue";
import { find } from 'underscore';
export default defineComponent({
  name: 'Statistics',
  components: {
    Tabs,
    Chart
  },
  data() {
    return {
      RecordTypeList
    }
  },
  setup() {
    const store = useStore();
    const type = ref('-');
    const chartWrapper = ref(null);
    store.commit('fetchRecords');
    const beautify = (title: string): string => {
      const day = dayjs(title);
      const now = dayjs();
      if (day.isSame(now, 'day')) {
        return '今天';
      } else if (day.isSame(now.add(1, 'day'), 'day')) {
        return '明天';
      } else if (day.isSame(now.add(2, 'day'), 'day')) {
        return '后天';
      } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
        return '昨天';
      } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
        return '前天';
      } else if (day.isSame(now, 'year')) {
        return day.format('M月D日');
      } else {
        return day.format('YYYY年M月D日')
      }
    }
    const tagString = (tags: Tag[]) => {
      return tags.length === 0 ? '无' : tags.map(t => t.name).join(', ');
    }
    const recordList = computed(() => {
      return (store.state as RootState).recordList;
    })
    const groupList = computed(() => {
      const newList = clone(recordList.value).filter(r => r.type === type.value).sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
      if (newList.length == 0) {
        return [] as Result;
      }
      type Result = { title: string; total?: number; items: RecordItem[] }[]
      const result: Result = [{title: dayjs(recordList.value[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
      for (let i = 1; i < newList.length; i++) {
        const current = newList[i];
        const last = result[result.length - 1];
        if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
          last.items.push(current);
        } else {
          result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
        }
      }
      result.map(group => {
        group.total = group.items.reduce((sum, item) => {
          return  sum + item.amount;
        }, 0);
      });
      return result;
    })
    const keyValueList = computed(() => {
      const today = new Date();
      const array = [];
      for (let i = 0; i <= 29; i++) {
        const dateString = dayjs(today).subtract(i, 'day').format('YYYY-MM-DD');
        const found = find(groupList.value, {title: dateString});
        array.push({key: dateString, value: found ? found.total: 0});
      }
      array.sort((a,b) => {
         if(a.key > b.key) {
           return 1;
         } else if(a.key === b.key) {
           return 0;
         } else {
           return -1;
         }
      });
      return array;
    })
    const chartOptions = computed(() =>{
      const keys = keyValueList.value.map(item => item.key);
      const values = keyValueList.value.map(item => item.value);
      return {
        grid: {
          left: 0,
          right: 0
        },
        xAxis: {
          type: 'category',
          data: keys,
          axisTick: {alignWithLabel: true},
          axisLine: {lineStyle: {color: '#666'}},
          axisLabel: {
            formatter: function (value: string){
              return value.substr(5);
            }
          }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [{
          symbol: 'circle',
          symbolSize: 12,
          itemStyle: {borderWidth: 1, color: '#666', borderColor: '#666'},
          data: values,
          type: 'line'
        }],
        tooltip: {
          show: true,
          triggerOn: 'click',
          position: 'top',
          formatter: '{c}'
        }
      };
    })
    onMounted(() => {
      const div = (chartWrapper.value as HTMLDviElement);
      div.scrollLeft = div.scrollWidth;
    })

    return {beautify, tagString, recordList, groupList, type, chartWrapper, keyValueList, chartOptions}
  }
})
</script>

<style lang="scss" scoped>
.echarts {
  max-width: 100%;
  height: 400px;
}

.noResults {
  padding: 16px;
  text-align: center;
}

::v-deep(.type-tabs-item) {
  background: #c4c4c4;

  &.selected {
    background: white;

    &::after {
      display: none;
    }
  }

  .interval-tabs-item {
    height: 48px;
  }
}

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  @extend %item;
}

.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}

.record {
  @extend %item;
  background: white;
}

.chart {
  width: 430%;

  &-wrapper {
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>