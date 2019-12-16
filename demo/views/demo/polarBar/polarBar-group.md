## 分组柱状图

:::demo

```html
<template>
  <s-chart :data="barData" :data-fields="dataFields">
    <s-polarBar :attrs="attrs" />
    <s-tooltip :attrs="tooltipAttrs" />
    <s-legend :attrs="{align: ['center', 'bottom']}" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          innerRadius: 0.3,
          radius: 0.7,
          groupPadAngle: Math.PI * 0.2
        },
        barData: [
          {
            product: '05-08',
            year: '图例一',
            sales: 3000
          },
          {
            product: '05-08',
            year: '图例二',
            sales: 1000
          },
          {
            product: '05-08',
            year: '图例三',
            sales: 2000
          },
          {
            product: '05-09',
            year: '图例一',
            sales: 3000
          },
          {
            product: '05-09',
            year: '图例二',
            sales: 1000
          },
          {
            product: '05-09',
            year: '图例三',
            sales: 2000
          },

          {
            product: '05-10',
            year: '图例一',
            sales: 1700
          },
          {
            product: '05-10',
            year: '图例二',
            sales: 2400
          },
          {
            product: '05-10',
            year: '图例三',
            sales: 3700
          },

          {
            product: '05-11',
            year: '图例一',
            sales: 4200
          },
          {
            product: '05-11',
            year: '图例二',
            sales: 2800
          },
          {
            product: '05-11',
            year: '图例三',
            sales: 3100
          },

          {
            product: '05-12',
            year: '图例一',
            sales: 5100
          },
          {
            product: '05-12',
            year: '图例二',
            sales: 2500
          },
          {
            product: '05-12',
            year: '图例三',
            sales: 350
          }
        ],
        tooltipAttrs: {
          formatter: data => `${data.product}: ${data.sales}`
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
