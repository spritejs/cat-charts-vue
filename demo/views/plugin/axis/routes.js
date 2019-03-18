export default [
  {
    title: '基础坐标轴',
    path: '',
    component: () => import('./axis-default.md')
  },
  {
    title: '坐标轴样式',
    path: 'style',
    component: () => import('./axis-style.md')
  }
]
