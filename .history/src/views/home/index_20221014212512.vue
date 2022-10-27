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
    
    <!--
  通过v-model绑定当前激活标签对应的索引值，默认情况下启用第一个标签
  通过animated属性可以开启切换标签内容时的转场动画
  通过swipeable属性可以开启滑动切换标签页
   -->
<van-tabs class="channel-tabs" v-model="active" animated swipeable>
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
    <div slot="nav-right" class="hamburger-btn">
        <i class="toutiao toutiao-gengduo"></i>
    </div>
</van-tabs>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {},
  props: {},
  data() {
    return {
      active: ''
    }
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
/deep/ .channel-tabs {
.van-tab {
  border-right: 1px solid #EDEFF3;
  min-width: 200px;
  height: 80px;
  .van-tab__text {
    font-size: 27px;
    color: #777777;
  }
}

.van-tab--active .van-tab__text{
  color: #333 !important;
}
.van-tabs__line {
  width:31px !important;
  height:6px;
  background:rgba(50,150,250,1);
  border-radius:3px;
  bottom: 8px;
}
.van-tabs__nav {
  padding: 0;
}
}
</style>
