<template>
  <div class="cat-charts">
    <slot></slot>
  </div>
</template>
<script>
import { Chart, Legend, Axis, Tooltip, Grid } from 'q-charts'

// const visualObject = {
//   's-line': Line,
//   's-bar': Bar,
//   's-pie': Pie,
//   's-radar': Radar
// }
const pluginObject = {
  's-axis': Axis,
  's-legend': Legend,
  's-tooltip': Tooltip,
  's-grid': Grid
}

export default {
  name: 's-chart',
  props: {
    pos: { type: Array, default: () => [0, 0] },
    size: {
      type: Array,
      default: () => ['100%', '100%']
    },
    forceFit: {
      type: Boolean,
      default: true
    }
  },
  data: () => {
    return {
      chart: null,
      visuals: []
    }
  },
  created: function() {
    this.$bus.on('add', data => {
      this.visuals.push(data)
    })
  },
  mounted() {
    this.chart = new Chart({
      container: this.$el,
      size: this.size,
      pos: this.pos,
      forceFit: this.forceFit
    })

    this.$slots.default.forEach(vnode => {
      // if (vnode.tag && visualObject[vnode.tag]) {
      //   //存在tab并且q-chart中有对应的图形类
      //   this.addVisual(vnode)
      // }
      if (vnode.tag && pluginObject[vnode.tag]) {
        this.addPlugin(vnode)
      }
    })

    this.visuals.forEach(element => {
      this.chart.add(element)
    })
    this.chart.render()
  },

  methods: {
    addVisualNew(visual) {
      this.chart.add(visual)
      this.chart.render()
    },
    // addVisual(vnode) {
    //   let Kls = visualObject[vnode.tag]
    //   let props = vnode.data.attrs
    //   let cssKeys = Object.keys(props).filter(
    //     prop => prop.indexOf('css-') !== -1
    //   )
    //   let initData = props['data']
    //   let dataFields = props['data-fields']
    //   let attrs = props['attrs']
    //   const visual = new Kls(attrs).source(initData).setDataFields(dataFields)
    //   // add styles
    //   cssKeys.forEach(key => {
    //     let keyName = key.substr(4)
    //     visual.style(keyName, props[key])
    //   })
    //   vnode.visual = visual
    //   this.chart.add(visual)
    // },
    addPlugin(vnode) {
      let Kls = pluginObject[vnode.tag]
      let props = vnode.data && vnode.data.attrs ? vnode.data.attrs : null
      if (vnode.tag === 's-tooltip') {
        let formatter = props.formatter
        const plugin = props
          ? new Kls(props.attrs).formatter(formatter)
          : new Kls()
        this.chart.add(plugin)
      } else {
        const plugin = props ? new Kls(props.attrs) : new Kls()
        this.chart.add(plugin)
      }
    }
  }
}
</script>