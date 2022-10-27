<template>
  <!-- 联想建议 -->
  <div class="search-suggestion">
    <van-cell 
    v-for="(item,index) in suggestions"
    :key="index"
    icon="search"
    >
  <span slot="title" v-html="itemFn(item)"></span>
</van-cell>

  </div>
</template>

<script>
import { debounce } from "lodash" //防抖
import {getSearchSuggestion} from '@/api/search'
export default {
  name: 'SearchSuggestion',
  components: {},
  props: {
    searchText: {  // 输入的内容
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
      handler:debounce(function(val){
        this.loadSearchSuggestion(val)
      },500)
      },
      // 首次监视触发
      immediate: true
    
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
    },
    //通过 RegExp 来完成响应式数据的正则匹配
    itemFn(item){
        const str = `<span class="active">${this.searchText}</span>`
    }
  }
}
</script>

<style scoped lang="less"></style>
