<template>
  <div class="container">
    <my-table></my-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import MyTable from '~/components/MyTable.vue'

export default Vue.extend({
  components: {
    Logo,
    MyTable
  }
})
</script>

<style>
.container {
  width: 1000px;
  margin: 0 auto;
  min-height: 100vh;
}
</style>
