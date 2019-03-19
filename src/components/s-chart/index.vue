<template>
  <div class="cat-charts">
    <slot></slot>
  </div>
</template>
<script>
import { Chart, Legend, Axis, Tooltip, Grid } from '@qcharts/core'

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
      if (vnode.tag && pluginObject[vnode.tag]) {
        this.addPlugin(vnode)
      }
    })

    this.$listeners &&
      Object.keys(this.$listeners).forEach(event => {
        this.chart.on(`chart:${event}`, this.$listeners[event])
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

    addPlugin(vnode) {
      let cssKeys = null
      let events = null
      let Kls = pluginObject[vnode.tag]
      let props = vnode.data && vnode.data.attrs ? vnode.data.attrs : null
      const plugin = props && props.attrs ? new Kls(props.attrs) : new Kls()
      events = vnode.data && vnode.data.on ? vnode.data.on : null
      if (props) {
        cssKeys = Object.keys(props).filter(prop => prop.indexOf('css-') !== -1)
      }
      cssKeys &&
        cssKeys.forEach(key => {
          let keyName = key.substr(4)
          plugin.style(keyName, props[key])
        })
      events &&
        Object.keys(events).forEach(event => {
          plugin.on(event, events[event])
        })
      this.chart.add(plugin)
    }
  }
}
</script>