import {store} from "../store";

export default function useTagHelper() {
  const createTag = ()  => {
    const name = window.prompt('请输入标签名');
    if(!name) {return window.alert('标签名不能为空');}
    store.commit('createTag', name);
  }
  return {createTag};
}