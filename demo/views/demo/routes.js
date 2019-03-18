import generateCommonPage from '../generateCommonPage'
import LineRoutes from './line/routes'
import BarRoutes from './bar/routes'
import PieRoutes from './pie/routes'
import RadarRoutes from './radar/routes'

export default [
  {
    title: '折线图',
    path: 'line',
    component: generateCommonPage('/demo/line/', LineRoutes),
    children: LineRoutes
  },
  {
    title: '柱状图',
    path: 'bar',
    component: generateCommonPage('/demo/bar/', BarRoutes),
    children: BarRoutes
  },
  {
    title: '饼图',
    path: 'pie',
    component: generateCommonPage('/demo/pie/', PieRoutes),
    children: PieRoutes
  },
  {
    title: '雷达图',
    path: 'radar',
    component: generateCommonPage('/demo/radar/', RadarRoutes),
    children: RadarRoutes
  }
]
