export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: 'API',
    path: 'api',
    component: () => import('./grid-api.md')
  },
  {
    title: '基础网格',
    path: 'default',
    component: () => import('./grid-default.md')
  }
]
