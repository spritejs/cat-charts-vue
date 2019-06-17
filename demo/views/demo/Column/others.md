## 其他

#### 样式调整

:::demo

```html
<template>
  <s-chart :data="data" :data-fields="dataFields">
    <s-bar
      :css-text="text"
      :css-text:hover="textHover"
      :css-pillar="pillar"
      :css-pillar:hover="pillarHover"
      :css-backgroundpillar="backgroundpillar"
      :css-backgroundpillar:hover="backgroundpillarHover"
    />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-tooltip :attrs="tooltipAttrs" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        data: [
          { value: 3350, label: '直接访问' },
          { value: 1548, label: '搜索引擎' },
          { value: 2340, label: '联盟广告' },
          { value: 1350, label: '视频广告' },
          { value: 3100, label: '邮件营销' }
        ],
        tooltipAttrs: {
          formatter: data => `${data.label} ${data.value}`
        },
        dataFields: { row: '*', value: 'value', text: 'label' },
        text: (attrs, data, i) => {
          let anchor = attrs.anchor || [0, 0]
          let size = attrs.size
          let pos = attrs.pos
          return {
            rotate: 0,
            text: data.value,
            anchor: [0.5, 1],
            pos: [pos[0] + size[0] / 2, pos[1] - size[1]]
          }
        },
        textHover: (attrs, data, i) => {
          let anchor = attrs.anchor || [0, 0]
          let size = attrs.size
          let pos = attrs.pos
          return {
            font: '22px "宋体"',
            rotate: 0,
            text: data.value,
            anchor: [0.5, 1],
            pos: [pos[0] + size[0] / 2, pos[1] - size[1]]
          }
        },
        pillar: (attrs, d, i) => {
          if (i % 2 === 0) {
            return {
              border: { width: 1 },
              borderRadius: 20,
              fillColor: {
                vector: [0, 0, 0, 100],
                colors: [
                  { color: '#9861E5', offset: 0 },
                  { color: '#ADDF84', offset: 1 }
                ]
              }
            }
          }
          return {
            border: { width: 1 },
            opacity: 1.0,
            fillColor: {
              vector: [0, 0, 0, 100],
              colors: [
                { color: '#84E0BE', offset: 0 },
                { color: '#FBD54A', offset: 1 }
              ]
            },
            borderRadius: 20
          }
        },
        pillarHover: (attrs, data, i) => {
          if (i % 2 === 0) {
            return {
              borderRadius: 10
            }
          }
          return { opacity: 0.5, fillColor: '#FC6980' }
        },
        backgroundpillar: { borderRadius: 10 },
        backgroundpillarHover: { borderRadius: 20 }
      }
    }
  }
</script>
```

:::

#### 负值柱状图

:::demo

```html
<template>
  <s-chart :data="data" :data-fields="dataFields">
    <s-bar :attrs="attrs" :css-text="true" />
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
          formatter: data => `${data.year} ${data.sales}`
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
    <s-bar :css-text="text" />
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
