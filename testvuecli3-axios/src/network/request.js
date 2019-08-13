import axios from 'axios'
export function request(config,success,failure){
 //1.创建axios的实例

 const instance = axios.create({
     baseURL:'http://localhost:3300'
 })

 // 发送真正的网路请求
 instance(config).then(res => {
     success(res)
 }).catch(err => {
     failure(err)
 })

}