<template>
  <div class="login-container">
    <van-nav-bar title="登录" class="page-nav-bar" />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field 
      v-model="user.mobile"
      required
      clearable
      label="手机号"
      placeholder="请输入手机号"
    ><i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>

      <van-field 
      v-model="user.code"
      type="number"
      label="验证码"
      placeholder="请输入验证码"
      required
      > <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
      </van-field>

      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>

  </div>

</template>

<script>
import {login} from '@/api/user'
export default {
  name: 'LoginPage',
  data() {
    return {
      user: {
      mobile: '',
      code: ''
    }
    }
  },
  methods: {
    onSubmit() {
       try {
        const 
       } catch(err){
          
       }
    }
  }

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

.iconfont {
  font-size: 37px;
}

.send-sms-btn {
  width: 152px;
  height: 46px;
  line-height: 46px;
  background-color: #ededed;
  font-size: 22px;
  color: #666;
}
.login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
</style>