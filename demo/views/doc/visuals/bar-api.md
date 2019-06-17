### 图表介绍

Column Char、Bar Chart, 柱状图和条形图定义方式均为`<s-bar/>`，可设置 attrs 中的 transpose 属性来决定绘制柱状图或者条形图。

### attrs

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

使用方法可在[样式调整 demo](#/demo/column/others)中查看，用法如下：

style 设置方式可以是 Boolean、 obj 属性或者函数，本利给出了`css-pillar`，`css-pillar:hover`，`css-text`三自定义样式例子

```javascript
<template>
  <s-chart :data="data" :data-fields="dataFields">
    <s-bar
      :css-text="true"
      :css-pillar="pillar"
      :css-pillar:hover="pillarHover"
    />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        data: [
          { value: 3350, label: '直接访问' },
          { value: 1548, label: '搜索引擎' },
          { value: 2340, label: '联盟广告' },
          { value: 1350, label: '视频广告' },
          { value: 3100, label: '邮件营销' }
        ],
        dataFields: { row: '*', value: 'value', text: 'label' },
        text: (attrs, data, i) => {
          let anchor = attrs.anchor || [0, 0]
          let size = attrs.size
          let pos = attrs.pos
          return {
            rotate: 0,
            text: data.value,
            anchor: [0.5, 1],
            pos: [pos[0] + size[0] / 2, pos[1] - size[1]]
          }
        },
        pillar: (attrs, d, i) => {
          if (i % 2 === 0) {
            return {
              border: { width: 1 },
              borderRadius: 20,
              fillColor: {
                vector: [0, 0, 0, 100],
                colors: [
                  { color: '#9861E5', offset: 0 },
                  { color: '#ADDF84', offset: 1 }
                ]
              }
            }
          }
          return {
            border: { width: 1 },
            opacity: 1.0,
            fillColor: {
              vector: [0, 0, 0, 100],
              colors: [
                { color: '#84E0BE', offset: 0 },
                { color: '#FBD54A', offset: 1 }
              ]
            },
            borderRadius: 20
          }
        },
        pillarHover: (attrs, data, i) => {
          if (i % 2 === 0) {
            return {
              borderRadius: 10
            }
          }
          return { opacity: 0.5, fillColor: '#FC6980' }
        }
      }
    }
  }
</script>

```
