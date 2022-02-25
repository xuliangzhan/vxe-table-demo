<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #sexTmpl="{ row }">
        <span style="color: blue">{{ row.sex }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="tsx">
import { defineComponent, reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

export default defineComponent({
  setup () {
    const gridOptions = reactive({
      border: true,
      highlightHoverRow: true,http://localhost:5000/
      columns: [
        { type: 'seq', width: 80 },
        { field: 'name', title: 'Name', sortable: true },
        {
          field: 'sex',
          title: 'Sex',
          sortable: true,
          slots: {
            // 插槽模板
            default: 'sexTmpl'
          }
        },
        {
          field: 'address',
          title: 'Address',
          slots: {
            // JSX 渲染
            default ({ row }) {
              return [
                <span style="color: red">{ row.address }</span>
              ]
            }
          }
        }
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
