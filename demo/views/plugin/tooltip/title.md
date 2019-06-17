## 标题设置

`Tooltip` 的标题可以设置为 `string`，也可以设置为 `function`。两者区别：`string` 将固定标题为某字符串，`function` 则将 title 设置为函数返回值。

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
        attrs: { title: '数字', formatter: d => d.value }
      }
    }
  }
</script>
```

:::

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
        attrs: {
          title: d => {
            return `数组 ${d[0].value}`
          },
          formatter: d => d.value
        }
      }
    }
  }
</script>
```

:::
