<template>
  <div class="my-container">
    <!-- 已登录 -->
    <div v-if="user" class="userInfo header">
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
      <div class="data">
        <div class="data-item">
          <span>90</span>
          <span>头条</span>
        </div>
        <div class="data-item">
          <span>90</span>
          <span>关注</span>
        </div>
        <div class="data-item">
          <span>90</span>
          <span>粉丝</span>
        </div>
        <div class="data-item">
          <span>90</span>
          <span>获赞</span>
        </div>
      </div> 
    </div>
    <!-- 未登录 -->
   <div v-else class="header notLogin" >
    <van-image fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" 
    class="avatar" round  @click="$router.push('./login')" />
          <span class="name">登 录</span>
   </div>
    <!-- 宫格 -->
    <van-grid class="nav-grid" :column-num="2" clickable>
      <van-grid-item text="收藏">
        <i slot="icon" class="iconfont icon-shoucang"></i>
        <span class="text" slot="text">收藏</span>
      </van-grid-item>
      <van-grid-item text="文字">
        <i slot="icon" class="iconfont icon-lishi"></i>
        <span class="text" slot="text">历史</span>
      </van-grid-item>
    </van-grid>
    <div class="grid-nav"></div>
    <van-cell title="消息通知" is-link />
    <van-cell title="小智同学" is-link />
    <van-cell 
    @click="onLogout" 
    v-if="user" 
    class="logout-cell" 
    title="退出登录" 
    center/>

  </div>
</template>

<script>
import 
import {mapState} from 'vuex'
export default {
  name: 'MyPage',
  data() {
    return {}
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    onLogout() {
      this.$dialog.confirm({
       title: '确认退出吗？'
    }).then(()=> {
         this.$store.commit('setUser',null)
    }).catch(() => {
    // on cancel
    console.log('取消退出')
  })
  },
  }

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
    flex-direction: column;
  }
  .notLogin{

    .avatar {
          width: 66px;
          height: 66px;
          border: 1px solid #fff;
          margin-bottom: 10px;
        }

        .name {
          font-size: 15px;
          margin-left: 11px;
          margin-right: 10px;
        }
  }
  .userInfo {
    /deep/ .base {
      width: 100%;
      height: 115px;
      padding: 38px 16px 11px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;

      .left {
        display: flex;
        align-items: center;

        .avatar {
          width: 66px;
          height: 66px;
          border: 1px solid #fff;
        }

        .name {
          font-size: 15px;
          margin-left: 11px;
        }
      }
    }
  }
}

.data {
  width: 100%;
  display: flex;
  justify-content: space-around;

  .data-item {
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;

    span:nth-child(1) {
      font-size: 18px;
      margin-bottom: 12px;
    }

    span:nth-child(2) {
      font-size: 12px;
    }
  }
}

.nav-grid {
  background: #fff;

  .toutiao {
    font-size: 22px;
  }

  .icon-shoucang {
    color: #EB5253;
  }

  .icon-lishi {
    color: #FF9D1D;
  }

  .text {
    color: #000;
    margin-top: 4px;
    font-size: 20px;
  }
}
.logout-cell {
  height: 50px;
  text-align: center;
  color: #EB5253;
  margin: 10px 0;
  font-size: 20px;
}
</style>
