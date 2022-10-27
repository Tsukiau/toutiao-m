<template>
  <div class="article-list">
    <!--
      List 列表组件：瀑布流滚动加载，用于展示长列表。
      List 组件通过 loading 和 finished 两个变量控制加载状态，
      当组件初始化或滚动到到底部时，会触发 load 事件并将 loading 自动设置成 true，此时可以发起异步操作并更新数据，
      数据更新完毕后，将 loading 设置成 false 即可。
      若数据已全部加载完毕，则直接将 finished 设置成 true 即可。 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
     <!--  <van-cell v-for="item in list" :key="item" :title="item" /> -->
    </van-list>
  </div>
</template>

<script>
import {getArticles} from '@/api/article.js'
import { log } from 'console';
export default {
  name: 'ArticleList',
  components: {},
   props: {
    channel: {
      type: Array,
      required: true
    }
  }, 
  data () {
    return {
      list: [], // 存储列表数据的数组
      loading: false, // 控制加载中 loading 状态
      finished: false, // 控制数据加载结束的状态
      timestamp: 0,
    }
  },
  methods: {
    // 初始化或滚动到底部的时候会触发调用 onLoad
    async onLoad () {
      console.log({...this.channel});
      // 1. 请求获取数据
         /*  try {
           const res= await getArticles({
            channel_id: {...this.channel}, // 频道 id
            timestamp: +new Date(), // 时间戳
           })
          // 2. 把请求结果数据放到 list 数组中
           console.log(res);
         } catch(err){
           console.log('获取失败',err);
         } */
     
     
        // 3. 本次数据加载结束之后要把加载状态设置为结束
   

        // 4. 判断数据是否全部加载完成
 
      
        

    }
  }
}
</script>

<style scoped lang="less"></style>
