<script>
import { Bar, Pie, Line, Radar } from 'q-charts'
const visualObject = {
  's-line': Line,
  's-bar': Bar,
  's-pie': Pie,
  's-radar': Radar
}
/**
 * 所有组件的基类
 * 用于定义通用props, methods 等属性
 */
export default {
  props: {
    attrs: { type: Object, defualt: () => {} },
    data: { type: Array, defualt: [] },
    dataFields: { type: Object, defualt: () => {} }
  },
  data: () => {
    return {
      visual: null
    }
  },
  watch: {
    data: {
      deep: true,
      handler(data) {
        this.visual.source(data)
      }
    }
  },
  created: function() {
    if (
      this.$vnode.componentOptions.tag &&
      visualObject[this.$vnode.componentOptions.tag]
    ) {
      const Shape = visualObject[this.$vnode.componentOptions.tag]

      this.visual = new Shape(this.attrs)
        .source(this.data)
        .setDataFields(this.dataFields)

      Object.keys(this.$attrs).forEach(element => {
        if (element.indexOf('css-') === -1) {
          return
        }
        this.visual.style(element.substr(4), this.$attrs[element])
      })

      this.$bus.emit('add', this.visual)
    }
  }
}
</script>