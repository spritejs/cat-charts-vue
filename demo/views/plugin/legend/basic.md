## Legend

:::demo

```javascript
<template>
  <s-chart :data="data">
    <s-legend :attrs="{ orient: 'vertical', align: ['left', 'top'] }" />
    <s-legend :attrs="{ orient: 'vertical', align: ['left', 'bottom'] }" />
    <s-legend :attrs="{ orient: 'vertical', align: ['center', 'center'] }" />
    <s-legend :attrs="{ orient: 'vertical', align: ['right', 'top'] }" />
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

### 方法

| 名称     | 说明                             | 参数                                             |
| -------- | -------------------------------- | ------------------------------------------------ |
| position | `Legend` 位置控制                | `(type: 'left' | 'top', value: String | Number)` |
| top      | 相当于 `position('top')`         | `(val: String | Number)`                         |
| left     | 相当于 `position('left')`        | `(val: String | Number)`                         |
| vertical | 控制 `Legend` 水平布局或垂直布局 | `(flag: Boolean)`                                |
