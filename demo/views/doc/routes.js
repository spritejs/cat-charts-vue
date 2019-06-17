import generateCommonPage from '../generateCommonPage'
import apiRoutes from './api'
import pluginsRoutes from './plugins'

export default [
  {
    title: '',
    path: '',
    redirect: 'api'
  },
  {
    title: '快速开始',
    path: 'quickstart',
    component: () => import('./quickstart.md')
  },
  {
    title: '图表简介',
    path: 'introduction',
    component: () => import('./introduction.md')
  },
  {
    title: 'API',
    path: 'api',
    component: generateCommonPage('/doc/api/', apiRoutes),
    children: apiRoutes
  },

  {
    title: 'Plugin',
    path: 'plugin',
    component: generateCommonPage('/doc/plugin/', pluginsRoutes),
    children: pluginsRoutes
  }

  // {
  //   title: '自定义样式',
  //   path: 'style',
  //   component: () => import('./style.md')
  // },
]
