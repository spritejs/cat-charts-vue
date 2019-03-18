(window.webpackJsonpCatCharts=window.webpackJsonpCatCharts||[]).push([[12],{102:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),l=Object(n.a)(r,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("堆叠面积图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"<template>\n  <s-chart>\n    <s-line\n      :attrs=\"attrs\"\n      :data=\"lineData\"\n      :dataFields=\"dataFields\"\n      :area:hover=\"areaHover\"\n    />\n    <s-axis :attrs=\"{orient:'left'}\" />\n    <s-axis :attrs=\"{orient:'bottom'}\" />\n    <s-tooltip\n      :formatter=\"data => {return `${data.city}-${data.month}-${data.value}`}\"\n    />\n    <s-legend :attrs=\"{vertical:0}\" />\n  </s-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        attrs: {\n          padding: [80, 30, 50, 50],\n          stack: true\n        },\n        lineData: [\n          { month: 'Jan', city: 'London', value: 3.9 },\n          { month: 'Feb', city: 'London', value: 4.2 },\n          { month: 'Mar', city: 'London', value: 5.7 },\n          { month: 'Apr', city: 'London', value: 8.5 },\n          { month: 'May', city: 'London', value: 11.9 },\n          { month: 'Jun', city: 'London', value: 15.2 },\n          { month: 'Apr', city: 'Tokyo', value: 14.5 },\n          { month: 'Mar', city: 'Tokyo', value: 9.5 },\n          { month: 'May', city: 'Tokyo', value: 18.4 },\n          { month: 'Jan', city: 'Tokyo', value: 7.0 },\n          { month: 'Jun', city: 'Tokyo', value: 21.5 },\n          { month: 'Feb', city: 'Tokyo', value: 6.9 }\n        ],\n        dataFields: { x: 'month', y: 'value', category: 'city' },\n        areaHover: function(attrs, data, i) {\n          if (i === 0) {\n            return { fillColor: 'rgba(255,0,0,0.3)' }\n          }\n        }\n      }\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-line")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"lineData"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":dataFields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":area:hover")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"areaHover"')]),s._v("\n    />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-axis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{orient:'left'}\"")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-axis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{orient:'bottom'}\"")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-tooltip")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":formatter")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"data => {return `${data.city}-${data.month}-${data.value}`}"')]),s._v("\n    />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-legend")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"{vertical:0}"')]),s._v(" />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("padding")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v("],\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stack")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineData")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jan'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3.9")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Feb'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Mar'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5.7")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Apr'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8.5")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'May'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("11.9")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jun'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Apr'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Tokyo'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("14.5")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Mar'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Tokyo'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("9.5")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'May'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Tokyo'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("18.4")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jan'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Tokyo'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("7.0")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jun'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Tokyo'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21.5")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Feb'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Tokyo'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6.9")]),s._v(" }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'month'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'city'")]),s._v(" },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("areaHover")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, data, i")]),s._v(") ")]),s._v("{\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (i === "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(") {\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rgba(255,0,0,0.3)'")]),s._v(" }\n          }\n        }\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],1)},[],!1,null,null,null);a.default=l.exports}}]);