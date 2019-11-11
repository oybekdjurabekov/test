import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import menu from './modules/menu.js';
import ToDoList from './modules/tasks.js';
import Release from './modules/release.js';
import Meeting from './modules/meeting.js';
import Login from './auth/login.js';
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules:{
       menu,
       ToDoList,
       Meeting,
       Login,
       Release,
    },
    strict: debug,

})