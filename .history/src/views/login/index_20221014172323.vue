<template>
  <div class="login-container">
    <van-nav-bar title="登录" class="page-nav-bar" />
    <!-- 登录表单 -->
    <van-form ref="loginForm" @submit="onSubmit" >
      <van-field 
      v-model="user.mobile"
      required
      name="mobile"
      clearable
      label="手机号"
      placeholder="请输入手机号"
      type="number"
      maxlength="11"
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
      maxlength="6"
      name="code"
      :rules="[
       {
       required: true,
       message: '验证码不能为空',
       }, {
        pattern: /^\d{6}$/,
        message: '验证码格式错误'
       }
   ]"
      > <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
      <!-- 倒计时时间 -->    
 <!--    <template #button>
          <van-count-down 
          v-if="isCountDownShow" 
          :time="1000 * 60" format="ss s" 
          @finish="isCountDownShow = false" 
          />
     </template>  -->
     <van-button 
    
      round 
      slot="button"
      size="small" 
      native-type="button"
      type="default"
      @click="onSendSms"
      >发送验证码</van-button> 

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
import {login, getSms} from '@/api/user'
export default {
  name: 'LoginPage',
  data() {
    return {
      user: {
      mobile: '13911111111',
      code: '246810',
      isCountDownShow: false
    }
    }
  },
  methods: {
   async onSubmit() {
    console.log(this.$refs.loginForm.validate('mobile'));
     // 1. 展示登陆中 loading
     this.$toast.loading({
        message: '登录中...',
        forbidClick: true, // 禁用背景点击
        duration: 0 // 持续时间，默认 2000，0 表示持续展示不关闭
     })

     
       try {
        const res = await login(this.user)
        this.$toast.success('登录成功')
        console.log(res.data.data);
       } catch(err){
         this.$toast.fail('登录失败，请稍后重试')
       }
    },

   async onSendSms(){
    //  校验手机号
   
    try {
      await this.$refs.loginForm.validate('mobile')
    } catch(err){
       return console.log("验证失败",err);
    }
    //显示倒计时
    this.isCountDownShow = true; 
    // 请求发送验证码
    try {
       await getSms(this.user.mobile)
       this.$toast('发送成功')
    }catch(err) {
      this.isCountDownShow = false
    if (err.response.status === 429) {
      this.$toast('发送太频繁了，请稍后重试')
    } else {
      this.$toast('发送失败，请稍后重试')
    }
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