## 基础柱状图

:::demo

```html
<template>
  <s-chart :data="barData" :data-fields="dataFields">
    <s-bar :css-pillar="barStyle" />
    <s-axis :attrs="{orient:'left'}" :css-axis="false" :css-scale="false" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-tooltip :attrs="tooltipAttrs" />
    <s-legend :attrs="{align: ['center','bottom']}" :css-text="legendText" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        barData: [
          { value: 22, label: '05-01' },
          { value: 60, label: '05-02' },
          { value: 56, label: '05-03' },
          { value: 85, label: '05-04' },
          { value: 136, label: '05-05' },
          { value: 108, label: '05-06' },
          { value: 64, label: '05-07' },
          { value: 35, label: '05-08' }
        ],
        tooltipAttrs: {
          formatter: data => `${data.label} ${data.value}`
        },
        dataFields: { row: '*', value: 'value', text: 'label' },
        barStyle: { fillColor: '#47A1FF' },
        legendText: { text: '图例一' }
      }
    }
  }
</script>
```

:::
