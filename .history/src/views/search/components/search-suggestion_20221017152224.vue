<template>
  <div class="search-suggestion">
    <van-cell 
    v-for="(item,index) in suggestions"
    :key="index"
    :title="item" 
    icon="search"
    ></van-cell>

  </div>
</template>

<script>
import { debounce } from "lodash" //防抖
import {getSearchSuggestion} from '@/api/search'
export default {
  name: 'SearchSuggestion',
  components: {},
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      suggestions:[]
    }
  },
  computed: {},
  watch: {
    searchText: {
      // 监视的处理函数
      handler:debounce(function)
        this.loadSearchSuggestion(val)
          
      }) {
      },
      // 首次监视触发
      immediate: true
    }
  },
  created () {},
  mounted () {},
  methods: {
    async loadSearchSuggestion(val){
       try{
         const {data} = await getSearchSuggestion(val)
         this.suggestions = data.data.options
       }catch(err){
        this.$toast('获取失败')
       }
    }
  }
}
</script>

<style scoped lang="less"></style>
