<template>
  <div class="home">
    <MyTable />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyTable from '@/components/MyTable.vue'

export default defineComponent({
  name: 'Home',
  components: {
    MyTable
  }
})
</script>
