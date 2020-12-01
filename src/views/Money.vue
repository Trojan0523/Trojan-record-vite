<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Tabs :dataSource="RecordTypeList"/>
    <div class="notes">
      <FormItem />
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "../components/Layout.vue";
import Button from "../components/Button.vue";
import NumberPad from "../components/Money/NumberPad.vue";
import Tabs from "../components/Tabs.vue";
import FormItem from "../components/Money/FormItem.vue";

type RecordItem = {
  amount: number;
}

export default {
  name: 'Money',
  components: {
    Layout,
    Button,
    NumberPad,
    Tabs,
    FormItem,
  },
  setup() {

    return {}
  }

}
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