import request from '@/utils/request'
import { toRefs } from 'vue'

/**
 * 获取频道的文章列表
 */
 export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/v1_0/articles',
    ll
  })
}



