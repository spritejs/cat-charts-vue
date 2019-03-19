### attrs

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名        | 类型   | 默认值                 | 描述                                                                      |
| ------------- | ------ | ---------------------- | ------------------------------------------------------------------------- |
| size          | Array  | `['100%','100%']`      | 组件大小，可设置百分比或者像素                                            |
| pos           | Array  | `[0, 0]`               | 组件左上角相对于 canvas 容器的像素偏移素                                  |
| margin        | Array  | `[50, 50, 50, 50]`     | 组件边距，在 size 基础上计算                                              |
| barWidth      | Number | 根据 size 宽度均匀绘制 | 描述柱形宽度                                                              |
| labelPosition | String | `center`               | 在启用文本描述后可配置，默认不生效，可选位置`top`,`center`,`left`,`right` |

### data

传入待展示数据，数据类型为 Array，参照 demo

### data-fields

数据维度和坐标轴对应关系，数据类型为 Object

### css 属性

组件中的元素样式均可通过 css 属性自定义，使用方法在[定义样式 demo](#/demo/bar/style)中查看，下面列出 css 属性

| 名称                       | 描述                      |
| -------------------------- | ------------------------- |
| css-pillar                 | 柱子样式                  |
| css-pillar:hover           | 鼠标 hover 时柱子样式     |
| css-backgroundpillar       | 背景柱子样式              |
| css-backgroundpillar:hover | 鼠标 hover 时背景柱子样式 |
| css-text                   | 文本样式                  |
| css-text:hover             | 鼠标 hover 时文本样式     |

### event

基本事件用法如下：
`<s-bar :pillar:click:="handlerFunction" />`

| 名称         | 描述             |
| ------------ | ---------------- |
| pillar:click | 点击柱形事件监听 |
