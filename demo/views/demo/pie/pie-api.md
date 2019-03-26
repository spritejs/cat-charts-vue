### attrs

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名      | 类型    | 默认值            | 描述                                 |
| ----------- | ------- | ----------------- | ------------------------------------ |
| endAngle    | Number  | `Math.PI * 1.5`   | 结束角度                             |
| innerRadius | Number  | `0`               | 圆内半径，结合 size 计算得出         |
| size        | Array   | `['100%','100%']` | 组件大小，可设置百分比或者像素       |
| padAngle    | Number  | `0`               | 垫角角度                             |
| pos         | Array   | `[0, 0]`          | 组件左上角偏移，可设置百分比或者像素 |
| radius      | Number  | `0.95`            | 圆外半径，结合 size 计算得出         |
| rose        | Boolean | `false`           | 是否绘制玫瑰图                       |
| startAngle  | Number  | `Math.PI * -0.5`  | 起始角度                             |

### data

传入待展示数据，数据类型为 Array，参照 [demo](#/demo/pie/default)

### data-fields

数据维度和坐标轴对应关系，数据类型为 Object，参照 [demo](#/demo/pie/default)

### css 属性

组件中的元素样式均可通过 css 属性自定义，使用方法可在[定义样式 demo](#/demo/pie/style)中查看，用法如下：

`<s-pie :css-sector="sectorStyle" />`

在 data 中定义 sector obj 属性或者函数，例如：

```
//设置鼠标移入扇形时样式
sectorStyle: {fillColor：'#f00', opacity:'0.5'}`

//attrs为元素绘制属性，data为元素对应数据，i为元素序列
sectorStyle: (attrs, data, i) => {
    //将偶数序列的扇形设置为红色
    if (i % 2 === 0) {
      return {
        fillColor: 'red'
      }
    }
    return { opacity: 0.5, fillColor: 'blue' }
  }
```

| 名称                | 描述                      |
| ------------------- | ------------------------- |
| css-guideline       | 指示线样式                |
| css-guideline:hover | 指示线样式                |
| css-guidetext       | 指示文字样式              |
| css-guidetext:hover | 鼠标 hover 时指示文字样式 |
| css-sector          | 扇形样式                  |
| css-sector:hover    | 鼠标 hover 时扇形样式     |
| css-text            | 文字样式                  |
| css-text:hover      | 鼠标 hover 时文字样式     |
