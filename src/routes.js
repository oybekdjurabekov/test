import Vue from 'vue';
import VueRouter from 'vue-router';
import '../node_modules/nprogress/nprogress.css'
Vue.config.productionTip = false
import NProgress from 'nprogress';


Vue.use(VueRouter);

import Home from './components/page/Home';
import Report from './components/page/Report';
import Tasks from './components/page/Tasks';
import Login from './components/page/Login';
import Release from './components/page/Release';
import ReleaseItem from './components/page/ReleaseItem';
import Profile from './components/page/Profile';
import ProfileTask from './components/profile/tasks';
import ProfileMeeting from './components/profile/meeting';
import ProfileInfo from './components/profile/info';
import ProfileAnswer from './components/profile/answer';
import ProfileSender from './components/profile/send';

const routes = [
	{
		path:'',
		name:'home',
		component:Home
	},
	{
		path:'/report',
		name:'report',
		component:Report
	},
	{
		path:'/signin',
		name:'signin',
		component:Login
	},
	{
		path:'/release',
		name:'release',
		component:Release
	},
	{
		path:'/release/:id',
		name:'releaseItem',
		component:ReleaseItem
	},
	{
		path:'/profile',
		component:Profile,
		name:'profile',
		children: [
            {
	          path: '/',
	          name:'task',
	          component: ProfileTask
	        }
	    ]
	},
	{
		path:'/profile/:title',
		component:Profile,
		children: [
            {
	          path: '/profile/meeting',
	          name:'meeting',
	          component: ProfileMeeting
	        },
	        {
	          path: '/profile/answer',
	          name:'answer',
	          component: ProfileAnswer
	        },
	        {
	          path: '/profile/sender',
	          name:'sender',
	          component: ProfileSender
	        },
	        {
	          path: '/profile/info',
	          name:'info',
	          component: ProfileInfo
	        },
	    ]
	}
];

export const router = new VueRouter({
	routes,
	mode: 'history',
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})