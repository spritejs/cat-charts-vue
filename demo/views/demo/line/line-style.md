## 定义样式

:::demo

```html
<template>
  <s-chart>
    <s-line
      :attrs="attrs"
      :data="lineData"
      :data-fields="dataFields"
      :css-line="line"
      :css-line:hover="lineHover"
      :css-symbol="symbol"
      :css-symbol:hover="symbolHover"
      :css-guideline="{fillColor:'#f00'}"
    />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-tooltip :attrs="tooltipAttrs"/>
    <s-legend :attrs="{vertical:0}" />
  </s-chart>
</template>
<script>
  const symbolColors = ['#f00', '#0f0', '#ff0', '#0ff', '#f0f', '#000']
  export default {
    data: function() {
      return {
        attrs: {
          pos:["11%","10%"],
          size:["78%","80%"]
        },
        lineData: [
          { month: 'Jan', city: 'London', value: 3.9 },
          { month: 'Feb', city: 'London', value: 4.2 },
          { month: 'Mar', city: 'London', value: 5.7 },
          { month: 'Apr', city: 'London', value: 8.5 },
          { month: 'May', city: 'London', value: 11.9 },
          { month: 'Jun', city: 'London', value: 15.2 },
          { month: 'Apr', city: 'Tokyo', value: 14.5 },
          { month: 'Mar', city: 'Tokyo', value: 9.5 },
          { month: 'May', city: 'Tokyo', value: 18.4 },
          { month: 'Jan', city: 'Tokyo', value: 7.0 },
          { month: 'Jun', city: 'Tokyo', value: 21.5 },
          { month: 'Feb', city: 'Tokyo', value: 6.9 }
        ],
        tooltipAttrs:{
        	formatter: data => `${data.city}-${data.month}-${data.value}`
        },
        dataFields: { x: 'month', y: 'value', category: 'city' },
        line: (attrs, d, i) => {
          if (i === 1) {
            return { lineDash: [6, 6], smooth: true }
          }
        },
        lineHover: (attrs, data, i) => {
          return { color: '#f00' }
        },
        symbol: (attrs, data, i, j) => {
          return { fillColor: symbolColors[j] }
        },
        symbolHover: (attrs, data, i, j) => {
          // symbol hover样式
          if (j === 1) {
            return { fillColor: '#f00', radius: 5 }
          }
          return { fillColor: '#ff0', radius: 5 }
        }
      }
    }
  }
</script>
```

:::
