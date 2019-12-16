export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '饼图',
    path: 'default',
    component: () => import('./pie-default.md')
  },
  {
    title: '嵌套饼图',
    path: 'nest',
    component: () => import('./pie-nest.md')
  },
  {
    title: '环图',
    path: 'dounght',
    component: () => import('./pie-dounght.md')
  },
  {
    title: '南丁格尔玫瑰图',
    path: 'rose',
    hidden: true,
    component: () => import('./pie-rose.md')
  }
]
