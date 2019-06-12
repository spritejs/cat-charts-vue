## 基础雷达图

:::demo

```html
<template>
  <s-chart :data="radarData" :data-fields="dataFields">
    <s-radar :css-point="false" />
    <s-tooltip :attrs="tooltipAttrs" />
    <s-legend :attrs="{align: ['center', 'bottom']}" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        radarData: [
          { label: '分类一', category: '类别一', value: 19 },
          { label: '分类二', category: '类别一', value: 74 },
          { label: '分类三', category: '类别一', value: 40 },
          { label: '分类四', category: '类别一', value: 46 },
          { label: '分类五', category: '类别一', value: 30 },
          { label: '分类六', category: '类别一', value: 62 }
        ],
        tooltipAttrs: {
          title: d => d[0].data[0].category,
          formatter: d => {
            const content = d.data.map(d => `${d.label}:${d.value}`)
            return content.join('\n')
          }
        },
        dataFields: { row: 'category', value: 'value', text: 'label' }
      }
    }
  }
</script>
```

:::
