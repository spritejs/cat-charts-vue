### 图表介绍

Area Chart, 面积图。

### attrs

attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件

| 属性名  | 类型    | 默认值          | 描述                                 |
| ------- | ------- | --------------- | ------------------------------------ |
| pos     | Array   | `[10%, 10%]`    | 组件左上角偏移，可设置百分比或者像素 |
| size    | Array   | `['80%','80%']` | 组件大小，可设置百分比或者像素       |
| smooth  | Boolean | false           | 曲线是否平滑                         |
| axisGap | Boolean | false           | 开始绘图区域与坐标轴是否有间隙       |
| stack   | Boolean | true            | 是否堆叠                             |

### style 属性

组件中可以自定义 css 属性的元素如下表：

| 名称            | 描述                              |
| --------------- | --------------------------------- |
| css-guideline   | 指导线样式（Rect）                |
| css-line        | 线条样式（Polyline）              |
| css-line:hover  | 鼠标 hover 时线条样式（Polyline） |
| css-area        | 面积样式设置 （Polygon）          |
| css-area:hover  | 鼠标 hover 时面积样式 （Polygon） |
| css-point       | 点样式                            |
| css-point:hover | 鼠标 hover 时点样式               |

下例使用三个 style 属性，分别为`css-area`，`css-point`，`css-point:hover`

```javascript
<template>
  <s-chart :data="data" :data-fields="dataFields">
    <s-area
      :css-area="areaStyle"
      :css-point="{fillColor:'transparent'}"
      :css-point:hover="{color:'#fff'}"
    />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        data: [
          { date: '05-01', category: '图例一', sales: 15.2 },
          { date: '05-02', category: '图例一', sales: 39.2 },
          { date: '05-03', category: '图例一', sales: 31.2 },
          { date: '05-01', category: '图例二', sales: 10.2 },
          { date: '05-02', category: '图例二', sales: 30.2 },
          { date: '05-03', category: '图例二', sales: 25.2 }
        ],
        dataFields: { row: 'category', value: 'sales', text: 'date' },
        areaStyle: function(attrs, data, i) {
          if (i === 0) {
            return { fillColor: 'transparent' }
          } else if (i === 1) {
            return { fillColor: 'rgba(0,0,0,0.1)' }
          }
        }
      }
    }
  }
</script>
```
