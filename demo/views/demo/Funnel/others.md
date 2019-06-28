## 定义样式

:::demo

```html
<template>
  <s-chart :data="data" :data-fields="dataFields">
    <s-funnel :attrs="rightAttrs" :css-guideLine="true" :css-guideText="true" :css-polygon="{ strokeColor:'transparent'}"/>
    <s-funnel :attrs="leftAttrs" :css-guideLine="true" :css-guideText="true" :css-polygon="{ strokeColor:'transparent'}"/>
    <s-tooltip :attrs="tooltipAttrs" />
    <s-legend :attrs="{align: ['center', 'bottom']}" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        leftAttrs: {
          size: ['25%', '70%'],
          pos: ['50%', '20%'],
          align: 'left',
          pyramid: true,
          formatter: d => `${d.value}`
        },
        rightAttrs: {
          size: ['25%', '70%'],
          pos: ['22%', '20%'],
          align: 'right',
          pyramid: true,
          formatter: d => `${d.value}`
        },
        data: [
          { value: 3350, label: '直接访问' },
          { value: 1648, label: '搜索引擎' },
          { value: 2440, label: '联盟广告' },
          { value: 1550, label: '视频广告' },
          { value: 3000, label: '邮件营销' }
        ],
        tooltipAttrs: {
          formatter: data => `${data.label} ${data.value}`
        },
        dataFields: {
          row: 'label',
          col: 'value',
          value: 'value',
          text: 'label',
          sort: (a, b) => b.value - a.value
        }
      }
    }
  }
</script>
```

:::
