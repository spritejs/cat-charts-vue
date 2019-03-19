## 组合

:::demo

```html
<template>
  <s-chart>
    <s-pie
      :attrs="attrs"
      :data="pieData"
      :data-fields="dataFields"
      :css-text="true"
    />
    <s-pie
      :attrs="attrs2"
      :data="pieData2"
      :data-fields="dataFields2"
      :css-text="{color:'#f00'}"
    />
    <s-legend />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          radius: 0.4,
          innerRadius: 0
        },
        attrs2: {
          radius: 0.7,
          innerRadius: 0.5
        },
        pieData: [
          {
            type: '风象星座',
            value: 1
          },

          {
            type: '土象星座',
            value: 1
          },

          {
            type: '水象星座',
            value: 1
          },

          {
            type: '火象星座',
            value: 1
          }
        ],
        pieData2: [
          {
            name: '水瓶',
            type: '风向星座',
            value: 1
          },
          {
            name: '双子',
            type: '风向星座',
            value: 1
          },
          {
            name: '天平',
            type: '风向星座',
            value: 1
          },

          {
            name: '摩羯',
            type: '土象星座',
            value: 1
          },
          {
            name: '金牛',
            type: '土象星座',
            value: 1
          },
          {
            name: '处女',
            type: '土象星座',
            value: 1
          },

          {
            name: '天蝎',
            type: '水象星座',
            value: 1
          },
          {
            name: '巨蟹',
            type: '水象星座',
            value: 1
          },
          {
            name: '双鱼',
            type: '水象星座',
            value: 1
          },

          {
            name: '狮子',
            type: '火象星座',
            value: 1
          },
          {
            name: '白羊',
            type: '火象星座',
            value: 1
          },
          {
            name: '射手',
            type: '火象星座',
            value: 1
          }
        ],
        dataFields: { x: 'type', y: 'value' },
        dataFields2: { x: 'name', y: 'value' }
      }
    }
  }
</script>
```

:::
