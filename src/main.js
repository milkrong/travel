import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'swiper/swiper-bundle.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
