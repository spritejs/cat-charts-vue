## Tooltip

当实例化 `chart` 后，向 `chart` 添加 `Tooltip` 插件即可，`chart.add(new Tooltip())`。

:::demo

```javascript
const data = [
  { value: 3350, label: '直接访问' },
  { value: 3100, label: '邮件营销' },
  { value: 2340, label: '联盟广告' },
  { value: 1350, label: '视频广告' },
  { value: 1548, label: '搜索引擎' }
]

const { Chart, Tooltip } = qchart

const chart = new Chart({ container: '#app', forceFit: true })

const pie = new qchart.Pie({
  radius: 0.6,
  innerRadius: 0.2
})
  .source(data)
  .setDataFields({ x: 'label', y: 'value' })

const tooltip = new Tooltip({ title: '网站流量来源' })

tooltip.formatter(data => `${data.label}: ${data.value}`)

chart.add(pie).add(tooltip)

chart.render()
```

:::

### 方法

| 名称      | 说明       | 参数                                          |
| --------- | ---------- | --------------------------------------------- |
| position  | 位置控制   | `(x: String | Number, y: x: String | Number)` |
| formatter | 文本格式化 | `(fn: Function)`                              |
