<template>
  <div class="search-suggestion">
    <van-cell title="黑马程序员..." icon="search"></van-cell>
    <van-cell title="黑马程序员..." icon="search"></van-cell>
    <van-cell title="黑马程序员..." icon="search"></van-cell>
    <van-cell title="黑马程序员..." icon="search"></van-cell>
    <van-cell title="黑马程序员..." icon="search"></van-cell>
  </div>
</template>

<script>
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
    return {}
  },
  computed: {},
  watch: {
    searchText: {
      // 监视的处理函数
      handler (val) {
        console.log(val)
      },
      // 首次监视触发
      immediate: true
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
