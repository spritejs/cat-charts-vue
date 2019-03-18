<template>
  <div class="page">
    <aside>
      <nav>
        <ul>
          <template v-for="(item, i) in navItems">
            <li v-if="!item.redirect" :key="i">
              <router-link :to="'/plugin/' + item.path">{{ item.title }}</router-link>
            </li>
          </template>
        </ul>
      </nav>
    </aside>
    <div class="container">
      <router-view class="markdown-body"></router-view>
    </div>
  </div>
</template>


<script>
import navItems from './routes.js'

export default {
  data() {
    return {
      navItems
    }
  }
}
</script>
