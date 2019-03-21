<script>
import { Axis, Grid, Legend, Tooltip } from '@qcharts/core'
const pluginObject = {
  's-axis': Axis,
  's-grid': Grid,
  's-legend': Legend,
  's-tooltip': Tooltip
}
/**
 * 所有组件的基类
 * 用于定义通用props, methods 等属性
 */
export default {
  props: {
    attrs: { type: Object, default: () => {} }
  },
  data: () => {
    return {
      plugin: null
    }
  },
  watch: {
    attrs: {
      deep: true,
      handler(data) {
        this.plugin.attrs(data)
      }
    }
  },
  created: function() {
    if (
      this.$vnode.componentOptions.tag &&
      pluginObject[this.$vnode.componentOptions.tag]
    ) {
      const Plug = pluginObject[this.$vnode.componentOptions.tag]

      this.plugin = new Plug(this.attrs)

      Object.keys(this.$attrs).forEach(element => {
        if (element.indexOf('css-') === -1) {
          return
        }
        this.plugin.style(element.substr(4), this.$attrs[element])
      })
      this.$vnode.componentOptions.listeners &&
        Object.keys(this.$vnode.componentOptions.listeners).forEach(element => {
          this.plugin.on(
            element,
            this.$vnode.componentOptions.listeners[element]
          )
        })
      this.$bus.emit('addPlugins', this.plugin)
    }
  }
}
</script>