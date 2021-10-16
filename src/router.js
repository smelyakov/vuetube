import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Watch from './views/watch/Watch.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/watch',
      redirect: '/'
    },
    {
      path: '/watch/:videoId',
      name: 'watch',
      component: Watch
    },
    {
      path: '/:pathMatch(.*)s',
      redirect: '/'
    }
  ]
})

export default router
