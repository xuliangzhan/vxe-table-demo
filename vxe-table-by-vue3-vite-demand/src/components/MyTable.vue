<template>
  <div>
    <VxeButton @click="insertEvent">新增</VxeButton>
    <VxeButton @click="removeEvent">删除</VxeButton>
    <VxeButton @click="savsEvent">保存</VxeButton>
    <VxeTable
      border
      keep-source
      ref="tableRef"
      :row-config="{isHover: true}"
      :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}"
      :data="tableData">
      <VxeColumn type="checkbox" width="80"></VxeColumn>
      <VxeColumn type="seq" title="Number" width="80"></VxeColumn>
      <VxeColumn field="name" title="Name" sortable :edit-render="{name: 'input'}"></VxeColumn>
      <VxeColumn field="sex" title="Sex" sortable :edit-render="{name: 'input'}">
        <!--插槽模板-->
        <template #default="{ row }">
          <span style="color: blue">{{ row.sex }}</span>
        </template>
      </VxeColumn>
      <VxeColumn field="address" title="Address">
        <!--插槽模板-->
        <template #default="{ row }">
          <span style="color: red">{{ row.address }}</span>
        </template>
      </VxeColumn>
    </VxeTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VxeTable, VxeColumn } from 'vxe-table'
import { VxeButton } from 'vxe-pc-ui'

const tableData = ref([
  { id: 10001, name: 'Test1', role: 'Developer', sex: 'Man', address: 'Address abc123' },
  { id: 10002, name: 'Test2', role: 'Developer', sex: 'Female', address: 'Address rttry' },
  { id: 10003, name: 'Test3', role: 'Developer', sex: 'Man', address: 'Address xxxxx' }
])

const tableRef = ref()

const insertEvent = () => {
  const newRecord = {
    name: `New ${Date.now()}`
  }
  const $table = tableRef.value
  if ($table) {
    $table.insert(newRecord)
  }
}

const removeEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.removeCheckboxRow()
  }
}

const savsEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
    alert(`insertRecords=${insertRecords.length} removeRecords=${removeRecords.length} updateRecords=${updateRecords.length}`)
  }
}
</script>
