### 图表介绍

Column Char、Bar Chart, 柱状图和条形图定义方式均为`<s-bar/>`，可设置 attrs 中的 transpose 属性来决定绘制柱状图或者条形图。

### attrs 属性

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名        | 类型    | 默认值                 | 描述                                 |
| ------------- | ------- | ---------------------- | ------------------------------------ |
| barWidth      | Number  | 根据 size 宽度均匀绘制 | 描述柱形宽度                         |
| mouseDisabled | Boolean | false                  | 组件鼠标是否禁用                     |
| pos           | Array   | ['10%','10%']          | 组件左上角偏移，可设置百分比或者像素 |
| size          | Array   | ['80%','80%']          | 组件大小，可设置百分比或者像素       |
| stack         | Boolean | false                  | 是否设置为堆叠图，二维数据无法堆叠   |
| transpose     | Boolean | false                  | 是否设置为条形图                     |

### style 属性

组件中可以自定义 css 属性的元素如下表：

| 名称                       | 描述                      |
| -------------------------- | ------------------------- |
| css-backgroundpillar       | 背景柱子样式              |
| css-backgroundpillar:hover | 鼠标 hover 时背景柱子样式 |
| css-pillar                 | 柱子样式                  |
| css-pillar:hover           | 鼠标 hover 时柱子样式     |
| css-text                   | 文本样式                  |
| css-text:hover             | 鼠标 hover 时文本样式     |

使用方法可在[样式调整 demo](#/demo/column/others)中查看
