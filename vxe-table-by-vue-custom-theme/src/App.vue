<template>
  <div id="app" :class="theme">
    <div id="nav">
      <vxe-radio-group v-model="theme">
        <vxe-radio label="default-theme">默认</vxe-radio>
        <vxe-radio label="red-theme">红色</vxe-radio>
        <vxe-radio label="black-theme">黑色</vxe-radio>
      </vxe-radio-group>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      theme: 'default-theme'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
