(window.webpackJsonpCatCharts=window.webpackJsonpCatCharts||[]).push([[24],{135:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),l=Object(n.a)(r,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Nested Pie Chart 嵌套饼图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"<template>\n  <s-chart :data=\"pieData\" :data-fields=\"dataFields\">\n    <s-pie :attrs=\"attrs\" :rows=\"rows1\" :color=\"pieColor\" />\n    <s-pie\n      :attrs=\"attrs2\"\n      :rows=\"rows2\"\n      :css-guideLine=\"true\"\n      :css-guideText=\"{fontSize: '12px'}\"\n    />\n    <s-legend :color=\"legendColor\" />\n  </s-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        pieData: [\n          { value: 204, name: '百度' },\n          { value: 451, name: '谷歌' },\n          { value: 347, name: '必应' },\n          { value: 256, name: '搜狗' },\n\n          { value: 6790, name: '营销广告' },\n          { value: 4548, name: '搜索引擎' },\n          { value: 3350, name: '直接访问' },\n          { value: 3100, name: '邮件营销' },\n          { value: 2340, name: '联盟广告' },\n          { value: 1350, name: '视频广告' }\n        ],\n        attrs: { radius: 0.5 },\n        rows1: ['百度', '谷歌', '必应', '搜狗'],\n        pieColor: ['#5982F6', '#59CB74', '#DA65CC', '#FC6980'],\n        attrs2: { innerRadius: 0.6, radius: 0.8 },\n        rows2: [\n          '营销广告',\n          '搜索引擎',\n          '直接访问',\n          '邮件营销',\n          '联盟广告',\n          '视频广告'\n        ],\n        dataFields: { row: 'name', value: 'value' },\n        legendColor: [\n          '#5982F6',\n          '#59CB74',\n          '#DA65CC',\n          '#FC6980',\n          '#47A1FF',\n          '#6CD3FF',\n          '#A2E5FF',\n          '#4DCCCB',\n          '#3FDDC7',\n          '#84E0BE'\n        ]\n      }\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"pieData"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data-fields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-pie")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rows1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"pieColor"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-pie")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs2"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rows")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rows2"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-guideLine")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-guideText")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{fontSize: '12px'}\"")]),s._v("\n    />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-legend")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"legendColor"')]),s._v(" />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pieData")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("204")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'百度'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("451")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'谷歌'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("347")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'必应'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("256")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'搜狗'")]),s._v(" },\n\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6790")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'营销广告'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4548")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'搜索引擎'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3350")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'直接访问'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3100")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'邮件营销'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2340")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'联盟广告'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1350")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'视频广告'")]),s._v(" }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(" },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rows1")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'百度'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'谷歌'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'必应'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'搜狗'")]),s._v("],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pieColor")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#5982F6'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#59CB74'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#DA65CC'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FC6980'")]),s._v("],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs2")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("innerRadius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.6")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.8")]),s._v(" },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rows2")]),s._v(": [\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'营销广告'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'搜索引擎'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'直接访问'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'邮件营销'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'联盟广告'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'视频广告'")]),s._v("\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(" },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("legendColor")]),s._v(": [\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#5982F6'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#59CB74'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#DA65CC'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FC6980'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#47A1FF'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#6CD3FF'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#A2E5FF'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#4DCCCB'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#3FDDC7'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#84E0BE'")]),s._v("\n        ]\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],1)},[],!1,null,null,null);a.default=l.exports}}]);