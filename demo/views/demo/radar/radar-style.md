## 定义样式

:::demo

```html
<template>
  <s-chart>
    <s-radar
      :attrs="attrs"
      :data="radarData"
      :dataFields="dataFields"
      :grid="grid"
      :axis="axis"
      :label="label"
      :border="border"
      :point="point"
    />
    <s-tooltip
      :attrs="{lineHight:22}"
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
          showAxisLabel: false,
          showArea: false
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
        dataFields: { x: 'label', y: 'value', category: 'category' },
        grid: (attrs, data, i) => {
          if (i % 2 !== 0) {
            return { fillColor: '#124365', color: '#225985', lineWidth: 2 }
          } else {
            return {
              fillColor: 'black',
              color: '#225985',
              lineWidth: 2,
              opacity: 1
            }
          }
        },
        axis: (attrs, data, i) => {
          return { color: '#225985' }
        },
        label: (attrs, data, i) => {
          return { color: '#fff' }
        },
        border: (attrs, data, i) => {
          const color = ['#00C8FB', '#D77169']
          return { color: color[i] }
        },
        point: (attrs, data, i) => {
          const { category } = data
          const colorObj = { 实际开销: '#00C8FB', 节能减排: '#D77169' }
          return {
            size: 4,
            fillColor: colorObj[category],
            color: colorObj[category]
          }
        }
      }
    }
  }
</script>
```

:::
