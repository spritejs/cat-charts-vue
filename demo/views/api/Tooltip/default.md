文本提示框插件

### attrs

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

**title**

类型： String

描述：文本 title

初始值：`null`

**pos**

类型： Array

描述：文本框左上角相对于 canvas 容器的像素偏移，设置后文本框位置固定

初始值：`null`

**formatter**

类型： Function

描述：文本框内容处理函数

初始值：`k => k`

**throttleTime**

类型： Nmber

描述：节流时间参数，避免文本位置刷新过于频繁

初始值：300

### css 属性

组件中的元素样式均可通过 css 属性自定义，使用方法在定义样式 demo 中查看，下面列出 css 属性

| name           | introduction   |
| -------------- | -------------- |
| css-background | 文本背景样式   |
| css-title      | title 文本样式 |
| css-text       | 内容文本样式   |
| css-icon       | 文本 icon 样式 |
