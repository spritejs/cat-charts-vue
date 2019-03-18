export default [
  {
    title: '',
    path: '',
    redirect:'default'
    //component: () => import('./radar-default.md')
  },
  {
    title: '雷达图',
    path: 'default',
    component: () => import('./radar-default.md')
  },
  {
    title: '定义样式',
    path: 'style',
    component: () => import('./radar-style.md')
  },
  {
    title: '数据更新',
    path: 'update',
    component: () => import('./radar-update.md')
  }
]
