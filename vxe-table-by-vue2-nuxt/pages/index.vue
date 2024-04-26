<template>
  <div class="container">
    <MyTable />
  </div>
</template>

<script>
import MyTable from '~/components/MyTable.vue'

export default {
  name: 'IndexPage',
  comments: {
    MyTable
  }
}
</script>

<style>
.container {
  width: 1000px;
  margin: 0 auto;
  min-height: 100vh;
}
</style>
