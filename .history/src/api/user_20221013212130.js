import request from "@/utils/requset"

//用户相关的请求模块

 /**
  * 用户登录
  */
 export const login = data => {
   return request({
     method: 'POST',
     url: '/v1_0/authorizations',
     data
   })
 }