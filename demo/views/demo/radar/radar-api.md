### attrs

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名 | 类型  | 默认值            | 描述                                     |
| ------ | ----- | ----------------- | ---------------------------------------- |
| size   | Array | `['100%','100%']` | 组件大小，可设置百分比或者像素           |
| pos    | Array | `[0, 0]`          | 组件左上角相对于 canvas 容器的像素偏移素 |

### data

传入待展示数据，数据类型为 Array，参照 demo

### data-fields

数据维度和坐标轴对应关系，数据类型为 Object

### css 属性

组件中的元素样式均可通过 css 属性自定义，使用方法在[定义样式 demo](#/demo/radar/style)中查看，下面列出 css 属性

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

### event

基本事件用法如下：
`<s-bar @symbol:click="handlerFunction" />`

| 名称         | 描述                 | 附带数据                         |
| ------------ | -------------------- | -------------------------------- |
| symbol:click | 点击 symbol 事件监听 | `{label:Sting,value:String,...}` |
