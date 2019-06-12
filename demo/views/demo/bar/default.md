## 基础条形图

:::demo

```html
<template>
  <s-chart :data="data" :data-fields="dataFields" @rendered="chartRender">
    <s-bar :attrs="attrs" :css-pillar="barStyle" />
    <s-axis :attrs="{orient:'left'}" :css-grid="false" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-tooltip :attrs="tooltipAttrs" />
    <s-legend :attrs="{align: ['center', 'bottom']}" :css-text="legendText" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          transpose: true,
          barWidth: 18
        },
        data: [
          { value: 6100, label: 'TOP1' },
          { value: 5200, label: 'TOP2' },
          { value: 4400, label: 'TOP3' },
          { value: 3700, label: 'TOP4' },
          { value: 2800, label: 'TOP5' },
          { value: 2000, label: 'TOP6' },
          { value: 1300, label: 'TOP7' },
          { value: 400, label: 'TOP8' }
        ],
        tooltipAttrs: {
          formatter: data => `${data.label} ${data.value}`
        },
        dataFields: { row: '*', value: 'value', text: 'label' },
        barStyle: { fillColor: '#47A1FF' },
        legendText: { text: '图例一' }
      }
    },
    methods: {
      chartRender() {
        console.log('chartRender')
      }
    }
  }
</script>
```

:::
