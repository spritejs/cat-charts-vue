## 自定义柱状图

:::demo

```html
<template>
  <s-chart>
    <s-bar :attrs="attrs"
      :data="barData"
      :dataFields="dataFields"
      :text="text"
      :text:hover="textHover"
      :pillar="pillar"
      :pillar:hover="pillarHover"
      :backgroundpillar="backgroundpillar"
      :backgroundpillar:hover="backgroundpillarHover"
    />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-grid />
    <s-legend />
    <s-tooltip :attrs="tooltipAttrs" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          labelPosition: 'top',
          margin: [50, 50, 50, 150]
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
        dataFields: { x: 'department', y: 'value', category: 'type' },
        text: (attrs, data, i) => {
          return { text: data.value }
        },
        textHover: (attrs, data, i) => {
          return { text: data.value, font: '22px "宋体"' }
        },
        pillar: (attrs, d, i) => {
          if (i % 2 === 0) {
            return { borderRadius: 20 }
          }
          return {
            opacity: 1.0,
            fillColor: {
              vector: [0, 0, 0, 100],
              colors: [
                { color: 'red', offset: 0 },
                { color: 'blue', offset: 1 }
              ]
            }
          }
        },
        pillarHover: (attrs, data, i) => {
          if (i % 2 === 0) {
            return {
              borderRadius: 10
            }
          }
          return { opacity: 0.5, fillColor: 'blue' }
        },
        backgroundpillar: { borderRadius: 10 },
        backgroundpillarHover: { borderRadius: 20 }
      }
    }
  }
</script>
```

:::
