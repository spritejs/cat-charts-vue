export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基础柱状图',
    path: 'default',
    component: () => import('./polarBar-default.md')
  },
  {
    title: '分组柱状图',
    path: 'group',
    component: () => import('./polarBar-group.md')
  },
  {
    title: '堆叠柱状图',
    path: 'stack',
    component: () => import('./polarBar-stack.md')
  }
]
