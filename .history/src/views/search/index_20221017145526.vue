<template>
  <div class="search-container">
    <!-- 搜索栏》事件监听 -->
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        shape="round"
        background="#3296fa"
        
      />
    </form>
     <!-- /搜索栏 -->

    <!-- 搜索历史记录 -->
    <SearchHistory />
    <!-- /搜索历史记录 -->

    <!-- 联想建议 -->
    <search>
    <!-- /联想建议 -->

    <!-- 历史记录 -->
    <search-result />
    <!-- /历史记录 -->
  </div>
</template>

<script>
import SearchHistory from './components/search-history.vue';
export default {
    name: "search-container",
    data() {
        return {
            value: ""
        };
    },
    created() {
    },
    methods: {
        onSearch(val) {
            this.$toast(val);
        },
        onCancel() {
            this.$toast("取消");
        }
    },
    components: { SearchHistory }
}
</script>

<style scoped lang='less'>

.van-search__action {
  background-color: #3296fa;
}
</style>
。