import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
// import 'iview/dist/styles/iview.css'
// 引入全局样式
import '@/assets/styles/index.styl'
import store from './store'
import axios from 'axios'

Vue.use(iView)

Vue.prototype.$ = axios
// axios.defaults.baseURL = "/api/"

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
