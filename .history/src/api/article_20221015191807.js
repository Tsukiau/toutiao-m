import request from '@/utils/request'

/**
 * 获取频道的文章列表
 */
 export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/v1_0/articles',
    params
  })
}




<template>
  <div>
    
  </div>
</template>
 
<script>
export default {
  name: "${NAME}",
  // import 引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  // 计算属性 类似于 data 概念
  computed: {},
  // 监控 data 中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // setup在beforeCreate之前执行一次，this是undefined。
  setup() {
 
    onBeforeMount(()=>{})// 生命周期 - 挂载之前
    onMounted(()=>{})// 生命周期 - 挂载完成（可以访问 DOM 元素）
    onBeforeUpdate(()=>{})// 生命周期 - 更新之前
    onUpdated(()=>{})// 生命周期 - 更新之后
    onBeforeUnmount(()=>{})// 生命周期 - 销毁之前
    onUnmounted(()=>{})// 生命周期 - 销毁完成
    onErrorCaptured((err)=>{})// 当事件处理程序或生命周期钩子抛出错误时
    onRenderTracked((e)=>{})// 渲染的时候可以追踪到
    onRenderTriggered((e)=>{})// 重新渲染的时候触发
    // 如果页面有 keep-alive 缓存功能,这个两个函数会触发
    onActivated(()=>{})//进入的时候触发
    onDeactivated(()=>{})//离开的时候触发
    return{//组件中使用的变量和绑定的方法都需要return才能使用
 
    }
  },
}
</script>
 
<style scoped>
</style>