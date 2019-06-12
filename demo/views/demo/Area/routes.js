export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基础面积图',
    path: 'default',
    component: () => import('./default.md')
  },
  {
    title: '区间面积图',
    path: 'group',
    component: () => import('./range.md')
  },
  {
    title: '堆叠面积图',
    path: 'stack',
    component: () => import('./stack.md')
  }
]
