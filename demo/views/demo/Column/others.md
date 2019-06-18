## 其他

#### 负值柱状图

:::demo

```html
<template>
  <s-chart :data="data" :data-fields="dataFields">
    <s-bar :attrs="attrs" />
    <s-axis :attrs="{orient:'left'}" />
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
          barWidth: 20
        },
        data: [
          {
            product: '茶叶',
            year: '2016',
            sales: -81.2
          },
          {
            product: '茶叶',
            year: '2017',
            sales: 121.2
          },
          {
            product: '茶叶',
            year: '2018',
            sales: -41.2
          },
          {
            product: '牛奶',
            year: '2016',
            sales: 85.2
          },
          {
            product: '牛奶',
            year: '2017',
            sales: 79.6
          },
          {
            product: '牛奶',
            year: '2018',
            sales: 81.2
          },
          {
            product: '咖啡',
            year: '2016',
            sales: -65.2
          },
          {
            product: '咖啡',
            year: '2017',
            sales: -59.6
          },
          {
            product: '咖啡',
            year: '2018',
            sales: -61.2
          },
          {
            product: '椰汁',
            year: '2016',
            sales: 35.2
          },
          {
            product: '椰汁',
            year: '2017',
            sales: 79.6
          },
          {
            product: '椰汁',
            year: '2018',
            sales: 21.2
          }
        ],
        tooltipAttrs: {
          formatter: d => `${d.product} - ${d.year} - ${d.sales}`
        },
        dataFields: {
          row: 'year',
          col: 'product',
          value: 'sales',
          text: 'product'
        }
      }
    }
  }
</script>
```

:::

#### 数据更新

:::demo

```html
<template>
  <s-chart :data="data" :data-fields="dataFields">
    <s-bar />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-legend :attrs="{align: ['center', 'bottom']}" />
    <s-tooltip :attrs="tooltipAttrs" />
  </s-chart>
</template>
<script>
  let num = 0
  export default {
    data: function() {
      return {
        data: [],
        barData: [
          {
            product: '茶叶',
            year: '2016',
            sales: 81.2
          },
          {
            product: '茶叶',
            year: '2017',
            sales: 121.2
          },
          {
            product: '茶叶',
            year: '2018',
            sales: 41.2
          },
          {
            product: '牛奶',
            year: '2016',
            sales: 85.2
          },
          {
            product: '牛奶',
            year: '2017',
            sales: 79.6
          },
          {
            product: '牛奶',
            year: '2018',
            sales: 81.2
          },
          {
            product: '咖啡',
            year: '2016',
            sales: 65.2
          },
          {
            product: '咖啡',
            year: '2017',
            sales: 59.6
          },
          {
            product: '咖啡',
            year: '2018',
            sales: 61.2
          },
          {
            product: '椰汁',
            year: '2016',
            sales: 35.2
          },
          {
            product: '椰汁',
            year: '2017',
            sales: 79.6
          },
          {
            product: '椰汁',
            year: '2018',
            sales: 21.2
          }
        ],
        tooltipAttrs: {
          formatter: data => `${data.year} ${data.sales}`
        },
        dataFields: {
          row: 'year',
          col: 'product',
          value: 'sales',
          text: 'product'
        },
        text: (attrs, data, i) => {
          return { text: data.sales }
        },
        newData: [
          {
            product: '茶叶',
            year: '2016',
            sales: 81.2
          },
          {
            product: '茶叶',
            year: '2017',
            sales: 121.2
          },
          {
            product: '茶叶',
            year: '2018',
            sales: 41.2
          },
          {
            product: '茶叶',
            year: '2019',
            sales: 61.2
          },
          {
            product: '牛奶',
            year: '2016',
            sales: 85.2
          },
          {
            product: '牛奶',
            year: '2017',
            sales: 79.6
          },
          {
            product: '牛奶',
            year: '2018',
            sales: 81.2
          },
          {
            product: '牛奶',
            year: '2019',
            sales: 111.2
          },
          {
            product: '咖啡',
            year: '2016',
            sales: 65.2
          },
          {
            product: '咖啡',
            year: '2017',
            sales: 59.6
          },
          {
            product: '咖啡',
            year: '2018',
            sales: 61.2
          },
          {
            product: '咖啡',
            year: '2019',
            sales: 161.2
          }
        ]
      }
    },
    created() {
      this.data = this.barData
      setTimeout(this.changeData, 5000)
    },
    methods: {
      update(data) {},
      changeData() {
        if (num % 2 === 0) {
          this.data = this.newData
        } else {
          this.data = this.barData
        }
        num++
        setTimeout(this.changeData, 5000)
      }
    }
  }
</script>
```

:::
