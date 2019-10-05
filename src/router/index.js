import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

import Stations from '@/components/Stations'
import Station from '@/components/Station'
import Wmata from '@/components/Wmata'
import Navigation from '@/components/Navigation'
import TrainMap from '@/components/TrainMap'


import firebase from 'firebase'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login' 
    },
    {
      path: '/',
      redirect: '/stations' 
    },
    {
      path: '/stations',
      name: 'Stations',
      component: Stations
    },
    {
      path: '/station/:pageSlug',
      name: 'Station',
      component: Station
    },
    {
      path: '/favorites',
      name: 'Wmata',
      component: Wmata,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/navigation',
      name: 'Navigation',
      component: Navigation
    },
    {
      path: '/map',
      name: 'TrainMap',
      component: TrainMap
    },
    {
      path: '/sign-up',
      name: 'Sign Up',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

// meta: {
//     requiresAuth: true
// }


// Auth Guard
// router.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser;
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) next('login')
//   else if (!requiresAuth && currentUser) next('/favorites')
//   else next() 
// })

export default router