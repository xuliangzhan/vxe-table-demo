<template>
  <div>
    <vxe-table
      border
      highlight-hover-row
      :data="tableData">
      <vxe-table-column type="seq" width="80"></vxe-table-column>
      <vxe-table-column field="name" title="Name" sortable></vxe-table-column>
      <vxe-table-column field="sex" title="Sex" sortable></vxe-table-column>
      <vxe-table-column field="address" title="Address"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const tableData = ref([
      { id: 10001, name: 'Test1', role: 'Developer', sex: 'Man', address: 'Address abc123' },
      { id: 10002, name: 'Test2', role: 'Developer', sex: 'Female', address: 'Address rttry' },
      { id: 10003, name: 'Test3', role: 'Developer', sex: 'Man', address: 'Address xxxxx' }
    ])
    return {
      tableData
    }
  }
})
</script>
