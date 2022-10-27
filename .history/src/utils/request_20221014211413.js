/**
 * 封装 axios 请求模块
 */
 import axios from "axios"

 const request = axios.create({
   baseURL: "http://toutiao.itheima.net/" // 基础路径
 })
 
// 请求拦截器
request.interceptors.request.use((to)=> {
       // config ：本次请求的配置对象
       // config 里面有一个属性：headers
       const {}
})


 export default request