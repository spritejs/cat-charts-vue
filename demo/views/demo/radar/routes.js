export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基础雷达图',
    path: 'default',
    component: () => import('./radar-default.md')
  },
  {
    title: '双色雷达图',
    path: 'double',
    component: () => import('./radar-double.md')
  }
]
