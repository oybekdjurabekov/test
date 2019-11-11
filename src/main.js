import Vue from 'vue';
import VueMaterial from 'vue-material'
import App from './App.vue';
import store from './store';
import {router} from './routes';
import Axios from 'axios';
import VueMask from 'v-mask'
Vue.use(VueMask);
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
Axios.defaults.headers.get['Content-Type'] = 'application/json'
Axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
new Vue({
  el: '#app',
  store,
  router,
  VueMask,
  VueMaterial,
  render: h => h(App)
})
