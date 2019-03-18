## 数据更新

:::demo

```html
<template>
  <s-chart>
    <s-radar
      :attrs="attrs"
      :data="data"
      :dataFields="dataFields"
      :point="point"
    />
    <s-tooltip :attrs="tooltipAttrs"/>
    <s-legend />
  </s-chart>
</template>
<script>
  let change = true
  export default {
    data: function() {
      return {
        data: [],
        attrs: {
          padding: 10
        },
        radarData: [
          { label: '客服', category: '实际开销', value: 2 },
          { label: '研发', category: '实际开销', value: 22 },
          { label: '市场', category: '实际开销', value: 69 },
          { label: '扯淡', category: '实际开销', value: 69 },
          { label: '销售', category: '实际开销', value: 66 },
          { label: '管理', category: '实际开销', value: 32 },
          { label: '技术', category: '实际开销', value: 24 },

          { label: '客服', category: '节能减排', value: 100 },
          { label: '研发', category: '节能减排', value: 47 },
          { label: '市场', category: '节能减排', value: 73 },
          { label: '扯淡', category: '节能减排', value: 48 },
          { label: '销售', category: '节能减排', value: 10 },
          { label: '管理', category: '节能减排', value: 41 },
          { label: '技术', category: '节能减排', value: 32 }
        ],
        newData: [
          { label: '客服', category: '实际开销', value: 2 },
          { label: '研发', category: '实际开销', value: 22 },
          { label: '市场', category: '实际开销', value: 69 },
          { label: '扯淡', category: '实际开销', value: 69 },
          { label: '销售', category: '实际开销', value: 66 },
          { label: '管理', category: '实际开销', value: 32 },
          { label: '技术', category: '实际开销', value: 24 },

          { label: '客服', category: '节能减排', value: 100 },
          { label: '研发', category: '节能减排', value: 47 },
          { label: '市场', category: '节能减排', value: 73 },
          { label: '扯淡', category: '节能减排', value: 48 },
          { label: '销售', category: '节能减排', value: 10 },
          { label: '管理', category: '节能减排', value: 41 },
          { label: '技术', category: '节能减排', value: 32 },

          { label: '客服', category: '添加测试', value: 130 },
          { label: '研发', category: '添加测试', value: 92 },
          { label: '市场', category: '添加测试', value: 70 },
          { label: '扯淡', category: '添加测试', value: 65 },
          { label: '销售', category: '添加测试', value: 21 },
          { label: '管理', category: '添加测试', value: 66 },
          { label: '技术', category: '添加测试', value: 70 }
        ],
        tooltipAttrs:{
          lineHight: 22,
        	formatter: data => `${data.category}: ${data.label}-${data.value}`
        },
        dataFields: { x: 'label', y: 'value', category: 'category' },
        point: (attrs, data, i) => {
          const { category } = data
          return {
            shape: 'circle',
            size: 4,
            opacity: 1,
            fillColor: 'rgb(255, 205, 86)'
          }
        }
      }
    },
    created() {
      this.data = this.radarData
      setInterval(() => {
        if (change) {
          this.data = this.newData
        } else {
          this.data = this.radarData
        }
        change = !change
      }, 3000)
    }
  }
</script>
```

:::
