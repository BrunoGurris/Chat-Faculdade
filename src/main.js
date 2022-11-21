import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './services/axios'
import VueToastr from "vue-toastr";

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(VueToastr)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
