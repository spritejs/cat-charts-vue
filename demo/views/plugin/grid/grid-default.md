## 基础坐标轴

:::demo 基础坐标

```html
<template>
  <s-chart>
    <s-bar :attrs="attrs" :data="barData" :data-fields="dataFields" />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-grid :css-line="line" />
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
        barData: [
          { value: 11, label: '直接访问-1' },
          { value: 21, label: '邮件营销-2' },
          { value: 67, label: '联盟广告-3' },
          { value: 33, label: '视频广告-4' }
        ],
        dataFields: { x: 'department', y: 'value' },
        line: { lineDash: [1, 1], lineWidth: 1, color: 'red' }
      }
    }
  }
</script>
```

:::
