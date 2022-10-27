<template>
  <div class="search-container">
    <!-- 搜索栏》事件监听 -->
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        shape="round"
        background="#3296fa"
        
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'search-container',
  data () {
    return {
      value: ''
    }
  },

  created () {

  },

  methods: {
    onSearch (val) {
      this.$toast(val)
    },
    onCancel () {
      this.$toast('取消')
    }
  }
}
</script>

<style scoped lang='less'>

.van-search {
  background-color: #3296fa;
}
</style>
