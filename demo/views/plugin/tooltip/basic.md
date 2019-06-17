## Tooltip

当实例化 `chart` 后，向 `chart` 添加 `Tooltip` 插件即可，`chart.add(new Tooltip())`。

:::demo

```javascript
<template>
  <s-chart :data="data">
    <s-pie />
    <s-tooltip :attrs="attrs"/>
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        data: [1, 2, 3, 4, 5],
        attrs: { formatter: d => d.value }
      }
    }
  }
</script>
```

:::

### 属性

| 名称      | 说明                                               | 默认值                             |
| --------- | -------------------------------------------------- | ---------------------------------- |
| pos       | 位置控制                                           | `null`（注意一旦设置，位置将固定） |
| title     | 标题设置，可以传入 `string`，也可以传入 `function` | `null`                             |
| formatter | 文本格式化                                         | `d => d.value || d`                |
