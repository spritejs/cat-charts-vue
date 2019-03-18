export default [
  {
    title: '',
    path: '',
    redirect:'default'
    //component: () => import('./pie-default.md')
  },
  {
    title: '饼图',
    path: 'default',
    component: () => import('./pie-default.md')
  },
  {
    title: '定义样式',
    path: 'style',
    component: () => import('./pie-style.md')
  },
  {
    title: '数据更新',
    path: 'update',
    component: () => import('./pie-update.md')
  },
  {
    title: '环图',
    path: 'dounght',
    component: () => import('./pie-dounght.md')
  },
  {
    title: '玫瑰图',
    path: 'rose',
    component: () => import('./pie-rose.md')
  },
  {
    title: '图表组合',
    path: 'compose',
    component: () => import('./pie-compose.md')
  }
]
