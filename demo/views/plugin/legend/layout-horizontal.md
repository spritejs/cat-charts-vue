:::demo

```javascript
<template>
  <s-chart :data="data">
    <s-legend :attrs="{ orient: 'horizontal', align: ['left', 'top'] }" />
    <s-legend :attrs="{ orient: 'horizontal', align: ['left', 'center'] }" />
    <s-legend :attrs="{ orient: 'horizontal', align: ['left', 'bottom'] }" />
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        data: [
          2000,
          2001,
          2002,
          2003,
          2004,
          2005,
          2006,
          2007,
          2008,
          2009,
          2010,
          2011,
          2012,
          2013,
          2014,
          2015,
          2016,
          2017,
          2018,
          2019,
          2020,
          2021,
          2022,
          2023,
          2024,
          2025,
          2026,
          2027,
          2028,
          2029,
          2030
        ]
      }
    }
  }
</script>
```

:::
