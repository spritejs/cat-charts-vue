(window.webpackJsonpCatCharts=window.webpackJsonpCatCharts||[]).push([[27],{100:function(s,t,a){"use strict";a.r(t);var r={components:{}},n=a(0),v=Object(n.a)(r,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("基础坐标轴")]),s._v(" "),s._m(0),s._v(" "),a("p",[s._v("在组件内，通过以上代码来触发坐标轴渲染")]),s._v(" "),a("block-demo",{attrs:{tip:"基础坐标",source:"const data = [\n  {month: 'Jan',city:'London',value:3.9},\n  {month: 'Feb',city:'London',value:4.2},\n  {month: 'Mar',city:'London',value:5.7},\n  {month: 'Apr',city:'London',value:8.5},\n  {month: 'May',city:'London',value:11.9},\n  {month: 'Jun',city:'London',value:15.2}\n];\n\nconst { Chart, Axis } = qchart\n\nconst chart = new Chart({\n  container: '#app',\n  size: ['100%', '100%'],\n  forceFit: true\n})\n\nconst line = new qchart.Line({\n    padding:[80,30,50,50]\n   })\n  .source(data)\n  .setDataFields({ x: 'month', y: 'value',category:'city' })\n\nlet xAxis = new Axis({orient:'bottom'});\nlet yAxis = new Axis({orient:'left'});\n\nchart.add(line).add(xAxis).add(yAxis)\nchart.render()\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data = [\n  {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jan'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3.9")]),s._v("},\n  {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Feb'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4.2")]),s._v("},\n  {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Mar'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5.7")]),s._v("},\n  {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Apr'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8.5")]),s._v("},\n  {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'May'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("11.9")]),s._v("},\n  {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jun'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15.2")]),s._v("}\n];\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Chart, Axis } = qchart\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" chart = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Chart({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("container")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100%'")]),s._v("],\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("forceFit")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n})\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" line = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" qchart.Line({\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("padding")]),s._v(":["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v("]\n   })\n  .source(data)\n  .setDataFields({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'month'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'city'")]),s._v(" })\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" xAxis = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v("});\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" yAxis = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Axis({"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v("});\n\nchart.add(line).add(xAxis).add(yAxis)\nchart.render()\n")])])]),a("h4",[s._v("方法：")]),s._v(" "),s._m(1)],1)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".emit(InteractionHooks.axisReady, {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("padding")]),s._v(":["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(","),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v("],\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scales")]),s._v(":[{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Jan"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("offset")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0%"')]),s._v("},{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Apr"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("offset")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"60%"')]),s._v("},{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Jun"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("offset")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"100%"')]),s._v("}]\n});\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("orient")]),s._v(" "),a("td",[s._v("坐标轴的方向")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("['top','right','bottom','left']")]),s._v(" "),a("td",[s._v("'bottom'")])]),s._v(" "),a("tr",[a("td",[s._v("padding")]),s._v(" "),a("td",[s._v("坐标轴到绘制区域边框的距离")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("[10, 10, 10, 10]")])]),s._v(" "),a("tr",[a("td",[s._v("orignalPoint")]),s._v(" "),a("td",[s._v("坐标轴的起始点")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("orient不同，默认值不同")])]),s._v(" "),a("tr",[a("td",[s._v("scales")]),s._v(" "),a("td",[s._v("绘制坐标轴的数据,label为显示文本，offset为相对偏移量，可以为数字(px)，也可以为百分比")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[s._v('[{label: "Jan", offset: "0%"},{label: "Apr", offset: "60%"},{label: "Jun", offset: "100%"}]')]),s._v(" "),a("td")])])])}],!1,null,null,null);t.default=v.exports}}]);