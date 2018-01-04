import Vue from 'vue'
import VueRouter from 'vue-router'
// import Category from './theme/Category.vue'
// import Login from './theme/Login.vue'
// import NotFound from './theme/NotFound.vue'

const Category = () => System.import('./theme/Category.vue') // eslint-disable-line
const Login = () => System.import('./theme/Login.vue') // eslint-disable-line
const NotFound = () => System.import('./theme/NotFound.vue') // eslint-disable-line

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    { path: '/login', component: Login },
    { path: '/category/:id', name: 'category', component: Category },
    { path: '/', redirect: '/category/front-end' },
    { path: '*', component: NotFound }
  ]
})

export default router
