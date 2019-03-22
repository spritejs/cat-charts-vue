import Chart from './components/s-chart/'
import Bar from './components/visuals/s-bar/'
import Pie from './components/visuals/s-pie/'
import Line from './components/visuals/s-line/'
import Radar from './components/visuals/s-radar/'
import Axis from './components/plugins/s-axis/'
import Grid from './components/plugins/s-Grid/'
import Tooltip from './components/plugins/s-Tooltip/'
import Legend from './components/plugins/s-Legend/'
import { bus } from './utils'
const components = [Chart, Bar, Pie, Radar, Line, Axis, Grid, Tooltip, Legend]

components.map(component => {
  // 按需加载组件
  component.install = Vue => Vue.component(component.name, component)
})

// 整体插件机制
const install = Vue => {
  components.map(component => Vue.component(component.name, component))
  const Bus = new Vue({
    methods: {
      emit(event, ...args) {
        this.$emit(event, ...args)
      },
      on(event, callback) {
        this.$on(event, callback)
      },
      off(event, callback) {
        this.$off(event, callback)
      }
    }
  })
  Vue.prototype[bus] = Bus //事件总线放在原型上
}

const version = '0.2.2'

export {
  Chart,
  Bar,
  Line,
  Radar,
  Pie,
  Axis,
  Grid,
  Tooltip,
  Legend,
  install,
  version
}
