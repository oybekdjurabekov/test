import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
import menu from './modules/menu.js';
import ToDoList from './modules/tasks.js';
import Release from './modules/release.js';
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)

export const store = new Vuex.Store({
	modules:{
       menu,
       ToDoList,
       Release,
    }

})