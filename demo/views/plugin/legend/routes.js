export default [
  {
    title: '',
    path: '',
    redirect:'default'
  },
  {
    title: 'API',
    path: 'api',
    component: () => import('./api.md')
  },
  {
    title: '基本使用',
    path: 'default',
    component: () => import('./basic.md')
  },
  {
    title: '位置调整',
    path: 'position',
    component: () => import('./position.md')
  }
]
