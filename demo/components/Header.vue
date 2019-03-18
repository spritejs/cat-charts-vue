<template>
  <header>
    <div class="logo">
      <router-link class="home" to="/"></router-link>
      <img class="img-logo" src="http://p0.qhimg.com/d/inn/34fb0b9078a8/cat-charts.png" alt="cat-charts">
    </div>

    <nav>
      <ul>
        <li>
          <router-link to="/home" :exact="false">介绍</router-link>
        </li>
        <li>
          <router-link :to="{path:'/demo'}">图表示例</router-link>
        </li>
        <li>
          <router-link :to="{path:'/plugin'}">插件示例</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home{width:200px;position:absolute;height:68px;z-index: 10}
.img-logo{height:59px;width:180px;position:relative;top:20px;pointer-events: none;}
header {
  position: relative;
  z-index: 100;
  padding: 0 80px 0 10px;
  height: 60px;
  line-height: 1.5;
  // background: #fdfdfd;
  box-shadow: 0 2px 8px rgba(229, 229, 229, 0.5);

  display: flex;
  justify-content: space-between;
  align-items: center;

  // color: #fff;

  .logo,
  nav {
    display: inline-flex;
  }

  ul {
    display: inline-flex;
    list-style: none;
    padding: 0;
  }

  li {
    display: inline-flex;

    + li {
      margin-left: 1rem;
    }
  }
}
</style>
