### attrs

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名      | 类型   | 默认值            | 描述                                 |
| ----------- | ------ | ----------------- | ------------------------------------ |
| labelOffset | Number | `6`               | 雷达图轴标记偏移量                   |
| pos         | Array  | `[0, 0]`          | 组件左上角偏移，可设置百分比或者像素 |
| radius      | Number | `0.6`             | 雷达图的轴长,范围[0,1]               |
| size        | Array  | `['100%','100%']` | 组件大小，可设置百分比或者像素       |
| splitNumber | Number | `4`               | 背景网格的层数                       |
| startAngle  | Number | `-90`             | 坐标轴起始角度                       |

### data

传入待展示数据，数据类型为 Array，参照 [demo](#/demo/radar/default)

### data-fields

数据维度和坐标轴对应关系，数据类型为 Object，参照 [demo](#/demo/radar/default)

### css 属性

组件中的元素样式均可通过 css 属性自定义，使用方法可在[定义样式 demo](#/demo/radar/style)中查看，用法如下：

`<s-radar :css-section="sectionStyle" />`

在 data 中定义 section obj 属性或者函数，例如：

```
//设置鼠标移入区域时样式
sectionStyle: {fillColor：'#f00', opacity:'0.5'}`

//attrs为元素绘制属性，data为元素对应数据，i为元素序列
sectionStyle: (attrs, data, i) => {
    //将偶数序列的区域设置为红色
    if (i % 2 === 0) {
      return {
        fillColor: 'red'
      }
    }
    return { opacity: 0.5, fillColor: 'blue' }
  }
```

| 名称              | 描述                  |
| ----------------- | --------------------- |
| css-axis          | 轴线样式              |
| css-axis:hover    | 鼠标 hover 时轴线样式 |
| css-border        | 边框样式              |
| css-border:hover  | 鼠标 hover 时边框样式 |
| css-grid          | 网格样式              |
| css-grid:hover    | 鼠标 hover 时网格样式 |
| css-label         | 文字样式              |
| css-label:hover   | 鼠标 hover 时文字样式 |
| css-point         | 点样式                |
| css-point:hover   | 鼠标 hover 时点样式   |
| css-section       | 区域样式              |
| css-section:hover | 鼠标 hover 示区域样式 |
