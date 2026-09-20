<template>
  <div>
    <button @click="insertEvent">新增</button>
    <button @click="removeEvent">删除</button>
    <button @click="savsEvent">保存</button>
    <vxe-table
      border
      keep-source
      ref="tableRef"
      :row-config="{isHover: true}"
      :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}"
      :data="tableData">
      <vxe-column type="checkbox" width="80"></vxe-column>
      <vxe-column type="seq" title="Number" width="80"></vxe-column>
      <vxe-column field="name" title="Name" sortable :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="sex" title="Sex" sortable :edit-render="{name: 'input'}">
        <!--插槽模板-->
        <template #default="{ row }">
          <span style="color: blue">{{ row.sex }}</span>
        </template>
      </vxe-column>
      <vxe-column field="address" title="Address">
        <!--插槽模板-->
        <template #default="{ row }">
          <span style="color: red">{{ row.address }}</span>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
