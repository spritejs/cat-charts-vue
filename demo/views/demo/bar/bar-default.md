## 基础柱状图

:::demo

```html
<template>
  <s-chart>
    <s-bar
      :attrs="attrs"
      :data="barData"
      :dataFields="dataFields"
      :text="text"
    />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-grid />
    <s-tooltip :attrs="tooltipAttrs"/>
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          barWidth: 30,
          margin: [50, 50, 50, 100]
        },
        barData: [
          { value: 11, label: '直接访问-1' },
          { value: 21, label: '邮件营销-2' },
          { value: 67, label: '联盟广告-3' },
          { value: 33, label: '视频广告-4' },
          { value: 60, label: '搜索引擎-5' },
          { value: 78, label: '直接访问-6' }
        ],
        tooltipAttrs:{
        	formatter: data => `${data.label} ${data.value}`
        },
        dataFields: { x: 'department', y: 'value' },
        text: (attrs, data, i) => {
          return { text: data.value }
        }
      }
    }
  }
</script>
```

:::
