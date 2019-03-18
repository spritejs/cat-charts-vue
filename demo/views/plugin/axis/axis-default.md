## 基础坐标轴


:::demo 基础坐标

```html
<template>
  <s-chart>
    <s-line :attrs="attrs" :data="lineData" :data-fields="dataFields" />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-tooltip :attrs="tooltipAttrs" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          padding: [80, 30, 50, 50]
        },
        lineData: [
          { month: 'Jan', city: 'London', value: 3.9 },
          { month: 'Feb', city: 'London', value: 4.2 },
          { month: 'Mar', city: 'London', value: 5.7 },
          { month: 'Apr', city: 'London', value: 8.5 },
          { month: 'May', city: 'London', value: 11.9 },
          { month: 'Jun', city: 'London', value: 15.2 }
        ],
        tooltipAttrs:{
        	formatter: data => `${data.city}-${data.month}-${data.value}`
        },
        dataFields: {
          x: 'month',
          y: 'value'
        }
      }
    }
  }
</script>
```

:::


#### 方法：
| 名称         | 说明                                                                                 | 类型  | 可选值                                                                                      | 默认值                 |
| ------------ | ------------------------------------------------------------------------------------ | ----- | ------------------------------------------------------------------------------------------- | ---------------------- |
| orient       | 坐标轴的方向                                                                         |       | ['top','right','bottom','left']                                                             | 'bottom'               |
| padding      | 坐标轴到绘制区域边框的距离                                                           |       | —                                                                                          | [10, 10, 10, 10]       |
| orignalPoint | 坐标轴的起始点                                                                       |       | —                                                                                          | orient不同，默认值不同 |
| scales       | 绘制坐标轴的数据,label为显示文本，offset为相对偏移量，可以为数字(px)，也可以为百分比 | Array | [{label: "Jan", offset: "0%"},{label: "Apr", offset: "60%"},{label: "Jun", offset: "100%"}] |                        |


#### style 属性：
| 名称         | 说明                 | 类型  |
| ------------| --------------------| ----- |
| axis       | 轴体的样式      |   轴体对应Rect类    |
| scale      | 刻度的样式       |   scale对应Rect类    |
| label      | 轴上文本样式       |   label对应的label类    |
