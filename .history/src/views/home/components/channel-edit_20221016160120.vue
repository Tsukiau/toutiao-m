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
    <van-grid :gutter="8">
      <van-grid-item
        class="channel-item"
        v-for="(item,index) in channel"
        :key="index"
        :text="item.name"
        icon="close"
   > 
   <span class="text" 
   :class="{active: active === index}" 
   slot="text">{{ item.name }}</span>
   </van-grid-item>
    </van-grid>
   <!-- 频道推荐 -->
    <van-cell title="频道推荐" :border="false"></van-cell>
    <van-grid :gutter="8">
      <van-grid-item
        class="channel-item"
        v-for="(item,index) in recommend"
        :key="item"
        :text="item.name"
        icon="plus"
      />
    </van-grid>

  </div>
</template>

<script>
import {getAllChannels} from '@/api/article'
export default {
  name: 'ChannelEdit',
  components: {},
  props: {
    channel: {
       type: Array,
       required: true,
    },
    active: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      allChannels: []
    }
  },
  computed: {
       //所有频道 - 用户频道 = 推荐频道
       recommend(){
        return this.allChannels.filter(tItem => {
          return!this.channel.find(mItem => mItem.name === tItem.name)
        })
    }
  },
  watch: {},
  created () {
    this.loadAllChannels()
  },
  mounted () {},
  methods: {
    async loadAllChannels(){
        try{
           const {data} = await getAllChannels()
           this.allChannels = data.data.channels
           console.log(this.allChannels);
           console.log(this.channel);
        }catch(err){
           
        }
    },
 
  }
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


/deep/ .van-grid-item__content {
          background-color: #f5f5f6;
          .van-grid-item__text, .text {
            color: #222;
            font-size: 13px;
            white-space: nowrap;
          }
    
          .active {
            color: red;
          }
        }
 .van-grid{
           padding: 0;
}
</style>
