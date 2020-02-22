<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MyTable />
  </div>
</template>

<script>
// @ is an alias to /src
import MyTable from '@/components/MyTable.vue'

export default {
  name: 'Home',
  components: {
    MyTable
  }
}
</script>
