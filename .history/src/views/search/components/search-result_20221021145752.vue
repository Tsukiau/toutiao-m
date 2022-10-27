<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      error-text="加载失败"
      @load="onLoad"
    >
      <van-cell v-for="(item, index) in list"
                :key="index" :title="item.title" />
    </van-list>
  </div>
</template>

<script>
import { getSearch } from '@/api/search'
export default {
  name: 'SearchResult',
  components: {},
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      per_page: 20,
     error: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
       try {
   const res = await getSearchResults({
     page: this.page,
     per_page: this.per_page,
     q: this.searchText
   })
     this.list.push(...res.data.data.results)
         this.loading = false
         if (res.data.data.results.length) {
           this.page++
         } else {
           this.finished = true
         }
       } catch (err) {
         this.error = true
         this.loading = false
         this.$toast('数据获取失败')
       }
    }
  }
}
</script>
<style scoped lang="less"></style>
