## 定义样式

:::demo

```html
<template>
  <s-chart>
    <s-pie
      :attrs="attrs"
      :data="pieData"
      :dataFields="dataFields"
      :sector="sector"
      :sector:hover="sectorHover"
      :text="text"
      :text:hover="textHover"
      :guideline="true"
      :guideline:hover="guideLineHover"
      :guidetext="true"
      :guidetext:hover="guideTextHover"
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
          radius: 0.6
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
        },
        textHover: (attrs, d, i) => ({
          fontSize: '18px'
        }),
        sector: (attrs, d, i) => {
          return { color: '#fff', lineWidth: 2 }
        },
        sectorHover: (attrs, data, i) => {
          if (i == 2) {
            return {
              outerRadius: attrs['outerRadius'] + 20,
              fillColor: 'red'
            }
          }
          return { opacity: 0.5, fillColor: 'red' }
        },
        guideText: true,
        guideTextHover: (attrs, d, i) => ({
          color: 'red'
        }),
        guideLine: true,
        guideLineHover: (attrs, d, i) => ({
          color: 'red'
        })
      }
    }
  }
</script>
```

:::
