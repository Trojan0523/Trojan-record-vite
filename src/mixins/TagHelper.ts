// mixins 混入，不唯一方法，可引入dialog,或者用setup(composition api)
const TagHelper = {
  methods: {
    createTag() {
    const name = window.prompt('请输入标签名');
    if(!name) {return window.alert('标签名不能为空');}
    // this.$store.commit('createTag', name);
    }
  },
}

export default TagHelper;