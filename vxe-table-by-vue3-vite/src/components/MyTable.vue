<template>
  <div>
    <vxe-toolbar>
      <template v-slot:buttons>
        <vxe-button @click="insertEvent">新增</vxe-button>
        <vxe-button @click="removeEvent">删除</vxe-button>
        <vxe-button @click="savsEvent">保存</vxe-button>
      </template>
    </vxe-toolbar>
    <vxe-table
      border
      highlight-hover-row
      keep-source
      ref="xTable"
      :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}"
      :data="tableData">
      <vxe-column type="checkbox" width="80"></vxe-column>
      <vxe-column type="seq" title="Number" width="80"></vxe-column>
      <vxe-column field="name" title="Name" sortable :edit-render="{name: 'input', attrs: {type: 'text'}}"></vxe-column>
      <vxe-column field="sex" title="Sex" sortable :edit-render="{name: 'input', attrs: {type: 'text'}}"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { VxeTableInstance } from 'vxe-table'

export default defineComponent({
  setup () {
    const tableData = ref([
      { id: 10001, name: 'Test1', role: 'Developer', sex: 'Man', address: 'Address abc123' },
      { id: 10002, name: 'Test2', role: 'Developer', sex: 'Female', address: 'Address rttry' },
      { id: 10003, name: 'Test3', role: 'Developer', sex: 'Man', address: 'Address xxxxx' }
    ])

    const xTable = ref({} as VxeTableInstance)

    const insertEvent = () => {
      const newRecord = {
        name: `New ${Date.now()}`
      }
      const $table = xTable.value
      $table.insert(newRecord)
    }

    const removeEvent = () => {
      const $table = xTable.value
      $table.removeCheckboxRow()
    }

    const savsEvent = () => {
      const $table = xTable.value
      const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
      alert(`insertRecords=${insertRecords.length} removeRecords=${removeRecords.length} updateRecords=${updateRecords.length}`)
    }

    return {
      xTable,
      tableData,
      insertEvent,
      removeEvent,
      savsEvent
    }
  }
})
</script>
