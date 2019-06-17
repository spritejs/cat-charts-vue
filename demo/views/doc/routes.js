import generateCommonPage from '../generateCommonPage'
import visualsRoutes from './visuals'
import pluginsRoutes from './plugins'

export default [
  {
    title: '',
    path: '',
    redirect: 'quickstart'
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
    title: 'Visuals',
    path: 'visuals',
    component: generateCommonPage('/doc/visuals/', visualsRoutes),
    children: visualsRoutes
  },

  {
    title: 'Plugins',
    path: 'plugins',
    component: generateCommonPage('/doc/plugins/', pluginsRoutes),
    children: pluginsRoutes
  }

  // {
  //   title: '自定义样式',
  //   path: 'style',
  //   component: () => import('./style.md')
  // },
]
