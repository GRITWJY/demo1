import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
	mode: 'history',
	routes: [
		{
			path:'/',
			name:"登录",
			redirect:'/login'
		},
		{
			path: '/login',
			name: "登录",
			component: () => import('./views/Login.vue'),
		},
		{
			path:'/showpage',
			name:'show',
			component:()=>import('./views/Show.vue'),
		},
	]
})
