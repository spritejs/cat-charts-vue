import generateCommonPage from '../generateCommonPage'
import LineRoutes from './line/routes'
import AreaRoutes from './Area/routes'
import FunnelRoutes from './Funnel/routes'
import radarRoutes from './Radar/routes'
import scatterRoutes from './Scatter/routes'
import gaugeRoutes from './Gauge/routes'
import PieRoutes from './Pie/routes'
import BarRoutes from './Bar/routes'
import ColumnRoutes from './Column/routes'
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
    component: generateCommonPage('/demo/radar/', radarRoutes),
    children: radarRoutes
  },
  {
    title: '散点图',
    path: 'scatter',
    component: generateCommonPage('/demo/scatter/', scatterRoutes),
    children: scatterRoutes
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
    component: generateCommonPage('/demo/gauge/', gaugeRoutes),
    children: gaugeRoutes
  }
]
