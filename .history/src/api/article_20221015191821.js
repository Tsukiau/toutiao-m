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

  setup() {
 
    return{//组件中使用的变量和绑定的方法都需要return才能使用
 
    }
  },
}
</script>
 
<style scoped>
</style>