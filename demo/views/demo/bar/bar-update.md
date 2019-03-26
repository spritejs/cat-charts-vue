## 数据更新

:::demo

```html
<template>
  <s-chart>
    <s-bar
      :attrs="attrs"
      :data="data"
      :data-fields="dataFields"
      :css-text="text"
    />
    <s-axis :attrs="{orient:'left'}" />
    <s-axis :attrs="{orient:'bottom'}" />
    <s-grid />
    <s-legend />
    <s-tooltip :attrs="tooltipAttrs" />
  </s-chart>
</template>
<script>
  let num = 0
  export default {
    data: function() {
      return {
        data: [],
        attrs: {
          padding: [50, 50, 50, 110],
          pos: ['20%', '5%'],
          size: ['80%', '90%']
        },
        barData: [
          { value: 11, label: '直接访问' },
          { value: 21, label: '邮件营销' },
          { value: 67, label: '联盟广告' },
          { value: 33, label: '视频广告' },
          { value: 60, label: '搜索引擎' },
          { value: 78, label: '直接访问' }
        ],
        tooltipAttrs: {
          formatter: data => `${data.label} ${data.value}`
        },
        dataFields: { x: 'department', y: 'value', category: 'type' },
        text: (attrs, data, i) => {
          return { text: data.value }
        },
        newData: [
          { value: 11, label: '直接访问' },
          { value: 21, label: '邮件营销' },
          { value: 67, label: '联盟广告' },
          { value: 33, label: '视频广告' },
          { value: 60, label: '搜索引擎' },
          { value: 78, label: '直接访问' },
          { value: 100, label: '新增' },
          { value: 40, label: '新增' }
        ]
      }
    },
    created() {
      this.data = this.barData
      setTimeout(this.changeData, 5000)
    },
    mounted() {},
    methods: {
      update(data) {},
      changeData() {
        if (num % 2 === 0) {
          this.data = this.newData
        } else {
          this.data = this.barData
        }
        num++
        setTimeout(this.changeData, 5000)
      }
    }
  }
</script>
```

:::
