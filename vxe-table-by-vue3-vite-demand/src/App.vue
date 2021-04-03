<template>
  <p>Table demo</p>
  <MyTable></MyTable>
  <p>Grid demo</p>
  <MyGrid></MyGrid>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyTable from './components/MyTable.vue'
import MyGrid from './components/MyGrid.vue'

export default defineComponent({
  name: 'App',
  components: {
    MyTable,
    MyGrid
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>