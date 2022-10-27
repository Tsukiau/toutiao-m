<template>
  <div class="login-container">
    <van-nav-bar title="登录" />

    <van-form @submit="onSubmit">
      <van-field name="用户名" placeholder="用户名" />
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
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    onSubmit (values) {
    console.log('submit', values)
}
  },

}
</script>
<style scoped lang="less">

</style>