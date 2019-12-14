import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Story from './views/Story.vue'
import Gifts from './views/Gifts.vue'
import Details from './views/Details.vue'
import RSVP from './views/RSVP.vue'
import CheckRSVP from './views/CheckRSVP.vue'

import Admin from './views/Admin.vue'
import RouterView from './views/RouterView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/story',
      name: 'story',
      component: Story
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/gifting',
      name: 'gifting',
      component: Gifts
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: RouterView,
      children: [
        {
          name: 'index',
          path: '',
          component: RSVP,
        },
        {
          name: 'index',
          path: ':email',
          component: CheckRSVP,
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
  ]
})
