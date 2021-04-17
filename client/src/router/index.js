import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login,
    beforeEnter(to, from, next) {
      console.log('routing');
      store.dispatch('auth/authenticate').then(() => {
        console.log('logged in');
        next('/dashboard');
      }).catch(() => {
        console.log('not logged in');
        next();
      })
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter(to, from, next) {
      console.log('routing');
      store.dispatch('auth/authenticate').then(() => {
        console.log('logged in');
        next();
      }).catch(() => {
        console.log('not logged in');
        next('/login');
      })
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
