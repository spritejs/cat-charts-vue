(window.webpackJsonpCatChartsVue=window.webpackJsonpCatChartsVue||[]).push([[52],{113:function(s,a,t){"use strict";t.r(a);var r={components:{}},l=t(0),e=Object(l.a)(r,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("固定位置")]),s._v(" "),s._m(0),s._v(" "),t("block-demo",{attrs:{tip:"",source:"<template>\n  <s-chart :data=\"data\" :data-fields=\"dataFields\">\n    <s-pie />\n    <s-legend />\n    <s-tooltip :attrs=\"attrs\" :css-background=\"bgStyle\" :css-title=\"titleStyle\"\n      :css-icon=\"iconStyle\" :css-text=\"textStyle\"/>\n  </s-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        data: [\n          { value: 1350, label: '直接访问' },\n          { value: 2548, label: '搜索引擎' },\n          { value: 3340, label: '联盟广告' },\n          { value: 350, label: '视频广告' },\n          { value: 2100, label: '邮件营销' }\n        ],\n        attrs: { title: '网站流量来源', pos: ['0%', 20] },\n        dataFields: { row: 'label', value: 'value' },\n        bgStyle: () => ({ bgcolor: 'rgba(0, 0, 0, .5)' }),\n        titleStyle: () => ({ color: 'red' }),\n        iconStyle: () => ({ bgcolor: 'red' }),\n        textStyle: () => ({ color: 'blue' })\n      }\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("<template>\n  "),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data-fields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-pie")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-legend")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-tooltip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-background")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"bgStyle"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-title")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"titleStyle"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-icon")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"iconStyle"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-text")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"textStyle"')]),s._v("/>")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"xml"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1350")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'直接访问'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2548")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'搜索引擎'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3340")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'联盟广告'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("350")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'视频广告'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2100")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'邮件营销'")]),s._v(" }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'网站流量来源'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0%'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v("] },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("row")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(" },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bgStyle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" ({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rgba(0, 0, 0, .5)'")]),s._v(" }),\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("titleStyle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" ({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(" }),\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("iconStyle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" ({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(" }),\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("textStyle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" ({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'blue'")]),s._v(" })\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")])]),s._v("\n")])])])],1)},[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("使用 "),a("code",{pre:!0},[this._v("Tooltip.pos")]),this._v(" 可以固定 "),a("code",{pre:!0},[this._v("tooltip")]),this._v(" 的位置。")])}],!1,null,null,null);a.default=e.exports}}]);