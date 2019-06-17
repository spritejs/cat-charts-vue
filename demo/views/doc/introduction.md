## Chart 图表主体

CatChartsVue 基于 Vue 为用户封装了常用图表组件，方便用户来构建图表。

### 组件构成

CatChartsVue 由图表 Chart，图表绘制部分 Visual，图表插件部分 Plugin 组成。其中 Chart 是容器，Visual 绘制图表主体，如饼图，折线图等，Plugin 为图表相关插件，如 axis，tooltip 等，如下图

<p align="center"><img src="http://p6.qhimg.com/t0137055a27f367470b.png" alt="chart-structure" height="400"></p>

| 名称   | 说明                                                                                                                                            | 其它 |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| Chart  | 图表组件，申明使用 CatCharts,作为 CatCharts 的绘图容器，包裹其它的组件 `<s-chart></s-chart>`                                                    |      |
| Visual | 绘图组件，其中包含各种图表，如：`<s-line />` `<s-bar />` `<s-pie />` `<s-radar />` `<s-area />` `<s-column />` `<s-gauge />` `<s-funnel />`等等 |      |
| Plugin | 绘图插件，其中包含各种插件，如：`<s-tooltip />` `s-legend />` `<s-axis />` 等等                                                                 |      |

### 属性

| 名称   | 属性                                                                                                                                                                                         |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Chart  | size: `['100%','100%']` 图表大小<br/> pos: `[0,0]` 图表位置 <br/> data:`[]` 数据，一维数据，所有 visual 结构相同 <br/> data-fields:`{row:'type1',col:'type2',value:'type3'}`数据字段对应关系 |
| Visual | attrs:`{}`属性,各个 visual 特有 <br/> css-xxx:`{} | function` 属性设置,各个 visual 特有                                                                                                      |
| Plugin | attrs:`{}` 属性,各个 Plugin 特有 <br/>css-xxx: `{} | function` 属性设置,各个 Plugin 特有                                                                                                     |
