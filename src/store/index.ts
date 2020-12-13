import {createStore} from 'vuex';
import createId from "../lib/createId";
import clone from '../lib/clone';

export const store = createStore({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined,
    createRecordError: null,
  } as RootState,

  mutations: {
    createRecord(state, record: RecordItem) {
      const recordCopy = clone(record);
      recordCopy.createdAt = recordCopy.createdAt || new Date().toISOString();
      state.recordList.push(recordCopy);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
      if(!state.tagList || state.tagList.length === 0) {
        store.commit('createTag','衣');
        store.commit('createTag','食');
        store.commit('createTag','住');
        store.commit('createTag','行');
      }
    },
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if(names.indexOf(name) >= 0) {
        window.alert('标签名重复')
        return;
      }
      const id = createId().toString();
      state.tagList.push({id, name:name});
      store.commit('saveTags');
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    updateTag(state, payload: {id: string; name: string}) {
      const {id, name} = payload;
      const idList = state.tagList.map(item => item.id);
      if(idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if(names.indexOf(name) >= 0) {
          window.alert('标签名重复');
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags');
        }
      }
    },
    removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if(state.tagList[i].id === id) {
          index = i;
          console.log(index);
          break;
        }
      }
      if(index >= 0) {
        state.tagList.splice(index,1);
        store.commit('saveTags');
      } else {
        window.alert('删除失败');
      }
    }
  },
  actions: {
  //  request, async mutations
  },
  modules: {},
  getters: {}
})
