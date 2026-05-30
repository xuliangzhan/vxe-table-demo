<template>
  <ClientOnly>
    <vxe-grid
      nuxt-client
      v-bind="gridOptions"
    >
      <!-- 插槽模板 -->
      <template #sexTmpl="{ row }">
        <span style="color: blue">{{ row.sex }}</span>
      </template>
    </vxe-grid>
  </ClientOnly>
</template>

<script lang="jsx" setup>
import { reactive } from 'vue'

const gridOptions = reactive({
  border: true,
  rowConfig: {
    isHover: true
  },
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
        default({ row }) {
          return <span style="color: red">{ row.address }</span>
        }
      }
    }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Developer', sex: 'Man', address: 'Address abc123' },
    { id: 10002, name: 'Test2', role: 'Developer', sex: 'Female', address: 'Address rttry' },
    { id: 10003, name: 'Test3', role: 'Developer', sex: 'Man', address: 'Address xxxxx' }
  ]
})
</script>
