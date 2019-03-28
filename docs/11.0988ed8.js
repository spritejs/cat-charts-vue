(window.webpackJsonpCatCharts=window.webpackJsonpCatCharts||[]).push([[11],{103:function(v,t,_){"use strict";_.r(t);var e={components:{}},r=_(0),d=Object(r.a)(e,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("section",[_("h3",[v._v("attrs")]),v._v(" "),_("p",[v._v("attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("属性名")]),v._v(" "),_("th",[v._v("类型")]),v._v(" "),_("th",[v._v("默认值")]),v._v(" "),_("th",[v._v("描述")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("pos")]),v._v(" "),_("td",[v._v("Array")]),v._v(" "),_("td",[_("code",{pre:!0},[v._v("[0, 0]")])]),v._v(" "),_("td",[v._v("组件左上角偏移，可设置百分比或者像素")])]),v._v(" "),_("tr",[_("td",[v._v("size")]),v._v(" "),_("td",[v._v("Array")]),v._v(" "),_("td",[_("code",{pre:!0},[v._v("['100%','100%']")])]),v._v(" "),_("td",[v._v("组件大小，可设置百分比或者像素")])]),v._v(" "),_("tr",[_("td",[v._v("smooth")]),v._v(" "),_("td",[v._v("Boolean")]),v._v(" "),_("td",[v._v("false")]),v._v(" "),_("td",[v._v("曲线是否平滑")])]),v._v(" "),_("tr",[_("td",[v._v("stack")]),v._v(" "),_("td",[v._v("Boolean")]),v._v(" "),_("td",[v._v("false")]),v._v(" "),_("td",[v._v("是否设置为堆叠图")])])])]),v._v(" "),_("h3",[v._v("data")]),v._v(" "),_("p",[v._v("传入待展示数据，数据类型为 Array，参照 "),_("a",{attrs:{href:"#/demo/line/default"}},[v._v("demo")])]),v._v(" "),_("h3",[v._v("data-fields")]),v._v(" "),_("p",[v._v("数据维度和坐标轴对应关系，数据类型为 Object，参照 "),_("a",{attrs:{href:"#/demo/line/default"}},[v._v("demo")])]),v._v(" "),_("h3",[v._v("css 属性")]),v._v(" "),_("p",[v._v("组件中的元素样式均可通过 css 属性自定义，使用方法可在"),_("a",{attrs:{href:"#/demo/line/style"}},[v._v("定义样式 demo")]),v._v("中查看，用法如下：")]),v._v(" "),_("p",[_("code",{pre:!0},[v._v('<s-line :css-area="area" />')])]),v._v(" "),_("p",[v._v("在 data 中定义 area，可以是 obj 属性或者函数，例如：")]),v._v(" "),_("pre",{pre:!0},[_("code",{pre:!0,attrs:{"v-pre":""}},[v._v("//设置鼠标移入面积时样式\narea: {fillColor：'#f00', opacity:'0.5'}`\n\n//attrs为元素绘制属性，data为元素对应数据，i为元素序列\narea: (attrs, data, i) => {\n    //将偶数序列的面积元素设置为红色\n    if (i % 2 === 0) {\n      return {\n        fillColor: 'red'\n      }\n    }\n    return { opacity: 0.5, fillColor: 'blue' }\n  }\n")])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("名称")]),v._v(" "),_("th",[v._v("描述")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("css-area")]),v._v(" "),_("td",[v._v("堆叠图面积样式（堆叠图时生效）")])]),v._v(" "),_("tr",[_("td",[v._v("css-area:hover")]),v._v(" "),_("td",[v._v("鼠标 hover 时堆叠图面积样式（堆叠图时生效）")])]),v._v(" "),_("tr",[_("td",[v._v("css-guideline")]),v._v(" "),_("td",[v._v("指导线样式")])]),v._v(" "),_("tr",[_("td",[v._v("css-guideline:hover")]),v._v(" "),_("td",[v._v("鼠标 hover 时指导线样式")])]),v._v(" "),_("tr",[_("td",[v._v("css-line")]),v._v(" "),_("td",[v._v("线条样式")])]),v._v(" "),_("tr",[_("td",[v._v("css-line:hover")]),v._v(" "),_("td",[v._v("鼠标 hover 时线条样式")])]),v._v(" "),_("tr",[_("td",[v._v("css-symbol")]),v._v(" "),_("td",[v._v("点样式")])]),v._v(" "),_("tr",[_("td",[v._v("css-symbol:hover")]),v._v(" "),_("td",[v._v("鼠标 hover 时点样式")])])])]),v._v(" "),_("h3",[v._v("event")]),v._v(" "),_("p",[v._v("基本事件用法如下：\n"),_("code",{pre:!0},[v._v('<s-line @symbol:click="handlerFunction" />')])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("名称")]),v._v(" "),_("th",[v._v("描述")]),v._v(" "),_("th",[v._v("附带数据")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("symbol:click")]),v._v(" "),_("td",[v._v("点击 symbol 事件监听")]),v._v(" "),_("td",[v._v("symbol 属性")])])])])])}],!1,null,null,null);t.default=d.exports}}]);