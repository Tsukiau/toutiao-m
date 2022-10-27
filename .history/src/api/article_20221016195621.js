import request from '@/utils/request'
import { toRefs } from 'vue'

/**
 * 获取频道的文章列表
 */
 export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/v1_0/articles',
    params
  })
}

/**
 * 获取所有频道
 */
 export const getAllChannels = () => {
  return request({
    method: 'GET',
    url: '/v1_0/channels'
  })
}

/**
 * 设置用户的频道（部分覆盖）
 */
 export const addUser = () => {
  return request({
    method: 'PATCH',
    url: '/v1_0/user/channels'
  })
}
