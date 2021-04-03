<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

export default defineComponent({
  setup () {
    const gridOptions = reactive({
      border: true,
      highlightHoverRow: true,
      columns: [
        { type: 'seq', width: 80 },
        { field: 'name', title: 'Name', sortable: true },
        { field: 'sex', title: 'Sex', sortable: true },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Developer', sex: 'Man', address: 'Address abc123' },
        { id: 10002, name: 'Test2', role: 'Developer', sex: 'Female', address: 'Address rttry' },
        { id: 10003, name: 'Test3', role: 'Developer', sex: 'Man', address: 'Address xxxxx' }
      ]
    } as VxeGridProps)
    return {
      gridOptions
    }
  }
})
</script>
