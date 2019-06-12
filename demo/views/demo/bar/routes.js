export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '条形图',
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
  }
]
