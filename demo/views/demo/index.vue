<template>
  <div class="page">
    <aside>
      <nav>
        <ul>
          <li v-for="(demo, i) in demos" :key="i">
            <router-link :to="'/demo/' + demo.path">{{ demo.title }}</router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="container">
      <router-view class="markdown-body"></router-view>
    </div>
  </div>
</template>


<script>
import demos from './routes.js'

export default {
  data () {
    return {
      demos,
    }
  }
}
</script>

