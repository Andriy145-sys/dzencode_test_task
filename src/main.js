
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import vuetify from '@/plugins/vuetify'
import VueSocketIO from 'vue-socket.io';

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://metinseylan.com:1992',
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
  options: { path: "/dzencode_test_task/" } //Optional options
}))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
