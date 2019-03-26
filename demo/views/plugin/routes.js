import generateCommonPage from '../generateCommonPage'
import AxisRoutes from './axis/routes'
import GridRoutes from './grid/routes'
import LegendRoutes from './legend/routes'
import TooltipRoutes from './tooltip/routes'

export default [
  {
    title: '',
    path: '',
    redirect: 'axis'
  },
  {
    title: 'Axis',
    path: 'axis',
    component: generateCommonPage('/plugin/axis/', AxisRoutes),
    children: AxisRoutes
  },

  {
    title: 'Legend',
    path: 'legend',
    component: generateCommonPage('/plugin/legend/', LegendRoutes),
    children: LegendRoutes
  },

  {
    title: 'Tooltip',
    path: 'tooltip',
    component: generateCommonPage('/plugin/tooltip/', TooltipRoutes),
    children: TooltipRoutes
  },

  {
    title: 'Grid',
    path: 'grid',
    component: generateCommonPage('/plugin/grid/', GridRoutes),
    children: GridRoutes
  }
]
