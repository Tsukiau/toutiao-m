<template>
  <van-cell class="article-item">
      <div slot="title" class="title">{{article.title}}</div>
     <div slot="label">
       <div>
         <span>{{article.aut_name}}</span>
         <span>{{article.comm_count}}</span>
         <span>{{article.pubdate}}</span>
       </div>
     </div>
     <div slot="default"></div>


  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
