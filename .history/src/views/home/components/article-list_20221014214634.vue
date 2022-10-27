<template>
  <div class="article-list">


  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  components: {},
/*   props: {
    channel: {
      type: Object,
      required: true
    }
  }, */
  data () {
    return {
      list: [], // 存储列表数据的数组
      loading: false, // 控制加载中 loading 状态
      finished: false // 控制数据加载结束的状态
    }
  },
  methods: {
    
  }
}
</script>

<style scoped lang="less"></style>
