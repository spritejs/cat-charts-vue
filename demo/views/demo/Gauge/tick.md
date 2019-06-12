## 刻度

:::demo

```html
<template>
  <s-chart :data="data" :data-fields="dataFields">
    <s-gauge :attrs="attrs" :css-title="{fontSize:48}" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          min: 0,
          max: 10,
          tickStep: 1,
          tickLength: -10,
          title: d => `${d.value}`,
          subTitle: 'Hello'
        },

        data: [
          {
            value: 7.3
          }
        ],
        dataFields: {
          value: 'value'
        }
      }
    }
  }
</script>
```

:::

## 刻度上文字

:::demo

```html
<template>
  <s-chart :data="data" :data-fields="dataFields">
    <s-gauge :attrs="attrs" :css-title="{fontSize:48}" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          min: 0,
          max: 10,
          tickStep: 1,
          tickLength: 10,
          labelOffset: 20,
          title: d => `${d.value}`,
          subTitle: 'Hello'
        },

        data: [
          {
            value: 7.3
          }
        ],
        dataFields: {
          value: 'value'
        }
      }
    }
  }
</script>
```

:::
