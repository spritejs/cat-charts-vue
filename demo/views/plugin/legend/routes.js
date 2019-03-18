export default [
  {
    title: '基本使用',
    path: '',
    component: () => import('./basic.md')
  },

  {
    title: '位置调整',
    path: 'position',
    component: () => import('./position.md')
  },

  {
    title: '布局调整',
    path: 'layout',
    component: () => import('./layout.md')
  },

  {
    title: '自定义',
    path: 'personalise',
    component: () => import('./personalise.md')
  }
]
