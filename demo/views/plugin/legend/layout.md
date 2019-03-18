## 布局调整

`Legend` 支持 水平 或 垂直 两种布局，默认垂直布局。改变布局，，只需在实例化 `Legend` 时传入 `{ vertical: /* true / false */ }` ，也可以在实例化后调用 `legend.vertical(/* true / false *)`。

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
  radius: 0.6
})
  .source(data)
  .setDataFields({ x: 'label', y: 'value' })

const legend = new Legend({ vertical: false })

// legend.vertical(false)

chart.add(pie).add(legend)

chart.render()
```

:::
