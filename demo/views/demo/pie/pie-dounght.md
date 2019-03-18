## 环图

:::demo

```html
<template>
  <s-chart>
    <s-pie
      :attrs="attrs"
      :data="pieData"
      :dataFields="dataFields"
      :text="text"
      :guideLine="true"
      :guideText="true"
    />
    <s-legend />
    <s-tooltip :attrs="tooltipAttrs" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          radius: 0.6,
          innerRadius: 0.2
        },
        pieData: [
          { value: 3350, label: '直接访问' },
          { value: 3100, label: '邮件营销' },
          { value: 2340, label: '联盟广告' },
          { value: 1350, label: '视频广告' },
          { value: 1548, label: '搜索引擎' }
        ],
        tooltipAttrs:{
        	formatter: data => `${data.label} ${data.value}`
        },
        dataFields: { x: 'label', y: 'value' },
        text: (attrs, data, i) => {
          return { text: data.label }
        }
      }
    }
  }
</script>
```

:::
