## 基础坐标轴


:::demo 基础坐标

```html
<template>
  <s-chart ref="chart">
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          padding: [80, 30, 50, 50]
        },
        lineData: [
          { month: 'Jan', city: 'London', value: 3.9 },
          { month: 'Feb', city: 'London', value: 4.2 },
          { month: 'Mar', city: 'London', value: 5.7 },
          { month: 'Apr', city: 'London', value: 8.5 },
          { month: 'May', city: 'London', value: 11.9 },
          { month: 'Jun', city: 'London', value: 15.2 }
        ],
        dataFields: {
          x: 'month',
          y: 'value'
        }
      }
    },
    mounted(){
      let chart = this.$refs['chart'].chart;
      let padding = [60,30,30,50];
      let scales = [{label: "Jan", offset: "0%"},{label: "Apr", offset: "60%"},{label: "Jun", offset: "100%"}];
      chart.emit('axis:render', {orient:'bottom',pos:[100,100],size:[600,300],scales});
      chart.emit('axis:render', {orient:'left',pos:[100,100],size:[600,300],scales});
    }
  }
</script>
```
