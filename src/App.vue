<template>
  <div id="app">
    <!-- <error-boundary name="app"> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/lists">Lists</router-link>
    </div>
    <router-view />
    <!-- </error-boundary> -->
  </div>
</template>

<script>
import { ComponentBuilder } from '@/mixins'
// import { Boundary } from '@/components/Error'

export default {
  name: 'App',
  components: {
    // 'error-boundary': Boundary,
  },
  mixins: [ComponentBuilder],
  data() {
    return {
      blockName: 'app',
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
