<template>
  <div ref="block" :class="['block-demo', isFullscreen ? 'block-demo--fixed' : '']">
    <div ref="preview" class="preview">
      <preview :value="preview"></preview>
    </div>
    <div ref="editorArea" class="editorArea">
      <div class="bock-demo__ctrl">
        <span title="运行" class="icon" @click="syncCode">
          <img src="./play.svg" alt="运行">
        </span>
        <span v-if="!isFullscreen" title="全屏" class="icon" @click="fullscreen">
          <img src="./full-screen.svg" alt="全屏">
        </span>
        <span v-if="isFullscreen" title="取消全屏" class="icon" @click="fullscreen">
          <img src="./recovery.svg" alt="取消全屏">
        </span>
        <span class="icon" @click="copyCode">
          <img src="./code-copy.svg" alt="复制代码">
        </span>
      </div>
      <div class="bock-demo__code">
        <editor ref="editor" :source="source" @change="updateCode"></editor>
      </div>
    </div>
    <textarea ref="copytxt" class="copytxt"></textarea>
  </div>
</template>

<script>
import Editor from './editor.vue'
import Preview from './preview.vue'
import { parseComponent } from 'vue-template-compiler/browser'
import getImports from '../utils/get-imports'
import getPkgs from '../utils/get-pkgs'
import Split from 'split.js'
import * as params from '../utils/params'

export default {
  components: {
    Editor,
    Preview
  },
  props: {
    tip: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    preview: '',
    code: '',
    visible: true,
    isJSON: false,
    isFullscreen: false
  }),
  created() {},
  mounted() {
    this.compile(this.code)
    Split([this.$refs['preview'], this.$refs['editorArea']], {
      sizes: [50, 50]
    })
  },
  methods: {
    copyCode() {
      let val = this.code
      let $text = this.$refs['copytxt'];
      $text.value = val
      $text.focus()
      $text.select()
      document.execCommand('copy')
      alert('复制成功！')
    },
    toggle() {
      this.visible = !this.visible
    },
    fullscreen() {
      this.isFullscreen = !this.isFullscreen
      if(window.parent){
        window.parent.postMessage({fullScreen:this.isFullscreen},'*');
      }
    },
    syncCode() {
      this.compile(this.code)
    },
    updateCode(code) {
      this.code = code
    },
    async compile(code) {
      this.code = code
      if (!code) {
        return
      }
      const imports = []
      const { template, script, styles, customBlocks } = parseComponent(code)
      let config

      if ((config = customBlocks.find(n => n.type === 'config'))) {
        params.clear()
        params.parse(config.content)
      }

      let compiled
      const pkgs = []
      let scriptContent = 'exports = { default: {} }'
      if (script) {
        try {
          compiled = window.Babel.transform(script.content, {
            presets: ['es2015', 'es2016', 'es2017', 'stage-0'],
            plugins: [[getImports, { imports }]]
          }).code
        } catch (e) {
          this.preview = `<pre style="color: red">${e.message}</pre>`
          return
        }
        scriptContent = await getPkgs(compiled, imports, pkgs)
      }
      //const heads = this.genHeads()
      const heads = []
      heads.push(
        `<script src="https://s3.ssl.qhres.com/!f868948f/vue.min.js"><\/script>`
      )
      heads.push('<style>html,body{height:100%;padding:0;margin:0}</style>')
      const scripts = []
      pkgs.forEach(pkg => {
        scripts.push(
          `<script src=//packd.now.sh/${pkg.module}${pkg.path}?name=${
            pkg.name
          }><\/script>`
        )
      })
      styles.forEach(style => {
        heads.push(`<style>${style.content}</style>`)
      })
      
      scripts.push(
        `<script src="https://unpkg.com/spritejs/dist/spritejs.min.js"><\/script>`
      )
       scripts.push(
        `<script src="https://unpkg.com/@qcharts/core/lib/index.js"><\/script>`
      )
      scripts.push(`<script src="./cat-charts.js"><\/script>`)
      scripts.push(`
      <script>
        var exports = {};
        ${scriptContent}
        var component = exports.default;
        component.template = component.template || ${JSON.stringify(
          template.content
        )}
        Vue.use(CatCharts);
        new Vue(component).$mount('#app')
      <\/script>`)
      // console.log(scripts)
      this.preview = {
        head: heads.join('\n'),
        body: '<div id="app"></div>' + scripts.join('\n')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 0;
}
.block-demo {
  position: relative;
  margin-top: 1.2em;
  box-sizing: border-box;

  height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border: 1px solid #edeff1;
  background: #fff;

  font-size: 1.2rem;
}

.block-demo--fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  margin-top: 0 !important;
}

.block-demo + .block-demo {
  margin-top: 30px;
}

.block-demo .editorArea,
.block-demo .preview {
  box-sizing: border-box;
  width: 50%;
  height: 100%;
}

@media (max-width: 768px) {
  .block-demo > .preview {
    width: 100%;
  }
}

.block-demo > .preview {
  box-sizing: border-box;
  max-height: 100%;
  padding: 1rem;
  overflow: hidden;
}

.editorArea {
  background: #f8fafe;
  border-left: 1px solid #edeff1;
}

.bock-demo__ctrl {
  height: 45px;
  padding: 0 15px;
  border-bottom: 1px solid #ddd;
  text-align: right;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.bock-demo__ctrl button + button {
  margin-left: 10px;
}
.block-demo .demo {
  height: 100%;
}

.block-demo .demo iframe.chart-frame {
  width: 100%;
  height: 100%;
}
.block-demo + h4 {
  margin-top: 0;
  padding-top: 3.6rem;
}
.bock-demo__code {
  height: calc(100% - 46px);
}

// .bock-demo__code > div.editor {
//   border-right: 1px solid #ddd;
// }

.block-demo .demo {
  height: 100%;
}
.icon {
  cursor: pointer;
  opacity: 0.6;
  font-size: 20px;
  margin-left: 12px;
}
.icon:hover {
  opacity: 1;
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
