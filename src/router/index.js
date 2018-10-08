import Vue from 'vue'
import Router from 'vue-router'
import VueDraggable from 'vue-draggable'
import VeeValidate from 'vee-validate'
import Home from '@/components/Home'
import Signup from '@/components/signup'
import Login from '@/components/login'
import draggable from '@/components/draggable'
import vuetify from '@/components/vuetify'

Vue.use(Router)
Vue.use(VueDraggable)
Vue.use(VeeValidate)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/draggable',
      name: 'draggable',
      component: draggable
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: vuetify
    }
  ]
})
