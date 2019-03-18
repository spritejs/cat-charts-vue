<template>
  <div class="page">
    <aside>
      <nav>
        <ul>
          <li v-for="(page, i) in pages" :key="i">
            <router-link :to="'/home/' + page.path">{{ page.title }}</router-link>
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
import pages from './routes.js'

export default {
  data() {
    return {
      pages
    }
  }
}
</script>
