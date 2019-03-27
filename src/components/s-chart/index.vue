<template>
  <div class="cat-charts">
    <slot></slot>
  </div>
</template>
<script>
import { Chart } from '@qcharts/core'
import { bus } from '../../utils'
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
      visuals: [],
      plugins: []
    }
  },
  created: function() {
    this[bus].on('addVisuals', data => {
      this.visuals.push(data)
    })
    this[bus].on('addPlugins', data => {
      this.plugins.push(data)
    })
  },
  mounted() {
    this.chart = new Chart({
      container: this.$el,
      size: this.size,
      pos: this.pos,
      forceFit: this.forceFit
    })

    this.$listeners &&
      Object.keys(this.$listeners).forEach(event => {
        this.chart.on(`chart:${event}`, this.$listeners[event])
      })

    this.visuals.forEach(element => {
      this.chart.add(element)
    })
    this.plugins.forEach(element => {
      this.chart.add(element)
    })
    this.chart.render()
  }
}
</script>
<style>
  .cat-charts{position:relative;height:100%;}
</style>
