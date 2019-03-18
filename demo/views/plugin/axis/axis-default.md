## 基础坐标轴


``` javascript
this.emit(InteractionHooks.axisReady, {
  orient:'bottom',
  padding:[20,20,30,50],
  scales:[{label: "Jan", offset: "0%"},{label: "Apr", offset: "60%"},{label: "Jun", offset: "100%"}]
});
```
在组件内，通过以上代码来触发坐标轴渲染

:::demo 基础坐标

```javascript
const data = [
  {month: 'Jan',city:'London',value:3.9},
  {month: 'Feb',city:'London',value:4.2},
  {month: 'Mar',city:'London',value:5.7},
  {month: 'Apr',city:'London',value:8.5},
  {month: 'May',city:'London',value:11.9},
  {month: 'Jun',city:'London',value:15.2}
];

const { Chart, Axis } = qchart

const chart = new Chart({
  container: '#app',
  size: ['100%', '100%'],
  forceFit: true
})

const line = new qchart.Line({
    padding:[80,30,50,50]
   })
  .source(data)
  .setDataFields({ x: 'month', y: 'value',category:'city' })

let xAxis = new Axis({orient:'bottom'});
let yAxis = new Axis({orient:'left'});

chart.add(line).add(xAxis).add(yAxis)
chart.render()
```

:::
#### 方法：
| 名称         | 说明                                                                                 | 类型  | 可选值                                                                                      | 默认值                 |
| ------------ | ------------------------------------------------------------------------------------ | ----- | ------------------------------------------------------------------------------------------- | ---------------------- |
| orient       | 坐标轴的方向                                                                         |       | ['top','right','bottom','left']                                                             | 'bottom'               |
| padding      | 坐标轴到绘制区域边框的距离                                                           |       | —                                                                                          | [10, 10, 10, 10]       |
| orignalPoint | 坐标轴的起始点                                                                       |       | —                                                                                          | orient不同，默认值不同 |
| scales       | 绘制坐标轴的数据,label为显示文本，offset为相对偏移量，可以为数字(px)，也可以为百分比 | Array | [{label: "Jan", offset: "0%"},{label: "Apr", offset: "60%"},{label: "Jun", offset: "100%"}] |                        |
