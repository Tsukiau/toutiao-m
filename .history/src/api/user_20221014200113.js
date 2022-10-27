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
 export const getSms = mobile => {
  return request({
    method: 'GET',
    url: `/v1_0/sms/codes/${mobile}`
  })
}


//获取用户自己的信息

export const getUserInfo = () => {
    return request({
      url: '/v1_0/user',
      headers
    })
} 
