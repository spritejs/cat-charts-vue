## 堆叠图

:::demo

```html
<template>
  <s-chart :data="data" :data-fields="dataFields">
    <s-bar :attrs="attrs" />
    <s-axis :attrs="{orient:'left'}" :css-axis="false" :css-scale="false" />
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
          stack: true
        },
        data: [
          {
            data: '05-01',
            type: '图例一',
            value: 11
          },
          {
            data: '05-01',
            type: '图例二',
            value: 12.2
          },
          {
            data: '05-02',
            type: '图例一',
            value: 28
          },
          {
            data: '05-02',
            type: '图例二',
            value: 31
          },
          {
            data: '05-03',
            type: '图例一',
            value: 36
          },
          {
            data: '05-03',
            type: '图例二',
            value: 18
          },
          {
            data: '05-04',
            type: '图例一',
            value: 58
          },
          {
            data: '05-04',
            type: '图例二',
            value: 30.2
          },
          {
            data: '05-05',
            type: '图例一',
            value: 86.2
          },
          {
            data: '05-05',
            type: '图例二',
            value: 41.2
          },
          {
            data: '05-06',
            type: '图例一',
            value: 71.2
          },
          {
            data: '05-06',
            type: '图例二',
            value: 45.2
          },
          {
            data: '05-07',
            type: '图例一',
            value: 41.2
          },
          {
            data: '05-07',
            type: '图例二',
            value: 22.2
          },
          {
            data: '05-08',
            type: '图例一',
            value: 16.2
          },
          {
            data: '05-08',
            type: '图例二',
            value: 20.2
          }
        ],
        tooltipAttrs: {
          formatter: data => `${data.type} ${data.value}`
        },
        dataFields: { row: 'type', value: 'value', text: 'data' }
      }
    }
  }
</script>
```

:::
