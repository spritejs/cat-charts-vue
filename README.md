# cat-charts
A visulization library based on spritejs , qcharts and Vue


### 特点
CatCharts 是一个基于<a href="https://www.spritejs.com">sprites</a>,<a href="https://www.npmjs.com/package/q-charts">qcharts</a>封装的Vue图表库，可以让用户以组件的形式组合出各种图表。

### 如何使用

1.通过 npm 获取 CatCharts，我们提供了 CatCharts npm 包，通过下面的命令即可完成安装
``` shell
npm install cat-charts --save
```

2.通过 cdn 获取 CatCharts，通过下面的标签引入CatCharts
``` html
<script src="https://unpkg.com/cat-charts/lib/index.js"></script>
```


### 开始绘制图表



``` javascript
// 通过cdn的方式使用CatCharts
Vue.use(CatCharts);

// 通过模块引入的方式使用CatCharts
import { install } from 'cat-charts'
Vue.use(install)
```
完成一个CatCharts的组件或者页面

``` html
<template>
  <s-chart>
    <s-line :attrs="attrs" :data="lineData" :dataFields="dataFields" />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-tooltip :attrs="tooltipAttrs"/>
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

一张折线图就绘制成功

<img src="https://p5.ssl.qhimg.com/t0168ca8499a823f418.png" width="600">
