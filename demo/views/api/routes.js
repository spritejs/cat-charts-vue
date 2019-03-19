export default [
  {
    title: 'Chart',
    path: 'Chart',
    component: () => import('./Chart/default.md')
  },
  {
    title: 'Bar',
    path: 'Bar',
    component: () => import('./Bar/default.md')
  },
  {
    title: 'Tooltip',
    path: 'Tooltip',
    component: () => import('./Tooltip/default.md')
  }
]
