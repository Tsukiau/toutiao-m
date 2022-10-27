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

    <van-image
    v-if="article.cover.images.length == 1"
    width="100"
    height="100"
    slot="default"
    src="article.cover.images"
      />


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
  methods: {
  }
}
</script>

<style scoped lang="less"></style>
