## Legend API


### attr 属性

| 名称     | 说明                             | 参数                                             |
| -------- | -------------------------------- | ------------------------------------------------ |
| title | title文本               | `(value: String)` |
| pos      | 文本框左上角相对于 canvas 容器的像素偏移，设置后文本框位置固定      | `(val: Array)`                         |
| formatter     | 文本框内容处理函数       | `(val: Function)`                         |
| throttleTime | 节流时间参数，避免文本位置刷新过于频繁 | `(value: Number )`   初始值：300                             |



### style 属性

组件中的元素样式均可通过 css 属性自定义，使用方法在 demo 中查看，下面列出 css 属性

| 名称           | 说明   |
| -------------- | -------------- |
| css-background | 文本背景样式   |
| css-title      | title 文本样式 |
| css-text       | 内容文本样式   |
| css-icon       | 文本 icon 样式 |
