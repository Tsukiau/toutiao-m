<template>
  <van-cell class="article-item">
    <div slot="title" class="title" >{{article.title}}</div>
     <div slot="label" class="label">
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
         <span>{{article.pubdate | relativeTime}}</span>
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

<style scoped lang="less">
/deep/ .van-cell__title{
   display: flex;
   flex-direction: column;
}
.article-item {
  .title {
    font-size: 16px;
    color: #3a3a3a;
  }

  .van-cell__value {
    flex: unset;
    width: 116px;
    height: 73px;
    padding-left: 13px;
  }

  .right-cover {
    width: 116px;
    height: 73px;
  }

  .label-info-wrap span {
    font-size: 11px;
    color: #b4b4b4;
    margin-right: 13px;
  }

  .cover-wrap {
    display: flex;
    padding: 15px 0;
    .cover-item {
      flex: 1;
      height: 73px;
      &:not(:last-child) {
        padding-right: 2px;
      }
      .cover-item-img {
        width: 100%;
        height: 73px;
      }
    }
  }
}

</style>

