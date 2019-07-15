import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import PostPage from './views/PostPage.vue'
import PortfolioPage from './views/PortfolioPage.vue'
import LoginPage from './views/LoginPage.vue'
import PortfolioWriterPage from './views/PortfolioWriterPage.vue'
import PostWriterPage from './views/PostWriterPage.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage
		},
		{
			path: '/post',
			name: 'post',
			component: PostPage
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: PortfolioPage
		},
		{
			path: '/login',
			name: 'login',
			component: LoginPage
		},
		{
			path: '/PortfolioWriter',
			name: 'PortfolioWriter',
			component: PortfolioWriterPage
		},
		{
			path: '/PostWriter',
			name: 'PostWriter',
			component: PostWriterPage
		},
  ],
  scrollBehavior (to, from, savedPosition) {
	return { x: 0, y: 0 }
  }
})
