<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar">
      <van-button 
      class="search-btn" 
      slot="title" 
      type="info" 
      size="small" 
      round 
      icon="search"
      >搜索</van-button>
    </van-nav-bar>
    
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {}
}
</script>

<style scoped lang="less">
body {
  background-color: #f5f7f9;
}

.page-nav-bar {
  background-color: #3296fa;

  /deep/ .van-nav-bar__title {
    color: #fff;

  }
}
.home-container {
  /deep/.van-nav-bar__title {
    max-width: unset;
  }
  .search-btn {
    width: 277px; 
    height: 32px;
    background-color: #5babfb;
    border: none;
    font-size: 14px;
    .van-icon {
      font-size: 16px;
    }
  }
}
</style>
