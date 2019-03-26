## 分组条形图

:::demo

```html
<template>
  <s-chart>
    <s-bar
      :attrs="attrs"
      :data="barData"
      :data-fields="dataFields"
      :css-text="text"
    />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-legend :attrs="{vertical: 0}" />
    <s-grid />
    <s-tooltip :attrs="tooltipAttrs" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          transpose: true,
          barWidth: 20,
          pos: ['10%', '15%'],
          size: ['80%', '80%']
        },
        barData: [
          { department: '销售', type: '预算分配', value: '500' },
          { department: '销售', type: '实际开销', value: '400' },
          { department: '销售', type: '节能减排', value: '600' },
          { department: '管理', type: '预算分配', value: '500' },
          { department: '管理', type: '实际开销', value: '800' },
          { department: '管理', type: '节能减排', value: '1200' },
          { department: '技术', type: '预算分配', value: '300' },
          { department: '技术', type: '实际开销', value: '500' },
          { department: '技术', type: '节能减排', value: '200' },
          { department: '客服', type: '预算分配', value: '1500' },
          { department: '客服', type: '实际开销', value: '800' },
          { department: '客服', type: '节能减排', value: '500' }
        ],
        tooltipAttrs: {
          formatter: data => `${data.label} ${data.value}`
        },
        dataFields: { x: 'department', y: 'value', category: 'type' },
        text: (attrs, data, i) => {
          return { text: attrs.value }
        }
      }
    }
  }
</script>
```

:::
