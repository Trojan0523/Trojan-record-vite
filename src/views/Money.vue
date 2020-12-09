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
import {defineComponent} from 'vue';
import RecordTypeList from "../constants/RecordTypeList";
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
      record: {
        tags: [], notes: '', type: '-', amount: 0, createdAt: new Date().toISOString()
      } as RecordItem,
      RecordTypeList
    }
  },
  setup(props, context) {
    const saveRecord = () => {
    }
    return {saveRecord}
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