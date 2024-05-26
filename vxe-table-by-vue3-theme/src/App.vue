<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div>
    <vxe-switch v-model="selectTheme" open-value="light" open-label="白天" close-value="dark" close-label="夜间" @change="changeTheme()"></vxe-switch>
  </div>
  <router-view/>
</template>

<script setup>
import { ref } from 'vue'
import { VxeUI } from 'vxe-table'

const selectTheme = ref('light')

const changeTheme = () => {
  VxeUI.setTheme(selectTheme.value)
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
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
