<template>
  <div class="login-container">
    <van-nav-bar title="登录" class="page-nav-bar"/>
   <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field 
      name="用户名" 
      placeholder="请输入手机号" 
      >
      <i slot="left-icon" ></i>
      </van-field>
      <van-field type="password" name="密码" placeholder="密码" />
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    
  </div>

</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {}
  },
 methods: {
  onSubmit (values) { 
    console.log('submit', values)
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
</style>