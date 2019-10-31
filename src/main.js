import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/plenos-font-awesome.js'

import Bootstrap from 'bootstrap-vue'
Vue.use(Bootstrap)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBsv9x4puR4DMRukVWhRF-MYrzSGCeTPnA'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
