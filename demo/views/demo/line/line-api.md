### attrs

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名 | 类型    | 默认值            | 描述                                 |
| ------ | ------- | ----------------- | ------------------------------------ |
| pos    | Array   | `[0, 0]`          | 组件左上角偏移，可设置百分比或者像素 |
| size   | Array   | `['100%','100%']` | 组件大小，可设置百分比或者像素       |
| smooth | Boolean | false             | 曲线是否平滑                         |
| stack  | Boolean | false             | 是否设置为堆叠图                     |

### data

传入待展示数据，数据类型为 Array，参照 [demo](#/demo/line/default)

### data-fields

数据维度和坐标轴对应关系，数据类型为 Object，参照 [demo](#/demo/line/default)

### css 属性

组件中的元素样式均可通过 css 属性自定义，使用方法可在[定义样式 demo](#/demo/line/style)中查看，用法如下：

`<s-line :css-area="area" />`

在 data 中定义 area，可以是 obj 属性或者函数，例如：

```
//设置鼠标移入面积时样式
area: {fillColor：'#f00', opacity:'0.5'}`

//attrs为元素绘制属性，data为元素对应数据，i为元素序列
area: (attrs, data, i) => {
    //将偶数序列的面积元素设置为红色
    if (i % 2 === 0) {
      return {
        fillColor: 'red'
      }
    }
    return { opacity: 0.5, fillColor: 'blue' }
  }
```

| 名称                | 描述                                        |
| ------------------- | ------------------------------------------- |
| css-area            | 堆叠图面积样式（堆叠图时生效）              |
| css-area:hover      | 鼠标 hover 时堆叠图面积样式（堆叠图时生效） |
| css-guideline       | 指导线样式                                  |
| css-guideline:hover | 鼠标 hover 时指导线样式                     |
| css-line            | 线条样式                                    |
| css-line:hover      | 鼠标 hover 时线条样式                       |
| css-symbol          | 点样式                                      |
| css-symbol:hover    | 鼠标 hover 时点样式                         |

### event

基本事件用法如下：
`<s-line @symbol:click="handlerFunction" />`

| 名称         | 描述                 | 附带数据    |
| ------------ | -------------------- | ----------- |
| symbol:click | 点击 symbol 事件监听 | symbol 属性 |
