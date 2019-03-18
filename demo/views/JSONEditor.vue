<template>
  <div class="page">
    <div class="json-editor">
      <div class="editor" ref="editor">
        <textarea ref="textarea"></textarea>
      </div>
      <div class="preview" ref="preview">
        <div class="demo" ref="demo"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import Split from 'split.js'
import { unescape } from 'scapegoat'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/lib/codemirror.css'
import { throttle } from '../utils'

const defaultValue = JSON.stringify(
  {
    mountNode: '.demo',
    attrs: {
      size: [600, 360],
      bgcolor: '#f7f7f7'
    },
    coord: {
      type: 'rect',
      options: {}
    },
    dimensions: [
      {
        x: 'year',
        y: 'value'
      }
    ],
    geoms: [
      {
        type: 'line',
        shapes: [
          {
            shape: 'polyline',
            style: {
              lineWidth: 4
            }
          }
        ]
      },

      {
        type: 'point',
        shapes: [
          {
            shape: 'circle',
            style: {},
            on: {
              mouseenter: ['showTooltip'],
              mouseleave: ['hideTooltip']
            }
          }
        ]
      }
    ],
    plugins: [
      {
        type: 'tooltip',
        attrs: {
          borderRadius: 4
        }
      }
    ],
    data: [
      {
        year: '1951 年',
        value: 39
      },
      {
        year: '1952 年',
        value: 72
      },
      {
        year: '1956 年',
        value: 70
      },
      {
        year: '1957 年',
        value: 85
      },
      {
        year: '1958 年',
        value: 70
      },
      {
        year: '1959 年',
        value: 54
      },
      {
        year: '1960 年',
        value: 72
      },
      {
        year: '1962 年',
        value: 60
      }
    ]
  },
  null,
  2
)

export default {
  props: {
    tip: String,
    source: String
  },

  data() {
    return {
      editor: null,
      visible: true,

      isJSON: true
    }
  },

  mounted() {
    this.initEditor()
    eval(window.QCharts.compile(defaultValue))
    this.syncCode()
    this.initSplit()
  },

  methods: {
    toggle() {
      this.visible = !this.visible
    },

    initSplit() {
      Split([this.$refs['editor'], this.$refs['preview']], {
        sizes: [50, 50]
      })
    },

    initEditor() {
      this.editor = CodeMirror.fromTextArea(this.$refs['textarea'], {
        mode: 'application/json',
        indentUnit: 2, // 缩进单位，默认2
        smartIndent: true,
        lineNumbers: true,
        lineWrapping: true
      })

      this.editor.getDoc().setValue(defaultValue)
    },

    syncCode() {
      const oDemo = this.$refs['demo']

      this.editor.on(
        'change',
        throttle(
          editor => {
            try {
              while (oDemo.firstChild) {
                oDemo.removeChild(oDemo.firstChild)
              }
              eval(window.QCharts.compile(editor.getValue()))
            } catch (e) {
              throw e
            }
          },
          200,
          { leading: true, trailing: true }
        )
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  // padding: 1rem 48px 48px 60px;
}

.json-editor {
  position: relative;
  border: 1px solid #ebebeb;
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border: 1px solid #efefef;
}

.json-editor > .editor,
.json-editor > .preview {
  box-sizing: border-box;
  width: 50%;
  overflow: auto;
}
.json-editor > .preview {
  box-sizing: border-box;
  max-height: 100%;
  padding: 1rem;
}
</style>
