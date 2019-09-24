import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import menu from './modules/menu.js';
import news from './modules/news.js';

export const store = new Vuex.Store({
	modules:{
           menu,
           news,
       }
})