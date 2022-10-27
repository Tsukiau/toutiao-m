<template>
  <div class="channel-edit">
    <van-cell title="我的频道" :border="false">
      <van-button
        size="small"
        round
        type="danger"
        plain
      >编辑</van-button>
    </van-cell>
     <!-- 我的频道 -->
    <van-grid :gutter="10">
      <van-grid-item
        class="channel-item"
        v-for="(item,index) in channel"
        :key="index"
        :text="item.name"
        icon="close"
        
      />
    </van-grid>
   <!-- 频道推荐 -->
    <van-cell title="频道推荐" :border="false"></van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        class="channel-item"
        v-for="value in 8"
        :key="value"
        text="文字"
        icon="plus"
      />
    </van-grid>

  </div>
</template>

<script>
export default {
  name: 'ChannelEdit',
  components: {},
  props: {
    channel: {
       type: Object,
       required: true,
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

<style scoped lang="less">
.channel-edit {
  margin-top: 35px ;
  .channel-item {
    height: 43px;
    /deep/ .van-grid-item__content {
      background-color: #f5f5f6;

      .van-grid-item__text {
        color: #222;
        font-size: 14px;
        margin-top: 0;
      
      }
      .van-icon-plus{
         font-size: 14px;
         margin: 3px 0;
         padding-top:5px;
      
      }
    }
  }
}
/deep/ .van-icon-close {
    position: absolute;
    right: -8px;
    top: -10px;
    font-size: 20px;
    color: #666;
}

</style>
