import Vue from 'vue';
import VueRouter from 'vue-router';
import '../node_modules/nprogress/nprogress.css'
Vue.config.productionTip = false
import NProgress from 'nprogress';


Vue.use(VueRouter);
import store from './store/auth/login.js'
import Home from './components/page/Home';
import Tasks from './components/page/Tasks';
import Login from './components/page/Login';
import Signup from './components/page/Signup';
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
		path:'/dashboard',
		name:'dashboard',
		component:Home,
		meta: { 
	        requiresAuth: true
	      }
	},
	{
		path:'/signin',
		name:'signin',
		component:Login,
	},
	{
		path:'/signup',
		name:'signup',
		component:Signup,
	},
	{
		path:'/release',
		name:'release',
		component:Release,
		meta: { 
        requiresAuth: true
      }
	},
	{
		path:'/release/:id',
		name:'releaseItem',
		component:ReleaseItem,
		meta: { 
        requiresAuth: true
      }
	},
	{
		path:'/profile',
		component:Profile,
		meta: { 
	        requiresAuth: true
         },
		children: [
            {
	          path: '',
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // этот путь требует авторизации, проверяем залогинен ли
    // пользователь, и если нет, перенаправляем на страницу логина
    if (store.getters.isLoggedIn) {
      next({
        path: '/signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // всегда так или иначе нужно вызвать next()!
  }
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