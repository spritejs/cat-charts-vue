## Legend

当实例化 `chart` 后，向 `chart` 添加 `Legend` 插件即可，`chart.add(new Legend())`。

:::demo

```javascript
const data = [
  { value: 3350, label: '直接访问' },
  { value: 3100, label: '邮件营销' },
  { value: 2340, label: '联盟广告' },
  { value: 1350, label: '视频广告' },
  { value: 1548, label: '搜索引擎' }
]

const { Chart, Legend } = qchart

const chart = new Chart({ container: '#app', forceFit: true })

const pie = new qchart.Pie({
  radius: 0.6,
  innerRadius: 0.2
})
  .source(data)
  .setDataFields({ x: 'label', y: 'value' })

chart.add(pie).add(new Legend())

chart.render()
```

:::

### 方法

| 名称     | 说明                             | 参数                                             |
| -------- | -------------------------------- | ------------------------------------------------ |
| position | `Legend` 位置控制                | `(type: 'left' | 'top', value: String | Number)` |
| top      | 相当于 `position('top')`         | `(val: String | Number)`                         |
| left     | 相当于 `position('left')`        | `(val: String | Number)`                         |
| vertical | 控制 `Legend` 水平布局或垂直布局 | `(flag: Boolean)`                                |
