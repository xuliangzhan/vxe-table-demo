<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">List</router-link> |
      <router-link to="/page">Page</router-link> |
      <router-link to="/edit">Edit</router-link>
    </div>
    <p>只需一串 json 数据就玩得能飞起？没错，CRUD 就是这么简单！</p>
    <router-view/>
  </div>
</template>

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
