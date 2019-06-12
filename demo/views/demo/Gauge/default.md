## Basic Gauge 仪表盘

:::demo

```html
<template>
  <s-chart :data="data" :data-fields="dataFields">
    <s-gauge :attrs="attrs" :css-title="{fontSize:48}" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          min: 0,
          max: 100,
          lineWidth: 20,
          tickStep: 10,
          title: d => `${d.value}`,
          subTitle: d => `${d.text}`
        },

        data: [
          {
            text: '信用分',
            value: 45
          }
        ],
        dataFields: {
          row: 'text',
          value: 'value'
        }
      }
    }
  }
</script>
```

:::
