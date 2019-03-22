### attrs

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名        | 类型   | 默认值                 | 描述                                                                      |
| ------------- | ------ | ---------------------- | ------------------------------------------------------------------------- |
| barWidth      | Number | 根据 size 宽度均匀绘制 | 描述柱形宽度                                                              |
| labelPosition | String | `center`               | 在启用文本描述后可配置，默认不生效，可选位置`top`,`center`,`left`,`right` |
| padding       | Array  | `[50, 50, 50, 50]`     | 组件边距，在 size 基础上计算                                              |
| size          | Array  | `['100%','100%']`      | 组件大小，可设置百分比或者像素                                            |

### data

传入待展示数据，数据类型为 Array，参照 [demo](#/demo/bar/default)

### data-fields

数据维度和坐标轴对应关系，数据类型为 Object，参照 [demo](#/demo/bar/default)

### css 属性

组件中的元素样式均可通过 css 属性自定义，使用方法可在[定义样式 demo](#/demo/bar/style)中查看，用法如下：

`<s-bar :css-pillar:hover="pillarHover" />`

在 data 中定义 pillarHover，可以是 obj 属性或者函数，例如：

```
//设置鼠标移入柱子时样式
pillarHover: {fillColor：'#f00', opacity:'0.5'}`

//attrs为元素绘制属性，data为元素对应数据，i为元素序列
pillarHover: (attrs, data, i) => {
    //将偶数序列的柱子设置圆角
    if (i % 2 === 0) {
      return {
        borderRadius: 10
      }
    }
    return { opacity: 0.5, fillColor: 'blue' }
  }
```

下面列出 css 属性

| 名称                       | 描述                      |
| -------------------------- | ------------------------- |
| css-backgroundpillar       | 背景柱子样式              |
| css-backgroundpillar:hover | 鼠标 hover 时背景柱子样式 |
| css-pillar                 | 柱子样式                  |
| css-pillar:hover           | 鼠标 hover 时柱子样式     |
| css-text                   | 文本样式                  |
| css-text:hover             | 鼠标 hover 时文本样式     |

### event

基本事件用法如下：
`<s-bar @pillar:click="handlerFunction" />`

| 名称         | 描述                 | 附带数据    |
| ------------ | -------------------- | ----------- |
| pillar:click | 点击 pillar 事件监听 | pillar 属性 |
