import Vue from 'vue';
import VueMaterial from 'vue-material'

import App from './App.vue';
import {store} from './store/index';
import {router} from './routes';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
new Vue({
  el: '#app',
  store,
  router,
  VueMaterial,
  render: h => h(App)
})
