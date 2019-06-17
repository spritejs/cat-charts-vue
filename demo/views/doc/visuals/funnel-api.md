### 图表介绍

Funnel Chart，漏斗图，漏斗图数据需要从大到小排序，可借助 dataset 中 sort 函数进行排序，详见[示例](#/demo/funnel/default)。

### attrs 属性

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名    | 类型     | 默认值        | 描述                                 |
| --------- | -------- | ------------- | ------------------------------------ |
| align     | String   | 'center'      | 组件位置，可选值 left、center、right |
| pyramid   | Boolean  | false         | 漏斗形状是否为金字塔底               |
| pos       | Array    | ['10%','10%'] | 组件左上角偏移，可设置百分比或者像素 |
| size      | Array    | ['80%','80%'] | 组件大小，可设置百分比或者像素       |
| formatter | Function | `d => d`      | 漏斗图文本格式化函数                 |

### style 属性

组件中可以自定义属性的元素如下表：

| 名称                | 描述                      |
| ------------------- | ------------------------- |
| css-polygon         | 漏斗区块样式              |
| css-polygon:hover   | 鼠标 hover 时漏斗区块样式 |
| css-guideText       | 组件上的文本样式          |
| css-guideText:hover | 组件上的文本样式          |
| css-guideLine       | 指示线样式                |
| css-guideLine:hover | 鼠标 hover 时指示线样式   |
| css-guideText       | 指示文本文本样式          |
| css-guideText:hover | 鼠标 hover 时指示文本样式 |

使用方法可在[样式调整 demo](#/demo/funnel/others)中查看
