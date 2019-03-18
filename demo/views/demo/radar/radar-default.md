## 基础雷达图

:::demo

```html
<template>
  <s-chart>
    <s-radar :attrs="attrs" :data="radarData" :data-fields="dataFields" />
    <s-tooltip
      :formatter="data => `${data.category}: ${data.label}-${data.value}`"
    />
    <s-legend />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          padding: 10
        },
        radarData: [
          { label: '客服', category: '实际开销', value: 2 },
          { label: '研发', category: '实际开销', value: 22 },
          { label: '市场', category: '实际开销', value: 69 },
          { label: '扯淡', category: '实际开销', value: 69 },
          { label: '销售', category: '实际开销', value: 66 },
          { label: '管理', category: '实际开销', value: 32 },
          { label: '技术', category: '实际开销', value: 24 },

          { label: '客服', category: '节能减排', value: 100 },
          { label: '研发', category: '节能减排', value: 47 },
          { label: '市场', category: '节能减排', value: 73 },
          { label: '扯淡', category: '节能减排', value: 48 },
          { label: '销售', category: '节能减排', value: 10 },
          { label: '管理', category: '节能减排', value: 41 },
          { label: '技术', category: '节能减排', value: 32 }
        ],
        tooltipAttrs:{
        	formatter: data => `${data.category}: ${data.label}-${data.value}`
        },
        dataFields: { x: 'label', y: 'value', category: 'category' }
      }
    }
  }
</script>
```

:::
