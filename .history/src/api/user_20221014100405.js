import request from "@/utils/request"

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

//验证码
 export const getSmsCode = mobile => {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}