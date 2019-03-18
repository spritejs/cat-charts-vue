export default [
  {
    title: '快速开始',
    path: 'quickstart',
    component: () => import('./quickstart/default.md')
  },
  {
    title: '图表介绍',
    path: 'introduction',
    component: () => import('./introduction/default.md')
  },
  {
    title: '常见问题',
    path: 'questions',
    component: () => import('./questions/default.md')
  }
]

