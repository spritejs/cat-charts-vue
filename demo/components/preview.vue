<template>
  <div ref="iframe"></div>
</template>

<script>
import createIframe from '../utils/iframe'

const sandboxAttributes = [
  'allow-modals',
  'allow-forms',
  'allow-pointer-lock',
  'allow-popups',
  'allow-same-origin',
  'allow-scripts'
]

export default {
  props: ['value'],
  watch: {
    value(val) {
      this.iframe.setHTML(val)
    }
  },

  mounted() {
    this.iframe = createIframe({
      el: this.$refs.iframe,
      sandboxAttributes
    })
  }
}
</script>
