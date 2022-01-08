import Vue from 'vue'
import Router from 'vue-router' // Include the Vue Router library
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router) //Use the Router

export default new Router({
  routes: [
    {
      path: '/', //The URL
      name: 'home',//Name of the route
      component: Home //Which component to render
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
