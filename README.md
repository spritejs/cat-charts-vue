## 快速开始

### 特点

CatCharts 是一个基于 <a target="_blank" href="https://www.spritejs.com">spritejs</a> , <a  target="_blank" href="https://www.npmjs.com/package/@qcharts/core">qcharts</a> 封装的 <a target="_blank" href="https://vuejs.org/">Vue</a> 图表库，可以让用户以组件的形式组合出各种图表。

### 如何使用

1.通过 npm 获取 CatCharts，我们提供了 CatCharts npm 包，通过下面的命令即可完成安装，Demo：<a target="_blank" href="https://github.com/yaotaiyang/cat-charts-demo">Quickstart</a>

```shell
npm install cat-charts --save
```
```javascript
// 通过模块引入的方式使用CatCharts
import * as CatCharts from 'cat-charts'
Vue.use(CatCharts)
```

2.通过 cdn 获取 CatCharts，通过下面的标签引入 CatCharts，因为CatCharts依赖Vue与spritejs，所以需要先引入这两个

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/spritejs/dist/spritejs.min.js"></script>
<script src="https://unpkg.com/cat-charts@0.2/lib/index.js"></script>
```
```javascript
// 通过cdn的方式使用CatCharts
Vue.use(CatCharts)
```

### 开始绘制图表
完成一个 CatCharts 的组件或者页面

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
          pos:['10%','10%'],
          size:['80%','80%']
        },
        lineData: [
          { month: 'Jan', city: 'London', value: 3.9 },
          { month: 'Feb', city: 'London', value: 4.2 },
          { month: 'Mar', city: 'London', value: 5.7 },
          { month: 'Apr', city: 'London', value: 8.5 },
          { month: 'May', city: 'London', value: 11.9 },
          { month: 'Jun', city: 'London', value: 15.2 }
        ],
        tooltipAttrs: {
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

<img src="https://p5.ssl.qhimg.com/t0168ca8499a823f418.png" width="400">
