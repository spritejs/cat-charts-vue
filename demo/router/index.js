import Vue from 'vue'
import Router from 'vue-router'

import demos from '../views/demo/routes.js'
import plugins from '../views/plugin/routes.js'
import homes from '../views/home/routes.js'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home/quickstart'
    },
    {
      path: '/home',
      redirect: '/home/quickstart',
      component: () => import('../views/home/index.vue'),
      children: homes
    },
    {
      path: '/demo',
      redirect: '/demo/line',
      component: () => import('../views/demo/index.vue'),
      children: demos
    },
    {
      path: '/plugin',
      component: () => import('../views/plugin/index.vue'),
      children: plugins
    },

    {
      path: '/json-editor',
      component: () => import('../views/JSONEditor.vue')
    }
  ]
})
