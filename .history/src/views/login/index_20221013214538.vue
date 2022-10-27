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
      type="number"
      :rules="[
       {
       required: true,
       message: '手机号不能为空',
       trigger: 'blur',
       }, {
        pattern: /^1[3|5|7|8]\d{9}$/,
        message: '手机号格式错误'
       }
   ]"
    ><i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>

      <van-field 
      v-model="user.code"
      type="number"
      label="验证码"
      placeholder="请输入验证码"
      required
      max
      > <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
    <template #button>
      <van-button  round size="small"
       type="default">发送验证码</van-button>
    </template>
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
      mobile: '13911111111',
      code: '246810'
    }
    }
  },
  methods: {
   async onSubmit() {
     // 1. 展示登陆中 loading
     this.$toast.loading({
        message: '登录中...',
        forbidClick: true, // 禁用背景点击
        duration: 0 // 持续时间，默认 2000，0 表示持续展示不关闭
     })
        const data = this.user
       try {
        const res = await login(data)
        this.$toast.success('登录成功')
        console.log(res);
       } catch(err){
        this.$toast.fail('登录失败，请稍后重试')
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