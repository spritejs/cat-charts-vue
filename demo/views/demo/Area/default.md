## Basic Area Chart 基础面积图

:::demo

```html
<template>
  <s-chart :data="data" :data-fields="dataFields">
    <s-area
      :css-point="{fillColor:'transparent'}"
      :css-point:hover="{color:'#fff'}"
    />
    <s-axis :attrs="{orient:'left'}" :css-axis="false" :css-scale="false" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-legend
      :attrs="{align: ['center', 'bottom']}"
      :css-icon="{borderRadius:10}"
      :css-text="{fontSize:12}"
    />
    <s-tooltip :attrs="tooltipAttrs" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        data: [
          { date: '05-01', category: '图例一', sales: 15.2 },
          { date: '05-02', category: '图例一', sales: 39.2 },
          { date: '05-03', category: '图例一', sales: 31.2 },
          { date: '05-04', category: '图例一', sales: 65.2 },
          { date: '05-05', category: '图例一', sales: 55.2 },
          { date: '05-06', category: '图例一', sales: 75.2 },
          { date: '05-07', category: '图例一', sales: 95.2 },
          { date: '05-08', category: '图例一', sales: 65.2 }
        ],
        tooltipAttrs: {
          formatter: data => `${data.date} ${data.sales}`
        },
        dataFields: { row: 'category', value: 'sales', text: 'date' }
      }
    }
  }
</script>
```

:::
