<template>
  <div class="search-container">
    <!-- 搜索栏》事件监听 -->
    <form action="/" class="van-search">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch" 
        @cancel="onCancel"
        shape="round"
        background="#3296fa"
        
      />
    </form>


     <!-- 搜索结果 -->
    <SearchResult  v-if="isResultShow"
    :searchText="searchText"
    />
   
   
    <!-- 联想建议 -->
    <search-suggestion 
    @search="onSearch"
    :searchText="searchText"
    v-else-if="searchText"/>


    <!-- 历史记录 -->
    <SearchHistory v-else />


 
  </div>
</template>

<script>
import SearchHistory from './components/search-history.vue';
import SearchSuggestion from './components/search-suggestion.vue';
import SearchResult from './components/search-result.vue';
export default {
    name: "search-container",
    data() {
        return {
            searchText: '',
            isResultShow: false // 展示搜索结果
        };
    },
    created() {
    },
    methods: {
      //onSearch 事件在点击键盘上的搜索/回车按钮后触发
        onSearch(val) {
            this.$toast(val);
            this.isResultShow = true
        },
        //onCancel 事件在点击搜索框右侧取消按钮时触发。
        onCancel() {
            this.$toast("取消");
        }
    },
    components: { SearchHistory, SearchSuggestion, SearchResult }
}
</script>

<style scoped lang='less'>
.search-container{
  padding-top: 53px;
   
}
.van-search__action {
  background-color: #3296fa;
}
.van-search{
   position: fixed;
   top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>
