<template>
  <div class="my-container">
    <!-- 已登录 -->
    <div class="userInfo header">
      <!-- 基本信息 -->
      <div class="base">
        <div class="left">
          <van-image fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" class="avatar" round />
          <span class="name">黑马头条</span>
        </div>
        <div class="right">
          <van-button type="default" size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <!-- 粉丝、关注 -->
      <div class="data"></div>
    </div>
    <div class="grid-nav"></div>
    <van-cell title="消息通知" is-link url="" />
    <van-cell title="实名认证" is-link url="" />
    <van-cell title="用户反馈" is-link url="" />
    <van-cell title="小智同学" is-link url="" />
    <van-cell title="系统设置" is-link url="" />

  </div>
</template>

<script>
export default {
  name: 'MyPage',
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
.my-container {
  >.header {
    height: 180px;
    background: url("~@/assets/banner.png") no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;


  }
  .userInfo {
    background: red;
    .base {
      height: 115px;
      padding: 76px 32px 23px;
      background: #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          width: 132px;
          height: 132px;
          border: 2px solid #fff;
        }
        .name {
          font-size: 29px;
          margin-left: 22px;
        }
      }
    }
  }
    
}
</style>
