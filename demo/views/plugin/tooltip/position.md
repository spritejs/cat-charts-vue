## 固定位置

使用 `Tooltip.pos` 可以固定 `tooltip` 的位置。

:::demo

```javascript
<template>
  <s-chart :data="data" :data-fields="dataFields">
    <s-pie />
    <s-legend />
    <s-tooltip :attrs="attrs" :css-background="bgStyle" :css-title="titleStyle"
      :css-icon="iconStyle" :css-text="textStyle"/>
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        data: [
          { value: 1350, label: '直接访问' },
          { value: 2548, label: '搜索引擎' },
          { value: 3340, label: '联盟广告' },
          { value: 350, label: '视频广告' },
          { value: 2100, label: '邮件营销' }
        ],
        attrs: { title: '网站流量来源', pos: ['0%', 20] },
        dataFields: { row: 'label', value: 'value' },
        bgStyle: () => ({ bgcolor: 'rgba(0, 0, 0, .5)' }),
        titleStyle: () => ({ color: 'red' }),
        iconStyle: () => ({ bgcolor: 'red' }),
        textStyle: () => ({ color: 'blue' })
      }
    }
  }
</script>
```

:::
