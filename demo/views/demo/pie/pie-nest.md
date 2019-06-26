## Nested Pie Chart 嵌套饼图

:::demo

```html
<template>
  <s-chart :data="pieData" :data-fields="dataFields">
    <s-pie
      :attrs="attrs"
      :rows="rows1"
      :color="pieColor"
      :css-text="textStyle"
    />
    <s-pie
      :attrs="attrs2"
      :rows="rows2"
      :color="pieColor2"
      :css-guideLine="true"
      :css-guideText="{fontSize: '12px'}"
    />
    <s-legend
      :color="legendColor"
      :attrs="legendAttrs"
      :css-icon="legendIconStyle"
      :css-text="legendTextStyle"
    />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        pieData: [
          { value: 204, name: '图例一' },
          { value: 451, name: '图例二' },
          { value: 347, name: '图例三' },
          { value: 256, name: '图例四' },

          { value: 2790, name: '图例1' },
          { value: 2548, name: '图例2' },
          { value: 1350, name: '图例3' },
          { value: 3100, name: '图例4' },
          { value: 2340, name: '图例5' },
          { value: 1350, name: '图例6' },
          { value: 2450, name: '图例7' },
          { value: 1550, name: '图例8' },
          { value: 3450, name: '图例9' },
          { value: 2750, name: '图例10' }
        ],
        attrs: { radius: 0.4, size: ['80%', '100%'], pos: [0, 0] },
        rows1: ['图例一', '图例二', '图例三', '图例四'],
        pieColor: ['#5982F6', '#59CB74', '#DA65CC', '#FC6980'],
        attrs2: {
          innerRadius: 0.5,
          radius: 0.7,
          size: ['80%', '100%'],
          pos: [0, 0]
        },
        rows2: [
          '图例1',
          '图例2',
          '图例3',
          '图例4',
          '图例5',
          '图例6',
          '图例7',
          '图例8',
          '图例9',
          '图例10'
        ],
        pieColor2: [
          '#47A1FF',
          '#6CD3FF',
          '#A2E5FF',
          '#4DCCCB',
          '#3FDDC7',
          '#ADDF84',
          '#FBD54A',
          '#FFB952',
          '#F79452',
          '#E37474'
        ],
        dataFields: { row: 'name', value: 'value' },
        legendColor: [
          '#5982F6',
          '#59CB74',
          '#DA65CC',
          '#FC6980',
          '#47A1FF',
          '#6CD3FF',
          '#A2E5FF',
          '#4DCCCB',
          '#3FDDC7',
          '#ADDF84',
          '#FBD54A',
          '#FFB952',
          '#F79452',
          '#E37474'
        ],
        legendAttrs: { orient: 'vertical', align: ['right', 'center'] },
        textStyle: attrs => ({ color: '#fff', text: attrs.name }),
        legendIconStyle: (attrs, d, i) => ({
          marginTop: i > 0 ? 10 : 0
        }),
        legendTextStyle: (attrs, d, i) => ({
          marginTop: i > 0 ? 10 : 0
        })
      }
    }
  }
</script>
```

:::
