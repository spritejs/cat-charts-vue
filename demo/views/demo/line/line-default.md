## 基础折线图

:::demo

```html
<template>
  <s-chart>
    <s-line :attrs="attrs" :data="lineData" :data-fields="dataFields" />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-tooltip :attrs="tooltipAttrs" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          pos: ['10%', '10%'],
          size: ['80%', '80%']
        },
        lineData: [
          { month: 'Jan', city: 'London', value: 3.9 },
          { month: 'Feb', city: 'London', value: 4.2 },
          { month: 'Mar', city: 'London', value: 5.7 },
          { month: 'Apr', city: 'London', value: 8.5 },
          { month: 'May', city: 'London', value: 11.9 },
          { month: 'Jun', city: 'London', value: 15.2 }
        ],
        tooltipAttrs: {
          formatter: data => `${data.city}-${data.month}-${data.value}`
        },
        dataFields: {
          x: 'month',
          y: 'value'
        }
      }
    }
  }
</script>
```

:::
