<template>
  <!-- 搜索结果 -->
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
import {getSearch} from '@/api/search'
export default {
  name: 'SearchResult',
  components: {},
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
     perPage: 20
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onLoad () {
      // 异步更新数据
      const 
    }
  }
}
</script>

<style scoped lang="less"></style>
