## 数据更新

:::demo

```html
<template>
  <s-chart>
    <s-line :attrs="attrs" :data="data" :data-fields="dataFields" />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-tooltip :attrs="tooltipAttrs" />
  </s-chart>
</template>
<script>
  let num = 0
  export default {
    data: function() {
      return {
        data: [],
        attrs: {},
        lineData: [
          { month: 'Jan', city: 'London', value: 3.9 },
          { month: 'Feb', city: 'London', value: 4.2 },
          { month: 'Mar', city: 'London', value: 5.7 },
          { month: 'Apr', city: 'London', value: 8.5 },
          { month: 'May', city: 'London', value: 11.9 },
          { month: 'Jun', city: 'London', value: 15.2 }
        ],
        newData: [
          { month: 'Jan', city: 'London', value: 10 },
          { month: 'Feb', city: 'London', value: 20 },
          { month: 'Mar', city: 'London', value: 12 },
          { month: 'Apr', city: 'London', value: 11 },
          { month: 'May', city: 'London', value: 21 }
        ],
        tooltipAttrs: {
          formatter: data => `${data.city}-${data.month}-${data.value}`
        },
        dataFields: { x: 'month', y: 'value', category: 'city' }
      }
    },
    created() {
      this.data = this.lineData
      setTimeout(this.changeData, 5000)
    },
    mounted() {},
    methods: {
      changeData() {
        if (num % 2 === 0) {
          this.data = this.newData
        } else {
          this.data = this.lineData
        }
        num++
        setTimeout(this.changeData, 5000)
      }
    }
  }
</script>
```

:::
