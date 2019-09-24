import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/Home';
import Marketing from './components/Marketing';
import MakeMoney from './components/MakeMoney';
import Blog from './components/Blog';
import BlogItems from './components/BlogItems';
import Contact from './components/Contact';

const routes = [
	{
		path:'',
		name:'home',
		component:Home
	},
	{
		path:'/Marketing',
		component:Marketing
	},
	{
		path:'/Blog',
		component:Blog
	},
	{
		path:'/Blog/:id',
		component:BlogItems
	},
	{
		path:'/Contact',
		component:Contact
	}
];

export const router = new VueRouter({
	routes,
	mode: 'history',
})