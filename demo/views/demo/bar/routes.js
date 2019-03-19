export default [
  {
    title: 'API',
    path: 'api',
    component: () => import('./bar-api.md')
  },
  {
    title: '柱状图',
    path: '',
    redirect: 'default'
    //component: () => import('./bar-default.md')
  },
  {
    title: '柱状图',
    path: 'default',
    component: () => import('./bar-default.md')
  },
  {
    title: '定义样式',
    path: 'style',
    component: () => import('./bar-style.md')
  },
  {
    title: '数据更新',
    path: 'update',
    component: () => import('./bar-update.md')
  },
  {
    title: '条形图',
    path: 'traspose',
    component: () => import('./bar-transpose.md')
  },
  {
    title: '分组图',
    path: 'group',
    component: () => import('./bar-group.md')
  },
  {
    title: '堆叠图',
    path: 'stack',
    component: () => import('./bar-stack.md')
  },
  {
    title: '负值图',
    path: 'negative',
    component: () => import('./bar-negative.md')
  }
]
