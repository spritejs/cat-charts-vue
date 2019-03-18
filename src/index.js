import Chart from './components/s-chart/'
import Bar from './components/s-bar/'
import Pie from './components/s-pie/'
import Line from './components/s-line/'
import Radar from './components/s-radar/'
const components = [Chart, Bar, Pie, Radar, Line]

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
  Vue.prototype.$bus = Bus //由于放在原型上
}

const version = '0.1.30'

export { Chart, Bar, Line, Radar, Pie, install, version }
