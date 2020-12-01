<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <div>tags</div>
    <div>
      FromItem
      <label for="xxx">
        <input id="xxx" type="text">
      </label>
    </div>
    <Button>衣</Button>
    <Button>食</Button>
    <Button>住</Button>
    <Button>行</Button>
  </Layout>
</template>

<script lang="ts">
import Layout from "../components/Layout.vue";
import Button from "../components/Button.vue";
import NumberPad from "./Money/NumberPad.vue";

type RecordItem = {
  amount: number;
}

export default {
  name: 'Money',
  components: {
    Layout,
    Button,
    NumberPad,
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