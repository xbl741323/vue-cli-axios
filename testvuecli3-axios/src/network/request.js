import axios from 'axios'

//利用instance中自带的promise进行封装
export function request(config) {
    //1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://localhost:3300'
    })
    // 发送真正的网路请求
    return instance(config)
}



//利用promise进行封装
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         //1.创建axios的实例
//         const instance = axios.create({
//             baseURL: 'http://localhost:3300'
//         })

//         // 发送真正的网路请求
//         instance(config).then(res => {
//             resolve(res)
//         }).catch(err => {
//             reject(err)
//         })
//     })

// }


//利用回调函数封装的方法
// export function request(config,success,failure){
//  //1.创建axios的实例

//  const instance = axios.create({
//      baseURL:'http://localhost:3300'
//  })

//  // 发送真正的网路请求
//  instance(config).then(res => {
//      success(res)
//  }).catch(err => {
//      failure(err)
//  })

// }