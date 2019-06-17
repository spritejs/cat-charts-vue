## 基础坐标轴

:::demo 基础坐标

```javascript
<template>
  <s-chart :data="lineData" :data-fields="dataFields">
    <s-line />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        lineData: [
          { month: 'Jan', city: 'London', value: 3.9 },
          { month: 'Feb', city: 'London', value: 4.2 },
          { month: 'Mar', city: 'London', value: 5.7 },
          { month: 'Apr', city: 'London', value: 8.5 },
          { month: 'May', city: 'London', value: 11.9 },
          { month: 'Jun', city: 'London', value: 15.2 }
        ],
        dataFields: { row: 'city', value: 'value', text: 'month' }
      }
    }
  }
</script>
```

:::
