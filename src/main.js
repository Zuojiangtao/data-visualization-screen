// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import dataV from '@jiaminghi/data-view'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
// import '../mock'
import '@/style/index.less' // global style
// import './permission'

Vue.config.productionTip = false

Vue.use(dataV)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
