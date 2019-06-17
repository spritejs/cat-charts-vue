## 布局调整

:::demo

```javascript
<template>
  <s-chart :data="data">
    <s-legend :attrs="{ orient: 'vertical', align: ['left', 'top'] }" />
    <s-legend :attrs="{ orient: 'vertical', align: ['left', 'center'] }" />
    <s-legend :attrs="{ orient: 'vertical', align: ['left', 'bottom'] }" />
    <s-legend :attrs="{ orient: 'vertical', align: ['center', 'top'] }" />
    <s-legend :attrs="{ orient: 'vertical', align: ['center', 'center'] }" />
    <s-legend :attrs="{ orient: 'vertical', align: ['center', 'bottom'] }" />
    <s-legend :attrs="{ orient: 'vertical', align: ['right', 'top'] }" />
    <s-legend :attrs="{ orient: 'vertical', align: ['right', 'center'] }" />
    <s-legend :attrs="{ orient: 'vertical', align: ['right', 'bottom'] }" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        data: [2010, 2011, 2012]
      }
    }
  }
</script>
```

:::
