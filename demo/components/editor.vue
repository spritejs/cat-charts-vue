<template>
  <textarea ref="textarea" class="copytxt"></textarea>
</template>

<script>
import CodeMirror from 'codemirror'
import emmet from '@emmetio/codemirror-plugin'
import 'codemirror/lib/codemirror.css'
//import 'codemirror/theme/lucario.css'
//import 'codemirror/theme/mdn-like.css'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/mode/vue/vue'
import { debounce } from 'throttle-debounce'
import isAbsouteUrl from 'is-absolute-url'
import { downloadURL } from '../utils/store'

emmet(CodeMirror)
const defaultValue = ``

export default {
  props: {
    source: {
      type: String,
      default: ''
    }
  },

  data: () => ({
    code: ''
  }),

  async mounted() {
    const editor = CodeMirror.fromTextArea(this.$refs.textarea, {
      mode: 'vue',
      theme: 'default',
      value: `<template></template>`,
      lineNumbers: true,
      tabSize: 2,
      autofocus: true,
      line: true,
      styleActiveLine: true,
      matchBrackets: true,
      extraKeys: {
        Tab: 'emmetExpandAbbreviation',
        Enter: 'emmetInsertLineBreak'
      }
    })

    editor.on(
      'change',
      debounce(200, () => {
        this.$emit('change', editor.getValue())
      })
    )
    let value
    // if (location.pathname !== '/') {
    //   value = await this.getFileContent(location.pathname.slice(1))
    // }
    value = this.source || defaultValue
    editor.setValue(value)

    this.$emit('change', editor.getValue())
  },

  methods: {
    async getFileContent(filename) {
      this.$toasted.show('Loading file...')

      let url
      if (/^\w+$/.test(filename)) {
        url = downloadURL(filename)
      } else if (isAbsouteUrl(filename)) {
        url = filename
      } else if (/^[\w-]+\.\w+/.test(filename)) {
        url = '//' + filename
      } else {
        // convert url to github raw url
        const repo = filename.match(
          /^([^\/]+\/[^\/]+)(\/blob\/([\w-]+))?(\S+)$/
        )
        url = `//raw.githubusercontent.com/${repo[1]}/${repo[3] || 'master'}${
          repo[4]
        }`
      }

      if (/github\.com\//.test(url)) {
        url = url
          .replace(/github\.com\//, 'raw.githubusercontent.com/')
          .replace(/\/blob\//, '/')
      }

      try {
        const result = await fetch(url)

        this.$toasted.clear()

        return await result.text()
      } catch (e) {
        this.$toasted.clear()
        this.$toasted.show('File not found', {
          type: 'error',
          duration: 2000
        })
        return null
      }
    }
  }
}
</script>

<style>
.CodeMirror {
  height: 100% !important;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 14px;
}
.CodeMirror-gutters {
  background-color: #f7f9fb;
  border-right: none;
}
.copytxt {
  width: 100%;
  height: 1px;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
