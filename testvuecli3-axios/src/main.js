import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'//导入axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//axios基本用法
axios({
  url: 'http://localhost:3300/getProduct',
  method: 'GET'
}).then(result => {
  console.log(result.data)
})

//axios传参
axios({
  url: 'http://localhost:3300/getProductById',
  params: {
    id: 1
  },
  method: 'GET'
}).then(result => {
  console.log(result.data)
})

//axios多层调用
axios.all([axios({
url:'http://localhost:3300/getProduct',
method:'get'
}),axios({
  url:'http://localhost:3300/getProductById',
  params:{
    id:2
  },
  method:'get'
})]).then(results => {
  console.log(results)
})