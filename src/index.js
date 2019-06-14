import Chart from './components/s-chart/'
import Area from './components/visuals/s-area/'
import Bar from './components/visuals/s-bar/'
import Pie from './components/visuals/s-pie/'
import Line from './components/visuals/s-line/'
import Radar from './components/visuals/s-radar/'
import Funnel from './components/visuals/s-funnel/'
import Scatter from './components/visuals/s-scatter/'
import Gauge from './components/visuals/s-gauge/'
import Axis from './components/plugins/s-axis/'
import Tooltip from './components/plugins/s-Tooltip/'
import Legend from './components/plugins/s-Legend/'
import { bus } from './utils'
import global from './components/global.vue'
const components = [
  Chart,
  Area,
  Bar,
  Pie,
  Radar,
  Line,
  Funnel,
  Gauge,
  Scatter,
  Axis,
  Tooltip,
  Legend
]

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
  Vue.prototype.global = global
}

const version = '0.2.5'

export {
  Chart,
  Area,
  Bar,
  Line,
  Radar,
  Pie,
  Funnel,
  Scatter,
  Gauge,
  Axis,
  Tooltip,
  Legend,
  install,
  version
}
