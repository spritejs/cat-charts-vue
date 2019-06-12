export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基础折线图',
    path: 'default',
    component: () => import('./line-default.md')
  },
  {
    title: '双折线图',
    path: 'double',
    component: () => import('./line-double.md')
  },
  {
    title: '曲线折线图',
    path: 'smooth',
    component: () => import('./line-smooth.md')
  },
  {
    title: '多折线图',
    path: 'multi',
    component: () => import('./line-multi.md')
  },
  {
    title: '其它',
    path: 'others',
    component: () => import('./line-others.md')
  }
]
