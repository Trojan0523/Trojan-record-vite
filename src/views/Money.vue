<template>
  <Layout class-prefix="layout">
    <NumberPad v-model:value="record.amount" @submit="saveRecord"/>
    <Tabs v-model:value="record.type" :dataSource="RecordTypeList"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                v-model:value="record.notes"
                type="text"/>
      <FormItem field-name="日期"
                placeholder="在这里输入日期"
                v-model:value="record.createdAt"
                type="date"/>
    </div>
    <Tags @update:value="record.tags = $event"/>
  </Layout>
</template>

<script lang="ts">
import NumberPad from "../components/Money/NumberPad.vue";
import FormItem from "../components/Money/FormItem.vue";
import Tabs from "../components/Tabs.vue";
import Tags from "../components/Money/Tags.vue";
import {defineComponent, reactive} from 'vue';
import RecordTypeList from "../constants/RecordTypeList";
import {useStore} from "vuex";
export default defineComponent({
  name: 'Money',
  components: {
    NumberPad,
    Tabs,
    FormItem,
    Tags
  },
  data() {
    return {
      RecordTypeList,
    }
  },
  setup() {
    const store = useStore();
    const record = reactive({
      tags: [], notes: '', type: '-', amount: 0, createdAt: new Date().toISOString()
    })
    store.commit('fetchRecords')
    const onUpdateNotes = (value: string) => {
      record.notes = value;
    }
    const saveRecord = () => {
      if(!record.tags || record.tags.length === 0) {
        return window.alert('请至少选择一个标签');
      }
      store.commit('createRecord', record);
      if(store.state.createRecordError === null) {
        window.alert('已保存');
        record.notes = '';
      }
    }
    return {saveRecord, onUpdateNotes, record}
  },
})
</script>

<style lang="scss" scoped>
::v-deep(.layout-content) {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>