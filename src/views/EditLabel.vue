<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"/>
    </div>
    <div class="form-wrapper">
      <FormItem field-name="标签名"
                placeholder="请输入标签名"
                :value="currentTag.name"
                @update:value="update"></FormItem>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue';
import FormItem from "../components/Money/FormItem.vue";
import {useStore} from 'vuex';
import {useRoute, useRouter} from "vue-router";

export default defineComponent({
  components: {
    FormItem,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    const currentTag = computed(() => {
      return store.state.currentTag;
    })
    store.commit('fetchTags');
    store.commit('setCurrentTag', id);
    if (!currentTag.value) {
      router.replace('/:pathMatch(.*)*');
    }
    const update = (name: string) => {
      console.log(name);
      if (currentTag.value) {
        store.commit('updateTag', {id: currentTag.value.id, name})
      }
    }
    const remove = () => {
      if (currentTag.value) {
        store.commit('removeTag', currentTag.value.id)
        goBack();
      }
    }
    const goBack = () => {
      router.back();
    }
    return {currentTag, update, remove, goBack}
  }
})
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .title {
  }

  > .leftIcon {
    width: 24px;
    height: 24px;
  }

  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}

.form-wrapper {
  background: white;
  margin-top: 8px;
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>