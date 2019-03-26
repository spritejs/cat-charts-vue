## 自定义柱状图

:::demo

```html
<template>
  <s-chart>
    <s-bar
      :attrs="attrs"
      :data="barData"
      :data-fields="dataFields"
      :css-text="text"
      :css-text:hover="textHover"
      :css-pillar="pillar"
      :css-pillar:hover="pillarHover"
      :css-backgroundpillar="backgroundpillar"
      :css-backgroundpillar:hover="backgroundpillarHover"
    />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-grid :css-line="{lineDash: [1, 0], lineWidth: 0.5, color:'red'}" />
    <s-legend :attrs="{vertical:0,pos:['10%','5%']}" />
    <s-tooltip :attrs="tooltipAttrs" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          labelPosition: 'top',
          pos: ['10%', '15%'],
          size: ['80%', '80%']
        },
        barData: [
          { value: 11, label: '直接访问-1' },
          { value: 21, label: '邮件营销-2' },
          { value: 67, label: '联盟广告-3' },
          { value: 33, label: '视频广告-4' },
          { value: 60, label: '搜索引擎-5' },
          { value: 78, label: '直接访问-6' }
        ],
        tooltipAttrs: {
          formatter: data => `${data.label} ${data.value}`
        },
        dataFields: { x: 'department', y: 'value', category: 'type' },
        text: (attrs, data, i) => {
          let anchor = attrs.anchor || [0, 0]
          let size = attrs.size
          let pos = attrs.pos
          return {
            rotate: 0,
            text: data.value,
            anchor: [0.5, 1],
            pos: [pos[0] + size[0] / 2, pos[1] - size[1]]
          }
        },
        textHover: (attrs, data, i) => {
          let anchor = attrs.anchor || [0, 0]
          let size = attrs.size
          let pos = attrs.pos
          return {
            font: '22px "宋体"',
            rotate: 0,
            text: data.value,
            anchor: [0.5, 1],
            pos: [pos[0] + size[0] / 2, pos[1] - size[1]]
          }
        },
        pillar: (attrs, d, i) => {
          if (i % 2 === 0) {
            return { borderRadius: 20 }
          }
          return {
            opacity: 1.0,
            bgcolor: {
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
          return { opacity: 0.5, bgcolor: 'blue' }
        },
        backgroundpillar: { borderRadius: 10 },
        backgroundpillarHover: { borderRadius: 20 }
      }
    }
  }
</script>
```

:::
