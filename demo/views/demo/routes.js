import generateCommonPage from '../generateCommonPage'
import LineRoutes from './line/routes'
import AreaRoutes from './area/routes'
import FunnelRoutes from './funnel/routes'
import RadarRoutes from './radar/routes'
import ScatterRoutes from './scatter/routes'
import GaugeRoutes from './gauge/routes'
import PieRoutes from './pie/routes'
import BarRoutes from './bar/routes'
import ColumnRoutes from './column/routes'
export default [
  {
    title: '',
    path: '',
    redirect: 'column'
  },
  {
    title: '折线图',
    path: 'line',
    component: generateCommonPage('/demo/line/', LineRoutes),
    children: LineRoutes
  },
  {
    title: '面积图',
    path: 'area',
    component: generateCommonPage('/demo/area/', AreaRoutes),
    children: AreaRoutes
  },
  {
    title: '柱状图',
    path: 'column',
    component: generateCommonPage('/demo/column/', ColumnRoutes),
    children: ColumnRoutes
  },
  {
    title: '条形图',
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
  },
  {
    title: '散点图',
    path: 'scatter',
    component: generateCommonPage('/demo/scatter/', ScatterRoutes),
    children: ScatterRoutes
  },
  {
    title: '漏斗图',
    path: 'funnel',
    component: generateCommonPage('/demo/funnel/', FunnelRoutes),
    children: FunnelRoutes
  },
  {
    title: '仪表盘',
    path: 'gauge',
    component: generateCommonPage('/demo/gauge/', GaugeRoutes),
    children: GaugeRoutes
  }
]
