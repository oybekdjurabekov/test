import Vue from 'vue';
import VueMaterial from 'vue-material'
import App from './App.vue';
import store from './store';
import {router} from './routes';
import axios from 'axios';
import VueMask from 'v-mask';
import Trans from './plugins/translations'
import i18n from './plugins/i18n'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
Vue.use(VueMask);
Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = `token ${token}`
}


axios.defaults.headers.get['Content-Type'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.baseURL = 'http://127.0.0.1:8000';
new Vue({
  el: '#app',
  store,
  router,
  VueMask,
  i18n,
  VueMaterial,
  render: h => h(App)
})
