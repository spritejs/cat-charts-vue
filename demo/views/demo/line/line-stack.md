## 堆叠面积图

:::demo

```html
<template>
  <s-chart>
    <s-line
      :attrs="attrs"
      :data="lineData"
      :data-fields="dataFields"
      :css-area:hover="areaHover"
    />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-tooltip :attrs="tooltipAttrs"/>
    <s-legend :attrs="{vertical:0}" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          stack: true
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
        areaHover: function(attrs, data, i) {
          if (i === 0) {
            return { fillColor: 'rgba(255,0,0,0.3)' }
          }
        }
      }
    }
  }
</script>
```

:::
