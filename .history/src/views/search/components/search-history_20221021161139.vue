<template>
  <!-- 历史记录 -->
  <div class="search-history">
    <van-cell title="搜索历史">
      <span @click="searchHistories = []">完成</span>
      &nbsp;
      <span @click="isDeleteShow = false">全部删除</span>
      <van-icon name="delete" @click="isDeleteShow = true"/>
    </van-cell>

    <van-cell :title="item"
    v-for="item in HistoryList "
    >
      <van-icon name="close" 
      
      />
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'SearchHistory',
  props: {
    HistoryList: {
       type: Array,
       required: true,
    }
  },
  data () {
    return {
       list: [],
       isDeleteShow: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
