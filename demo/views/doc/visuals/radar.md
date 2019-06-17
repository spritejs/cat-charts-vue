### 图表介绍

radar,雷达图

### attrs 属性

attrs 包含若干属性，可以初始化图表的时候对图表进行配置

| 属性        | 说明                                    | 类型          | 默认值          |
| ----------- | --------------------------------------- | ------------- | --------------- |
| pos         | 组件左上角偏移，可设置百分比或者像素    | Array         | [0,0]           |
| size        | 组件大小，可设置百分比或者像素          | Array         | ['100%','100%'] |
| padding     | 图表的 padding                          | Number，Array | [0,0,0,0]       |
| gridType    | 网格的类型，可选值为'polygon'和'circle' | String        | polygon         |
| splitNumber | 背景网格的层数                          | Number        | 4               |
| startAngle  | 坐标轴的起始角度                        | Number        | 270             |
| radius      | 雷达图的轴长,范围[0,1]                  | Number        | 0.6             |
| labelOffset | 雷达图轴标记偏移量                      | Number        | 6               |

### Style 属性

style 方式支持链式调用，第一个参数为 style 名称，第二个参数为设置的样式 Object，也可以为函数形式，对样式进行详细设置

| 名称              |                               |
| ----------------- | ----------------------------- |
| css-guideline     | 指导线样式                    |
| css-axis          | 坐标轴的样式                  |
| css-axis:hover    | 坐标轴 hover 样式             |
| css-grid          | 雷达图背景网格样式            |
| css-grid:hover    | 雷达图背景网格 hover 样式     |
| css-label         | 类别指示文字的样式(x 轴)      |
| css-label:hover   | 类别指示文字的 hover 样式     |
| css-scale         | 数值指示文字,(y 轴)           |
| css-scale:hover   | 数值指示文字 hover 样式(y 轴) |
| css-section       | 雷达图数据区样式              |
| css-section:hover | 雷达图数据区 hover 样式       |
