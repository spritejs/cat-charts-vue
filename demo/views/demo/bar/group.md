## 分组图

:::demo

```html
<template>
  <s-chart :data="groupData" :data-fields="dataFields">
    <s-bar :attrs="attrs" />
    <s-axis :attrs="{orient:'left'}" :css-grid="false" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-legend :attrs="{align: ['center', 'bottom']}" />
    <s-tooltip :attrs="tooltipAttrs" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          transpose: true,
          barWidth: 12
        },
        groupData: [
          {
            product: '05-12',
            year: '图例一',
            sales: 3000
          },
          {
            product: '05-12',
            year: '图例二',
            sales: 3500
          },
          {
            product: '05-12',
            year: '图例三',
            sales: 2000
          },
          {
            product: '05-13',
            year: '图例一',
            sales: 5800
          },
          {
            product: '05-13',
            year: '图例二',
            sales: 4200
          },
          {
            product: '05-13',
            year: '图例三',
            sales: 2700
          },
          {
            product: '05-14',
            year: '图例一',
            sales: 2600
          },
          {
            product: '05-14',
            year: '图例二',
            sales: 1800
          },
          {
            product: '05-14',
            year: '图例三',
            sales: 3800
          },
          {
            product: '05-15',
            year: '图例一',
            sales: 3400
          },
          {
            product: '05-15',
            year: '图例二',
            sales: 5100
          },
          {
            product: '05-15',
            year: '图例三',
            sales: 4300
          },
          {
            product: '05-16',
            year: '图例一',
            sales: 3100
          },
          {
            product: '05-16',
            year: '图例二',
            sales: 3400
          },
          {
            product: '05-16',
            year: '图例三',
            sales: 2100
          }
        ],
        tooltipAttrs: {
          formatter: data => `${data.year} ${data.sales}`
        },
        dataFields: {
          row: 'year',
          value: 'sales',
          text: 'product'
        }
      }
    }
  }
</script>
```

:::
