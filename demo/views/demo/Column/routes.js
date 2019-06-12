export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '柱状图',
    path: 'default',
    component: () => import('./default.md')
  },
  {
    title: '分组图',
    path: 'group',
    component: () => import('./group.md')
  },
  {
    title: '堆叠图',
    path: 'stack',
    component: () => import('./stack.md')
  },
  {
    title: '其他',
    path: 'others',
    component: () => import('./others.md')
  }
]
