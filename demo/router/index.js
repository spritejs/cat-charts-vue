import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article.vue'
import demos from '../views/demo/routes.js'
import plugins from '../views/plugin/routes.js'
import homes from '../views/home/routes.js'

Vue.use(Router)

function withArticleContainer(parentRoutePath, routes) {
  return {
    template: '<Article :parentRoutePath="parentRoutePath" :routes="routes" />',
    components: {
      Article
    },
    data() {
      return {
        parentRoutePath,
        routes
      }
    }
  }
}

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
      component: withArticleContainer('homes', homes),
      children: homes
    },
    {
      path: '/demo',
      redirect: '/demo/line',
      component: withArticleContainer('demo', demos),
      children: demos
    },
    {
      path: '/plugin',
      component: withArticleContainer('plugin', plugins),
      children: plugins
    }
  ]
})
