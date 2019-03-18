import Vue from 'vue'
import * as Vuep from 'vuep'
import App from './App.vue'
import router from './router'
import BlockDemo from './components/BlockDemo.vue'
import { install } from '../src'
import 'highlight.js/styles/xcode.css'

Vue.config.productionTip = false
Vue.use(install)
Vue.use(Vuep, {
  mode: 'application/javascript',
  extraKeys: {
    'Ctrl-Space': 'autocomplete'
  },
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  lineNumbers: true,
  lineWrapping: false,
  theme: 'default'
}/*, { codemirror options } */)


Vue.component('block-demo', BlockDemo)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
