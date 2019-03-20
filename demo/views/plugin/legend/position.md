## Legend
:::demo

```html
<template>
  <s-chart>
    <s-pie :attrs="attrs" :data="pieData" :data-fields="dataFields" />
    <s-legend :attrs="legendAttrs"/>
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          radius: 0.6
        },
        legendAttrs:{
          pos:['10%',100],
          vertical:false
        },
        pieData: [
          { value: 3350, label: '直接访问' },
          { value: 3100, label: '邮件营销' },
          { value: 2340, label: '联盟广告' },
          { value: 1350, label: '视频广告' },
          { value: 1548, label: '搜索引擎' }
        ],
        dataFields: { x: 'label', y: 'value' }
      }
    }
  }
</script>
```

:::
