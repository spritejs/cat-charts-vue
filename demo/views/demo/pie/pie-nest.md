## Nested Pie Chart 嵌套饼图

:::demo

```html
<template>
  <s-chart :data="pieData" :data-fields="dataFields">
    <s-pie :attrs="attrs" :rows="rows1" :color="pieColor" />
    <s-pie
      :attrs="attrs2"
      :rows="rows2"
      :css-guideLine="true"
      :css-guideText="{fontSize: '12px'}"
    />
    <s-legend />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        pieData: [
          { value: 204, name: '百度' },
          { value: 451, name: '谷歌' },
          { value: 347, name: '必应' },
          { value: 256, name: '搜狗' },

          { value: 6790, name: '营销广告' },
          { value: 4548, name: '搜索引擎' },
          { value: 3350, name: '直接访问' },
          { value: 3100, name: '邮件营销' },
          { value: 2340, name: '联盟广告' },
          { value: 1350, name: '视频广告' }
        ],
        attrs: { radius: 0.5 },
        rows1: ['百度', '谷歌', '必应', '搜狗'],
        pieColor: ['#5982F6', '#59CB74', '#DA65CC', '#FC6980'],
        attrs2: { innerRadius: 0.6, radius: 0.8 },
        rows2: [
          '营销广告',
          '搜索引擎',
          '直接访问',
          '邮件营销',
          '联盟广告',
          '视频广告'
        ],
        dataFields: { row: 'name', value: 'value' }
      }
    }
  }
</script>
```

:::
