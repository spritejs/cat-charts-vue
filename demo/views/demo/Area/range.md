## Range Area Chart 区间面积图

:::demo

```html
<template>
  <s-chart :data="data" :data-fields="dataFields">
    <s-area :css-area="areaStyle" />
    <s-axis :attrs="{orient:'left'}" :css-axis="false" :css-scale="false" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-legend
      :attrs="{align: ['center', 'bottom']}"
      :css-icon="{borderRadius:10}"
      :css-text="{fontSize：12}"
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
          { date: '05-08', category: '图例一', sales: 65.2 },
          { date: '05-01', category: '图例二', sales: 10.2 },
          { date: '05-02', category: '图例二', sales: 30.2 },
          { date: '05-03', category: '图例二', sales: 25.2 },
          { date: '05-04', category: '图例二', sales: 70.2 },
          { date: '05-05', category: '图例二', sales: 45.2 },
          { date: '05-06', category: '图例二', sales: 56.2 },
          { date: '05-07', category: '图例二', sales: 70.2 },
          { date: '05-08', category: '图例二', sales: 45.2 }
        ],
        tooltipAttrs: {
          formatter: data => `${data.date} ${data.sales}`
        },
        dataFields: { row: 'category', value: 'sales', text: 'date' },
        areaStyle: function(attrs, data, i) {
          if (i === 0) {
            return { fillColor: 'transparent' }
          } else if (i === 1) {
            return { fillColor: 'rgba(0,0,0,0.1)' }
          }
        }
      }
    }
  }
</script>
```

:::
