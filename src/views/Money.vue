<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Tabs :dataSource="RecordTypeList" v-model:value="record.type"/>
    <div class="notes">
      <FormItem />
    </div>
    <Tags />
  </Layout>
</template>

<script lang="ts">
import NumberPad from "../components/Money/NumberPad.vue";
import FormItem from "../components/Money/FormItem.vue";
import Tabs from "../components/Tabs.vue";
import Tags from "../components/Money/Tags.vue";
import {defineComponent} from 'vue';
import RecordTypeList from "../constants/RecordTypeList";

export default defineComponent( {
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
    return {}
  }

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