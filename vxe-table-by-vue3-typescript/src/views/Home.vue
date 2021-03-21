<template>
  <div class="home">
    <p>Table demo</p>
    <MyTable></MyTable>
    <p>Grid demo</p>
    <MyGrid></MyGrid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyTable from '@/components/MyTable.vue'
import MyGrid from '@/components/MyGrid.vue'

export default defineComponent({
  name: 'Home',
  components: {
    MyTable,
    MyGrid
  }
})
</script>
