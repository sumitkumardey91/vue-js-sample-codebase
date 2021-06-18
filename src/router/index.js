import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')  // this style
  },
  {
    path: '/listing',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')  // this style
  },
  {
    path: '/dynamic/:id',
    name: 'dynamic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Dymanic" */ '../views/Dynamic.vue')  // this style
  },
  { 
    path: "*", 
    component: () => import(/* webpackChunkName: "PageNotFound" */ '../views/PageNotFound.vue') 
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
