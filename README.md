## 快速开始

### 特点

CatChartsVue 是一个基于 <a target="_blank" href="https://www.spritejs.com">spritejs</a> , <a  target="_blank" href="https://www.spritejs.com/q-charts/">QCharts</a> 封装的 <a target="_blank" href="https://vuejs.org/">Vue</a> 图表库，可以让用户以组件的形式组合出各种图表。 <a target="_blank" href="https://www.spritejs.com/cat-charts-vue/">→ 详细文档</a>

### 如何使用

1.通过 npm 获取 CatChartsVue，我们提供了 CatChartsVue npm 包，通过下面的命令即可完成安装，Demo：<a target="_blank" href="https://github.com/longwind91/cat-charts-vue-demo">Quickstart</a>

```shell
npm install cat-charts-vue --save
```

```javascript
// 通过模块引入的方式使用CatCharts
import * as CatChartsVue from 'cat-charts-vue'
Vue.use(CatChartsVue)
```

2.通过 cdn 获取 CatCharts，通过下面的标签引入 CatCharts，因为 CatCharts 依赖 Vue 与 spritejs，所以需要先引入这两个，Demo：<a target="_blank" href="https://github.com/yaotaiyang/cat-charts-vue-demo">Quickstart</a>

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/spritejs/dist/spritejs.min.js"></script>
<script src="https://unpkg.com/@qcharts/core/lib/index.js"></script>
<script src="https://unpkg.com/cat-charts-vue/lib/index.js"></script>
```

```javascript
// 通过cdn的方式使用CatCharts
Vue.use(CatChartsVue)
```

### 开始绘制图表

完成一个 CatChartsVue 的组件或者页面

```html
<template>
  <div class="chart">
    <s-chart :data="lineData" :data-fields="dataFields" :size="[700,600]">
      <s-line :attrs="attrs" />
      <s-axis :attrs="{orient:'left'}" />
      <s-axis :attrs="{orient:'bottom'}" />
      <s-tooltip :attrs="tooltipAttrs" />
    </s-chart>
  </div>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          pos: ['10%', '10%'],
          size: ['80%', '80%']
        },
        lineData: [
          { date: '05-01', catgory: '图例一', sales: 15.2 },
          { date: '05-02', catgory: '图例一', sales: 39.2 },
          { date: '05-03', catgory: '图例一', sales: 31.2 },
          { date: '05-04', catgory: '图例一', sales: 65.2 },
          { date: '05-05', catgory: '图例一', sales: 55.2 },
          { date: '05-06', catgory: '图例一', sales: 75.2 },
          { date: '05-07', catgory: '图例一', sales: 95.2 },
          { date: '05-08', catgory: '图例一', sales: 65.2 }
        ],
        tooltipAttrs: {
          formatter: data => `${data.date}-${data.catgory}-${data.sales}`
        },
        dataFields: {
          row: 'catgory',
          value: 'sales',
          text: 'date'
        }
      }
    }
  }
</script>
<style>
  .chart {
    height: 600px;
  }
</style>
```

一张折线图就绘制成功

<img src="https://p4.ssl.qhimg.com/d/inn/717a6a22789a/base-line.png" width="400">
