### attrs

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

**size**

类型： Array

描述：组件大小，可设置百分比或者像素

初始值：`['100%','100%']`

**pos**

类型： Array

描述：组件左上角相对于 canvas 容器的像素偏移

初始值：`[0, 0]`

**margin**

类型： Array

描述：组件边距，在 size 基础上计算

初始值：`[50, 50, 50, 50]`

**barWidth**

类型： Nmber

描述：柱形宽度

初始值：根据 size 宽度均匀绘制

**labelPosition**

类型： String

描述：在启用文本描述后可配置，默认不生效，可选位置`top`,`center`,`left`,`right`

初始值：`center`

### data

传入待展示数据，数据类型为 Array，参照 demo

### data-fields

数据维度和坐标轴对应关系，数据类型为 Object

### css 属性

组件中的元素样式均可通过 css 属性自定义，使用方法在[定义样式 demo](https://github.com/spritejs/cat-charts/blob/master/demo/views/demo/bar/bar-style.md)中查看，下面列出 css 属性

| name                       | introduction              |
| -------------------------- | ------------------------- |
| css-pillar                 | 柱子样式                  |
| css-pillar:hover           | 鼠标 hover 时柱子样式     |
| css-backgroundpillar       | 背景柱子样式              |
| css-backgroundpillar:hover | 鼠标 hover 时背景柱子样式 |
| css-text                   | 文本样式                  |
| css-text:hover             | 鼠标 hover 时文本样式     |
