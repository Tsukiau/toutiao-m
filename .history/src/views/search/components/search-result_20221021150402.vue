<template>
  <!-- 搜索结果 -->
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      error-text="加载失败"
      @load="onLoad"
    >
      <van-cell v-for="(item,index) in list" 
      :key="item" :title="item.title" />
    </van-list>
  </div>
</template>

<script>
import {getSearch} from '@/api/search'
export default {
  name: 'SearchResult',
  props: {
    searchText: {
       type: String,
       require: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      perPage: 10,
      error: false
    }
  },
  methods: {
    async onLoad () {
      // 异步更新数据
      try {
        const {data} = await getSearch({
         page: this.page,       //页码
         per_page: this.perPage, // 每页大小
         p: this.searchText
      })
      this.list.push(...data.data.results)
      console.log(this.list);

      // 3. 设置加载状态结束
      this.loading = false
      }catch(err){
         console.log('获取失败', err);
      }
    }
  }
}
</script>

<style scoped lang="less"></style>
