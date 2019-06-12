export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基础漏斗图',
    path: 'default',
    component: () => import('./default.md')
  },
  {
    title: '其他',
    path: 'others',
    component: () => import('./others.md')
  }
]
