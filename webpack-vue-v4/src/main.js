import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/styles/index.styl'
import store from './store'
import axios from 'axios'
import getData from '@/assets/utils/getData'

Vue.use(iView)

Vue.prototype.$ = getData
// axios.defaults.baseURL = "/api/"
if (process.env.NODE_ENV !== 'production') {
  axios.defaults.baseURL = '/api/'
} else {
  axios.defaults.baseURL = '/'
}

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
