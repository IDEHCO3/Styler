// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store'
import Vue from 'vue'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#4caf50',
    secondary: '#03DAC6',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    textPrimary: '#ffffff'
  }
})

Vue.config.productionTip = false
Vue.use(Vuetify)

axios.defaults.baseURL = 'http://ggt-des.ibge.gov.br/styles/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
