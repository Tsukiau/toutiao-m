<template>
  <van-cell class="article-item">
    <div slot="title" class="title" >{{article.title}}</div>
     <div slot="label">
      <div class="cover-wrap" v-if="article.cover.images.length == 3">
         <div class="cover-item" v-for="img in article.cover.images">
          <van-image
           class="cover-item-img"
           fit="cover"
           :src="img"
           />
         </div>

      </div>
       <div class="label-info-wrap">
         <span>{{article.aut_name}}</span>
         <span>{{article.comm_count}}</span>
         <span>{{article.pubdate}}</span>
       </div>
     </div>

    <van-image

    v-if="article.cover.images.length == 1"
    slot="default"
    class="right-cover"
    fit="cover"
    :src="article.cover.images[0]"
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
