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
  v-model绑定当前激活标签对应的索引值，
  animated 转场动画
  swipeable属性可以开启滑动切换标签页
   -->
<van-tabs class="channel-tabs" v-model="active" animated swipeable>
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
    <van-tab title="标签 6">内容 4</van-tab>
    <van-tab title="标签 5">内容 4</van-tab>
    <div slot="nav-right" class="placeholder">
    </div>
    <div slot="nav-right" class="hamburger-btn">
        <i class="iconfont icon-gengduo"></i>
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
      active: '1'
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
  min-width: 100px;
  height: 40px;
  .van-tab__text {
    font-size: 13px;
    color: #777777;
  }
}

.van-tab--active .van-tab__text{
  color: #333 !important;
}
.van-tabs__line {
  width:16px !important;
  height:3px;
  background:rgba(50,150,250,1);
  border-radius:2px;
  bottom: 4px;
}
.van-tabs__nav {
  padding: 0;
}
}
.hamburger-btn {
  position: fixed;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 41px;
  background-color: #fff;
  opacity: 0.902;
  i.toutiao {
    font-size: 16px;
  }
}
.placeholder {
  flex-shrink: 0;
  width: 66px;
  height: 82px;
}

.hamburger-btn {
  position: fixed;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 41px;
  background-color: #fff;
  opacity: 0.902;
  i.toutiao {
    font-size: 16px;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 1px;
    height: 100%;
    background-image: url(~@/assets/gradient-gray-line.png);
    background-size: contain;
  }
}
</style>
