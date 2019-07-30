import Vue from 'vue'
import App from './App.vue'

/* Plugins configs */
import './plugins/axios'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import store from './plugins/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
