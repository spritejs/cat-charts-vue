export default [
  {
    title: '',
    path: '',
    redirect:'default',
    //component: () => import('./line-default.md')
  },
  {
    title: '折线图',
    path: 'default',
    component: () => import('./line-default.md')
  },
  {
    title: '定义样式',
    path: 'style',
    component: () => import('./line-style.md')
  },
  {
    title: '数据更新',
    path: 'update',
    component: () => import('./line-update.md')
  },
  {
    title: '堆叠面积图',
    path: 'stack',
    component: () => import('./line-stack.md')
  }
]
